import { Produto } from "../Produto"


export interface ProdutoRepositorio{

criarProduto (x:Produto):void
listarTodosProtudos():void
consultarProdutoPorId(x:number):void
atualizarProduto(x:number):void
deletarProduto(x:number):void
gerarid(x:number):void

}