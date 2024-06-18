import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GetAllHousingLocations } from '../housing-location/housing-location.actions';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationState } from '../housing-location/housing-location.state';
import { SearchBoxPipe } from './SearchBoxPipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, SearchBoxPipe, FormsModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" [(ngModel)]="filter" name="filter">
        <button class="primary" type="button" >Search</button> </form>
    </section>
    <section class="results" *ngIf="housesOb$ | async; let housesState">
      <app-housing-location
        *ngFor="let housingLocation of housesState.houses | searchBox: filter  "
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  filter = '';
  housesOb$ = this.store.select(HousingLocationState.getHouses)


  constructor(private store: Store) {
    this.store.dispatch(new GetAllHousingLocations());

  }


}