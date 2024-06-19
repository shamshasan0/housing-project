import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HousingModel } from '../models/housing.model';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [HouseComponent, CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing">

    <img
      class="listing-photo"
      [src]="housingLocation.photo"
      alt="Exterior photo of {{ housingLocation.name }}"
      crossorigin
    />
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  
`,
  styleUrl: './house.component.scss'
})
export class HouseComponent {
  @Input() housingLocation!: HousingModel;
}


