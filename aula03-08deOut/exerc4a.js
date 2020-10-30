// 4) escreva o código em JavaScript usando laço(s)
//  para ordenar o array de forma crescente.

// a) 10 9 8 7 6 5 4 3 2 1


var arrayA = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var temp = [];
var x, y;
 
for (x = 0; x < 10; x++) {
 for (y = 0; y < 10; y++){
   if (arrayA[x] < arrayA [y]){
     temp[x] = arrayA[x];
     arrayA[x] = arrayA[y];
     arrayA[y] = temp[x];
   }
 }
}
console.log("arrayA crescente", arrayA);



