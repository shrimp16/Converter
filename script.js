let convertedValue = document.getElementById("converted-value");
let percentOfAnswer = document.getElementById("firstAnswer");
let firstCoin;
let secondCoin;
let amount;

function setup() {

    firstCoin = document.getElementById("firstCoin").value;
    secondCoin = document.getElementById("secondCoin").value;
    amount = document.getElementById("amount").value;

    if(!amount) amount = 1;
    
}

$('#convert').click(() => {

    setup();

    if(firstCoin === "select" || secondCoin === "select"){
        alert ("Select the coins");
        return;
    }

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

$('#percent-of').click(() => {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    if(!firstNumber || !secondNumber){
        alert ("Insert the values");
        return;
    }
    percentOfAnswer.innerText = secondNumber * firstNumber / 100;

})