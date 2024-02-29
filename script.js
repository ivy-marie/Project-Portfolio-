function Menu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


var form = document.querySelector("form");
var fullName = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
const subject = document.getElementById("subject");
var mess = document.getElementById("message");

function sendEmail(){
    var bodyMessage = "Full Name" + fullname +
   "<br/> Email" + email + "<br/> Phone Number" + phone + 
   "<br/> Message" + mess;
}
function sendEmail(){
    Email.send({
        SecureToken : "219cc9e8-5dcd-4192-80b2-e7bdb0873a08",
        To : "ivymarieportuguez.dll@gmail.com",
        From : "ivymarieportuguez.dll@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Your message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}
