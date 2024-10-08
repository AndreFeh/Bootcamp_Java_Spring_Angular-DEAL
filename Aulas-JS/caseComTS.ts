type Hero = {
    nome: string,
    vulgo: string,
    telefone: string,
};

function ligarPara(heroi: Hero){
    console.log("Ligando Para " + heroi.telefone);
}

ligarPara({
    nome: "Rogers",
    vulgo: "Capitão América",
    telefone:"11 997856421",
});