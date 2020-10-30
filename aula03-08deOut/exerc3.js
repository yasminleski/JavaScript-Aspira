// 3) Desenvolva uma aplicação em JavaScript para ler um salário e atualizá-lo de acordo
// com a tabela abaixo.


//          Faixa salárial            Aumento
//          até 1.045,00                30%
//          1.045,01 a 1.500,00         25%
//          1.500,01 a 2.600,00         20%
//          2.600,01 a 3.550,00         15%
//          Acima de 3.550,00           10%



let salario = 2050;
 
if (salario <= 1045){
 let ate1045 = salario + (salario * (30/100));
 console.log("salario: " + ate1045)
}
else if (salario > 1045.01 && salario <= 1500) {
 let de1045a1500 = salario + (salario * (25/100))
 console.log("salario: " + de1045a1500)
}
else if (salario > 1500.01 && salario  <=2600){
  let de1500a2600 = salario + (salario * (20/100));
 console.log("salario: " + de1500a2600)
}
else if (salario > 2600.01 && salario <= 3550){
 let de2600a3550 = salario + (salario * (15/100));
 console.log("salario: " + de2600a3550) 
}
else {
 let acimade3550 = salario + (salario * (10/100));
 console.log("salario: " + acimade3550)
}
