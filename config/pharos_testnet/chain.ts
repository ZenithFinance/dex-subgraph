import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x7ce5b44f2d05babd29cae68557f52ab051265f01'

export const REFERENCE_TOKEN = '0xb056a6b9f61b2c0ebf4906aac341bd118a1763fe' // WETH
export const STABLE_TOKEN_POOL = '0x965d5c0c6e8493ab6c409aac3cd726e811a65ef0' // USDT/WETH 500

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
  '0x1049b57c3e59dca685e9743b5fe5f0b43d287582', // USDT
  '0x8287e9085daae034f4716c218b8af7e34b11171f' // USDC
]

export const STABLE_COINS: string[] = [
  '0x1049b57c3e59dca685e9743b5fe5f0b43d287582', // USDT
  '0x8287e9085daae034f4716c218b8af7e34b11171f' // USDC
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
