class Cardnews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        /*Até Aqui é padrao para "COMP DENTRO DE COMP"*/
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        }

        build(){/*		Para definir os escopos, metodos e atributos dentro da Prop*/
            const componentRoot = document.createElement("div"); /* pois Root é o component mais alto da hierarquia */
            /*2°*/componentRoot.setAttribute("class", "card");/*Setando um novo Atributo, para ligá-lo aos outros ramos */
        
            /*1°*/
            /************************************************_SEPARAÇÃO DE "DIVS"_************************************************************/
            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card__left"); /*CSS e definindo as classes*/
            
            const autor = document.createElement("span");
            autor.textContent = "By " + (this.getElement || "Anonymous"); // Para setar o nome do usuario que aparecer (QUE FIZER A POSTAGEM)

            const linkTitle = document.createElement("a"); /* a == link, entao... */
            linkTitle.textContent = this.getAttribute("title");
            linkTitle.href = this.getAttribute("link-url");
            
            const newsContent = document.createElement("p");
            newsContent.textContent = this.getAttribute("content");

            cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(newsContent);
            /************************************************_SEPARAÇÃO DE "DIVS"_************************************************************/
            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right"); /*CSS e definindo as classes*/

            const newsImage = document.createElement("img");
            newsImage.src = (this.getAttribute("photo") || "assets/default.png");
            newsImage.alt = "Foto da Noticia"

            cardRight.appendChild(newsImage);

            /************************************************_DEFININDO HERANÇAS_************************************************************/
            /*3°*//* Atrelando CardLeft e ...Right como filhas de Root*/
            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRight);

            // como se trata de "metodo" deve ter um return, pois nao é VOID
            return componentRoot;
        } 

        styles(){/*		Para definir os estilos e layouts dentro da Prop*/
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%; /*720px valor real*//*100% porcentagem idependente tamanho da tela*/
            display: flex;
            flex-direction: row; /*Separa as coisas em linhas, nao colunas*/
            justify-content: space-between;
            box-shadow: 10px 8px 4px 6px rgba(0,0,0,0.28);
            -webkit-box-shadow: 10px 8px 4px 6px rgba(0,0,0,0.28);
            -moz-box-shadow: 10px 8px 4px 6px rgba(0,0,0,0.28);
        }

        .card__left, .card__right{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .card__left{
            /*AQUI ADICIONAMOS 0 ADICIONAL SOMENTE DE card_left!*/
            padding-left: 10px;

        }

        .card__left > span{
            font-weight: 400;
        }

        .card__left > a {
            margin-top: 10px;
            font-size: 25px;
            text-decoration: none;
            font-weight: bold;
            color: black;
        }

        .card__left > p {
            color: rgb(70, 70, 70);
        }

        .card__right{
            flex-direction: column;
        }

        .card__right > img {
            height: 200px;
            width: 200px;
        }

        `;
        return style;
        }
}

customElements.define("card-news", Cardnews);