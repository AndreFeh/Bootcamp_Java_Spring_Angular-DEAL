class CardDestaque extends HTMLElement{
    constructor(){
        super();
        const shadowComp = this.attachShadow({mode: "open"});

        shadowComp.appendChild(this.build());
        shadowComp.appendChild(this.styles());
    } 
/* NO HMTML SUA CHAMADA É DESSA FORMA
<card-destaque 
    dtq-img="url-da-imagem.jpg" 
    dtq-alt="Descrição da imagem" 
    nome="Nome do Anime" 
    categoria="Categoria do Anime">
</card-destaque>
*/

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card__destaque");

        /*ESSES CARDS TERAO IMAGEM DIV1, DIV2 SENDO NOME, CATEGORIA*/
        const cardUp = document.createElement("div");
        cardUp.setAttribute("class", "card__up");

        const imageDestaque = document.createElement("img");
        imageDestaque.src = this.getAttribute("dtq-img");
        imageDestaque.alt = this.getAttribute("dtq-alt");

        const cardDown = document.createElement("div");
        cardDown.setAttribute("class", "card__down");

        const nome = document.createElement("h3");
        const categoria = document.createElement("span");
        nome.textContent = "Anime " + this.getAttribute("nome");
        categoria.textContent = this.getAttribute("categoria");

        cardUp.appendChild(imageDestaque);
        cardDown.appendChild(nome);
        cardDown.appendChild(categoria);
        
        componentRoot.appendChild(cardUp);
        componentRoot.appendChild(cardDown);

        return componentRoot
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card__destaque{
                display: flex;
                flex-direction: row;
                border: 1px solid #ccc; 
                padding: 10px; 
                border-radius: 5px; 
                background-color: #fff;
                width: 100px; 
                height: 100px;

            }

            .card__up{
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .card__up img{
                border: 1px solid black;
                width: 70px;
                height: 70px;
            }

            .card__down{
                display: flex;
                flex-direction: column;
            }

            .card__down h3{}
            .card__down span{}
        `;
        return style;
    }
}
customElements.define("card-destaque", CardDestaque);