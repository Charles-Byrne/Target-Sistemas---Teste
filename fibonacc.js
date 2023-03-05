/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence 
ou não a sequência.

*/
const myNumber = 14

let n1 = 0, n2 = 1, SOMA = 0

while (SOMA <= myNumber) {
console.log(SOMA)
  SOMA = n1 + n2
  n1 = n2
  n2 = SOMA
}

if (myNumber === n1) {
  console.log('Este Número PERTENCE a Sequencia Fibonacci')
} else {
  console.log('Este Número NÃO Pertence a Sequencia Fibonacci')
}