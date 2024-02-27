const container=document.querySelector('.container'),
image=document.getElementById('image'),
text=document.querySelector('.text'),
closeIcon=document.getElementById('close'),
names=["Sharukh Khan","Virat Kohli","Christiano Ronaldo","Salena Gomez","Johny Sins"];

const products=[
    {
  amount:"1500 Rs"
    },
    {
        amount:"500 Rs"
          },
          {
            amount:"10 Rs"
              },
              {
                amount:"5000 Rs"
                  },
                  {
                    amount:"45000 Rs"
                      }
];

function getRandomItemFromArray(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

function getRandomTime(){
    return Math.floor(Math.random()*59)+1;
}
const getRandomDisplayTime=()=> Math.random()*(6-1)+1;
const showAlert=()=>{
const randomNames=getRandomItemFromArray(names);
const randomRs=getRandomItemFromArray(products);
const {amount}=randomRs;
image.src='/phonepay-removebg-preview.png';
text.innerHTML=`<p class="message">${randomNames} sent ${amount}</p> <p class="time">${getRandomTime()} mins ago</p>`;
container.style.display='flex';
};

closeIcon.addEventListener('click',()=>{
    container.style.display='none';
    setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);
})
setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);