import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent implements OnInit {
  // imgUrl = 'https://picsum.photos/seed/picsum/500/300';
  imgUrl = 'https://portaledicase.com/wp-content/uploads/2023/05/Star-Wars.jpg';
  // imgLinks: string[] = [
  //    https://portaledicase.com/wp-content/uploads/2023/05/Star-Wars.jpg
  //   ' https://via.placeholder.com/300x200?text=Imagem+2/',
  //   ' https://via.placeholder.com/300x200?text=Imagem+3',
  // ];

  constructor() {}

  ngOnInit(): void {
    // let index = 0;

    // setInterval(() => {
    //   index = (index + 1) % this.imgLinks.length;
    //   this.imgUrl = this.imgLinks[index];
    // }, 3000);
  }
}
