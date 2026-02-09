import { keyInSelect } from "readline-sync";
import { Input } from "../input";
import { Produto } from "../Produto";
import { ProdutoController } from "./ProdutoController";
import { Cosmeticos } from "../Cosmetico";
import { Medicamentos } from "../Medicamentos";
import { N } from "vue-router/dist/router-CWoNjPRp.mjs";


function Main (){

const controller = new ProdutoController()
while(true){
    console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                  Produto               ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cria Produto                          ");
        console.log("            2 - Listar todas os produtos               ");
        console.log("            3 - Buscar produto por numero             ");
        console.log("            4 - Atualizar Dados do produto            ");
        console.log("            5 - Apagar produto                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
console.log('digite uma opçao')
let opcao = Input.questionInt('')
switch(opcao){
    case 1:
criarProduto()
keyPress()
break
case 2:
    controller.listarTodosProtudos()
    keyPress()
    break
    case 3:
        let z = Input.questionInt("qual produto id deseja consultar? ")
        controller.consultarProdutoPorId(z)
        keyPress()
        break
case 4 :
   let x = Input.questionInt('qual numero')
    controller.atualizarProduto(x)
    keyPress()
    break
    case 5:
        let Y =Input.questionInt("qual numero do produto ira deletar ?")
    controller.deletarProduto(Y)
    keyPress()
    break

case 6:
    console.log('saiu ')
    Sobre()
      keyPress()
      break
default:
    console.log("invalido")
}

function Sobre(){

         console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Breno Nunes de Almeida");
    console.log("Generation Brasil - brenogenerationa@generation.org");
    console.log("github.com/BrenoNunes96");
    console.log("*****************************************************")

            }


}


function criarProduto (){
let tipos = new Array<string> ('medicamentos','cosmeticos');

console.log('digite o nome do produto')
let nome = Input.question('')


console.log('digite o preço ')
let preco = Input.questionFloat('')

let tipo : number = keyInSelect(tipos,"",{cancel:false}) +1


let generico = ''
let medicamento = controller.criarProduto(new Medicamentos(controller.gerarid(),nome,tipo,preco,generico))
//for( let x of tipos){
//return console.log(tipos[tipo])
//}


switch(tipo){

case 1:
generico = Input.question('é generico ?')
medicamento



break
case 2:
    let fragrancia = Input.question("qual a fragrancia ?")
    controller.criarProduto(new Cosmeticos(controller.gerarid(),nome,tipo,preco,fragrancia))
break
default:
    console.log("invalido")
}



}








function keyPress(){
    console.log('pressione enter para continuar')
Input.prompt()
}}


Main ()