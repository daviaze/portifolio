import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tecnologies',
  templateUrl: './card-tecnologies.component.html',
  styleUrls: ['./card-tecnologies.component.css'],
  standalone: true,
})
export class CardTecnologiesComponent implements OnInit {
  @Input() text: string = 'HTML';
  @Input() src: string = 'HTML';

  constructor() { }

  ngOnInit() {
  }

}
