import { Produto } from "./Produto";

export class Medicamentos extends Produto{
private _generico:string;



constructor(id:number,nome:string,tipo:number,preco:number,generico:string){
    super(id,nome,tipo,preco)
this._generico = generico;


}
public visualizar(): void {
super.visualizar()
    console.log(`generico ? ${this._generico}`)

}





    /**
     * Getter generico
     * @return {string}
     */
	public get generico(): string {
		return this._generico;
	}

    /**
     * Setter generico
     * @param {string} value
     */
	public set generico(value: string) {
		this._generico = value;
	}






}