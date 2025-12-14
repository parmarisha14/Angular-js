import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { Ps1Component } from './hop/ps1/ps1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HerosComponent,
    Ps1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tour';
}
