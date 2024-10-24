"use strict";
// CLASSES
class Character {
    constructor(name, streght, skill) {
        this.name = name; // nome
        this.streght = streght; // forca
        this.skill = skill; // habilidade
    }
    ;
    /**METODO */
    attack() {
        console.log(`Attack with ${this.streght} points`);
    }
    ;
}
;
// SUBCLASS
class Magician extends Character {
    constructor(name, streght, skill, magicPoints) {
        super(name, streght, skill); /**Chamando a classe PAI / SUPERCLASS */
        this.magicPoints = magicPoints;
    }
    ;
}
;
const person1 = new Character("Shark", 10, 98);
const person2 = new Magician("Mago", 9, 30, 100);
console.log(person1);
person1.attack();
console.log(person2);
person2.attack();
