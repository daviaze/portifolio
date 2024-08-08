import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ProgressComponent } from '../../widgets/progress/progress.component';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { ScrollSectionService } from '../../services/scroll-section.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { CardTecnologiesComponent } from "../../widgets/card-tecnologies/card-tecnologies.component";

const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-10%)"
})

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [ProgressComponent, MatButtonModule, MatIconModule, CommonModule, CardTecnologiesComponent],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('500ms ease-in-out')), // Ajuste o tempo da animação
      transition('hide => show', animate('500ms ease-in-out')), // Ajuste o tempo da animação
    ])
  ]
})
export class SkillsComponent implements OnInit {
  state = 'hide'

  constructor(private scrollService: ScrollSectionService, public el: ElementRef) {

  }

  ngOnInit(): void {
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

  scrollTo(id: string){
    this.scrollService.scrollTo(id);
  }
}
