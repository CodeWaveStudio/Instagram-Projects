const email = document.getElementById('email');
const actBtn = document.getElementById('act-Btn');

const emailRegex = /^\S+@\S+\.\S+$/;
let alertMsg;
let alertsuccess;
let loading;

actBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validation();
});



function validation() {
    const apikey = 'ema_live_25tl6AYGeiMzLlEkEyrFji4TYrIUAcKoxymDist6';
    const url = `https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email.value}`;
    console.log("url: " + url);
    email.addEventListener('input', () => {
        displayAlert('', 'email-alert');
    });
    if (email.value === '') {
        displayAlert('Please Enter Email Address!', 'email-alert');
    } else if (!emailRegex.test(email.value)) {
        displayAlert('Please Enter Valid Email!', 'email-alert');
    } else {
        console.log("LOading....");
        loadingMsg('Loading.....', 'loading'); 
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    
                }
            
                return response.json();
            })
            .then(data => {
                console.log(data);
                loading.innerHTML = '';
               // alertsuccess.innerHTML='';
                if(data.reason=="invalid_mailbox"){
                    console.log("invalid_mailbox");
                 //   displaySuccess('');

                 
                    displayAlert('Email Not Found!', 'email-alert'); 
                }
                else{
                    //displayAlert('');
                   // alertMsg.innerHTML='';
                    console.log("Email Verify Successfully");
                    displaySuccess('Email Verify Successfully', 'email-success');
                    //displaySuccess('Email Verify Successfully', 'email-success'); 
                }
                  
                // Handle the response data here
                //displayAlert(`There was a problem with the fetch operationssssss: ${error.message}`, 'email-alert');
            })
            .catch(error => {
              //  displayAlert(`There was a problem with the fetch operation: ${error.message}`, 'email-alert');
                //console.error("There was a problem with the fetch operation:", error);
            });
    }
}

function displayAlert(message, alertId) {
    alertMsg = document.getElementById(alertId);
    alertMsg.innerHTML = message;
    console.log(`Alert message updated: ${message}`);
    alertsuccess.innerHTML=''
}

function displaySuccess(message, alertId) {
   
    console.log("going.........");
    alertsuccess = document.getElementById(alertId);
    alertsuccess.innerHTML = message;
    alertMsg.innerHTML = '';
    console.log(`Success message updated: ${message}`);

}

function loadingMsg(message, alertId) {
    loading = document.getElementById(alertId);
    loading.innerHTML = message;
    console.log(`Loading message updated: ${message}`);
}
