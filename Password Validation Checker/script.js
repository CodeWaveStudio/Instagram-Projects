const inputPass=document.getElementById('input_pass'),
eyeIcon=document.querySelector('.password i'),
validationContent=document.querySelectorAll('.validation-content li');
const regexElement=[
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

inputPass.addEventListener('keyup',(e)=>{
    regexElement.forEach(item=>{
        const isValid=item.regex.test(e.target.value);
        const validationElement=validationContent[item.index];

        if(isValid){
            validationElement.classList.add('valid');
            validationElement.firstElementChild.className='fa-solid fa-check';
        }
        else{
            validationElement.classList.remove('valid');
            validationElement.firstElementChild.className='fa-regular fa-circle';
        }
    });
});

eyeIcon.addEventListener('click',()=>{
     inputPass.type= inputPass.type=='password'?'text':'password';
     eyeIcon.className=`fa-solid fa-eye${inputPass.type=='password'?'':'-slash'}`;

})