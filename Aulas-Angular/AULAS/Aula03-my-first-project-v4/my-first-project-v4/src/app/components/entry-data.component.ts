import { Component } from "@angular/core";

@Component({
  selector: 'app-entry-data',
  templateUrl:'./entry-data.component.html',
  styleUrls:['./entry-data.component.css'],  
})

export class EntryDataComponent{
    placeHolder:string = "Email";
    placePass:string = "Senha";
    color:string="red";
}