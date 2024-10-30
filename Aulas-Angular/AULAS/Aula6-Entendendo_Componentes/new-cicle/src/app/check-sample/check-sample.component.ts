import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';


@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements
OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy {

  quantidade : number = 0;

  adicionar(){
    this.quantidade += 1;
  }
  decrementar(){
    this.quantidade -= 1;
  }

  ngAfterViewInit(): void {
    console.log('Method implemented.');
  }
  ngAfterViewChecked(): void {
    console.log('Method implemented.');
  }
  ngAfterContentInit(): void {
    console.log('Method implemented.');
  }
  ngAfterContentChecked(): void {
    console.log('Method implemented.');
  }
  ngDoCheck(): void {
    console.log('Method implemented.');
  }
  ngOnInit(): void {
    console.log('Method implemented.');
  }

  ngOnDestroy(): void {/**QUANDO ELE MORRER, FAZER ISSO... */
    console.log("Good Bye My Friend");
  }

}
