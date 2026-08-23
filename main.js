const display = document.getElementById("display")
const start = document.getElementById("startbtn")
const pause = document.getElementById("pausebtn")
const reset = document.getElementById("resetbtn")

let timeleft = 5;
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
            const alarmSound = new Audio ("audio.mp3");
            alarmSound loop = true; 
            alarmSound.play().catch(error => {
                console.log("alarm gagal diputar", error);
            });
            alert("Dah mateng! Telur rebusmu dah siap 🥚✨");
            alarmSound.pause();
            timeleft = 5; 
            updateTimer();
        }
    }, 1000); 
}

const resetTime = () => {
    clearInterval(interval);
    interval = null; 
    timeleft = 5;
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
