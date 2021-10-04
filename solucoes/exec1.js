//Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

let lista = require('../database') 

let somaQtEstoque = 0; 

for (let produto = 0; produto < lista.length; produto++) {
    somaQtEstoque += lista[produto].qtdEstoque
}

console.log(somaQtEstoque);  //2568



