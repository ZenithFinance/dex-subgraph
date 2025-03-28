import { exec as execCallback } from 'child_process'
import * as util from 'util'

import { getSubgraphName, getSubgraphVersion, prepare } from './prepareNetwork'

const exec = util.promisify(execCallback)

export const build = async (network: string, subgraphType: string): Promise<void> => {
  console.log(`Building subgraph for ${network}`)
  console.log(`\n Copying constants & templates for ${network} \n`)
  await prepare(network, subgraphType)
  console.log(`\n Generating manifest for ${network} ${subgraphType} subgraph \n`)
  await exec(
    `cross-env mustache config/${network}/config.json ${subgraphType}-subgraph.template.yaml > ./${subgraphType}-subgraph.yaml`
  )
  const out = await exec(`graph codegen ./${subgraphType}-subgraph.yaml`)
  console.log(out.stdout)
  console.log(out.stderr)
  const { stdout, stderr } = await exec(`graph build ./${subgraphType}-subgraph.yaml`)
  console.log(stdout)
  console.log(stderr)
}

export const deploy = async (subgraphType: string): Promise<void> => {
  //   try {
  //     await exec('git diff-index --quiet HEAD -- && git diff --quiet || (exit 1)')
  //   } catch (e) {
  //     console.log('Error: You have uncommitted changes. Please commit your changes and try again.')
  //     process.exit(1)
  //   }

  //   const { stdout: gitHash } = await exec('git rev-parse --short HEAD')
  //   const gitHashString = gitHash.toString().trim()
  const subgraphName = getSubgraphName(subgraphType)
  const subgraphVersion = getSubgraphVersion(subgraphType)
  //   const { node, ipfs, deployKey } = getAlchemyDeploymentParams()

  try {
    console.log(`goldsky subgraph deploy ${subgraphName}/${subgraphVersion} --path build`)
    const { stdout, stderr } = await exec(`goldsky subgraph deploy ${subgraphName}/${subgraphVersion} --path build`)
    if (stderr.includes('Subgraph version already exists')) {
      console.log('Subgraph version already exists. Please update the version label and try again.')
    }
    if (stderr.includes('The subgraph version uses a different network.')) {
      console.log(
        `Subgraph with name ${subgraphName} already exists and is deployed with a different network. Please check your network's .subgraph-env.`
      )
    }
    console.log(stdout)
  } catch (e) {
    console.log(e.stdout)
    console.log(e.stderr)
    console.log('Error: Failed to deploy subgraph. Please try again.')
    process.exit(1)
  }
}
