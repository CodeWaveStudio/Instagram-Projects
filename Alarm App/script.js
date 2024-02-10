const showTime=document.querySelector('h2');
const setHours=document.getElementById('hour');
const setMin=document.getElementById('minutes');
const setSec=document.getElementById('am_pm');
const alarmBtn=document.getElementById('alarm-btn');
const audio=document.getElementById('alarmSound');
const mainImg = document.getElementById('clock-img');
let selectedValue='12';
let selectedMinValue='00';
let selectedAmPmValue='AM';
let alarmValue='';
let hours='';
    let min='';
    let sec='';
    let amPm ='';
//set current time
function setTime(){
    const now=new Date();
     hours=now.getHours();
     min=now.getMinutes();
     sec=now.getSeconds();
     amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours=hours<10?"0"+hours:hours;
    min=min<10?"0"+min:min;
     sec=sec<10?"0"+sec:sec;
   
    showTime.innerText=`${hours}:${min}:${sec} ${amPm}`;
}
setInterval(setTime,1000);

for(let i=12;i>=1;i--){
    console.log(i);
    const hourValue=i<10?"0"+i:i;
    const opt=document.createElement('option');
    opt.textContent=hourValue ;
    setHours.appendChild(opt);
   
   
}
for(let i=0;i<=60;i++){
    console.log(i);
    const setMinValue=i<10?"0"+i:i;
    const opt=document.createElement('option');
    opt.textContent=setMinValue ;
    setMin.appendChild(opt);
}
for(let i=1;i<=2;i++){
    console.log(i);
    const setSecValue=i<2?"AM":"PM";
    const opt=document.createElement('option');
    opt.textContent=setSecValue ;
    setSec.appendChild(opt);
}

setHours.addEventListener('change', function() {
     selectedValue = setHours.value;
    console.log("select value"+selectedValue);
    
});
setMin.addEventListener('change', function() {
    selectedMinValue = setMin.value;
   console.log("select value"+selectedMinValue);
  
});
setSec.addEventListener('change', function() {
    selectedAmPmValue = setSec.value;
   console.log("select value"+selectedAmPmValue);
   
});

let isBtn=false;
function toggleBtn(){
if(!isBtn){
    setAlarm();
    alarmBtn.innerText='Clear Alarm';
}
else{
    clearAlarm();
    alarmBtn.innerText='Set Alarm';
}
}

function clearAlarm(){
    location.reload();
    }
    function setAlarm(){
    
        setHours.disabled=true;
        setMin.disabled=true;
        setSec.disabled=true;
        isBtn=true
       
    };
    
    function alarm(){
        alarmValue=`${selectedValue}:${selectedMinValue}:${selectedAmPmValue}`;
        // console.log('alarmValue'+alarmValue);
        // console.log('^^^^^^^^^^^'+`${hours}:${min}:${amPm}`);
        if (alarmValue === `${hours}:${min}:${amPm}`) {
            console.log('Alarm ringing');
           
            audio.play();
            mainImg.classList.add('vibrating-img');
        }
    }
    setInterval(alarm,1000);