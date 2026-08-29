
const display = document.getElementById("display");
const start = document.getElementById("startbtn");
const pause = document.getElementById("pausebtn");
const reset = document.getElementById("resetbtn");

const halamanMenu = document.getElementById("halamanMenu");
const halamanTimer = document.getElementById("halamanTimer");
const titleSelected = document.getElementById("titleSelected");
const tutupNotif = document.getElementById("tutupNotif");
const notifStop = document.getElementById("notifStop");
const timer = document.getElementById("timerSection");
const garisJalan = document.getElementById("progressRingBar");

const darkMode = document.getElementById("darkBtn");

let timeleft = 360; 
// sisa waktu
let selectedDuration = 360;
let interval = null; 

const alarmSound = new Audio("audio.mp3");
alarmSound.loop = true;

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;
    const progress = (timeleft/selectedDuration) * 660;

    garisJalan.style.strokeDashoffset = progress;
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
    notifStop.style.display = "none";

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
            notifStop.style.display = "block";
            timer.style.display = "none";
            
            timeleft = selectedDuration; 
            updateTimer();
        };
    }, 1000); 
};



const addTime = (add) => {
    timeleft += add;
    updateTimer();
}

const closeNotif = () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    notifStop.style.display = "none";
    timer.style.display = "block";
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

darkMode.addEventListener("click", function(){
    document.body.classList.toggle("darkMode");

    const borderBox = document.getElementById("border");
    if (borderBox) {
        borderBox.classList.toggle("darkMode");
    }

    if (document.body.classList.contains("darkMode")){
        darkMode.textContent = "☀️";
    } else {
        darkMode.textContent = "🌙";
    }
})

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);
tutupNotif.addEventListener("click", closeNotif);

updateTimer();
