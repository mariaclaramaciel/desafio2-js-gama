//13. Ticket médio por departamento (similar ao item anterior, 
// porém retornando uma lista de objetos que contenha o nome do 
// departamento e o seu ticket médio). Este é um exercícios difícil, 
// porém é descomplicado de ser realizado tendo claro as demais 
// saídas até então. Verifique a possibilidade de reutilizar parte 
// da programação ou sua lógica trabalhada.

let listaProdutos = require('../database')

function exercicio13(){
    var listaDeptos = [];
    // como saber todos os departamentos??
    let codDepto = 0;
    for (i=0;i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.departamento.idDepto != codDepto){
            //console.log("Encontrei novo departamento = "+produto.departamento.nomeDepto);
            // vou definir uma pequena estrutura para armazenar na lista, contendo o nome do departamento e inicialmente a quantidade zerada
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0,
                totalEstoque: 0,
                ticketMedio: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    // para cada produto, percorrer cada um dos departamentos da lista, fazendo as devidas somatórias (tanto de quantidade de itens, quanto de preço)
    for (i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        for (j=0; j<listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                listaDeptos[j].totalEstoque += produto.preco * produto.qtdEstoque;
                break;
            }
        }
    }

    // defini todos os valores de somatoria de itens e também de total do estoque... para facilitar a compreensão,
    // vamos pela última vez, percorrer a lista de departamentos e calcular o ticket médio

    for (j=0; j<listaDeptos.length; j++){
        listaDeptos[j].ticketMedio = listaDeptos[j].totalEstoque / listaDeptos[j].somatoriaItens;
    }

    console.log(listaDeptos);
}

exercicio13()