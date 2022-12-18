let wsbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade');
let livebnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade');
let wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
let wseth = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

wsbnb.onmessage = (event) => {
    let assetInfo = document.getElementById('bnbInfo');
    let marketData = document.getElementById('bnbData');
    let bnbMarket = JSON.parse(event.data);
    let assetType = bnbMarket.s
    // let updateTime =  new Date(assetType)
    let price = parseFloat(bnbMarket.p).toFixed(2);
    assetInfo.innerHTML = assetType
    marketData.innerHTML = price;
    lastPrice = price;
    marketData.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
}

wsbtc.onmessage = (event) => {
    let assetInfo = document.getElementById('btcInfo');
    let marketData = document.getElementById('btcData');
    let bnbMarket = JSON.parse(event.data);
    let assetType = bnbMarket.s
    // let updateTime =  new Date(assetType)
    let price = parseFloat(bnbMarket.p).toFixed(2);
    assetInfo.innerHTML = assetType
    marketData.innerHTML = price;
    lastPrice = price;
    marketData.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
}

wseth.onmessage = (event) => {
    let assetInfo = document.getElementById('ethInfo');
    let marketData = document.getElementById('ethData');
    let bnbMarket = JSON.parse(event.data);
    let assetType = bnbMarket.s
    // let updateTime =  new Date(assetType)
    let price = parseFloat(bnbMarket.p).toFixed(2);
    assetInfo.innerHTML = assetType
    marketData.innerHTML = price;
    lastPrice = price;
    marketData.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
}

livebnb.onmessage = (event) => {
    let liveBalance = document.getElementById('bnbalance');
    let bnbMarket = JSON.parse(event.data);
    let assetType = bnbMarket.s
    // let updateTime =  new Date(assetType)
    let price = bnbMarket.p;
    bnbCap = 2.59103674
    euroAmmount = bnbCap * price
    liveBalance.innerHTML = parseFloat(euroAmmount).toFixed(2) 
}