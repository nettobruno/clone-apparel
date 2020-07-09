let email = document.querySelector('#email');
let textError = document.getElementById("msgemail");
let buttonForm = document.querySelector('#formButton');

buttonForm.addEventListener('click', function(e) {
  e.preventDefault();

  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if(!regex.test(email.value)) {
    email.style.border = "1px solid red";
    textError.innerHTML="Please provide valid email";
    document.getElementById("imgError").style.display = "block";
    document.getElementById("formButton").style.boxShadow = "2px 2px 10px hsl(0, 36%, 70%)";
  }
  else {
    email.style.border = "1px solid hsla(0, 6%, 24%, 0.330)";
    textError.innerHTML="";
    document.getElementById("imgError").style.display = "none";
    document.getElementById("formButton").style.boxShadow = "unset";
  }
})