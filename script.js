const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset-btn");
const lapBtn = document.querySelector(".lap-btn");

const timeDisplay = document.getElementById("time-display");
const lapContainer = document.querySelector(".stopwatch-container");

// Initialize the display to 00:00:00:00
timeDisplay.innerHTML = "00:00:00:00";

let timer;
let startTime;
let elapsedTime = 0;
let paused = true;

function updateTime() {
    const currentTime = Date.now();
    const diff = currentTime - startTime + elapsedTime;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    const centiseconds = Math.floor((diff % 1000) / 10);
    timeDisplay.innerHTML = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${centiseconds < 10 ? '0' : ''}${centiseconds}`;
}

startBtn.addEventListener("click", function() {
    if (paused) {
        paused = false;
        startTime = Date.now();
        timer = setInterval(updateTime, 10);
    }
});

pauseBtn.addEventListener("click", function() {
    if (!paused) {
        paused = true;
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
    }
});

resetBtn.addEventListener("click", function() {
    paused = true;
    clearInterval(timer);
    elapsedTime = 0;
    timeDisplay.innerHTML = "00:00:00:00";
    
    // Clear all lap times
    while (lapContainer.firstChild) {
        lapContainer.removeChild(lapContainer.firstChild);
    }
});

lapBtn.addEventListener("click", function() {
    if (!paused || paused == true) {
        const lapTime = timeDisplay.innerHTML;
        const lapElement = document.createElement("div");
        let lapCount = lapContainer.querySelectorAll("div").length + 1;
        lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
        
        // Append the new lap time to the container
        lapContainer.appendChild(lapElement);
    }
});
