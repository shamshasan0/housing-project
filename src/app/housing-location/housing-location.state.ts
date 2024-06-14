import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HousingModel } from '../models/housing.model';
import { GetAllHousingLocations } from './housing-location.actions';
import { HousingService } from '../services/housing.services';

export interface HousingLocationStateModel {
  houses: HousingModel[];
}

@State<HousingLocationStateModel>({
  name: 'house',
  defaults: {
    houses: []
  }
})

@Injectable()
export class HousingLocationState {

  constructor(private service: HousingService) {}

  url: string = '/assets/api/house.json'
  houses: HousingLocationStateModel[] = [];
  
// get the state, check if houses is null
// if the houses are null in that state, get houses
// then update the state with those houses
@Action(GetAllHousingLocations)
  async getAllHouses(ctx: StateContext<HousingLocationStateModel>) {
    
      return this.service.getAllHousingLocations()

    // const data = await fetch(this.url);
    // this.houses = (await data.json());
   
  
  }

  
  
  
  @Selector([HousingLocationState])
  static getHouses(state: HousingLocationStateModel) {
  return state.houses  }
  
  }




