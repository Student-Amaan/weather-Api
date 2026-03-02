async function getWeather() {
  try {
    const city = "Rawalpindi";
    const apiKey = "YOUR_API_KEY";

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${city}&q=${apiKey}`,
    );

    const data = await response.json();

    console.log(data);

    document.getElementById("weather").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.log("Error:", error);
  }
}

getWeather();
