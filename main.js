
const display = document.getElementById("display");
const start = document.getElementById("startbtn");
const pause = document.getElementById("pausebtn");
const reset = document.getElementById("resetbtn");

const halamanMenu = document.getElementById("halamanMenu");
const halamanTimer = document.getElementById("halamanTimer");
const titleSelected = document.getElementById("titleSelected");

let timeleft = 360;
let selectedDuration = 360;
let interval = null; 

const alarmSound = new Audio("audio.mp3");
alarmSound.loop = true;

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;

    display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const selectDuration = (seconds, titleText) => {
    timeleft = seconds;
    selectedDuration = seconds; 
    titleSelected.innerHTML = titleText;
    updateTimer();

    halamanMenu.style.display = "none";
    halamanTimer.style.display = "block";
}

const backToMenu = () => {
    clearInterval(interval);
    interval = null;
    alarmSound.pause();
    alarmSound.currentTime = 0;

    halamanMenu.style.display = "block";
    halamanTimer.style.display = "none";
};

const startTime = () => { 
    if (interval !== null) return;

    interval = setInterval(() => {
        timeleft--;
        updateTimer();
        
        if (timeleft <= 0) { 
            clearInterval(interval);
            interval = null;
            
            alarmSound.play().then(() => {
                console.log("Audio berhasil diputar");
            }).catch(error => {
                console.log("alarm gagal diputar", error);
            });
            
            setTimeout(() => {
                alert("Dah mateng! Telur rebusmu dah siap 🥚✨");
                alarmSound.pause();
                alarmSound.currentTime = 0;
            }, 100);
            
            timeleft = selectedDuration; 
            updateTimer();
        }
    }, 1000); 
};

const resetTime = () => {
    clearInterval(interval);
    interval = null; 
    timeleft = selectedDuration;
    updateTimer();
    
    alarmSound.pause();
    alarmSound.currentTime = 0;
};

const pauseTime = () => {
    clearInterval(interval);
    interval = null; 
}; 

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);

updateTimer();
