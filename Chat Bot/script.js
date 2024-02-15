const main=document.querySelector('.main');
const inputMsg=document.getElementById('text-area');
const sendBtn=document.getElementById('send-msg');
const inputElement=document.getElementById('incoming-msg');
const msgContainer=document.getElementById('msg-container');
const outputElement=document.getElementById('outgoing-msg');
const icon=document.querySelector('.icons');
inputMsg.addEventListener('input',()=>{
    if (inputMsg.value.length > 0) {
        sendBtn.style.display = 'flex';
    } else {
        sendBtn.style.display = 'none';
    }
})
sendBtn.addEventListener('click',(e)=>{
    inputMsg.disabled=true;
    e.preventDefault();
    //incoming
    const li=document.createElement('li');
    li.classList.add('incoming');
    const p=document.createElement('p');
    p.innerText=inputMsg.value;
    li.appendChild(p);
    msgContainer.appendChild(li);
    inputMsg.value = ''; // Clear the input field after sending
    sendBtn.style.display = 'none'; // Hide the send button
    const thinkingli=document.createElement('li');
    thinkingli.classList.add('waiting');
    const thinkingP=document.createElement('p');
    thinkingP.innerText='wait...';
    thinkingli.appendChild(thinkingP);
    msgContainer.appendChild(thinkingli);
    //outgoing
    const url='https://api.openai.com/v1/chat/completions';
    //use your own api key
    const apikey='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';
   setTimeout(()=>{ 
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apikey}`
        },
        body:JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages:[{role:'user',content:p.innerText}]
        })
    }).then(response=>response.json()).then(data =>{
        console.log(data);
        const li1=document.createElement('li');
        li1.classList.add('outgoing');
        const p1=document.createElement('p');
        p1.innerText=data.choices[0].message.content;
        li1.appendChild(p1);
        msgContainer.removeChild(thinkingli);
        msgContainer.appendChild(li1);
        inputMsg.disabled = false; // Enable the textarea
    } )
    .catch(error => {
        console.error(error); 
        inputMsg.disabled = false;
    });
},2000);
    
})
let isopen=false;
function toggle(){
if(!isopen){
    show();
}
else{
    hide();
}
}
function show(){
    main.style.display='flex';
    
    icon.querySelector('i').classList.remove('fa-envelope');
    icon.querySelector('i').classList.toggle('rotate-90');
    icon.querySelector('i').classList.add('fa-times');
    isopen=true;
}
function hide(){
    main.style.display='none';
    
    icon.querySelector('i').classList.remove('fa-times');
    icon.querySelector('i').classList.toggle('rotate-90');
    icon.querySelector('i').classList.add('fa-envelope');
    isopen=false;
}