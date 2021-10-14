// 15. Departamento menos valioso (similar ao anterior)
let lista = require('../database')

function exercicio15(){

    let listaDeptos = [];
    let codDepto = 0;

    for (i=0;i<lista.length; i++){
        let produto = lista[i];
        if (produto.departamento.idDepto != codDepto){
            let itemLista = {
                nomeDepto: produto.departamento.nomeDepto,
                idDepto: produto.departamento.idDepto,
                inventarioDpto: 0
            };
            listaDeptos.push(itemLista);
            codDepto = produto.departamento.idDepto;
        }
    }


    for (i=0; i < lista.length ; i++){
        let produto = lista[i];

        for (j=0;j<listaDeptos.length; j++){
            if (produto.departamento.idDepto == listaDeptos[j].idDepto){  // o depto do produto corresponde ao depto da lista?
                listaDeptos[j].inventarioDpto += (produto.qtdEstoque * produto.preco);
                break;
            }
        }
    }

    
    let listaOrdenada = 
    listaDeptos.sort(function(a, b) {
    return a.inventarioDpto - b.inventarioDpto
    })
    
    console.log(listaOrdenada[0]); //ferramentas 253
}

exercicio15()

