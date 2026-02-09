
import { Produto } from "../Produto";
import { ProdutoRepositorio } from "./ProdutoRepositorio";

import { keyInSelect } from "readline-sync";

import { Input } from "../input";

export class ProdutoController implements ProdutoRepositorio{

    private produtos =  new Array<Produto>();
    public numero : number = 0   

    gerarid(): number {
return this.numero ++
        
    }
    criarProduto(x:Produto): void {
       this.produtos.push(x)
       
    }

    listarTodosProtudos(): void {
    for(let x of this.produtos){

         x.visualizar()

    }
}

    
    consultarProdutoPorId(x:number): void {
  for(let y of this.produtos ){
  
        if(y.id === x){
        y.visualizar()
  }
}

    }


    atualizarProduto(x:number): void {
       let nome :string = ''
       let tipo : number
       let preco : number
       let tipos = ['medicamentos','comesticos']
        for(let y of this.produtos ){
              
        if( y.id === x){
        y.visualizar()
            nome= y.nome,
            tipo = y.tipo,
            preco = y.preco
       let pgnt= Input.question("o que ira atualizar ? nome ou tipo ou preco ?")
           
       switch(pgnt ){
        case 'nome':
            console.log("digite o novo nome")
          let nomeinput : string =  nome = Input.question("")
            y.nome = nomeinput
            break
         case 'tipo':
           console.log("QUAL O TIPO ?")
       y.tipo = keyInSelect(tipos,"",{cancel:false}) +1
break

         case 'preço':
            let xPreco: number = Input.questionFloat("digite o preço")
              y.preco = xPreco
  default :
  console.log("invalido")

       }


  }
}
    }
    deletarProduto(y:number):void {
   for(let x of this.produtos){
      if(x.id ===y){
        this.produtos.splice(this.produtos.indexOf(x),1 )
      }

   }

}
}