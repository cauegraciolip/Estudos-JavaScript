/*Objetos são as variaveis abaixo, que guardam informações
dentro delas, como se fossem arrays.
    Porem, os objetos possuem propriedades, que sao como 
variaveis dentro das variaveis. O que vem depois das 
propriedades sao os valores que damos para as propriedades
funcionando como se fossem os arrays.
    Já os metodo, sao as funcoes dentro desse objetos.
*/


//quando coloco o 'this' na função, como o calcMedia esta declarado dentro dos objetos, ele assumi os valores que estao sendo declarados, como se a função ainda estivesse dentro do objetos
function calcMedia() {
    return ((this.notas[0] * 0.6) + (this.notas[1] * 0.4))
}

var alu001 = {
    nome: 'Caue',
    sobrenome: 'Gracioli',
    sala: '3B',
    notas: [6, 7],
    //colocar o calcMedia dentro do objeto, pega a função e usa de referencia. Basicamente pega o resultado da função e coloca dentro da propriedade. Não coloca ()
    media: calcMedia
}

var alu002 = {
    nome: 'Luana',
    sobrenome: 'Souza',
    sala: '3A',
    notas: [1, 9],

    media: calcMedia
}

var alu003 = {
    nome: 'Leonardo',
    sobrenome: 'Gracioli',
    sala: '3B',
    notas: [7, 7],

    media: calcMedia
}

function resultado (media) {
    if (media < 7) {
        return 'Reprovado'
    }else {
        return 'Aprovado'
    }
}

/*
    Para colocar os valores no console.log, pegamos o nome da variavel 'alu001' e a propriedade que queremos dela 'nome'
    e juntamos as duas alu001.nome
*/
/*
    No caso se quisermos retornar o resultado da media que usamos
    la em cima, colocamos a variavel e executamos a funçao
    'alu001.media() - nesse caso devemos colocar os parenteses
    pq estamos executando a função.
*/

console.log(`${alu001.nome} ${alu001.sobrenome} - Sala: ${alu001.sala} --- Média = ${alu001.media()} *${resultado(alu001.media())}*`)

console.log(`${alu002.nome} ${alu002.sobrenome} - Sala: ${alu002.sala} --- Média = ${alu002.media()} *${resultado(alu002.media())}*`)

console.log(`${alu003.nome} ${alu003.sobrenome} - Sala: ${alu003.sala} --- Média = ${alu003.media()} *${resultado(alu003.media())}*`)