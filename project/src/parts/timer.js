function timer() {
  let dedline = '2019-05-21';

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 60000) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds");

    let updateClock = () => {
      let t = getTimeRemaining(endtime);
      if ((t.hours + "").length == 1)
        hours.textContent = "0" + t.hours;
      else
        hours.textContent = t.hours;

      if ((t.minutes + "").length == 1)
        minutes.textContent = "0" + t.minutes;
      else
        minutes.textContent = t.minutes;

      if ((t.seconds + "").length == 1)
        seconds.textContent = "0" + t.seconds;
      else
        seconds.textContent = t.seconds;

      if (t.total <= 0)
        clearInterval(timeInteval);
    };

    let timeInteval = setInterval(updateClock, 1000);
  };

  setClock("timer", dedline);
}

module.exports = timer;