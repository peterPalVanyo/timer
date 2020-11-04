

const durationInput = document.getElementById("duration");
const startbtn = document.getElementById("start");
const pausebtn = document.getElementById("pause");
const circle = document.querySelector("svg circle");
const perimeter = (circle.getAttribute("r")) * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;
// const gap = (perimeter*durationInput.value / durationInput.value) - durationInput.value;

const timer = new Timer(durationInput, startbtn, pausebtn, {
  onStart(totalDuration) {
     duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute("stroke-dashoffset", 
    perimeter * timeRemaining / duration - perimeter)
  },
  onComplete() {
    console.log("finished");
  }
});
