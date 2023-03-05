
/*
Escreva um programa que inverta os caracteres de um string.
*/

let mensage = "Eu me chamo Charles"
let mensageInvertida = ""

// Invertendo os caracteres da string
for (let i = mensage.length - 1; i >= 0; i--) {
  mensageInvertida += mensage[i]
}

console.log(mensageInvertida)