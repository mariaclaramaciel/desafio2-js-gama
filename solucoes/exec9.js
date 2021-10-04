//Produto em estoque menos valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)

let lista = require('../database')

//so calcular os produtos que estiverem Disponiveis
    //crio um array vazio
    //olho a lista toda
    //vou verificar para o novo array apenas os que tiverem "disponivel" == "sim"
    //crio uma variavel que vai receber o preco * quantidade 
    //jogo a varivel para o novo array
// 

let produtosDisponiveis = [];

for(let i = 0; i <lista.length; i++) {
    if(lista[i].disponivel == "sim") {
        let multiplicado = lista[i].preco * lista[i].qtdEstoque;
        produtosDisponiveis.push(multiplicado);
    }
}
//console.log(produtosDisponiveis);

//agora preciso ordenar a lista e pegar o primeiro item

let listaDePrecoOrdenada = 
    produtosDisponiveis.sort(function(a, b) {
    return a-b
})

console.log(listaDePrecoOrdenada[0]); //2.4