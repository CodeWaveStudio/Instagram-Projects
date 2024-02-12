const mainDiv=document.querySelector('.main');
const image=document.querySelector('.message img');
const title=document.querySelector('.message h2');
const p=document.querySelector('.main p');
const reconnectBtn=document.getElementById('recoonectBtn');
let isOnline=true, intervalId, timer = 10;
let onlineTimeOut;
const checkNetwork= async()=>{
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(response);
       if(response.status==200){
        isOnline=true;
        console.log("JJJJJJJ"+isOnline);
       } 
    } catch (error) {
        isOnline=false;
        
        console.log(isOnline);
       
    }
    timer = 10;
    clearInterval(onlineTimeOut);
    popup(isOnline);
   
}

const popup=(status)=>{
   
        if(status){
            console.log("Its Online......")
            image.src='https://img.icons8.com/ios-filled/50/40C057/wifi--v1.png';
            title.textContent='You are Online Now.';
            p.textContent='';
            title.style.color='green';
            reconnectBtn.innerText='Connected.'
            return setTimeout(() => mainDiv.classList.remove('offline'), 2000);   
            
        } 
        image.src='https://img.icons8.com/ios-filled/50/FA5252/wifi-off.png';
        title.textContent='You are offline !';
        reconnectBtn.innerText='Reconnect';
        title.style.color='red';
        p.innerHTML = `Please check your internet connection <b>10</b> sec`;
        mainDiv.className='main offline';
        console.log("Its offlinee......")
        onlineTimeOut = setInterval(() => {
            timer--;    
    if(timer === 0)  {
       
        //clearInterval(onlineTimeOut);
        checkNetwork(); // Delay the checkNetwork call
    }
    p.querySelector('b').innerText = timer; 
        }, 1000);
       
}
setInterval(() => isOnline && checkNetwork(),3000);

reconnectBtn.addEventListener('click',checkNetwork);