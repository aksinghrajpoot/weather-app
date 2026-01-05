// ⚠️ For testing only — API key should NOT be exposed in frontend
const appUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const appId = "4db4bb4c82a5de1946013ffe9d5ab184";
const btn = document.querySelector(".search_box .btn");
const input = document.getElementById("search_input");

async function fetchWeatherData(city) {
  const response = await fetch(`${appUrl}&q=${city}&appid=${appId}`);
  const data = await response.json();
  if (response.ok) {
    document.querySelector(".weather_data").style.display = "block";
    document.querySelector(".error").style.display = "none";
    // replacing html with recived data from API
    const cityName = document.querySelector(".city_name");
    const temperature = document.querySelector(".temperature");
    const humidity = document.querySelector(".humidity");
    const wind_speed = document.querySelector(".wind_speed");
    cityName.innerHTML = `${data.name}`;
    temperature.innerHTML = `${Math.round(data.main.temp)}°c`;
    humidity.innerHTML = `${data.main.humidity} %`;
    wind_speed.innerHTML = `${data.wind.speed} km/h`;
  } else {
    document.querySelector(".weather_data").style.display = "none";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").innerHTML =
      "x Please enter valid city name.";
  }
}

btn.addEventListener("click", () => {
  const city = document.getElementById("search_input").value;
  fetchWeatherData(city);
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btn.click();
  }
});
