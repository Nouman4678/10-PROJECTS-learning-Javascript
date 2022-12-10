const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const newYear = "1 Jan 2023"
function countdown(){
const newYearDate = new Date(newYear)
const todayDate = new Date();
const todayDay = todayDate.getDate();
let secondsLeft = Math.floor((newYearDate-todayDate)/1000);
let minutesLeft = Math.floor(secondsLeft/60);
let hoursLeft = Math.floor( minutesLeft/60);
let daysLeft = Math.floor(hoursLeft/24);

days.innerHTML = daysLeft;
hours.innerHTML= formatTime( hoursLeft%24);
minutes.innerHTML=formatTime(minutesLeft%60);
seconds.innerHTML=formatTime(secondsLeft%60);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown()
setInterval(countdown , 1000);