function clockUpdate() {
  // los angeles
  let losangelesElement = document.querySelector("#los-angeles");
  let losangelesDateElement = losangelesElement.querySelector(".date");
  let losangelesTimeElement = losangelesElement.querySelector(".time");
  let losangelesTime = moment().tz("America/Los_Angeles");

  losangelesDateElement.innerHTML = losangelesTime.format("MMMM Do YYYY");
  losangelesTimeElement.innerHTML = losangelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //oslo
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");

  //melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneTime = moment().tz("Australia/Melbourne");

  melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
  melbourneTimeElement.innerHTML = melbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

clockUpdate();
setInterval(clockUpdate, 1000);
