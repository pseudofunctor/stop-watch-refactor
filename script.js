let seconds = 0
let timerId = null
const startButton = document.getElementById("start")
const pauseButton = document.getElementById("pause")
const resetButton = document.getElementById("reset")
const h1 = document.getElementsByTagName("h1")[0]

startButton.addEventListener("click", () => {
  if(!timerId){
    timerId = setInterval(function(){
      h1.innerHTML = "Time Elapsed: " + Math.round(seconds * 100) / 100 
      seconds = seconds += 0.01
    }, 10)
  }
})

pauseButton.addEventListener("click", () => {
  timerId = clearInterval(timerId)
})

resetButton.addEventListener("click", () => {
  timerId = clearInterval(timerId)
  h1.innerHTML = "Stop Watch"
  seconds = 0
})
