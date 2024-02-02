const timer=document.getElementById('timer');
const startBtn=document.getElementById('start-btn');
const restartBtn=document.getElementById('reset-btn');

let timeInterval='';
//take second as 0 at the beginning
let second=0;
let istoggleBtn=false;
function toggleTimer(){
 if(istoggleBtn){
    pauseTimer();
    startBtn.innerText='Resume';
    istoggleBtn=false;
 }
 else{
    startTimer();
    startBtn.innerText='Pause';
 }
}
//started timer
function startTimer(){
   //calling update function after every 1s
   timeInterval=setInterval(updateTime,1000);
   //startBtn.disabled=true;
   istoggleBtn=true;
   
}
function updateTime(){
    //increasing seconds
    second++;
    //calculating min and remaining time
    const minutes=Math.floor(second/60);
    const remainingTime=second % 60;

    //showing minute and reamining time in text in format;
    timer.innerText=`${formattime(minutes)}:${formattime(remainingTime)}`
}
//make time in format function
function formattime(time){
 return time<10?`0${time}`:time;
}
//pause timer
function pauseTimer(){
    clearInterval(timeInterval);
}
//clear or reset timer function
function resetTimer(){
   clearInterval(timeInterval);
   second=0;
   timer.innerText='00.00';
   //startBtn.disabled=false;
   startBtn.innerText='Start';
}