/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

*/

let INDICE = 13, K = 0, SOMA = 0


for (let index = 0; index < INDICE; index++) {
    K = K + 1
    SOMA = SOMA + K

}

console.log(SOMA)
