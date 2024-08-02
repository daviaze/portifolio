import { Component, Input, OnInit } from '@angular/core';
import { CardSkillsComponent } from "../card-skills/card-skills.component";

@Component({
  selector: 'app-card-portifolio',
  templateUrl: './card-portifolio.component.html',
  standalone: true,
  styleUrls: ['./card-portifolio.component.scss'],
  imports: [CardSkillsComponent]
})
export class CardPortifolioComponent implements OnInit {
  @Input() text: string = 'HTML';

  constructor() { }

  ngOnInit() {
  }

}
