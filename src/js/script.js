
document.getElementById('btn_generator').addEventListener('click', () => {
    let character = document.querySelector('#character')
    let uppercase = document.querySelector('#uppercase').checked
    let lowercase = document.querySelector('#lowercase').checked
    let number = document.querySelector('#number').checked
    let symbols = document.querySelector('#symbols').checked

    let maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let minuscula = 'abcdefghijklmnopqrstuvwxyz'
    let numeros = '1234567890'
    let simbolos = '!@#$%&*()_+=-'

    let checkPassword = ''
    if(uppercase) checkPassword += maiuscula
    if(lowercase) checkPassword += minuscula
    if(number) checkPassword += numeros
    if(symbols) checkPassword += simbolos

    if(character.value <= 0) {
        showModal('#E6A00B','Defina a quantidade de caracteres')
        return
    }
    if(checkPassword === '') {
        showModal('#E6A00B','Selecione pelo menos um tipo de senha')
        return
    }

    let password = ''
    for(let i = 0; i < character.value; i++) {
        password += checkPassword.charAt(Math.floor(Math.random() * checkPassword.length))
    }
    document.querySelector('#password').value = password
    passwordCheck(password)
})  

function passwordCheck(password){
    let status = document.querySelector('#status')
    if(password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
        status.style.color = '#00ff00'
        status.innerHTML = 'SENHA FORTE'
    } else if(password.length > 6){
        status.style.color = '#f2ea00'
        status.innerHTML = 'SENHA MÉDIA'
    } else {
        status.style.color = '#ff0000'
        status.innerHTML = 'SENHA FRACA'
    }
}

function showModal(bgColor, text) {
    let modalContains = document.querySelector('#showmodal')
        if(modalContains) modalContains.remove()

    let modal = document.createElement('div')
        modal.id = 'showmodal'
        modal.innerHTML = `<i class="fa-solid fa-circle-info fa-beat"></i> ${text}`
        modal.style.backgroundColor = bgColor
        modal.style.color = '#FFF'
        modal.style.padding = '10px'
        modal.style.borderRadius = '5px'
        modal.style.position = 'absolute'
        modal.style.opacity = '0'
        modal.style.top = '-30%'
        modal.style.left = '50%'
        modal.style.transform = 'translate(-50%)'
        modal.style.transition = 'top .3s ease, opacity .3s'
    
        document.body.appendChild(modal)
        
    setTimeout(() => {
        modal.style.opacity = '1'
        modal.style.top = '5%'
    }, 10)

    setTimeout(() => {
        modal.style.opacity = '0'
        modal.style.top = '-30%'

        setTimeout(() => {
            if(document.body.contains(modal)) {
                document.body.removeChild(modal)
            } 
        }, 1000)
    }, 2000);
}


document.querySelector('#btn_copy').addEventListener('click', () => {
    let password = document.querySelector('#password').value
    if(password.length >= 1){
        document.querySelector('#password').select()
        document.execCommand('copy')
        showModal('#035931', 'Senha copiada com sucesso!')
    } else {
        showModal('#03658C', 'Não foi possível copiar a senha!')
    }
})