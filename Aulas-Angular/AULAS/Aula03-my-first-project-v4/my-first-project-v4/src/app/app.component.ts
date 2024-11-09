import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  buttonLabel : string = 'CARRINHO';
  buttonSecond : string = 'ADICIONAR AOS FAVORITOS';
}
