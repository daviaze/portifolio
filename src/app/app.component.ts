import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './core/intro/intro.component';
import { AboutComponent } from './core/about/about.component';
import { PortifolioComponent } from "./core/portifolio/portifolio.component";
import { SkillsComponent } from "./core/skills/skills.component";
import { ContactComponent } from "./core/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponent, AboutComponent,
     PortifolioComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'barber';
}
