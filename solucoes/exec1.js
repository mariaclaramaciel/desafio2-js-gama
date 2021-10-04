//Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)

let lista = require('../database') //pegando o array de produtos e guardadndo na variavel lista

let somaQtEstoque = 0; //inicializamos uma variavel que vai servir como um acumulador para o meu for

for (let produto = 0; produto < lista.length; produto++) {
    somaQtEstoque += lista[produto].qtdEstoque
    //somaQtEstoque = somaQtEstoque + lista[produto].qtdEstoque
}

//inicicializo com o produto 0, 0 é menor que o comp da  lista sendo ocorre o calculo
//somaqtestoqué mais a qtdestoque do produto[0]= 10 
//quando o for roda mais uma vez ele agora é o produto [1](pois passou pela expresaofinal de incremento)
//sendo minha soma 10 mais a quantidade de estoque do produto [1], 20+10=30
//na proxima rodada minha soma se inicia em 30 e assim somo com a quantidade de estoque do produto[2]

console.log(somaQtEstoque);  //2568

//x+=y // x = x + y //soma de atribuicao

