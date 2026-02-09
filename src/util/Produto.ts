export  abstract class Produto{
private _id : number;
private _nome: string;
private _tipo :number;
private _preco:number;

constructor(id:number,nome:string,tipo:number,preco:number){

    this._id = id;
    this._nome=nome;
    this._preco = preco;
    this._tipo = tipo;
}



public visualizar ():void{
let tipo : string = ''
switch(this._tipo){

case 1:
    tipo = 'medicamento'
    break

case 2:
    tipo = 'cosmeticos'
    break
default:
    console.log("invalido")
}

console.log(`o id é ${this._id}`)
console.log(`o nome do produto  é ${this._nome}`)
console.log(`o produto  é do tipo ${tipo}$`)
console.log(`o preço do produto é ${this._preco}`)


}


public gerarId ():number{

return this.id ++


}





    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}


}