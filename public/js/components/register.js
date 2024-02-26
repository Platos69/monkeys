const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', (event) => {
    const inputUser = document.getElementById('user').value
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value
    event.preventDefault()

    const userMsg = document.getElementById('userMsg')
    const emailMsg = document.getElementById('emailMsg')
    const passwordMsg = document.getElementById('passwordMsg')

    let RegexUser = /^[a-zA-Z]{3,10}$/

    if (RegexUser.test(inputUser)) {
        userMsg.style.display = 'none'
    } else {
        userMsg.style.display = 'inherit'
    }

    let RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (RegexEmail.test(inputEmail)) {
        emailMsg.style.display = 'none'
    } else {
        emailMsg.style.display = 'inherit'
    }

    let RegexPassword = /^\d+$/;

    if (RegexPassword.test(inputPassword)) {
        passwordMsg.style.display = 'none'
    } else {
        passwordMsg.style.display = 'inherit'
    }

    if (RegexUser.test(inputUser) && RegexEmail.test(inputEmail) && RegexPassword.test(inputPassword)) {
        window.location.href = '../../../index.html'
    }

})