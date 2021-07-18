/*
Objetos construtores são como formas de bolo. Eles dão um molde de como algo vai ser criado. Porém como bolos, nem tudo que está dentro dele 
será igual. Os objetos só servem como formas mesmo. No caso abaixo, o objeto construtor retorna outro objeto.
*/

function criarAluno(nome, n1, n2) {

    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,
    this.media = function () {
        return ((n1 * 0.6) + (n2 * 0.4))
    }
}

var a = new criarAluno('Jose', 7, 9) // esses casos, o 'a' ele é uma instancia de objeto
var b = new criarAluno('Maria', 6, 10) // esses casos, o 'b' ele é uma instancia de objeto


console.log(a.media())
console.log(b)

// outra forma de criar um objeto
/*
function criarAluno(nome, n1, n2) {
    
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return ((this.nota1 * 0.6) + (this.nota2 * 0.4))
        }
    }
}

var turma = [
    criarAluno('Caue', 6, 7),
    criarAluno('Luana', 2, 8),
    criarAluno('Ivone', 10, 3)
]

for (var dado of turma) {
    console.log(dado)
}

*/
