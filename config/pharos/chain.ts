import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x7a000251364c25d460f2220ce9a4b23645e6782c'

export const REFERENCE_TOKEN = '0x00f2f47d1ed593cf0af0074173e9df95afb0206c' // WETH
export const STABLE_TOKEN_POOL = '0xd8bbbf81f56cd4a1a2af4deee22c9f5ce047302b' // USDT/WETH

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('20')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0x2a1ba612b42c2a5637e9987b5a1ed16003c90213', // USDT
  '0x3cc372b4bbff679107f08eef2371c202431d507a', // USDC
  '0xaa7b8040f0366800c317f1325eb098f3b6493f7d' // BTC
]

export const STABLE_COINS: string[] = [
  '0x2a1ba612b42c2a5637e9987b5a1ed16003c90213', // USDT
  '0x3cc372b4bbff679107f08eef2371c202431d507a' // USDC
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
