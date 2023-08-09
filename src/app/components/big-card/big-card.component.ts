import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCard: string = '';
  @Input()
  titleCard: string = '';
  @Input()
  textCard: string = '';
  @Input()
  id: string = "0";

  constructor() {}

  ngOnInit(): void {
  }
}
