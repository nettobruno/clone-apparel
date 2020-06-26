function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if ((usuario.length >=1) &&
      (dominio.length >=3) && 
      (usuario.search("@")==-1) && 
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) && 
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&      
      (dominio.indexOf(".") >=1)&& 
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML="Please provide valid email";
        let element = document.getElementById("email");
        element.classList.add("inputError");
        
        document.getElementById("imgError").style.display = "block";

        document.getElementById("formButton").style.boxShadow = "2px 2px 10px hsl(0, 36%, 70%)";

  }
  else{
    document.getElementById("msgemail").innerHTML="<font>Please provide valid email </font>";
    let element = document.getElementById("email");
    element.classList.add("inputError");

    document.getElementById("imgError").style.display = "block";

    document.getElementById("formButton").style.boxShadow = "2px 2px 10px hsl(0, 36%, 70%)";
  }
}