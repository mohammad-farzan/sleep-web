const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const suggsetContainer = document.querySelector("#suggestions");
const wakeUpBtn = document.querySelector("#wake-up-btn");
const sleepTime = document.querySelector("#bed-time-btn");

function calculateWakeUp(hour, minute) {
  const rawMinute = parseInt(hour.value) * 60 + parseInt(minute.value);
  suggsetContainer.innerHTML = "";

  for (let i = 3; i <= 6; i++) {
    const handledTime = (rawMinute + 90 * i) / 60;
    const roundedTime = (handledTime % 24).toFixed(2);
    const suggest = document.createElement("div");
    suggest.innerHTML = `<div> for ${i} cycles of REM wake up at : ${formatTime(roundedTime)}</div>`
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
    const suggest = document.createElement("div");
    suggest.innerHTML = `<div> for ${i} cycles of REM sleep at : ${formatTime(roundedTime)}</div>`
    suggsetContainer.appendChild(suggest);
  }
}


sleepTime.addEventListener("click",function(){
  calculateBedTime(hour,minute)
})