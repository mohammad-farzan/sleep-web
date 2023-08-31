/* //////////////////// clock //////////////////// */
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

})
/* //////////////////// input num //////////////////// */
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const suggsetContainer = document.querySelector("#suggestions");
const submitButton = document.querySelector("#submitButton");

function calculateSleep(hour, minute) {
  const rawMinute = parseInt(hour.value) * 60 + parseInt(minute.value);
  suggsetContainer.innerHTML = "";

  for (let i = 3; i <= 6; i++) {
    const handledTime = (rawMinute + 90 * i) / 60;
    const roundedTime = (handledTime % 24).toFixed(2);
    const suggest = document.createElement("button");
    suggest.innerHTML = `<div> for ${i} cycles of REM sleep at : ${formatTime(roundedTime)}</div>`
    suggsetContainer.appendChild(suggest);
  }
}

function formatTime(time) {
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

submitButton.addEventListener("click", function () {
  calculateSleep(hour, minute);
});