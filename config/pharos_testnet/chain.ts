import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x7ce5b44f2d05babd29cae68557f52ab051265f01'

export const REFERENCE_TOKEN = '0x76aaada469d23216be5f7c596fa25f282ff9b364' // WETH
export const STABLE_TOKEN_POOL = '0x073ebd8f7e6c932ce50a570593666ba60e83cce2' // USDT/WETH 500

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
  '0xd4071393f8716661958f766df660033b3d35fd29', // USDT
  '0x72df0bcd7276f2dfbac900d1ce63c272c4bccced' // USDC
]

export const STABLE_COINS: string[] = [
  '0xd4071393f8716661958f766df660033b3d35fd29', // USDT
  '0x72df0bcd7276f2dfbac900d1ce63c272c4bccced' // USDC
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
