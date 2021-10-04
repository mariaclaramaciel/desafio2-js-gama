//Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")
let lista = require('../database'); //pegando o array de produtos e guardadndo na variavel lista


let produtosDestacados = []; //inicializamos uma variavel que guarda um array e vai servir como um acumulador para o meu for

for (let i = 0; i < lista.length; i++) {
    if(lista[i].emDestaque == "sim"){
        let produtoDestacado = lista[i]
        produtosDestacados.push(produtoDestacado)
    }
}

let soma = 0;

for(let i = 0; i < produtosDestacados.length; i++) {
    soma += produtosDestacados[i].qtdEstoque
}

console.log(soma); //2173