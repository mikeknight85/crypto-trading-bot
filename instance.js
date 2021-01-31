var c = module.exports = {}

c.symbols = []

// bitfinex
let x = [
    'BTCUSD', 'EOSUSD', 'LTCUSD', 'ETHUSD', 'ETCUSD', 'NEOUSD', 'IOTUSD', 'XMRUSD', 'XRPUSD', 'DSHUSD', 'ZECUSD', 'OMGUSD', 'ETPUSD', 'ZRXUSD', 'BSVUSD',
    'EOSBTC', 'LTCBTC', 'ETHBTC', 'ETCBTC', 'NEOBTC', 'IOTBTC', 'XMRBTC', 'XRPBTC', 'DSHBTC', 'ZECBTC', 'OMGBTC', 'ETPBTC', 'ZRXBTC',
]

x.forEach((pair) => {
    c.symbols.push({
        'symbol': pair,
        'periods': ['1m', '15m', '1h'],
        'exchange': 'bitfinex',
        'state': 'watch',
        'strategies': [
            {
                'strategy': 'cci',
                'options': {
                    'period': '15m'
                }
            },
            {
                'strategy': 'obv_pump_dump'
            },
            {
                'strategy': 'macd',
                'options': {
                    'period': '1h'
                }
            }
        ]
    })
})

let z = [
    'BTCUSDT', 'XLMUSDT', 'BNBBTC', 'BNBUSDT'
]

z.forEach((pair) => {
    c.symbols.push({
        'symbol': pair,
        'periods': ['1m', '15m', '1h'],
        'exchange': 'binance',
        'state': 'watch',
        'strategies': [
            {
                'strategy': 'cci',
                'options': {
                    'period': '15m'
                }
            },
            {
                'strategy': 'obv_pump_dump'
            },
            {
                'strategy': 'macd',
                'options': {
                    'period': '1h'
                }
            }
        ]
    })
})
