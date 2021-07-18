var idade = parseInt(prompt('Digite sua idade'))

var minhaIdade = 24

var erro = idade < 0 || idade > 120 ? document.write('Idade não existente. Tente de novo.') : false

if (erro == false) {
    if ( idade > minhaIdade )
        document.write('Você é mais velho que eu!')

    else if ( idade < minhaIdade )
        document.write('Você é mais novo que eu!')

    else {
        alert('Temos a mesma idade.')
        var igual = prompt('Em que mês nasceu?')     

        if (igual == 'março')
            document.write('Incrível. Só falta ter nascido no memso dia.')
        
        else
            document.write('Pelo menos o mês tem que ser diferente.')
    }
}