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

/*
overflow: hidden: Garante que nenhum conteúdo excedente (texto ou imagem) ultrapasse os limites do card.
object-fit: cover: Ajusta a imagem para preencher o container, cortando partes se necessário, sem distorcer a imagem.
white-space: nowrap: Impede que o texto quebre em múltiplas linhas, mantendo tudo em uma linha.
text-overflow: ellipsis: Se o texto for muito longo, adiciona "..." no final, indicando que há mais texto, mas sem ultrapassar os limites do container.
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
        nome.textContent = this.getAttribute("nome");
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
                box-sizing: border-box;
                border: 1px solid white;
                padding: 10px; 
                border-radius: 20px; 
                background-color: black;
                color: white;
                width: 20vh; 
                height: 100%;
                overflow: hidden; /* GPT Garante que nenhum conteúdo ultrapasse os limites do card */
            }

            .card__link {
                display: block;
                text-decoration: none; /* GPT Remove o sublinhado do link */
                color: inherit; /* Garante que o texto do link herde a cor do card */
                width: 100%;
                height: 100%;
                overflow: hidden; /* GPT Garante que o link também não ultrapasse os limites */

            }

            .card__up{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                height: 70%;
                overflow: hidden; /* Previne que a imagem ultrapasse os limites */

            }

            .card__up img{
                border: 1px solid black;
                border-radius: 20px; 
                width: 100%;
                height: 100%;
                object-fit: cover; /* Faz com que a imagem se ajuste ao container sem distorcer */
            }

            .card__down{
                display: flex;
                flex-direction: column;
                align-items: left;
                width: 100%;
                height: 30%;
            }

            .card__down h3{
                font-size: large;
                margin: 0; /* Remove qualquer margem superior/inferior */
                padding: 0; /* Remove qualquer padding */
                white-space: nowrap; /* Previne que o texto quebre em várias linhas */
                overflow: hidden; /* Esconde o excesso de texto */
                text-overflow: ellipsis; /* Adiciona "..." ao final se o texto for muito longo */
            }

            
            .card__down span{
            font-size: large;
            color: grey;
            margin: 0; /* Remove qualquer margem superior/inferior */
            padding: 0; /* Remove qualquer padding */
            white-space: nowrap; /* Previne que o texto quebre em várias linhas */

            overflow: hidden; /* Previne que o texto ultrapasse os limites */
            text-overflow: ellipsis; /* Adiciona "..." ao final se o texto for muito longo */

            }
        `;
        return style;
    }
}
customElements.define("card-destaque", CardDestaque);