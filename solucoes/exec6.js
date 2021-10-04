//Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)

let lista = require('../database')

//inicio um array vazio
//olho a lista toda
//vou jogando para o novo array somente o valor
//uso o sort para ordenar em forma crescente
//dou um console no ultimo item do novo array

let listaDosValores = [];

for(let i = 0; i < lista.length; i++) { 
    let cadaPreco = lista[i].preco;
    listaDosValores.push(cadaPreco);
}

let listaDePrecoOrdenada = 
    listaDosValores.sort(function(a, b) {
    return a-b
})

console.log(listaDePrecoOrdenada[listaDosValores.length-1]); //750
//o ultimo item é sempre o comprimento do array -1, pois o primeiro é 0