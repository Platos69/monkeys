import accounts from '../../../accounts.json' assert{'type': 'json'}

const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', (event) => {
    const inputUser = document.getElementById('user').value
    const inputPassword = document.getElementById('password').value
    event.preventDefault()

    const userMsg = document.getElementById('userMsg')
    const passwordMsg = document.getElementById('passwordMsg')


    accounts.find((e) => {
        let RegexUser = /^[a-zA-Z]{3,10}$/

        if (RegexUser.test(inputUser) && inputUser === e.user) {
            userMsg.style.display = 'none'
        } else {
            userMsg.style.display = 'inherit'
        }

        let RegexPassword = /^\d+$/;

        if (RegexPassword.test(inputPassword) && inputPassword === e.password) {
            passwordMsg.style.display = 'none'
        } else {
            passwordMsg.style.display = 'inherit'
        }

        if (inputUser === e.user && inputPassword === e.password) {
            window.location.href = '../../pages/home.html'
        }
    })

})