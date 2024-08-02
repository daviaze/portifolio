import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.scss'],
  standalone: true,
})
export class CardSkillsComponent implements OnInit {

  @Input() text: string = 'HTML';

  constructor() { }

  ngOnInit() {
  }

}
