const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', (event) => {
    const inputUser = document.getElementById('user').value
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value
    event.preventDefault()

    let RegexUser = /^[a-zA-Z]{3,10}$/

    if (RegexUser.test(inputUser)) {
        console.log('passou no regex de usuário')
    } else {
        console.log('reprovou no regex de usuário')
    }

    let RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (RegexEmail.test(inputEmail)) {
        console.log('passou no regex de email')
    } else {
        console.log('reprovou no regex de email')
    }

    let RegexPassword = /^\d+$/;

    if (RegexPassword.test(inputPassword)) {
        console.log('passou no regex de senha')
    } else {
        console.log('reprovou no regex de senha')
    }

    if (RegexUser.test(inputUser) && RegexEmail.test(inputEmail) && RegexPassword.test(inputPassword)) {
        window.location.href = '../../../index.html'
    }

})