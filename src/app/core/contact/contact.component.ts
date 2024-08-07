import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { ScrollSectionService } from '../../services/scroll-section.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  standalone: true
})
export class ContactComponent implements OnInit {

  contactForm! : FormGroup;
  isLoading$: Observable<boolean> | undefined;

  constructor(private scrollService: ScrollSectionService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if(this.contactForm.valid){
      this.isLoading$ = of(true);
      emailjs
        .sendForm('service_11zxcar', 'template_z95l4a4', e.target as HTMLFormElement, {
          publicKey: 'G21dhjQnCjp5ZudAK',
        })
        .then(
          () => {
            this.isLoading$ = of(false);
            this._snackBar.open("E-mail enviado com sucesso!", "Fechar", {
              duration: 5000
            })
            this.contactForm.reset();
          },
          (error) => {
            this.isLoading$ = of(false);
            this._snackBar.open((error as EmailJSResponseStatus).text);
          },
        );
    }
  }

  scrollTo(id: string){
    this.scrollService.scrollTo(id);
  }
}
