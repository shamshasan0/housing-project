import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { HousingModel } from '../models/housing.model';
import { AddHousingLocation, GetAllHousingLocations } from './housing-location.actions';
export interface HousingLocationStateModel {
  houses: HousingModel[];
}

@State<HousingLocationStateModel>({
  name: 'housingLocation',
  defaults: {
    houses: []
  }
})

@Injectable()
export class HousingLocationState {
    houses = []
    url = 'assets/api/house.json'


@Action(AddHousingLocation)

  addHouse(ctx:StateContext<HousingLocationStateModel>, addHousingLocation: AddHousingLocation){

    const stateModel = ctx.getState()

    ctx.setState({
      ...stateModel, 
      houses:[...stateModel.houses, addHousingLocation]
    })

  }


@Action(GetAllHousingLocations)
async getHouses(ctx: StateContext<HousingLocationStateModel>, {  }: GetAllHousingLocations) {
  const data = await fetch(this.url);
  this.houses = (await data.json()) ?? [];
  
  const state = ctx.getState();
  // stateModel.items = [...stateModel.items, payload];
  ctx.setState(state);
}

//   @Selector()
//    async getAllHouses(state: HousingLocationStateModel) {
//     const data = await fetch(this.url);
//     this.houses = (await data.json()) ?? [];
//     return state.houses;
//    }

  @Selector()
  static getAllHouses(state: HousingLocationStateModel) {
    return state.houses;
  }

 
}

