const main=document.querySelector('.main');

main.addEventListener('mousedown',()=>{
    main.classList.add('active');
    main.addEventListener('mousemove',onDrag);
});
document.addEventListener('mouseup',()=>{
    main.classList.remove('active');
    main.removeEventListener('mousemove',onDrag);
});

function onDrag({movementX,movementY}){
let getStyle=window.getComputedStyle(main);
let left=parseInt(getStyle.left );
let top=parseInt(getStyle.top);
main.style.left=`${left + movementX}px`;
main.style.top=`${top + movementY}px`;
};


