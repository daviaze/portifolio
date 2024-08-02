import { Component, OnInit } from '@angular/core';
import { CardPortifolioComponent } from '../../widgets/card-portifolio/card-portifolio.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScrollSectionService } from '../../services/scroll-section.service';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  imports: [CardPortifolioComponent, MatButtonModule, MatIconModule],
  standalone: true,
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent implements OnInit {

  constructor(private scrollService: ScrollSectionService) {

  }

  ngOnInit() {
  }

  scrollTo(id: string){
    this.scrollService.scrollTo(id);
  }
}
