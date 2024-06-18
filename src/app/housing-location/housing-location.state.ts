import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HousingModel } from '../models/housing.model';
import { GetAllHousingLocations, GetHouseLocation } from './housing-location.actions';
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

  constructor(private service: HousingService) { }

  // get the state, check if houses is null
  // if the houses are null in that state, get houses
  // then update the state with those houses

  @Action(GetAllHousingLocations)
  async getAllHouses(ctx: StateContext<HousingLocationStateModel>) {
    const houseState = ctx.getState();
    const houses = await this.service.getAllHousingLocations();
    ctx.setState({
      ...houseState, houses
    });
  }


  @Selector([HousingLocationState])
  static getHouses(state: HousingLocationStateModel) {
    return state;

  }
}



