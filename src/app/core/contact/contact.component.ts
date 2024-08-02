import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { ScrollSectionService } from '../../services/scroll-section.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  standalone: true
})
export class ContactComponent implements OnInit {

  constructor(private scrollService: ScrollSectionService) {

  }

  ngOnInit() {
  }

  scrollTo(id: string){
    this.scrollService.scrollTo(id);
  }
}
