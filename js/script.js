function updateTime() {
  //losangeles
  let losangelesElement = document.querySelector("#los-angeles");
  if (losangelesElement) {
    let losangelesDateElement = losangelesElement.querySelector(".date");
    let losangelesTimeElement = losangelesElement.querySelector(".time");
    let losangelesTime = moment().tz("America/Los_Angeles");

    losangelesDateElement.innerHTML = losangelesTime.format("MMMM Do YYYY");
    losangelesTimeElement.innerHTML = losangelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //oslo
  let osloElement = document.querySelector("#oslo");
  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");
    let osloTime = moment().tz("Europe/Oslo");

    osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
    osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");
  }

  //melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "currentLocation") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}  </h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div></div>
    <a href="index.html">Back to default cities</a>
    `;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);

//change theme

function darkTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }

  let colorButtonElement = document.getElementById("colorThemeButton");
  colorButtonElement.remove();
  let beachButtonElement = document.getElementById("beachThemeButton");
  beachButtonElement.remove();
  document.getElementById(
    "darkThemeButton"
  ).innerHTML = `<a href="index.html">Default Theme</a>`;
}

function darkTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }

  let colorButtonElement = document.getElementById("colorThemeButton");
  colorButtonElement.remove();
  let beachButtonElement = document.getElementById("beachThemeButton");
  beachButtonElement.remove();
  document.getElementById(
    "darkThemeButton"
  ).innerHTML = `<a href="index.html">Default Theme</a>`;
}

function colorTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("color")) {
    body.classList.remove("color");
  } else {
    body.classList.add("color");
  }

  let darkButtonElement = document.getElementById("darkThemeButton");
  darkButtonElement.remove();
  let beachButtonElement = document.getElementById("beachThemeButton");
  beachButtonElement.remove();
  document.getElementById(
    "colorThemeButton"
  ).innerHTML = `<a href="index.html">Default Theme</a>`;
}

function beachTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("beach")) {
    body.classList.remove("beach");
  } else {
    body.classList.add("beach");
  }

  let colorButtonElement = document.getElementById("colorThemeButton");
  colorButtonElement.remove();
  let darkButtonElement = document.getElementById("darkThemeButton");
  darkButtonElement.remove();
  document.getElementById(
    "beachThemeButton"
  ).innerHTML = `<a href="index.html">Default Theme</a>`;
}
let local = moment.tz.guess();
let localElement = document.querySelector("#local-time-zone");
localElement.innerHTML = `<em>Your current timezone is ${local}</em>
<div class="timezone"></div>`;
