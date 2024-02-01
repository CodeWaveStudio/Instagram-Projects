const text=document.querySelector('input'),
img=document.querySelector('img'),
imgQr=document.querySelector('.imgQr'),
QrBtn=document.querySelector('button'),
removeBtn=document.getElementById('remove-Btn'),
teaxtArea=document.querySelector('.teaxtArea'),
error=document.querySelector('.error');
text.addEventListener('input',()=>{
    error.style.display='none';
})

function qrGenerator(){
    if(text.value.length>0){
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value;
imgQr.classList.add('show');
removeBtn.style.display='flex';
    }
    else{
        error.style.display='block';
        teaxtArea.classList.add('showerror');
        setTimeout(()=>{
            teaxtArea.classList.remove('showerror');
        },1000)
    }
}
function qrremover(){
    text.value = '';
    imgQr.classList.remove('show');
    removeBtn.style.display='none';
}