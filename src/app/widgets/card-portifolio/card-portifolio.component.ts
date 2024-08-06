import { Component, Input, OnInit } from '@angular/core';
import { CardSkillsComponent } from "../card-skills/card-skills.component";
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogShowPortifolioComponent } from '../../widgets/dialog-show-portifolio/dialog-show-portifolio.component';
import { Portifolio } from '../../data/interfaces/portifolio';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-portifolio',
  templateUrl: './card-portifolio.component.html',
  standalone: true,
  styleUrls: ['./card-portifolio.component.scss'],
  imports: [CardSkillsComponent, CommonModule]
})
export class CardPortifolioComponent implements OnInit {
  @Input() portifolio: Portifolio = {description: "teste", general: "teste",
     problemDescription: "teste", responsibility: "teste",
      solutionDescription: "teste", tecnologies: ["teste"], title: "teste"};

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogShowPortifolioComponent, {
      width: '900px',
      minWidth: '200px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        portifolio: this.portifolio
      }
    });
  }

  ngOnInit() {
  }

}
