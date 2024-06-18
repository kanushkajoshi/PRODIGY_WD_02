// script.js
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(1, '0');

    return `${formattedMM}:${formattedSS}.${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    console.log('Start button clicked'); // Debugging line
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            print(timeToString(elapsedTime));
        }, 10);
    }
}

function pause() {
    console.log('Pause button clicked'); // Debugging line
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function reset() {
    console.log('Reset button clicked'); // Debugging line
    clearInterval(timerInterval);
    print("00:00:00.0");
    elapsedTime = 0;
    isRunning = false;
    laps.innerHTML = '';
}

function lap() {
    console.log('Lap button clicked'); // Debugging line
    if (isRunning) {
        let lapTime = timeToString(elapsedTime);
        let lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);
    }
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);
