// CLASSES
class Character{
    /**ATRIBUTOS */
    private name?: string;
    private readonly streght:number;
    private skill: number;

    constructor(name:string, streght:number, skill:number){
        this.name = name; // nome
        this.streght = streght; // forca
        this.skill = skill; // habilidade
    };

    /**METODO */
    attack() : void{
        console.log(`Attack with ${this.streght} points`);
    };
};

// SUBCLASS
class Magician extends Character{
    magicPoints: number;
    
    constructor(name:string, streght:number, skill:number, magicPoints: number){
        super(name, streght, skill); /**Chamando a classe PAI / SUPERCLASS */
        this.magicPoints = magicPoints;
    };

};



const person1 = new Character("Shark", 10, 98);
const person2 = new Magician("Mago", 9,30,100);

console.log(person1);
person1.attack();

console.log(person2);
person2.attack();