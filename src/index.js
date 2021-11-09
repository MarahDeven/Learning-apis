let apiKey = "4af869c2b16527dd3b375c7f352dada0";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric";

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = `It is ${temperature} degrees in Sydney`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
