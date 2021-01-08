function sendMail(){
    var subject = document.contact.subject.value;
    var name = document.contact.name.value;
    var email = document.contact.email.value;
    var message = document.contact.message.value;
    window.location.href = `mailto:alaa.ben.asker@gmail.com?subject=[${name}] ${subject}&body=${message}%0D%0A%0D%0A${email}`;
}