// input para inserir o texto
let input = document.getElementById('input')
// botao para mostrar que foi digitado
let botao = document.getElementById('botao') 
// span para receber o que foi digitado no input
let span = document.getElementById('span')
// input color
let color = document.getElementById('cores')
// botao para setar a cor para o span
let choice = document.getElementById('choice')


choice.addEventListener('click', changeColor)
botao.addEventListener('click', criarTexto)
botao.addEventListener('click', cleanInput)

function criarTexto() {

    span.textContent = input.value

}

function cleanInput() {

    input.value = ""

}

function changeColor() {

    span.style.color = color.value

   if (color.value == "#ffffff" ) {
       span.style.backgroundColor = "black"
   } else {
       span.style.backgroundColor = "white"
   }

}

