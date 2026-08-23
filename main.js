// const display = document.getElementById("display")
// const start = document.getElementById("startbtn")
// const pause = document.getElementById("pausebtn")
// const reset = document.getElementById("resetbtn")

// let timeleft = 5;
// let interval = null; 

// const updateTimer = () => {
//     const minutes = Math.floor(timeleft / 60);
//     const seconds = timeleft % 60;

//     display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }

// const startTime = () => { 
//     if (interval !== null) return;

//     interval = setInterval(() => {
//         timeleft--;
//         updateTimer();
        
//         if (timeleft <= 0) { 
//             clearInterval(interval);
//             interval = null;
//             const alarmSound = new Audio ("audio.mp3");
//             alarmSound loop = true; 
//             alarmSound.play().catch(error => {
//                 console.log("alarm gagal diputar", error);
//             });
//             alert("Dah mateng! Telur rebusmu dah siap 🥚✨");
//             alarmSound.pause();
//             timeleft = 5; 
//             updateTimer();
//         }
//     }, 1000); 
// }

// const resetTime = () => {
//     clearInterval(interval);
//     interval = null; 
//     timeleft = 5;
//     updateTimer();
// }

// const pauseTime = () => {
//     clearInterval(interval);
//     interval = null; 
// }; 

// start.addEventListener("click", startTime);
// pause.addEventListener("click", pauseTime);
// reset.addEventListener("click", resetTime);

// updateTimer();

// const display = document.getElementById("display")
// const start = document.getElementById("startbtn")
// const pause = document.getElementById("pausebtn")
// const reset = document.getElementById("resetbtn")

// let timeleft = 5;
// let interval = null; 

// const updateTimer = () => {
//     const minutes = Math.floor(timeleft / 60);
//     const seconds = timeleft % 60;

//     display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }

// const startTime = () => { 
//     if (interval !== null) return;

//     interval = setInterval(() => {
//         timeleft--;
//         updateTimer();
        
//         if (timeleft <= 0) { 
//             clearInterval(interval);
//             interval = null;
            
            
//             timeleft = 5; 
//             updateTimer();
//         }
//     }, 1000); 
// }

// const resetTime = () => {
//     clearInterval(interval);
//     interval = null; 
//     timeleft = 5;
//     updateTimer();
// }

// const pauseTime = () => {
//     clearInterval(interval);
//     interval = null; 
// }; 

// start.addEventListener("click", startTime);
// pause.addEventListener("click", pauseTime);
// reset.addEventListener("click", resetTime);

// updateTimer();


// const display = document.getElementById("display");
// const start = document.getElementById("startbtn");
// const pause = document.getElementById("pausebtn");
// const reset = document.getElementById("resetbtn");

// let timeleft = 5;
// let interval = null; 

// const updateTimer = () => {
//     const minutes = Math.floor(timeleft / 60);
//     const seconds = timeleft % 60;

//     display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// };

// const startTime = () => { 
//     if (interval !== null) return;

//     interval = setInterval(() => {
//         timeleft--;
//         updateTimer();
        
//         if (timeleft <= 0) { 
//             clearInterval(interval);
//             interval = null;
//             const alarmSound = new Audio("audio.mp3");
//             alarmSound.loop = true; /
            
//             alarmSound.play().catch(error => {
//                 console.log("alarm gagal diputar", error);
//             });
            
//             alert("Dah mateng! Telur rebusmu dah siap 🥚✨");
//             alarmSound.pause();
            
//             timeleft = 5; 
//             updateTimer();
//         }
//     }, 1000); 
// };

// const resetTime = () => {
//     clearInterval(interval);
//     interval = null; 
//     timeleft = 5;
//     updateTimer();
// };

// const pauseTime = () => {
//     clearInterval(interval);
//     interval = null; 
// }; 

// start.addEventListener("click", startTime);
// pause.addEventListener("click", pauseTime);
// reset.addEventListener("click", resetTime);

// updateTimer();

// const display = document.getElementById("display");
// const start = document.getElementById("startbtn");
// const pause = document.getElementById("pausebtn");
// const reset = document.getElementById("resetbtn");

// let timeleft = 5;
// let interval = null; 
// let alarmSound = null; // Definisikan di luar agar bisa di-stop oleh fungsi lain jika perlu

// const updateTimer = () => {
//     const minutes = Math.floor(timeleft / 60);
//     const seconds = timeleft % 60;

//     display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// };

// const startTime = () => { 
//     if (interval !== null) return;

//     interval = setInterval(() => {
//         timeleft--;
//         updateTimer();
        
//         if (timeleft <= 0) { 
//             clearInterval(interval);
//             interval = null;
            
//             alarmSound = new Audio("audio.mp3");
//             alarmSound.loop = true; 
            
//             alarmSound.play().catch(error => {
//                 console.log("alarm gagal diputar", error);
//             });
            
//             // Menggunakan setTimeout agar alert muncul tanpa langsung memutus audio di thread yang sama secara kaku
//             setTimeout(() => {
//                 alert("Dah mateng! Telur rebusmu dah siap 🥚✨");
//                 if (alarmSound) {
//                     alarmSound.pause();
//                     alarmSound.currentTime = 0;
//                 }
//             }, 100);
            
//             timeleft = 5; 
//             updateTimer();
//         }
//     }, 1000); 
// };

// const resetTime = () => {
//     clearInterval(interval);
//     interval = null; 
//     timeleft = 5;
//     updateTimer();
    
//     if (alarmSound) {
//         alarmSound.pause();
//         alarmSound.currentTime = 0;
//     }
// };

// const pauseTime = () => {
//     clearInterval(interval);
//     interval = null; 
// }; 

// start.addEventListener("click", startTime);
// pause.addEventListener("click", pauseTime);
// reset.addEventListener("click", resetTime);

// updateTimer();


const display = document.getElementById("display");
const start = document.getElementById("startbtn");
const pause = document.getElementById("pausebtn");
const reset = document.getElementById("resetbtn");

let timeleft = 5;
let interval = null; 

// Inisialisasi audio
const alarmSound = new Audio("audio.mp3");
alarmSound.loop = true;

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;

    display.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const startTime = () => { 
    if (interval !== null) return;

    interval = setInterval(() => {
        timeleft--;
        updateTimer();
        
        if (timeleft <= 0) { 
            clearInterval(interval);
            interval = null;
            
            // Putar audio dan tangani jika ada interupsi
            alarmSound.play().then(() => {
                console.log("Audio berhasil diputar");
            }).catch(error => {
                console.log("alarm gagal diputar", error);
            });
            
            // Ganti alert dengan konfirmasi atau biarkan alarm berbunyi 
            // sampai user menekan tombol Reset/Pause
            setTimeout(() => {
                alert("Dah mateng! Telur rebusmu dah siap 🥚✨");
                // Matikan audio HANYA SETELAH alert ditutup oleh user
                alarmSound.pause();
                alarmSound.currentTime = 0;
            }, 100);
            
            timeleft = 5; 
            updateTimer();
        }
    }, 1000); 
};

const resetTime = () => {
    clearInterval(interval);
    interval = null; 
    timeleft = 5;
    updateTimer();
    
    // Matikan audio jika tombol reset ditekan
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
