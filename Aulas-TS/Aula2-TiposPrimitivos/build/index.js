"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//  Tipos primitivos 
let ligado;
let nome = "Andre";
let idade = 23;
let altura = 1.9; /*Valores Decimais tambem*/
// NULL / UNDEFINED 
let nulo = null; /* Parametros que devem ser nulos */
let indefinido = undefined; /*Ninguem pode alterar esse tipo*/
// TIPOS ABRANGENTES
let retorno; /* Nao aceita nada a nao ser o vazio */
let retonoView = false; /*Recebe qualquer valor, como se fosse um VAR, um retorno imprevisivel*/
// OBJETOS _SEM PREVISIBILDADE_
let produto = {
    name: "Andre",
    cidade: "SP",
    idade: 30,
}; /* Nao é ideal pois nao tem PREVISIBILDADE */
// Instanciando um objeto
let meuProduto = {
    nome: "Tenis",
    preco: 89.90,
    unidades: 89,
};
// ARRAY / VETOR
let dados = ["andre", "felipe", "jhonathan", "isabele"]; /** TIPO SIMPLIFICADO */
let dados2 = ["andre", "felipe", "jhonathan", "isabele"]; /** TIUPO DE DETALHAMENTO ARRAY */
// Array com mais de um tipo de elementos
let infos = ["andre", 23, "joao", 16.9, "andre", "andre"]; //PODEMOS DEFINIR TUDO EM QUALQUER ORDEM
//  TUPLAS / ARRAY COM MULTIPLOS ELEMENTOS
let boleto = [
    "agua conta",
    199.90,
    3214565,
]; /** DEVE SER FEITO NA ORDEM COMO INFORMADO NO "CONSTRUTOR" */
let aniversario;
let aniversario1;
aniversario = new Date("2022-01-30 05:00");
console.log(aniversario.toString());
aniversario1 = new Date("2022-01-30");
console.log(aniversario1.toString());
console.log("FUNÇÕES");
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7.02);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Andre"));
function CallToPhone(phone) {
    return phone;
}
;
console.log(CallToPhone("41995368352"));
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Andre";
    });
}
;
console.log(getDatabase(1));
