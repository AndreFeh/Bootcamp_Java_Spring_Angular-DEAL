import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private navegator:Router){
  // LOCALHOST / PORTIFOLIO / ID
  //
  this.activeRoute.params.subscribe(res => console.log(res));
  this.activeRoute.firstChild?.params.subscribe(res => console.log(res));

  // LOCALHOST / PORTIFOLIO / ID?{NAME=XXXXXXXX&TOKEN=123456789}
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    );
  }


  ngOnInit(): void {
    // setInterval(()=>{this.navegator.navigate(['/'])}, 5000);
  }

}
