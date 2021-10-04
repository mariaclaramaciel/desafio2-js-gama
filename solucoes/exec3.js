//Quantidade total de itens disponíveis (similar ao anterior)

let lista = require('../database')

let produtosDisponiveis = 0;

for (let i = 0; i <lista.length; i++) {
    if(lista[i].disponivel == "sim") {
        produtosDisponiveis += lista[i].qtdEstoque
    }
}

console.log(produtosDisponiveis) //2568