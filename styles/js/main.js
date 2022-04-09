let pattern = /^[^ ]+@[^ ]+\.[a-z]{3,4}$/;
changeicon = (icon) => icon.classList.toggle('fa-times');

const togglevisibility = (input, icon) => {
    input.type = input.type === 'password' ? 'text' : 'password'
    icon.classList.toggle('fa-eye-slash')
    icon.classList.toggle('fa-eye')
}
showPassword.addEventListener('click', () => { togglevisibility(password, showPassword) });
showConfirmPassword.addEventListener('click', () => { togglevisibility(confirmPassword, showConfirmPassword) });


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

//order slides
open.addEventListener('click')
close.addEventListener('click')