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


let abrirDoc = document.querySelector('#botao').addEventListener('click', abrirDocumentacao)
let modalDoc = document.querySelector('#modal')
function abrirDocumentacao(){
    modalDoc.style.display = 'flex'
}

let fecharDoc = document.querySelector('#fechar').addEventListener('click', fecharDocumentacao)
function fecharDocumentacao(){
    modalDoc.style.display = 'none'
}


let ModalCad = document.querySelector('.container-cadastro')
let abrirCad = document.querySelector('#cadastrar').addEventListener('click', abrirCadastro)
function abrirCadastro(){
    ModalCad.style.display = 'flex'
}

let fecharModalCad = document.querySelector('#fechar-two').addEventListener('click', fecharCadastro)
function fecharCadastro(){
    ModalCad.style.display = 'none'
}
