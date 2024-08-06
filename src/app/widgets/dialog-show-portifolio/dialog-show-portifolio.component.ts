import {ChangeDetectionStrategy, Component, Inject, inject, OnInit} from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-dialog-show-portifolio',
  templateUrl: './dialog-show-portifolio.component.html',
  styleUrls: ['./dialog-show-portifolio.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogShowPortifolioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogShowPortifolioComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit() {
  }

}
