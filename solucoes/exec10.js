//Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens - considere TODOS os produtos, porém considere apenas 1 exemplar por produto)

let lista = require('../database')

let inventario = 0
let totalDeItens = lista.length // console.log(totalDeItens) = 91 itens

for(let i = 0; i < lista.length; i++) {
    inventario = inventario + (lista[i].preco * lista[i].qtdEstoque); //console.log(inventario) = 173219.55
}

function calculaTicketMedio() { 
    return inventario / totalDeItens;
}

console.log(calculaTicketMedio());//1903.5115384615383