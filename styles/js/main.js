changeicon = (icon) => icon.classList.toggle('fa-times');

const showpassword = document.getElementById('showpassword')
showpassword.addEventListener('click', togglevisibility)

function togglevisibility() {
    const passwordinput = document.getElementById('password')
    if (passwordinput.type === 'password') {
        passwordinput.type = 'text'
        showpassword.classList.toggle('fa-eye-slash')
    }
    else {
        passwordinput.type = 'password'
        showpassword.classList.toggle('fa-solid fa-eye')
    }
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
