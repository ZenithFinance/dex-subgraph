import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0xb056a6b9f61b2c0ebf4906aac341bd118a1763fe'

export const REFERENCE_TOKEN = '0x838800b758277cc111b2d48ab01e5e164f8e9471' // WPHRS
export const STABLE_TOKEN_POOL = '0x3a5d830e9149bc19d733f93066fd6e9df389fabf' // USDT/WPHRS 500

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('20')

export const _START_BLOCK_NUMBER = 0
export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0xe7e84b8b4f39c507499c40b4ac199b050e2882d5', // USDT
  '0xe0be08c77f415f577a1b3a9ad7a1df1479564ec8' // USDC
]

export const STABLE_COINS: string[] = [
  '0xe7e84b8b4f39c507499c40b4ac199b050e2882d5', // USDT
  '0xe0be08c77f415f577a1b3a9ad7a1df1479564ec8' // USDC
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [
  //   {
  //     address: Address.fromString(REFERENCE_TOKEN),
  //     symbol: 'WETH',
  //     name: 'Wrapped Ethereum',
  //     decimals: BigInt.fromI32(18)
  //   },
  //   {
  //     address: Address.fromString('0x3cc372b4bbff679107f08eef2371c202431d507a'),
  //     symbol: 'USDC',
  //     name: 'USD Coin',
  //     decimals: BigInt.fromI32(6)
  //   }
]
