import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AULA SERVICES</h1>
    <router-outlet />
    <app-card/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-Service';
}
