// function matchpassword() {
//   var x = document.getElementById("#validationCustom01");
//   var y = document.getElementById("validationCustom02");
//   if (x != y) {
//     alert("password did not match");
//   } else {
//   }
// }
function myfunction() {
  var x = document.getElementById("nav");
  var i = document.getElementById("icon");

  if (x.className === "navbar") {
    x.className += " responsiveness ";
    i.classList.toggle("fa-bars");
    i.classList.toggle("fa-times");
  } else {
    x.className = "navbar";
    i.classList.toggle("fa-times");
    i.classList.toggle("fa-bars");
  }
}
function myfunct() {
  var p = document.getElementById("nv");
  
  p.classList.toggle('showGrid');
  
}

//   var x = document.getElementById('nav')
//      if (x.className ==='navbar'){
//       x.className.add += " responsiveness";
//  }
//  else{
//       x.className='navbar';
//      }
//     // console.log(x) }
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        else if (validationCustom01.value != validationCustom02.value) {
            alert("password did not match");
        }
        else {
          alert ('password submitted');
        }
    
        form.classList.add("was-validated");
        
      },
      false
    );
  });
})();
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#validationCustom01");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
const ogglePassword = document.querySelector("#ogglePassword");
const assword = document.querySelector("#validationCustom02");

ogglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    assword.getAttribute("type") === "password" ? "text" : "password";
  assword.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});






