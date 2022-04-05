
    function myfunction(){

        if (password.value != secondpassword.value){
            alert('Password does not match')
        }
        else {
        
            alert('Password Match')}
    }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                

                form.classList.add('was-validated')
            }, false)
        })
})()

// document.getElementById('togglePassword').onclick = function() {
//     document.getElementById('togglePassword').classList.toggle('fa-times')
// }

// Hamburger Control

document.getElementById("hamBurger").onclick = function () {
    hamBurger.classList.toggle("fa-times")
    document.getElementById("topNav").classList.toggle('show')
}


// Password Toggle

const togglePassword = document
    .querySelector('#togglePassword');

const password = document.querySelector('#password');
togglePassword.addEventListener('click', () => {

    // Toggle the type attribute using
    // getAttribute() method
    const type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';

    password.setAttribute('type', type);

    const fixed = secondpassword
        .getAttribute('type') === 'password' ?
        'text' : 'password';

    xpassword.setAttribute('type', type);


    // Toggle the eye and bi-eye icon
    togglePassword.classList.toggle('fa-times');
    retogglePassword.classList.toggle('fa-times');

});




