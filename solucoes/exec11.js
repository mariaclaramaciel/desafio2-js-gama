//11. Somatória de itens por departamento (você deverá retornar 
//um objeto contendo o nome do departamento e o total de itens 
//nele - Novamente considere os produtos “EM ESTOQUE” - e é apenas 
//a somatória da quantidade de itens)

let lista = require('../database')

function exercicio11(){

    var listaDeptos = [];
    // como saber todos os departamentos??
    let codDepto = 0;
    for (i=0;i<lista.length; i++){
        let produto = lista[i];
        if (produto.departamento.idDepto != codDepto){
            //console.log("Encontrei novo departamento = "+produto.departamento.nomeDepto);
            // vou definir uma pequena estrutura para armazenar na lista, contendo o nome do departamento e inicialmente a quantidade zerada
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                somatoriaItens: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }

    // agora, vou novamente percorrer a lista e, para cada produto, percorro os departamentos definidos e somo o estoque

    for (i=0; i < lista.length ; i++){
        // para cada produto da lista, eu preciso encontrar seu respectivo departamento na outra lista e somar ao seu estoque
        let produto = lista[i];

        // tenho que percorrer a lista de departamentos
        for (j=0;j<listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){  // o depto do produto corresponde ao depto da lista?
                listaDeptos[j].somatoriaItens += produto.qtdEstoque;
                break;
            }
        }
    }

    // depois de tudo, exibo a lista
    console.log(listaDeptos);
}

exercicio11()