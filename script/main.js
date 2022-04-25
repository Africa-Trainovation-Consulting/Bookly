function myfunction() {
  nav.classList.toggle("navbar");
  nav.classList.toggle("responsiveness");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
}

const myfunct = () => nv.classList.toggle("showGrid");

// window.addEventListener('resize',()=>{
//   screen.width> 1212 ? myfun
// })
const help = () => nvv.classList.toggle('showhelp');

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
        } else if (validationCustom01.value != validationCustom02.value) {
          alert("password did not match");
        } else {
          alert("password submitted");
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
