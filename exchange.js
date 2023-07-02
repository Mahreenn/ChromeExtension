
const amountTotal = document.getElementById('amount');
const currencyTotal = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey="BoMCgw81lQQ9x+BU/ckmZg==ImohP9ZPofyecIHj";
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=USD_";


document.addEventListener('click', () => {
    const amount = amountTotal.value;
    const currencyTotal = currencyTotal.value;
    const url = apiUrl + currency;

    fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        const resultPrice = amount * rate;
        console.log('result', resultPrice)
        result.innerHTML = `${amount} ${currency} = ${resultPrice.toFixed(2)} USD`;
    })
    .catch(error => {
        console.error('Request failed:', error);
        result.innerHTML = 'An error occured please try again later.';
    });
});