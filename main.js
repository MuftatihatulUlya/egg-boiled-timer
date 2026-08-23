const display = document.getElementById("display")
const start = document.getElementById("startbtn")
const pause = document.getElementById("pausebtn")
const reset = document.getElementById("resetbtn")

let timeleft = 406;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeleft/60);
    const seconds = timeleft % 60;

    display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

}

const startTime = () => { 
    
    interval = setInterval(() => {
        timeleft--;
        updateTimer();
        
        if (timeleft === 0) {
            clearInterval(interval);
            alert("Dah mateng! Telur rebusnya sudah siap 🥚✨");
            timeleft = 406; // Reset durasi kembali ke 406 detik
            updateTimer();
        }
    }, 1000); 
}

const resetTime = () => {
    clearInterval(interval);
    timeleft = 406;
    updateTimer();
}

const pauseTime = () => clearInterval(interval); 

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);