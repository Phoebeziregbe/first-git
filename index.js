let dateElement = document.querySelector("#dates");
let currentTime = new Date();
let hours = currentTime.getHours();
let mins = currentTime.getMinutes();
let day = currentTime.getDay();
let daysWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("hours", "mins");
dateElement.innerHTML = `${daysWeek[day]}${hours}:${mins}`;
function displayWeather(response) {
  document.querySelector("#country").innerHTML = response.data.name;
  document.querySelector("#cone").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#cloudy").innerHTML = response.data.weather[0].main;
}

function jollyLocation(city) {
  let apiKey = "8455a02364b604e84b36b2bbdc88ac1e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function thrillerDone(event) {
  event.preventDefault();
  let city = document.querySelector("#searchTextInput").value;
  jollyLocation(city);
}
function boughtHouses(position) {
  let apiKey = "8455a02364b604e84b36b2bbdc88ac1e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function movedCities(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(boughtHouses);
}
let searchPlace = document.querySelector("#searchForm");
searchPlace.addEventListener("submit", thrillerDone);
