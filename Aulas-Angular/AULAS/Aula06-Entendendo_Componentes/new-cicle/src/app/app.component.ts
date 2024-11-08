import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-cicle';
  isAliveCheckSample:boolean = true;

  disposeCheckSample():void{
    this.isAliveCheckSample=false;
  }
}
