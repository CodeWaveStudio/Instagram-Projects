let canvas=document.getElementById('scratch');
let context=canvas.getContext("2d");

const init=()=>{
 let gradientColor=context.createLinearGradient(0,0,150,150);
 gradientColor.addColorStop(0,'#e9ef22');
 gradientColor.addColorStop(1,'#efb403');
 context.fillStyle=gradientColor;
 context.fillRect(0,0,300,300);
};


let mouseX=0;
let mouseY=0;
let isDragged=false;

let events={
    mouse:{
        down:"mousedown",
        move:"mousemove",
        up:"mouseup"
    },
    touch:{
        down:"touchstart",
        move:"touchmove",
        up:"touchend"
    },
};
let deviceType="";
const isTouchDevice=()=>{
    try {
        document.createEvent("TouchEvent");
        deviceType="touch";
        return true;
    } catch (error) {
        deviceType="mouse";
        return false;
    }
};

//Get left and top of canvas
let rectLeft=canvas.getBoundingClientRect().left;
let rectTop=canvas.getBoundingClientRect().top;

//exact postion of x and y
const getXY=(e)=>{
    mouseX=(!isTouchDevice()?e.pageX:e.touches[0].pageX)-rectLeft;
    mouseY=(!isTouchDevice()?e.pageY:e.touches[0].pageY)-rectTop;
}

isTouchDevice();

//start scratch
canvas.addEventListener(events[deviceType].down,(event)=>{
    isDragged = true;
    getXY(event);
    scratch(mouseX, mouseY);
    
});
//mousemove and touch move

canvas.addEventListener(events[deviceType].move,(event)=>{
    if (isDragged) {
        event.preventDefault(); // Prevent default touch event behavior
        getXY(event);
        scratch(mouseX, mouseY);
    }
})
//stop scratching
canvas.addEventListener(events[deviceType].up,(event)=>{
    isDragged = false;
})

//If mouse leaves 
canvas.addEventListener("mouseleave", () => {
    isDragged = false;
  });
const scratch=(x,y)=>{
    context.globalCompositeOperation='destination-out';
    context.beginPath();
    context.arc(x, y, 40, 0, 2 * Math.PI);
    context.fill();
}
document.addEventListener('DOMContentLoaded', init);