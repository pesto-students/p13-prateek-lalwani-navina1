function getExchangeRate(currencyCode) { // Your code here
    const pr=new Promise(function(resolve,reject){
        fetch("https://api.exchangerate.host/latest")
        .then((response)=> response.json())
        .then((data) => {
          let rate= parseFloat(data.rates[currencyCode]).toFixed(4);
          resolve(rate);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            reject(error)
        });
    })
    return pr;
}

getExchangeRate("USD")
.then(function(rate){
    console.log(rate)
})
.catch(function(err){
    console.log(err.message)
})