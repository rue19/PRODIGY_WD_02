let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

function startPause() {
    if (!isRunning) {
        timer = setInterval(updateTime, 10);
        document.getElementById("startPauseBtn").innerText = "Pause";
    } else {
        clearInterval(timer);
        document.getElementById("startPauseBtn").innerText = "Start";
    }
    isRunning = !isRunning;
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
    document.getElementById("milliseconds").innerText = formatTime(milliseconds / 10);
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0; seconds = 0; milliseconds = 0;
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "00";
    document.getElementById("startPauseBtn").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (isRunning) {
        let lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds / 10)}`;
        let lapItem = document.createElement("li");
        lapItem.innerText = `Lap ${document.getElementById("laps").childElementCount + 1}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
    }
}
