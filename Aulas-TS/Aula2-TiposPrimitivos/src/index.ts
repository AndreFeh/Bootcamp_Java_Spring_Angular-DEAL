//  Tipos primitivos 
let ligado : false;
let nome : string = "Andre";
let idade : number = 23;
let altura : number = 1.9; /*Valores Decimais tambem*/

// NULL / UNDEFINED 
let nulo : null = null; /* Parametros que devem ser nulos */
let indefinido : undefined = undefined; /*Ninguem pode alterar esse tipo*/

// TIPOS ABRANGENTES
let retorno : void; /* Nao aceita nada a nao ser o vazio */
let retonoView : any = false /*Recebe qualquer valor, como se fosse um VAR, um retorno imprevisivel*/

// OBJETOS _SEM PREVISIBILDADE_
let produto : object = {
    name: "Andre",
    cidade: "SP",
    idade: 30,
}; /* Nao é ideal pois nao tem PREVISIBILDADE */


// OBJETOS _COM PREVISIBILDADE_
type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number,
};

// Instanciando um objeto
let meuProduto : ProdutoLoja = {
    nome: "Tenis",
    preco: 89.90,
    unidades: 89,
};

// ARRAY / VETOR
let dados:string[] = ["andre", "felipe", "jhonathan", "isabele"];       /** TIPO SIMPLIFICADO */
let dados2: Array<string> = ["andre", "felipe", "jhonathan", "isabele"];/** TIUPO DE DETALHAMENTO ARRAY */

// Array com mais de um tipo de elementos
let infos: (string | number)[] = ["andre", 23, "joao", 16.9, "andre", "andre"]; //PODEMOS DEFINIR TUDO EM QUALQUER ORDEM

//  TUPLAS / ARRAY COM MULTIPLOS ELEMENTOS
let boleto : [string, number, number] = [
    "agua conta", 
    199.90, 
    3214565,
]; /** DEVE SER FEITO NA ORDEM COMO INFORMADO NO "CONSTRUTOR" */

let aniversario : Date;
let aniversario1 : Date;

aniversario = new Date("2022-01-30 05:00");
console.log (aniversario.toString());

aniversario1 = new Date("2022-01-30");
console.log (aniversario1.toString());

console.log("FUNÇÕES");
function addNumber(x : number, y : number) : number /*DECLARA QUE RETORNA NUMERO*/{
    return x + y;
}

let soma : number = addNumber(4,7.02);

function addToHello(name:string)/*NAO ESTA DECLARADO, MAS A LINGUAGEM ENTENDE, DE MANEIRA IMPLICITA*/{
    return `Hello ${name}`;
}

console.log(addToHello("Andre"));

function CallToPhone (phone:number | string): number | string /*Aceita como String ou  numero*/{
    return phone;
};
console.log(CallToPhone("41995368352"));

async function getDatabase(id:number): Promise <string> {
    return "Andre";  
};

console.log(getDatabase(1));