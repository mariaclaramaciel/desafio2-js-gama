//Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque - considere apenas os produtos “EM ESTOQUE”)

let lista = require('../database')

let somaDoInventario = 0

for (let i = 0; i < lista.length; i++) {
    somaDoInventario = somaDoInventario + (lista[i].preco * lista[i].qtdEstoque);
}

console.log(somaDoInventario); // 173219.55