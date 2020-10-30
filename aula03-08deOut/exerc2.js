// 2) Um comerciante comprou um produto e quer vendê-lo 
//    com um lucro de 45% se o valor da compra for menor que R$ 50,00; 
//    caso contrário, o lucro será de 30%.
// Desenvolva uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda para o produto

let produto = "maçã";
let lucro45 = 0.45;
let lucro30 = 0.30;
let valorDaCompra = 10.4;
 
if ( valorDaCompra <= 50){
  let menorQue45 = lucro45*valorDaCompra+valorDaCompra;
console.log("valor do produto " + produto + ": R$" + menorQue45)
} else {
let maiorQue30 = lucro30*valorDaCompra + valorDaCompra;
  console.log("valor do produto " + produto + ": R$" + maiorQue30)
}
