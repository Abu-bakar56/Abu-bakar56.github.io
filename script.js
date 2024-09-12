let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections=document.querySelectorAll('section');

let navlinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
sections.forEach(sec => {
    let top = window.scrollY;
    let offset= sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top>= offset && top < offset + height){
        navlinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }; 

});

let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


ScrollReveal({
    //  reset: true ,
     distance:'80px',
     duration:2000,
     delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });

ScrollReveal().reveal('.home-content p', ' .about-content', { origin:'right' });


const typed = new Typed ('.multiple-text',{
    strings:['Data Scientist','Data Analyist','Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});





const form = document.querySelector('form');

function sendEmail() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (!fullName || !email || !mobile || !subject || !message) {
        Swal.fire({
            title: "Error!",
            text: "Please fill all the fields.",
            icon: "error"
        });
        return;
    }

    Email.send({
        SecureToken: "fc2d19e7-55af-4af1-82ee-859ae1e49cea",
        To: 'abubakarshahzad9900@gmail.com',
        From: 'abubakarshahzad9900@gmail.com',
        Subject: subject,
        Body: `Name: ${fullName}<br>Email: ${email}<br>Mobile: ${mobile}<br>Message: ${message}`
    }).then(
        (response) => {
            if (response === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Message could not be sent.",
                    icon: "error"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});
