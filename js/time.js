let time = 1800
const min = document.getElementById("minutes")
const sec = document.getElementById("sec")

setInterval(updateCount, 1000)

function updateCount() {
   const minutes = Math.floor(time/60);
   let seconds  = time % 60;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   min.innerHTML = `${minutes}`;
   sec.innerHTML = `${seconds}`;
   time--;
}