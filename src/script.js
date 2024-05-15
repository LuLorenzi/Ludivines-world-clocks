function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTime = londonElement.querySelector(".time");
    let londonDate = londonElement.querySelector(".date");

    londonDate.innerHTML = moment().tz("Europe/London").format("ddd Do MMMM");
    londonTime.innerHTML = moment().tz("Europe/London").format("HH:mm:ss A");
  }

  //Washington
  let washingtonElement = document.querySelector("#washington");
  if (washingtonElement) {
    let washingtonTime = washingtonElement.querySelector(".time");
    let washingtonDate = washingtonElement.querySelector(".date");

    washingtonDate.innerHTML = moment().tz("EST").format("ddd Do MMMM");
    washingtonTime.innerHTML = moment().tz("EST").format("HH:mm:ss A");
  }

  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeTime = singaporeElement.querySelector(".time");
    let singaporeDate = singaporeElement.querySelector(".date");

    singaporeDate.innerHTML = moment()
      .tz("Asia/Singapore")
      .format("ddd Do MMMM");
    singaporeTime.innerHTML = moment().tz("Asia/Singapore").format("HH:mm:ss A");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  
    <h2>${cityName}</h2>
          <div class="data">
            <div class="date">${cityTime.format("ddd Do MMMM")}</div>
            <div class="time">${cityTime.format("HH:mm A")}</div>
          </div>
        </div>`;

        setInterval(cityTime, 1000)
}

updateTime;
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#selection");
citiesSelect.addEventListener("change", updateCity);
