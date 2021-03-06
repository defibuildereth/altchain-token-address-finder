const CoinGecko = require('coingecko-api');
const Bottleneck = require("bottleneck/es5");

const coinGeckoAPI = new Bottleneck({
    maxConcurrent: 1,
    minTime: 400
});

const CoinGeckoClient = new CoinGecko();

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
            "symbol": "BUSD",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "DAI": {
            "id": 1,
            "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
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
            "symbol": "LINK",
            "decimals": 18,
            "enabledForFees": true
        }
    },
    {
        "MATIC": {
            "id": 149,
            "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
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
            "symbol": "USDC",
            "decimals": 6,
            "enabledForFees": true
        }
    },
    {
        "USDT": {
            "id": 4,
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "symbol": "USDT",
            "decimals": 6,
            "enabledForFees": true
        }
    },
    {
        "WBTC": {
            "id": 15,
            "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
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
            getTokenDetails(idList, tokenDetails)
        })
}

getRelevantTokens()

const getTokenDetails = async function (list, tokenDetails) {
    for (let i = 0; i < list.length; i++) {
        let id = list[i].id
        coinGeckoAPI.schedule(() => {
            CoinGeckoClient.coins.fetch(id, {})
                .then(r => {
                    let ethAddress = r.data.platforms.ethereum  
                    for(let l = 0; l < tokenDetails.length; l++) {
                        if (tokenDetails[l].address == ethAddress) {
                            let obj = {...tokenDetails[l]}
                            let keys = Object.keys(r.data.platforms)
                            let values = Object.values(r.data.platforms)
                            for (let i = 0; i < keys.length; i++) {
                                if (keys[i] == 'polygon-pos') {
                                    let network = keys[i]
                                    let address = values[i]
                                    // console.log(tokenDetails[l], id, keys[i], values[i])
                                    obj = {...obj, [network]: address}
                                }
                                if (keys[i] == 'arbitrum-one') {
                                    let network = keys[i]
                                    let address = values[i]
                                    // console.log(tokenDetails[l], id, keys[i], values[i])
                                    obj = {...obj, [network]: address}
                                }
                            }
                            console.log(JSON.stringify(obj, 2))
                        }
                    }
                })
        })
    }
}

