function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonTime = londonElement.querySelector(".time");
  let londonDate = londonElement.querySelector(".date");

  londonDate.innerHTML = moment()
    .tz("Europe/London")
    .format("ddd Do MMMM YYYY");
  londonTime.innerHTML = moment().tz("Europe/London").format("HH:mm:ss");

  let washingtonElement = document.querySelector("#washington");
  let washingtonTime = washingtonElement.querySelector(".time");
  let washingtonDate = washingtonElement.querySelector(".date");

  washingtonDate.innerHTML = moment().tz("EST").format("ddd Do MMMM YYYY");
  washingtonTime.innerHTML = moment().tz("EST").format("HH:mm:ss");

  let singaporeElement = document.querySelector("#singapore");
  let singaporeTime = singaporeElement.querySelector(".time");
  let singaporeDate = singaporeElement.querySelector(".date");

  singaporeDate.innerHTML = moment()
    .tz("Asia/Singapore")
    .format("ddd Do MMMM YYYY");
  singaporeTime.innerHTML = moment().tz("Asia/Singapore").format("HH:mm:ss");
}

updateTime;
setInterval(updateTime, 1000);
