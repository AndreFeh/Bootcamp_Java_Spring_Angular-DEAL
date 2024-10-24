// TITULO DINAMICO (JS que retorna JS, HTML, CSS)
class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        /*CRIANDO SHADOW*/
        const shadowComp = this.attachShadow({mode: "open"});

        // Precisamos ter a BASE DO COMPONENTE, ESTILIZA O COMPONENE E ENVIA PARA A SHADOW
        // Base do Componente 
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = 'André'; // Primeiro vamo fazer constante, mas futuramente dinamico
        // Estilizar o Componente >>> Dar estilo ao componente
        const style = document.createElement("style");
        style.textContent =`
        h1{
        color: red;
        }
        `; 
        
        // Enviar para a Shadow
        shadowComp.appendChild(componentRoot);
        shadowComp.appendChild(style);

    }
}

customElements.define("titulo-dinamico", TituloDinamico);