const hourEle = document.getElementById('hours')
const minEle =  document.getElementById('min')
const secEle = document.getElementById('sec')
const ampmEle = document.getElementById('ampm')
 function updateClock(){
    let hour =  new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampm = "AM"
    if(hour> 12){
        hour= hour-12
        ampm = 'pM'
    }
    hourEle.innerText = hour
    minEle.innerText = min
    secEle.innerText = sec
    setTimeout(()=>{
        updateClock() 
    }, 1000)
 }

 updateClock()
