
/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

*/

/*
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

let faturamentoDiario = [1500, 2200, 1800, 1900, 2100, 2400, 1700, 2000, 2300, 2500, 1700, 1900]
let menorFaturamento = faturamentoDiario[0]
let maiorFaturamento = faturamentoDiario[0]
let somaFaturamento = 0

// Encontrando o menor e o maior valor de faturamento diário
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i]
  }
  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i]
  }
  somaFaturamento += faturamentoDiario[i]
}

let mediaFaturamento = somaFaturamento / faturamentoDiario.length
let diasAcimaMedia = 0

// Contando o número de dias em que o faturamento diário foi superior à média mensal
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaFaturamento) {
    diasAcimaMedia++
  }
}

console.log("Menor faturamento diário: " + menorFaturamento)
console.log("Maior faturamento diário: " + maiorFaturamento)
console.log("Número de dias com faturamento acima da média: " + diasAcimaMedia)
