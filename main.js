const display = document.getElementById("display")
const start = document.getElementById("startbtn")
const pause = document.getElementById("pausebtn")
const reset = document.getElementById("resetbtn")

let timeleft = 406;
let interval = null; 

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;

    display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const startTime = () => { 
    if (interval !== null) return;

    interval = setInterval(() => {
        timeleft--;
        updateTimer();
        
        if (timeleft <= 0) { 
            clearInterval(interval);
            interval = null; 
            alert("Dah mateng! Telur rebusnya sudah siap 🥚✨");
            timeleft = 406; 
            updateTimer();
        }
    }, 1000); 
}

const resetTime = () => {
    clearInterval(interval);
    interval = null; 
    timeleft = 406;
    updateTimer();
}

const pauseTime = () => {
    clearInterval(interval);
    interval = null; 
}; 

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);

updateTimer();
