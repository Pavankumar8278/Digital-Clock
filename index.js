const hoursE1 = document.getElementById("hours")
const minutsE1 = document.getElementById("minuts")
const secondsE1 = document.getElementById("seconds")

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm ="PM"

    if(h >12){
        h =h-12
        ampm = "PM"
    }
    h = h<10 ? "0" + h: h;
    m = m<10 ? "0" + m: m;
    s = s<10 ? "0" + s: s;
    ampm = ampm>12 ? "PM" + ampm:ampm;

    hoursE1.innerText =h;
    minutsE1.innerText = m;
    secondsE1.innerText=s;
    ampm,(innerText=ampm);
    setTimeout(()=>{
    updateclock()
    },1000)
    
}
updateclock()

