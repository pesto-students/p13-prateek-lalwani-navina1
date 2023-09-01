const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};
function getTemperatureForCity() {
    const temperatureDataMemo = {};//Private memo object
    return function getTemperature(cityName){
        if (temperatureDataMemo[cityName]) {
            //console.log("Not firsttime")
            return temperatureDataMemo[cityName];
        } else {
            let temperature = temperatureData[cityName];
            temperatureDataMemo[cityName] = temperature;
            return temperature
        }
    }
}
const temperatureFetcher=getTemperatureForCity()

const temperature1 = temperatureFetcher('New York'); console.log(temperature1); // 20

const temperature2 = temperatureFetcher('New York'); console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = temperatureFetcher('London'); console.log(temperature3); // 18

const temperature4 = temperatureFetcher('London'); console.log(temperature4);