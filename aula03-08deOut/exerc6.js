// 6) Desenvolva uma aplicação em JavaScript para simular o lançamento   
//   de dois dados em uma jogada de 10. A soma dos dois valores deve então  
//   ser calculada. Cada dado pode mostrar um valor de 1 a 6, portanto a soma
//   dos valores irá variar de 2 a 12. Imprima quando o resultado da soma for
//   par e quando for ímpar e também a quantidade total de pares e ímpares ao final.


var par = 0
var impar = 0

for (i=0;i<10;i++){
    var dado1 = Math.floor(Math.random() * 6 + 1);
    var dado2 = Math.floor(Math.random() * 6 + 1);
    var soma = dado1 + dado2;
    var conf = soma % 2;
if (conf == 0) {
    resultado = "O número " + soma + " é par!";
    par ++
    console.log (resultado);
} else if (conf != 0){
    resultado = "O número " + soma + " é ímpar!" ;
    impar ++
    console.log (resultado);   
}
}
console.log ("Há " + par + " números pares");
console.log ("Há " + impar + " números ímpares");
