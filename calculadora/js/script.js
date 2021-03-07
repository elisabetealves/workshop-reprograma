console.log('Teste')

var quantidadeMes = document.querySelector("#ganho-mes");
var horaDias = document.querySelector("#horas-dia");

function calcularValorHora(){
    var quantidade = quantidadeMes.value;
    var horas = horaDias.value; 
 
    var horasMes = horas * 22;
    var total = quantidade / horasMes;

    document.querySelector("#resposta").textContent = "R$ " +  total.toFixed(2);
  
}
