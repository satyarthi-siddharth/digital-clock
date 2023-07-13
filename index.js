const hrEl = document.getElementById("hour");
const minEl = document.getElementById("minute");
const secEl = document.getElementById("second");
const ampmEl = document.getElementById("am-pm");

function clock(){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";

    if(hr>12){
        hr = hr - 12;
        ampm = "PM"
    }

    hr = hr<10 ? "0" + hr : hr;
    min = min<10 ? "0" + min : min;
    sec = sec<10 ? "0" + sec : sec;

    hrEl.innerText = hr;
    minEl.innerText = min;
    secEl.innerText = sec;
    ampmEl.innerText = ampm;
}

setInterval(clock,1000);