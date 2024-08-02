import { Component, OnInit } from '@angular/core';
import { ProgressComponent } from '../../widgets/progress/progress.component';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { ScrollSectionService } from '../../services/scroll-section.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [ProgressComponent, MatButtonModule, MatIconModule]
})
export class SkillsComponent implements OnInit {

  constructor(private scrollService: ScrollSectionService) {

  }

  ngOnInit() {
  }

  scrollTo(id: string){
    this.scrollService.scrollTo(id);
  }
}
