import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input()
  photoCard: string = '';
  @Input()
  titleCard: string = '';
  @Input()
  textCard: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((article) => article.id === id);
    if (result.length > 0) {
      this.photoCard = result[0].photoCard;
      this.titleCard = result[0].titleCard;
      this.textCard = result[0].textCard;
    }
  }
}
