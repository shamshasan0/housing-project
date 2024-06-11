import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from "./details/details.component";
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
    </a>
    <section class="content">
<router-outlet>   </router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.scss',
  imports: [RouterModule, HomeComponent, DetailsComponent]
})
export class AppComponent {
  title = 'title';
}

