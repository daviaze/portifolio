import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CardPortifolioComponent } from '../../widgets/card-portifolio/card-portifolio.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScrollSectionService } from '../../services/scroll-section.service';
import { getAllPortifolio, Portifolio } from '../../data/interfaces/portifolio';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-10%)"
})

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  imports: [CardPortifolioComponent, MatButtonModule, MatIconModule, CommonModule],
  standalone: true,
  styleUrls: ['./portifolio.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('500ms ease-in-out')), // Ajuste o tempo da animação
      transition('hide => show', animate('500ms ease-in-out')), // Ajuste o tempo da animação
    ])
  ]
})
export class PortifolioComponent implements OnInit {
  state = 'hide'

  constructor(private scrollService: ScrollSectionService, public el: ElementRef) {

  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 250) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }

  ngOnInit() {
  }

  getPortifolios(): Portifolio[]{
    return getAllPortifolio();
  }

  scrollTo(id: string){
    this.scrollService.scrollTo(id);
  }
}
