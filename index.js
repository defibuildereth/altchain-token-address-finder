//1. Import coingecko-api
const CoinGecko = require('coingecko-api');
var Bottleneck = require("bottleneck/es5");



const coinGeckoAPI = new Bottleneck({
    maxConcurrent: 1,
    minTime: 400
});

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls

const activeTokensDetails = [
    {
        "APE": {
            "id": 163,
            "address": "0x4d224452801aced8b2f0aebe155379bb5d594381",
            "symbol": "APE",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "BUSD": {
            "id": 6,
            "address": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
            "polygon": "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
            "symbol": "BUSD",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "DAI": {
            "id": 1,
            "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "polygon": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
            "arbitrum": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
            "symbol": "DAI",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "ENS": {
            "id": 79,
            "address": "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72",
            "symbol": "ENS",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "ETH": {
            "id": 0,
            "address": "0x0000000000000000000000000000000000000000",
            "symbol": "ETH",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "icETH": {
            "id": 167,
            "address": "0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84",
            "symbol": "icETH",
            "decimals": 18,
            "enabledForFees": false
        }
    },
    {
        "LDO": {
            "id": 136,
            "address": "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
            "symbol": "LDO",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "LINK": {
            "id": 10,
            "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
            "polygon": "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
            "arbitrum": "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
            "symbol": "LINK",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "MATIC": {
            "id": 149,
            "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            "polygon": "0x0000000000000000000000000000000000001010",
            "symbol": "MATIC",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "METIS": {
            "id": 150,
            "address": "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e",
            "symbol": "METIS",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "MKR": {
            "id": 12,
            "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            "symbol": "MKR",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "SOL": {
            "id": 146,
            "address": "0xd31a59c85ae9d8edefec411d448f90841571b89c",
            "symbol": "SOL",
            "decimals": 9,
            "enabledForFees": true
        }
    },
    {
        "STORJ": {
            "id": 24,
            "address": "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
            "symbol": "STORJ",
            "decimals": 8,
            "enabledForFees": true
        }
    },
    {
        "USDC": {
            "id": 2,
            "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "polygon": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
            "arbitrum": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            "symbol": "USDC",
            "decimals": 6,
            "enabledForFees": true
        }
    },
    {
        "USDT": {
            "id": 4,
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "polygon": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
            "arbitrum": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
            "symbol": "USDT",
            "decimals": 6,
            "enabledForFees": true
        }
    },
    {
        "WBTC": {
            "id": 15,
            "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            "polygon": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
            "arbitrum": "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
            "symbol": "WBTC",
            "decimals": 8,
            "enabledForFees": true
        }
    },
    {
        "WETH": {
            "id": 61,
            "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            "symbol": "WETH",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "ZZ": {
            "id": 173,
            "address": "0xc91a71a1ffa3d8b22ba615ba1b9c01b2bbbf55ad",
            "symbol": "ZZ",
            "decimals": 18,
            "enabledForFees": false
        }
    }
]

const getRelevantTokens = async function () {
    await CoinGeckoClient.coins.list()
        .then(r => {
            let tokenDetails = []
            for (let i = 0; i < activeTokensDetails.length; i++) {
                let key = Object.keys(activeTokensDetails[i])
                let values = Object.values(activeTokensDetails[i])
                tokenDetails.push({ token: key[0], address: values[0].address, decimals: values[0].decimals })
            }

            let idList = []

            let data = r.data
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < tokenDetails.length; j++) {
                    if (tokenDetails[j].token == data[i].symbol.toUpperCase()) {
                        idList.push(data[i])
                    }
                }
            }
            // console.log(idList)
            getTokenDetails(idList, tokenDetails)
        })
}

getRelevantTokens()


const getTokenDetails = async function (list, tokenDetails) {
    // let tokenDetails = []
    for (let i = 0; i < list.length; i++) {
        let id = list[i].id
        coinGeckoAPI.schedule(() => {
            CoinGeckoClient.coins.fetch(id, {})
                .then(r => {
                    let ethAddress = r.data.platforms.ethereum  
                    let id = r.data.id
                    for(let i = 0; i < tokenDetails.length; i++) {
                        if (tokenDetails[i].address == ethAddress) {
                            console.log(id, ethAddress, r.data.platforms)

                        }
                    }
                    // tokenDetails.push({token: r.data.id, data: r.data.platforms})
                })
        })
    }
    // console.log(tokenDetails)
}

