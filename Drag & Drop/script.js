const boxDiv=document.querySelectorAll('.box');
const image=document.querySelector('.image');
// console.log(boxDiv);
// console.log(image);
    
boxDiv.forEach((box)=>{
    box.addEventListener('dragover',(e)=>{
        e.preventDefault();
        box.classList.add('hovered');
      
    });
    box.addEventListener('dragleave',()=>{
        box.classList.remove('hovered');
       
    });
    box.addEventListener('drop',()=>{
        box.appendChild(image);
        box.classList.remove('hovered');
    })
})