import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  /*ARRAY DE PRODUTOS*/
  produtos:string[] = [];
  menuType:string = "";

  constructor(){
    // ELE FARA A REQUISIÇÃO NA API,
    // E RETORNARA COM ESSAS INFORMACOES
    this.produtos =[
      "Mouse", "Teclado", "Cabo", "Fonte"
    ]
  }
  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("André"); /**ADICIONA UM ELEMENTO */
  }
  remover(index: number){
    // this.produtos.pop();/**REMOVE O ULTIMO ELEMENTO DO ARRAY */
    this.produtos.splice(index, 1);/**REMOVE O ELEMENTO COM INDEX DO ARRAY */
                  /*POSIÇÃO QUE VAI REMOVER + QUANTIDADE DE ELEMENTOS PRA REMOVER */
  }


}
