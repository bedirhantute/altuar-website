function togglePassword(){
  var x = document.getElementById("floatingPassword");
  var eye = document.getElementById("Eye");
  if(x.type === "password"){
      x.type = "text";
      Eye.className = "fas fa-eye";
  }else {
      x.type ="password";
      Eye.className = "fas fa-eye-slash";
  }
}
