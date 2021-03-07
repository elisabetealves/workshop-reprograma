console.log('TESTANDO')

var entradaValorHora = document.querySelector("#valor-hora")

var entradaHorasProjeto = document.querySelector("#horas-projeto")

var resposta = document.querySelector("#resposta")


function calcular(){

        var valor = entradaValorHora.valueAsNumber
        var horasProjeto = entradaHorasProjeto.valueAsNumber
        var valorTotalProjeto = valor * horasProjeto

        var valorTotal = valorTotalProjeto.toFixed(2)
        console.log (valorTotal)
        resposta.textContent = " R$ " + valorTotal 
}
