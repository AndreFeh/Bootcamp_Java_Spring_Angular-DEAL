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
    categoria="Categoria do Anime"
    link-anime="link-do-anime.html">
</card-destaque>
*/

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card__destaque");

        /* Criando a tag <a> */
        const linkAnime = document.createElement("a");
        // Obtendo o valor do atributo 'link-anime' ou, se não existir, usando 'index.html' como valor padrão
        const hrefValue = this.getAttribute("link-anime") || "index.html";  // Link definido pelo usuário ou padrão para `index.html`
        linkAnime.setAttribute("href", hrefValue); // Define o link corretamente
        linkAnime.setAttribute("class", "card__link");
            
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
        
        /* Adicionando partes do card dentro do link */
        linkAnime.appendChild(cardUp);
        linkAnime.appendChild(cardDown);
        
        /* SE  OS CARDS FICAREM DENTRO DE COMPONENT ROOT, O LINK NAO IRA FUNCIONAR 
        componentRoot.appendChild(cardUp);
        componentRoot.appendChild(cardDown);        
        */
        componentRoot.appendChild(linkAnime);

        return componentRoot
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card__destaque{
                display: flex;
                flex-direction: column;
                border: 1px solid #ccc;
                 
                padding: 10px; 
                border-radius: 5px; 
                background-color: black;
                color: white;
                width: 100px; 
                height: 100px;
            }

            .card__link {
                display: block;
                text-decoration: none; /* Remove o sublinhado do link */
                color: inherit; /* Garante que o texto do link herde a cor do card */
                width: 100%;
                height: 100%;
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