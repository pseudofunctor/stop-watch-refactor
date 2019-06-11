var seconds = 0
var timerId = null
var startButton = document.getElementById("start")
var pauseButton = document.getElementById("pause")
var resetButton = document.getElementById("reset")
var h1 = document.getElementsByTagName("h1")[0]

startButton.addEventListener("click",function(){
  if(!timerId){
    timerId = setInterval(function(){
      h1.innerHTML = "Time Elapsed: " + Math.round(seconds * 100) / 100 
      seconds = seconds += 0.01
    },10)
  }
})

pauseButton.addEventListener("click",function(){
  timerId = clearInterval(timerId)
})

resetButton.addEventListener("click", function(){
  timerId = clearInterval(timerId)
  h1.innerHTML = "Stop Watch"
  seconds = 0
})
