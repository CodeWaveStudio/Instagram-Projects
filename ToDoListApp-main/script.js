const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const errorMessage = document.getElementById("error-message");
function addTask() {
    const inputBox = document.getElementById("input-box");
    const errorMessage = document.getElementById("error-message");

    if (inputBox.value.trim() === '') {
        errorMessage.innerText = "Please write something !!";
        inputBox.classList.add(".error-message");
        return; // Don't proceed further
    }

    // If input is not empty, clear error message and border
    errorMessage.innerText = "";
    inputBox.classList.remove("error-message");

    let li = document.createElement("li");  //creating a li Element
    li.innerHTML = inputBox.value;         //adding a text into li element
    listContainer.appendChild(li);         //adding a li element in list-conatiner class 

    let span = document.createElement("span");  //creating a span element to show cross symbol to close
    span.innerHTML = "\u00d7";                  //this is a code to show cross
    li.appendChild(span);                     //then its showing cross symbol for all rows

    inputBox.value = "";  //clearing the input text after adding the task
    saveTask();          //save task after adding new task
}

//if click on li tag it will check or uncheck and if click on close it will delete the task
listContainer.addEventListener("click",function(e){
 if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveTask();
 }
 else if(e.target.tagName==="SPAN"){
 e.target.parentElement.remove();
 saveTask();
 }
},false);

//save the tasks in localstorage so it will not dissapear after refreshing page
function saveTask(){
localStorage.setItem("data",listContainer.innerHTML);
}
//show the task whenever u open the website
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();