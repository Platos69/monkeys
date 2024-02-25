import accounts from '../../../accounts.json' assert{'type': 'json'}

const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', (event) => {
    const inputUser = document.getElementById('user').value
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value
    event.preventDefault()

    accounts.find((e) => {
        let RegexUser = /^[a-zA-Z]{3,10}$/

        if (RegexUser.test(inputUser)) {
            console.log('passou no regex de usuário')
            if(inputUser === e.user) {
                console.log('passou no usuario')
            } else {
                console.log('reprovou em usuario')
            }
        } else {
            console.log('reprovou no regex de usuário')
        }

        let RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (RegexEmail.test(inputEmail)) {
            console.log('passou no regex de email')
            if(inputEmail === e.email) {
                console.log('passou no email')
            } else {
                console.log('reprovou em email')
            }
        } else {
            console.log('reprovou no regex de email')
        }

        let RegexPassword = /^\d+$/;

        if (RegexPassword.test(inputPassword)) {
            console.log('passou no regex de senha')
            if(inputPassword === e.password) {
                console.log('passou no senha')
            } else {
                console.log('reprovou em senha')
            }
        } else {
            console.log('reprovou no regex de senha')
        }

        if (inputUser === e.user && inputEmail === e.email && inputPassword === e.password) {
            window.location.href = '../../../index.html'
        }
    })

})