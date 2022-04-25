help.addEventListener('click', () => list.classList.toggle('display'));

changeicon = (icon) => icon.classList.toggle('fa-times');

window.addEventListener('scroll', () => { header.classList.toggle('sticky', window.scrollY > 0) });

const togglevisibility = (input, icon) => {
    input.type = input.type === 'password' ? 'text' : 'password'
    icon.classList.toggle('fa-eye-slash')
    icon.classList.toggle('fa-eye')
}
showPassword.addEventListener('click', () => { togglevisibility(password, showPassword) });
showConfirmPassword.addEventListener('click', () => { togglevisibility(confirmPassword, showConfirmPassword) });
enterPassword.addEventListener('click', () => { togglevisibility(newPassword, enterPassword) });

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