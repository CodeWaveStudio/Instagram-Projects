const quizz=document.querySelector('.quizz-container');
const title=document.getElementById('title');
const startQuizzBtn=document.getElementById('start-quizz');
const  questions=document.querySelector('.question');
const  answers=document.querySelector('.answer');
let  options=document.querySelector('.options');
const  inputs=document.querySelectorAll('input[type="radio"]');
let actionBtn=document.getElementById('action-btn');
const msg=document.getElementById('msg');
const returnBtn=document.getElementById('retun-quizz');
const questionList=[
 {
 question:'What does the spread operator (...) do in JavaScript?',
 answer:[
    {
        text:"Combines two arrays into one" ,correct:false
    },
    {
        text:"Creates a shallow copy of an object or array" ,correct:true
    },
    {
        text:"Iterates over the elements of an array" ,correct:false
    },
    {
        text:"Extracts the keys of an object into an array" ,correct:false
    },

 ]
 },
 {
    question:'What is a closure in JavaScript?',
    answer:[
       {
           text:"A function that takes another function as an argument" ,correct:true
       },
       {
           text:"An anonymous function" ,correct:false
       },
       {
           text:"A combination of a function and the lexical environment within which it was declared" ,correct:false
       },
       {
           text:"A built-in JavaScript method for closing web browser tabs" ,correct:false
       },
   
    ]
    },
    {
        question:'What is the purpose of the async/await keywords in JavaScript?',
        answer:[
           {
               text:"To define asynchronous functions" ,correct:false
           },
           {
               text:"To handle asynchronous operations more cleanly using Promises" ,correct:true
           },
           {
               text:"To create multi-threaded JavaScript applications" ,correct:false
           },
           {
               text:"To wait for a specific amount of time before executing code" ,correct:false
           },
       
        ]
        }
];
let currentQustionIndex=0;
let score=0;
//start the quizz
function startQuizz(){
    reset();
    currentQustionIndex=0;
    quizz.style.display='block';
    title.style.display='none';
    startQuizzBtn.style.display='none';
    showQuizz();
}
let isFlag=true;
function toggle(){
  if(currentQustionIndex<questionList.length-1){
    actionBtn.innerText='Next';
    currentQustionIndex++;
    nextQuestion();
  }
  else{
   console.log('isflag is false');
   actionBtn.innerText='Submit';
    submitQuizz();
  }
}

function nextQuestion(){
          reset();
       
console.log('currentQustionIndex*********'+currentQustionIndex);
console.log('questionList.length-1*********'+(questionList.length-1));
if(currentQustionIndex==questionList.length-1){
    actionBtn.innerText='Submit';
}        
            showQuizz();    
}

function showQuizz(){  
    const currentQustion=questionList[currentQustionIndex].question;
    console.log('currentQustion'+currentQustion);
    const questionNo=currentQustionIndex+1;
    questions.querySelector('h5').innerText=questionNo+")"+ " " +currentQustion;
    const currentanswer=questionList[currentQustionIndex].answer;
    console.log("currentanswer"+currentanswer);
    options.innerHTML = '';

    currentanswer.forEach(option=>{
        const optionElement = document.createElement('div');
        //adding option class 
        optionElement.classList.add('option');
         //adding input element and properties 
        const inputElements=document.createElement('input');
        inputElements.type='radio';
        inputElements.id=`option-${currentQustionIndex}`;
        inputElements.name=`option-${currentQustionIndex}`;
        inputElements.value=option.text;
        if (option.correct) {
            inputElements.dataset.correct = 'true';
        } else {
            inputElements.dataset.correct = 'false';
        }
         //adding label  
         const labelElement=document.createElement('label');
         labelElement.setAttribute('for',`option-${currentQustionIndex}`);
         labelElement.textContent=option.text;
        //append created elements in parent class
        optionElement.appendChild(inputElements);
        optionElement.appendChild(labelElement);
        options.appendChild(optionElement);  
            inputElements.addEventListener('input',()=>{
                actionBtn.style.display='flex';
                const selectedAns=inputElements.value;
                const correctAns=questionList[currentQustionIndex].answer.find(answer=> answer.correct).text;
                const inputs = document.querySelectorAll('.option input[type="radio"]');
               
                if(correctAns==selectedAns){
                    console.log('Correct!!')
                    optionElement.classList.add('correct');
                    score++;
                }
                else{
                    console.log('wrong!!')                
                    optionElement.classList.add('wrong');                  
                }
               // Assuming inputs are selected correctly
Array.from(inputs).forEach(input => {
    console.log('Input:', input);
    console.log('Correct dataset:', input.dataset.correct);   
    if (input.dataset.correct === 'true') {
        console.log('Correct option found...');
        const parentOptionElement = input.closest('.option');
        if (parentOptionElement) {
            parentOptionElement.classList.add('correct');
        }
    }
});
                options.style.pointerEvents = 'none';
            });      
});
}

function reset(){
    options.style.pointerEvents = 'auto';
    
   }
   function  submitQuizz(){
    quizz.style.display='none';
    actionBtn.style.display='none';
    msg.innerText=`Your Score is ${score} out of ${questionList.length}`;
    console.log('msg&&&&&'+msg.innerText);
    returnBtn.style.display='flex';
    msg.style.display='flex';
    isFlag=true;
   }

   function restart(){
    msg.style.display='none';
    returnBtn.style.display='none';
    title.style.display='flex';
    startQuizzBtn.style.display='flex';
    currentQustionIndex=0;
    score=0;
    msg.innerText='';
    isFlag=true;
    actionBtn.innerText='Next';
   }
  

