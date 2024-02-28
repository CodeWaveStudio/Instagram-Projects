//toggle navbar icon
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll navbar

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            })
        };
    });
    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // remove toggle when click on cross
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 // scroll reveal
 ScrollReveal({ 
    // reset: true ,
distance :'80px',
duration:2000,
delay:200
});
ScrollReveal().reveal('.home-content,.heading,.home-content .red', { origin: 'top' });
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content',{ origin: 'right' });

// typed js
const typed=new Typed('.multiple-text',{
    strings:['Software Developer','Web Developer','UI-UX Designer','Web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const typeds=new Typed('.multiple-texts',{
    strings:['Software Developer','Web Developer','UI-UX Designer','Web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
//contact details
function downloadResume(e) {
    e.preventDefault();
    const filePath = '/images/Sanket Bhoyane Resume.pdf';
    
    fetch(filePath)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Sanket Bhoyane Resume.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        .catch(error => {
            console.error('Error fetching file:', error);
        });
};



function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior
     // Validate the form
     if (!validateForm()) {
        return; // Stop execution if validation fails
    }
    var formData = new FormData(document.getElementById('contactForm'));
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "tech.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            if (xhr.responseText === 'OK') {
                alert('Message sent successfully!');
                clearForm();
            } else {
                alert('Oops, there was an error sending the message: ' + xhr.responseText);
            }
        }
    };

    xhr.send(formData);
}

function validateForm() {
    // Check if required fields are filled out
    
    var requiredFields = document.querySelectorAll('.contact__group');
    for (var i = 0; i < requiredFields.length; i++) {
        var inputField = requiredFields[i].querySelector('.contact__input');
        if (!inputField.value) {
            alert('Please fill out all required fields.');
            return false;
        }
    }

    return true;
}


//clear form after submit msg
function clearForm() {
    document.getElementById('full-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('sub').value = '';
    document.getElementById('msg').value = '';
}

//changed theme if clicked on i 
document.getElementById('animated-i').addEventListener('click', function() {
    const body = document.body;
    body.classList.add('glitch');

    // Remove the glitch class after the animation completes
    setTimeout(() => {
        body.classList.remove('glitch');
    }, 500); // Match the duration of the 'tv-glitch' animation
});





