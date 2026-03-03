const apikey = "fb114d7649be93882f11c863d75263ae";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=india&units=metric&q=";

async function weatherApi(city) {
  const response = await fetch(apiUrl + city + `&apaid, ${apikey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

weatherApi();
