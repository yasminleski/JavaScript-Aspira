
// 4)escreva o código em JavaScript usando laço(s)
//  para ordenar o array de forma decrescente.

// b) 0 1 4 9 16 25 36 49 64 81 100

var arrayB = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
var temp = [];
var x, y;
 
for (x = 0; x < arrayB.length; x++) {
 for (y = 0; y < arrayB.length; y++){
   if (arrayB[x] < arrayB [y]){
     temp[x] = arrayB[x];
     arrayB[x] = arrayB[y];
     arrayB[y] = temp[x];
   }
 }
}
console.log("arrayB decrescente", arrayB);
