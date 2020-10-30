// 1) Desenvolva uma aplicação em JavaScript para ler o nome, as três notas e o número de faltas de um aluno e escrever qual a sua situação final: Aprovado, Reprovado por Falta
// ou Reprovado por Média. 
// A média para aprovação é 70 e o limite de faltas é 25% do total de aulas. 
// O número de aulas ministradas no semestre foi de 80. 
// A reprovação por falta sobrepõe a reprovação por Média.


const MEDIA = 70
const FALTAS = 80
 
let nome ="souza";
let notaUm = 90;
let notaDois = 9;
let notaTres = 5;
let nTotal = (notaUm + notaDois + notaTres )/3;
let faltasAluno = 0;
let minimoFaltas = 0.25 * FALTAS;
 
if (nTotal >= MEDIA && minimoFaltas >= faltasAluno ){
console.log("Aprovado")
} else if (minimoFaltas < faltasAluno) {
 console.log("O aluno " + nome + " reprovou por falta")
} else {
 console.log("O aluno " + nome + " foi reprovado por nota")
}
