function geradorSenha() {
    const qtdCaracter = document.querySelector('#qtdeCaracteres').value
    const upperCase = document.querySelector('#uppercase').checked
    const lowerCase = document.querySelector('#lowercase').checked
    const numeros = document.querySelector('#numeros').checked
    const simbolos = document.querySelector('#simbolos').checked

    let maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let minuscula = 'abcdefghijklmnopqrstuvwxyz'
    let num = '1234567890'
    let symbols = '!@#$%&*()_+=-'

    let senhaChecked = ''
    if (upperCase) senhaChecked += maiuscula
    if (lowerCase) senhaChecked += minuscula
    if (numeros) senhaChecked += num
    if (simbolos) senhaChecked += symbols

    if(senhaChecked === '') {
        exibirAlert('<i class="fa-solid fa-triangle-exclamation fa-bounce"></i> Selecione como deseja que sua senha seja gerada!', '#D92525')
        return
    }

    let senha = ''
    for(let i = 0; i < qtdCaracter; i++){
        senha += senhaChecked.charAt(Math.floor(Math.random() * senhaChecked.length))
    }

    document.getElementById('password').value = senha
    checkSenha(senha)
}

function copiarSenha() {
    let senhaCopy = document.getElementById('password')
    senhaCopy.select()
    document.execCommand('copy')
    exibirAlert('<i class="fa-regular fa-bell fa-shake"></i> Senha copiada com sucesso!', '#005C53')
}
document.querySelector('#btn_copy').addEventListener('click', () => {
    copiarSenha()
})

function checkSenha(senha) {
    let senhaCheck = 'fraca'
    if(senha.length > 8 && /[A-Z]/.test(senha) && /[0-9]/.test(senha) && /[^a-zA-Z0-9]/.test(senha)) {
        senhaCheck = 'forte'
    } else if(senha.length > 6) {
        senhaCheck = 'media'
    }

    if(senhaCheck === 'forte') {
        exibirCheckSenha('#005C53', '#fff', 'Senha Forte')
    }else if(senhaCheck === 'media'){
        exibirCheckSenha('#F2A71B', '#fff', 'Senha Média')
    }else {
        exibirCheckSenha('#8C1F28', '#fff', 'Senha Fraca')
    }
}

function exibirCheckSenha(bgcolor, colorText, texto){
    let boxCheck = document.getElementById('checkSenha')
    let check = document.createElement('div')
    check.innerHTML = texto
    check.style.backgroundColor = bgcolor
    check.style.color = colorText
    check.style.padding = '4px 10px'
    check.style.borderRadius = '5px'
    check.style.boxShadow = `0 0 8px ${bgcolor}`
    check.style.marginBottom = '5px'
    check.style.textTransform = 'uppercase'
    check.style.fontSize = '.9rem'
    
    boxCheck.appendChild(check)
    setTimeout(() => {
        boxCheck.removeChild(check)
    }, 5000);
}

function exibirAlert(alert, corAlert) {
    const alertSenha = document.createElement('div')
        alertSenha.innerHTML = alert
        alertSenha.style.position = 'absolute'
        alertSenha.style.top = '-50%'
        alertSenha.style.left = '50%'
        alertSenha.style.opacity = '0'
        alertSenha.style.transform = 'translate(-50%)'
        alertSenha.style.backgroundColor = corAlert
        alertSenha.style.padding = '10px'
        alertSenha.style.borderRadius = '5px'
        alertSenha.style.color = '#fff'
        alertSenha.style.transition = 'top .7s ease-out, opacity .7s ease'
      
    setTimeout(() => {
        alertSenha.style.opacity = '1'
        alertSenha.style.top = '5%'
    }, 10);
    setTimeout(() => {
        alertSenha.style.top = '-50%'
        alertSenha.style.opacity = '0'
        alertSenha.style.transition = 'top 3s ease-out, opacity 3s ease'
    }, 1700);

    document.body.appendChild(alertSenha)
    setTimeout(() => {
        document.body.removeChild(alertSenha)
    }, 2400);
}
    
const btnGerar = document.getElementById('btn_gerar')
btnGerar.onclick = function() {
    geradorSenha()
    let upperCase = document.querySelector('#uppercase').checked
    let lowerCase = document.querySelector('#lowercase').checked
    let numeros = document.querySelector('#numeros').checked
    let simbolos = document.querySelector('#simbolos').checked
    if(upperCase == true || lowerCase == true || numeros == true || simbolos == true) {
        btnGerar.disabled = true
        let infoGerar = document.createElement('div')    
            infoGerar.style.position = 'absolute'
            infoGerar.style.bottom = '-50%'
            infoGerar.style.left = '50%'
            infoGerar.style.transform = 'translate(-50%)'
            infoGerar.style.opacity = '0'
            infoGerar.style.backgroundColor = '#D95F43'
            infoGerar.style.color = '#fff'
            infoGerar.style.borderRadius = '5px'
            infoGerar.style.padding = '5px 10px'
            infoGerar.style.transition = 'bottom .7s ease-out, opacity .7s ease'
            let time = 4
            let contador = setInterval(() => {
                infoGerar.innerHTML = `<i class="fa-solid fa-triangle-exclamation fa-bounce"></i> Aguarde ${time} para gerar uma nova senha!`
                time--
            }, 1000)
            
        setTimeout(() => {
            infoGerar.style.opacity = '1'
            infoGerar.style.bottom = '5%'
        }, 40)

        document.body.appendChild(infoGerar)    
        setTimeout(() =>{
            clearInterval(contador)
            infoGerar.style.bottom = '-50%'
            infoGerar.style.opacity = '0'
            infoGerar.style.transition = 'bottom 3s ease-out, opacity 3s ease'
            document.body.removeChild(infoGerar)
            btnGerar.disabled = false
        }, 5000);

    }
}