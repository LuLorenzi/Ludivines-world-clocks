function updateCity(event) {
  let cityTimezone = event.target.value;

  if (cityTimezone === "curent") {
    cityTimezone = moment.tz.guess();
  }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `        
  <div class="clock" id="london">
    <h2>${cityName}</h2>
          <div class="data">
            <div class="date">${cityTime.format("ddd Do MMMM YYYY")}</div>
            <div class="time">${cityTime.format("HH:mm:ss")}</div>
          </div>
        </div>`;
}

let citiesSelect = document.querySelector("#selection");
citiesSelect.addEventListener("change", updateCity);
