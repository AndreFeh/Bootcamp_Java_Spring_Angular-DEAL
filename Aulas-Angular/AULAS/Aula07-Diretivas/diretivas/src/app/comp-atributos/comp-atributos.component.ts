import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit {
  estilo: string = "disable";
  item : string = "";
  lista:string[] = [];
  isEnableBlock:boolean = true;


  ngOnInit(): void {
  }

  trocar() {
    if(this.estilo == "disable"){
      this.estilo= "enable";
    }else {
      this.estilo = "disable";
    }
  }

  adicionarLista() {
    this.lista.push(this.item);
  }

}
