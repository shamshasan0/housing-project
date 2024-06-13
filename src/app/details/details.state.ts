import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HousingModel } from '../models/housing.model';
import { getHousingLocationById } from './details.actions';

export interface DetailsStateModel {
  houses: HousingModel[];
}

@State<DetailsStateModel>({
  name: 'details',
  defaults: {
    houses: []
  }
})
@Injectable()
export class DetailsState {

  @Selector()
  static getState(state: DetailsStateModel) {
    return state;
  }

  @Action(getHousingLocationById)
  getHouse(ctx: StateContext<DetailsStateModel>, action: getHousingLocationById) {
    
    // call getAllHouses to grab houses
    // pass in id then us js function to find the house
    const {id} = action;

    if (!id){
      return 
    }
    
    // const stateModel = GetAllHousingLocations

    // if (this.houses.length === 0)
    //   this.houses = await (this.getAllHousingLocations());
    // return this.houses.find(house => house.id === id);
    
    // const stateModel = ctx.getState();

    // ctx.setState(stateModel);

    
  }
}
