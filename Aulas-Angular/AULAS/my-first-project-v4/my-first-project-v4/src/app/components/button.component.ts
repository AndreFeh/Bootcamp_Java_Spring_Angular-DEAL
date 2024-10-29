import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})

export class Button{
    @Input() label?:string;
    // // IGNORAR ISSO ABAIXO AGORA 
    // buttonText1: string = 'ACESSAR';
    // buttonTexts: string[] = ['VENDER', 'COMPRAR']; /**INDEX 0,1 */
    // buttonNumber: number = 1;
    // // SE EU QUISER CRIAR UM OBJETO
    // buttonObject={
    //     label: 'Adicionar ao Carrinho',
    // };

    getAlert(){
        alert(this.label);
    }
}

