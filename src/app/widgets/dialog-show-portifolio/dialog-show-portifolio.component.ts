import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-show-portifolio',
  templateUrl: './dialog-show-portifolio.component.html',
  styleUrls: ['./dialog-show-portifolio.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogShowPortifolioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogShowPortifolioComponent>) {}

  ngOnInit() {
  }

}
