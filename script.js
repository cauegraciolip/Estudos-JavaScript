// variaveis e arrays
var alunos = ['Joao', 'Mario', 'Joana']
var notaA = [7.0, 5.0, 4.5]
var notaB = [5.0, 9.0, 7.0]
var salas = ['Sala A', 'Sala B', 'Sala C']

/* lembrar que os parametros dentro dos () são apenas textos
ou seja, o que vai chamar a função e o que realmente vai importar 
para o código vai ser o que a gente vai colocar depois.
Nesse código quando chamamos a media, n1 e n2 nao sao nenhum valor
eles só vao ter valor quando colocarmos la embaixo 
(notaA[i], notaB[1])
*/

// função que retorna a media
function media(n1, n2) {
    return (n1 + n2) / 2
}

// função que retorna o resultado da media
function resultado(media) {

    if (media < 7) {
        return 'Reprovado'
    }else {
        return 'Aprovado'
    }
}

// for que vai executar as funções 
/* para chamar uma array, devemos colocar sempre a variavel com 
o array e entre [] a variavel que colocar no for
*/

for (var i in alunos) {

     var nota1 = notaA[i]
     var nota2 = notaB[i] 
     
     var m = media(nota1, nota2)

    console.log(`${alunos[i]} ( ${nota1} - ${nota2} = ${m}) -- ${resultado(m)} == ${salas[i]}`)
}






