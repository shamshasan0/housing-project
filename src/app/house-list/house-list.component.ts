import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { HouseComponent } from '../house/house.component';
import { HousingLocationState } from '../house/house.state';
import { SearchBoxPipe } from './SearchBoxPipe';
import { GetAllHousingLocations } from '../house/house.actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, HouseComponent, SearchBoxPipe, FormsModule, RouterModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" [(ngModel)]="filter" name="filter">
        <button class="primary" type="button" >Search</button> </form>
    </section>
    <section class="results" *ngIf="housesOb$ | async; let housesState">
      <app-house
        *ngFor="let housingLocation of housesState.houses | searchBox: filter  "
        [housingLocation]="housingLocation"
      ></app-house>
    </section>
  `,
  styleUrls: ['./house-list.component.scss'],
})
export class HouseListComponent {
  // readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  filter = '';
  housesOb$ = this.store.select(HousingLocationState.getHouses)


  constructor(private store: Store) {
    this.store.dispatch(new GetAllHousingLocations());

  }


}