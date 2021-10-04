//Quantidade de itens disponíveis e em destaque

let lista = require('../database')

let produtosDisponiveisEDestaque = [];

for (let i = 0; i < lista.length; i++) {
    if(lista[i].emDestaque == "sim" && lista[i].disponivel == "sim"){
        let produtoDisponivelEDestaque = lista[i];
        produtosDisponiveisEDestaque.push(produtoDisponivelEDestaque);
    }
}

let soma = 0;
for (let i = 0; i < produtosDisponiveisEDestaque.length; i++) {
    soma += produtosDisponiveisEDestaque[i].qtdEstoque
}
console.log(soma); //2173

