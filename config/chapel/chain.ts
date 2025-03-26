import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x1049B57c3e59DCA685E9743b5FE5f0b43D287582'

export const REFERENCE_TOKEN = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1' // WNT
export const STABLE_TOKEN_POOL = '0x144D26eDB3061AA28bb5107AbBf45A981F1eFb7F'

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
  REFERENCE_TOKEN, // WNT
  '0x8287e9085DAAe034F4716C218B8af7e34B11171f', // TEST ERC20 1
  '0x946e38C4bD979108064Cc35C4445903C32193442' // TEST ERC20 2
]

export const STABLE_COINS: string[] = [
  '0x8287e9085DAAe034F4716C218B8af7e34B11171f', // TEST ERC20 1
  '0x946e38C4bD979108064Cc35C4445903C32193442' // TEST ERC20 2
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
  {
    address: Address.fromString(REFERENCE_TOKEN),
    symbol: 'WETH',
    name: 'Wrapped Ethereum',
    decimals: BigInt.fromI32(18)
  },
  {
    address: Address.fromString('0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'),
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: BigInt.fromI32(6)
  }
]
