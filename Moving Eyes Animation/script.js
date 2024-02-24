let eyeContainer=document.querySelectorAll('.eye');
let events=['mousemove','touchmove'];

function isTouchscreen(){
    try {
        document.createEvent('TouchEvent');
        return true;
    } catch (error) {
        return false;
    }
};

events.forEach((eventType)=>{
    document.body.addEventListener(eventType,(event)=>{
        eyeContainer.forEach((eye)=>{
        let eyeX=eye.getBoundingClientRect().left + eye.clientWidth /2;
        let eyeY=eye.getBoundingClientRect().top + eye.clientHeight /2;

       
        var x = !isTouchscreen() ? event.clientX : event.touches[0].clientX;
        var y = !isTouchscreen() ? event.clientY : event.touches[0].clientY;


        
        let radian=Math.atan2(x - eyeX, y - eyeY);
        let rotationDegree=radian * (180 / Math.PI) * -1 + 180;
        eye.style.transform = "rotate(" + rotationDegree + "deg)";
       
        });
    });
});