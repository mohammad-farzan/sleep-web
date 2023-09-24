/* //////////////////// clock //////////////////// */
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const suggsetContainer = document.querySelector("#suggestions");
const wakeUpBtn = document.querySelector("#wake-up-btn");
const sleepTime = document.querySelector("#bed-time-btn");

hour.addEventListener("input", (e) =>{
  if (e.target.value > 23) {
    e.target.value = 0
  }if(e.target.value < 0){
    e.target.value = 23
  }
})
minute.addEventListener("input", (e) =>{
  if (e.target.value > 59) {
    e.target.value = 0
  }if(e.target.value < 0){
    e.target.value = 59
  }
})

function setClock(){
  let hh = hour.value * 30;
  let mm = minute.value * deg;

  hr.style.transition = ".5s"
  mn.style.transition = ".5s"
  hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
}

setInterval(() => {

  if (hour.value == "00" && minute.value == "00") {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
  }

  minute.addEventListener("change",setClock)
  hour.addEventListener("change",setClock)
})
/* //////////////////// input num //////////////////// */


function calculateWakeUp(hour, minute) {
  const rawMinute = parseInt(hour.value) * 60 + parseInt(minute.value);
  suggsetContainer.innerHTML = "";

  for (let i = 3; i <= 6; i++) {
    const handledTime = (rawMinute + 90 * i) / 60;
    const roundedTime = (handledTime % 24).toFixed(2);
    const suggest = document.createElement("span");
    suggest.innerHTML = `<span> ${formatTime(roundedTime)}</span>`
    suggsetContainer.appendChild(suggest);
  }
}

function formatTime(time) {
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

wakeUpBtn.addEventListener("click", function() {
  calculateWakeUp(hour, minute);
});

function calculateBedTime(hour, minute) {
  const rawMinute = parseInt(hour.value) * 60 + parseInt(minute.value);
  suggsetContainer.innerHTML = "";

  for (let i = 3; i <= 6; i++) {
    let handledTime = (rawMinute +(-90 * i)) / 60;
    if (handledTime < 0) {
      handledTime += 24 
    }
    const roundedTime = (handledTime % 24).toFixed(2);
    const suggest = document.createElement("span");
    suggest.innerHTML = `<span>${formatTime(roundedTime)}</span>`
    suggsetContainer.appendChild(suggest);
  }
}

sleepTime.addEventListener("click",function(){
  calculateBedTime(hour,minute)
})
