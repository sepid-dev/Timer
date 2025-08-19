let x=null;

const stopbtn=document.getElementById('stopbtn');
const startbtn=document.getElementById('startbtn');
const resetbtn = document.getElementById('resetbtn');

const hourEl = document.getElementById('hour1');
const minuteEl = document.getElementById('minute1');
const secondEl = document.getElementById('second1');

stopbtn.addEventListener('click', function () {
    if (x !== null) {
        clearInterval(x);
        x = null;
        startbtn.disabled = false;
        stopbtn.disabled = true;
    }
});

startbtn.addEventListener('click', function () {
    if (x === null) {
        mytimer();
        startbtn.disabled = true;
        stopbtn.disabled = false;
        resetbtn.disabled = false;
    }
});


resetbtn.addEventListener('click', function () {
    clearInterval(x);
    x = null;
    hourEl.innerHTML = '00';
    minuteEl.innerHTML = '00';
    secondEl.innerHTML = '00';
    startbtn.disabled = false;
    stopbtn.disabled = true;
});

function mytimer(){
    let lastSecond = null;
    let lastMinute = null;
    let lastHour = null;
    x=setInterval(function (){
        let now=new Date();
        let hour=now.getHours().toString().padStart(2,'0');
        let minute=now.getMinutes().toString().padStart(2,'0');
        let second=now.getSeconds().toString().padStart(2,'0');

        if (hour !== lastHour) {
            hourEl.innerHTML = hour;
            hourEl.classList.add('changed');
            setTimeout(() => hourEl.classList.remove('changed'), 300);
            lastHour = hour;
        }
        if (minute !== lastMinute) {
            minuteEl.innerHTML = minute;
            minuteEl.classList.add('changed');
            setTimeout(() => minuteEl.classList.remove('changed'), 300);
            lastMinute = minute;
        }
        if (second !== lastSecond) {
            secondEl.innerHTML = second;
            secondEl.classList.add('changed');
            setTimeout(() => secondEl.classList.remove('changed'), 300);
            lastSecond = second;
        }

    },1000);
}
mytimer();

