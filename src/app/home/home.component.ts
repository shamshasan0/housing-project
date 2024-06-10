import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponentComponent } from '../housing-location-component/housing-location-component.component';
import { HousingModel } from '../models/housing.model';
import { HousingService } from '../actions/housing.services';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponentComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city"#filter >
        <button class="primary" type="button" (click)="filterLocations(filter.value)">Search</button> </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  HousingLocations: HousingModel[] = [];
  filteredLocationList: HousingModel[] = [];


  constructor( private housingService: HousingService ) {
    this.housingService.getAllHousingLocations().then((HousingLocations: HousingModel[]) => {
    this.HousingLocations = HousingLocations;
    this.filteredLocationList = HousingLocations;
    
  });
  }


  filterLocations(text: string) {

    if (!text) {
      this.filteredLocationList = this.HousingLocations;
      return
    }

    this.filteredLocationList = this.HousingLocations.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),

    );
  }

}