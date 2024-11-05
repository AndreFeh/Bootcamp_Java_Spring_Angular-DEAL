import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  Id:string = "0";
    // @Input()
  // cardLink:string = "";

  ngOnInit(): void {}
}
