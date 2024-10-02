
// const exchangeRates = {
//     USD: { EUR: 0.85, GBP: 0.75, JPY: 143.65, IND: 83.63 },
//     EUR: { USD: 1.18, GBP: 0.88, JPY: 130, IND: 93.32 },
//     GBP: { USD: 1.33, EUR: 1.14, JPY: 150, IND: 111.99 },
//     JPY: { USD: 0.0070, EUR: 0.0062, GBP: 0.0052, IND: 0.58 },
//     IND: { USD: 0.012, EUR: 0.011, GBP: 0.0089, JPY: 1.72 },
// };

document.getElementById('convertButton').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!isNaN(amount) && amount > 0) {
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`).then(response=>response.json()).then((data) => {
            console.log(data);
            if (data) {
               const convertedAmount=parseFloat(Object.values(data.rates)[0]).toFixed(2);
                document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                document.getElementById('result').innerText = 'Error fetching exchange rate.';
            }
        })
   }else {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
    } })


    document.getElementById('swapButton').addEventListener('click',function(){
        const fromCurrency=document.getElementById('fromCurrency');
        const toCurrency=document.getElementById('toCurrency');
        const temp=fromCurrency.value;
        fromCurrency.value=toCurrency.value;
        toCurrency.value=temp;
        document.getElementById('result').innerText='';


    })

    document.getElementById('resetButton').addEventListener('click',function(){
        document.getElementById('result').innerText='';
        document.getElementById('amount').value='';
    })



