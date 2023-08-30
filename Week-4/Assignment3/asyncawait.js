async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    const data = await response.json();
    const exchangeRate = data.rates[currencyCode];
    if (exchangeRate === undefined) {
      throw new Error(
        `Exchange rate not available for currency code: ${currencyCode}`
      );
    }
    const roundedExchangeRate = parseFloat(exchangeRate).toFixed(4);

    return roundedExchangeRate;
  } catch (error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

const currencyCode = "USD";
getExchangeRate(currencyCode)
  .then((rate) => console.log(`Exchange rate for ${currencyCode}: ${rate}`))
  .catch((error) => console.error(error.message));
