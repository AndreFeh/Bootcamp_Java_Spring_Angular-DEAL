"use strict";
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
