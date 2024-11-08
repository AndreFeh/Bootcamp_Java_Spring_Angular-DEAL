import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  nome:string = 'Andre';

  constructor(){}

  ngOnInit(): void {
    // console.log('Olá eu sou o nascimento do Title Component');

    this.nome = `Ola ${this.nome}`;
  }

}
