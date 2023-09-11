function getExchangeRate(currencyCode, callBack) {
  fetch("https://api.exchangerate.host/latest")
    .then((response) => response.json())
    .then((data) => callBack(data.rates[currencyCode]))
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
function roundRate(number) {
  const roundedExchangeRate = parseFloat(number).toFixed(4);
  console.log(roundedExchangeRate);
}
getExchangeRate("USD", roundRate);
