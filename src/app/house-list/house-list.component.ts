import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetAllHousingLocations } from '../house-card/house-card.actions';
import { HouseCardComponent } from '../house-card/house-card.component';
import { HousingLocationState } from '../house-card/house-card.state';
import { SearchBoxPipe } from './SearchBoxPipe';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, HouseCardComponent, SearchBoxPipe, FormsModule, RouterModule],
  template: `

      <form>
        <input type="text" placeholder="Filter by city" [(ngModel)]="filter" name="filter">
    <section class="results" *ngIf="housesOb$ | async; let housesState">
      <app-house-card
        *ngFor="let housingLocation of housesState.houses | searchBox: filter"
        [housingLocation]="housingLocation"
      ></app-house-card>
    </section>
  `,
  styleUrls: ['./house-list.component.scss'],
})
export class HouseListComponent {

  filter = '';
  housesOb$ = this.store.select(HousingLocationState.getHouses)


  constructor(private store: Store) {
    this.store.dispatch(new GetAllHousingLocations());

  }


}