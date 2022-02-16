let convertedValue = document.getElementById("converted-value");
let firstCoin;
let secondCoin;
let amount;

function setup() {

    firstCoin = document.getElementById("firstCoin").value;
    secondCoin = document.getElementById("secondCoin").value;
    amount = document.getElementById("amount").value;

    if(!amount) amount = 1;
    if(firstCoin === "select" || secondCoin === "select") alert ("Select the coins")
}

$('#convert').click(() => {

    setup();

    fetch(`https://api.coingecko.com/api/v3/coins/${firstCoin}`)
    .then(response => response.json())
    .then((response) => {
        convertedValue.innerText = getPrice(response);
    })

})

function getPrice(response) {
    switch(secondCoin){
        case "eur":
            return response.market_data.ath.eur * amount + " EUR";
        case "usd":
            return response.market_data.ath.usd * amount + " USD";
    }
}