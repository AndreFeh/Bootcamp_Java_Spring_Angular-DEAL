class Portal extends HTMLElement{
    constructor(){
        super();
        const shadowComp = this.attachShadow({mode: "open"});
        /*Até Aqui é padrao*/

        // Base do Componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");
        /*^> o que tiver na Tag denominada, com atributo Titulo, aparecerá */

        // Estilizar o Componente
        const style = document.createElement("style");
        style.textContent=`
        h1{
        color: red;
        }
        `;
        // Enviar para a Shadow
        shadowComp.appendChild(componentRoot); /*...*/
        shadowComp.appendChild(style);
    }
}

// "Chamada no HTML + class"
customElements.define("portal-comp", Portal);