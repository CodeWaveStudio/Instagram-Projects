const mobileNo=document.getElementById('enter_mo');
const genBtn=document.getElementById('gen-Otp');
const otp1=document.getElementById('otp1');
const otp2=document.getElementById('otp2');
const otp3=document.getElementById('otp3');
const otp4=document.getElementById('otp4');
let timeInterval=document.getElementById('time-interval');
const verBtn=document.getElementById('verify-Otp');
const error=document.querySelector('.error');
let timer;
mobileNo.addEventListener('input',()=>{error.querySelector('h5').innerText=''})
genBtn.addEventListener('click',()=>{
    if(mobileNo.value.length==10){
        generateOtp();
        error.querySelector('h5').style.color='green';
        error.querySelector('h5').innerText = `OTP sent on ${mobileNo.value}`;
        setTimeout(()=>{
           document.querySelector('.generate_otp').style.display='none';
           document.querySelector('.verify_otp').style.display='flex';
           verBtn.disabled='true';
        },2000);
        clearInterval(timer);
        let expired=30;
         timer=setInterval(()=>{
            --expired;
           
            timeInterval.innerHTML=`otp expires in <b>${expired}s</b>`;
            if(expired==0){
                clearInterval(timer);
                timeInterval.innerHTML='';
                error.querySelector('h5').style.color='rgb(182, 5, 5)';
        error.querySelector('h5').innerText ='OTP Expired! resend OTP.';

        setTimeout(()=>{
            document.querySelector('.generate_otp').style.display='flex';
            document.querySelector('.verify_otp').style.display='none';
            mobileNo.value='';
        },1000)
            }
            
        },1000);
       
            
      
    }
    else{
        
        //error.querySelector('h5').innerText='Please Enter Mobile No.!';
        error.querySelector('h5').innerText = 'Please Enter Mobile No.!';

    }
})
let genOtp='';
function generateOtp(){
genOtp=Math.floor(1000 + Math.random()*9000);
console.log("Your Otp is : "+genOtp);
alert('Generated OTP: ' + genOtp);  
}
otp1.addEventListener('input',()=>{
    if (otp1.value.length === 1) {
        otp2.focus();
    }
});
otp2.addEventListener('input',()=>{
    if (otp1.value.length === 1) {
        otp3.focus();
    }
});
otp3.addEventListener('input',()=>{
    if (otp1.value.length === 1) {
        otp4.focus();
    }
});
otp4.addEventListener('input',()=>{
    if (otp1.value.length === 1) {
        verBtn.removeAttribute('disabled');
    }
});

verBtn.addEventListener('click',()=>{
    verifyOtp();
});
function verifyOtp(){
    const enterOtp=otp1.value + otp2.value + otp3.value + otp4.value;
    const actualOtp=String(genOtp);
    
    if(enterOtp === actualOtp){
       
        error.querySelector('h5').style.color='green';
        error.querySelector('h5').innerText = 'OTP Sucessfully Verified.';
        timeInterval.innerHTML='';
        clearInterval(timer);
    }
    else{
       
        error.querySelector('h5').style.color='rgb(182, 5, 5)';
        error.querySelector('h5').innerText = 'Invalid OTP! resend OTP.';
        otp1.value='' ;
         otp2.value='';
        otp3.value='';
        otp4.value='';
        setTimeout(()=>{
            document.querySelector('.generate_otp').style.display='flex';
            document.querySelector('.verify_otp').style.display='none';
            mobileNo.value='';
        },1000)
            
    }
}