import { Component, Input, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-progress',
  standalone: true,
  templateUrl: './progress.component.html',
  imports: [MatProgressBarModule],
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() text: string = 'HTML';
  @Input() percent: string = '10';

  constructor() { }

  ngOnInit() {
  }

}
