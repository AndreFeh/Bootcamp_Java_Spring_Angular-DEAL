class CardDestaque extends HTMLElement{
    constructor(){
        super();
        const shadowComp = this.attachShadow({mode: "open"});

    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card-destaque");

        /*ESSES CARDS TERAO IMAGEM DIV1, DIV2 SENDO NOME, CATEGORIA*/
    }
}
customElements.define("card-destaque", CardDestaque);