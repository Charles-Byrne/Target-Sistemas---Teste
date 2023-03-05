/*
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
*/

let faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  }
  
  let faturamentoTotal = 0
  
  // Calculando o faturamento total
  for (let estado in faturamentoPorEstado) {
    faturamentoTotal += faturamentoPorEstado[estado]
  }
  
  console.log("Faturamento total: R$" + faturamentoTotal.toFixed(2))
  
  // Calculando a porcentagem de faturamento por estado
  for (let estado in faturamentoPorEstado) {
    let porcentagemFaturamento = (faturamentoPorEstado[estado] / faturamentoTotal) * 100
    console.log(estado + ": " + porcentagemFaturamento.toFixed(2) + "%")
  }
  