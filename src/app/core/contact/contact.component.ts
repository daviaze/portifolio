import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { ScrollSectionService } from '../../services/scroll-section.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,
     MatButtonModule, MatIconModule, ReactiveFormsModule, MatProgressSpinnerModule, CommonModule],
  standalone: true,
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('500ms ease-in-out')), // Ajuste o tempo da animação
      transition('hide => show', animate('500ms ease-in-out')), // Ajuste o tempo da animação
    ])
  ]
})
export class ContactComponent implements OnInit {
  state = 'hide'

  contactForm! : FormGroup;
  isLoading$: Observable<boolean>;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective | undefined;

  constructor(private scrollService: ScrollSectionService, private _snackBar: MatSnackBar,
    public el: ElementRef
  ) {
    this.isLoading$ = of(false);
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
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  public async sendEmail(e: Event) {
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
            });
            this.formGroupDirective?.resetForm();
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
