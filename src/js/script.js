
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
        const erroChecked = document.createElement('div')
        erroChecked.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Selecione como deseja que sua senha seja gerada!'
        erroChecked.style.position = 'absolute'
        erroChecked.style.top = '-50%'
        erroChecked.style.left = '50%'
        erroChecked.style.opacity = '0'
        erroChecked.style.transform = 'translate(-50%)'
        erroChecked.style.backgroundColor = '#D92525'
        erroChecked.style.padding = '10px'
        erroChecked.style.borderRadius = '5px'
        erroChecked.style.color = '#fff'
        erroChecked.style.transition = 'top .7s ease-out, opacity .7s ease'
        
        setTimeout(() => {
            
            erroChecked.style.opacity = '1'
            erroChecked.style.top = '5%'
        }, 10);

        setTimeout(() => {
            erroChecked.style.top = '-50%'
            erroChecked.style.opacity = '0'
            erroChecked.style.transition = 'top 2s ease-out, opacity 2s ease'
        }, 1700)
        document.body.appendChild(erroChecked)

        setTimeout(() => {
            document.body.removeChild(erroChecked)
        }, 2400)

        return
    }

    let senha = ''

    for(let i = 0; i < senhaChecked.length; i++){
        senha += senhaChecked.charAt(Math.floor(Math.random() * senhaChecked.length))
    }
    
    document.getElementById('password').innerHTML = senha
}


setInterval(() => { // teste muito louco
    geradorSenha()
}, 500)

document.querySelector('#btn_gerar').addEventListener('click', () => {
    geradorSenha()
})

