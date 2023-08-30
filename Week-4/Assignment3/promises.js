function getExchangeRate(currencyCode) {
  const response = fetch("https://api.exchangerate.host/latest");
  return response
    .then((val) => val.json())
    .then((data) => {
      return parseFloat(data.rates[currencyCode]).toFixed(4);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

getExchangeRate("USD")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });
