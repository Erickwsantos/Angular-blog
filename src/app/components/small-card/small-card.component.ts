import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  // imgUrl: string [] = ['https://thenexus.one/wp-content/uploads/2023/05/O-novo-ataque-de-forca-imperdivel-de-Darth-Vader-e.jpg',
  // 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/darth-vader-brutal-attack-comic.jpg?q=50&fit=crop&w=1500&dpr=1.5',
  // 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/star-wars-darth-vader-red-lightsaber.jpg?q=50&fit=crop&w=1500&dpr=1.5'];
  imgUrl = 'https://thenexus.one/wp-content/uploads/2023/05/O-novo-ataque-de-forca-imperdivel-de-Darth-Vader-e.jpg';


  constructor() { }
//https://thenexus.one/wp-content/uploads/2023/05/O-novo-ataque-de-forca-imperdivel-de-Darth-Vader-e.jpg
  ngOnInit(): void {
  }

}
