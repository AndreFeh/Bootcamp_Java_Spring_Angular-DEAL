import { Component, input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon:PokemonData /** O '?' FAZ ELE PODER SER NULO OU NAO */
  // name:string = "CHARIZARD"; /* TROCADO PELO DADO DINAMICO */
  // attributesType:string[] = ['FIRE','ROCK']; /* TROCADO PELO DADO DINAMICO */


  constructor(private service:PokemonService){
    this.pokemon={
      id:0,
      name:"",
      sprites:{front_default:""},
      types:[]
    }
  }

  ngOnInit(): void {
    // definir um valor inicial
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon={
          id:res.id,
          name: res.name,
          sprites:res.sprites,
          types:res.types
        }
        console.log(this.pokemon)
        // console.log("ID",res.id)
        // console.log("Name",res.name)
        // console.log("Img",res.sprites.front_default)
        // console.log("Types",res.types)
      },
      error: (err) => console.log(err)
     });
    }
}
