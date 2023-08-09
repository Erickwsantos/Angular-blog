import { dataFake } from './../../data/dataFake';
import { Component, Input, OnInit } from '@angular/core';
// import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  dataFake = dataFake;

  constructor() {}

  ngOnInit(): void {
  }

}
