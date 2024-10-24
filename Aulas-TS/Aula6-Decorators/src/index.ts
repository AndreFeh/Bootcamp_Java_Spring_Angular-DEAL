function ExibirNome(target:any){
    console.log(target);  
};

class Funcionario{};

@ExibirNome
class Quincas{};/* TIOZINHO DA PADARIA*/

//  CLASS DECORATORS
function apiVerson(version: string){/**ESSA @ DE API ESTA PEGANDO A VERSAO E O NOME */
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name:"felipe"});
    };
};

@apiVerson("1.10")
class Api{};

const api = new Api();

console.log(api.__version);
console.log(api.__name);

// ATTRIBUTE DECORATOR
function minLength(length:number){
    return (target:any, key: string)=>{
        let _value = target[key];

        // LEITURA
        const getter = ()=> _value;
        // SETAR VALOR SE...
        const setter = (value:string)=> {
            if(value.length< length){
                throw new Error(`Tamanho menor do que ${length}`);
            } else{
                _value = value;
            };
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };    
};

class Api2{
    @minLength(3)
    name : string;

    constructor(name:string){
        this.name = name;
    };
};

// POR CONTA DO @ DEFINIDO, COMO O TAMANHO É MENOR QUE 3, DARA ERRO
const nome1 = new Api2("oi");
console.log(nome1.name);

// POR CONTA DO @ DEFINIDO, COMO O TAMANHO É MAIOR OU IGUAL QUE 3, DARA CERTO
const nome2 = new Api2("Andre");
console.log(nome2.name);
 