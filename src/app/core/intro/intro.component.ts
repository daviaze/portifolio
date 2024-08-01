import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [MatButtonModule, MatIconModule],
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
