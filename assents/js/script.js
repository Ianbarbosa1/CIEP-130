let botao = document.querySelector('.botao')

botao.addEventListener('click', enviar)

function enviar(){
    let nome = document.querySelector('.nome').value
    let numero = document.querySelector('.numero').value

    console.log(nome, numero)
    if(nome === '' || numero === ''){
        alert('Verifique se todos os dados preenchidos')
        preventDefault()
    }
    else{
        alert('Cadastro efetuado com sucesso!')
    }
}


let abrirModal = document.querySelector('#botao').addEventListener('click', abrir)
let modal = document.querySelector('#modal')

function abrir(){
    modal.style.display = 'flex'
}

let fecharModal = document.querySelector('#fechar').addEventListener('click', fechar)
function fechar(){
    modal.style.display = 'none'
}
