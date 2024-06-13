import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { HousingModel } from '../models/housing.model';
import { GetAllHousingLocations } from './housing-location.actions';

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

  url: string = 'assets/api/house.json'
  houses: HousingModel[] = [];


// get the state, check if houses is null
// if the houses are null in that state, get houses
// then update the state with those houses
@Action(GetAllHousingLocations)
  async getAllHouses(ctx: StateContext<HousingLocationStateModel>, {  }: GetAllHousingLocations) {
    
    const state = ctx.getState();

    if (state.houses.length === 0){

    const data = await fetch(this.url);
    this.houses = (await data.json());
    
    return ctx.setState({...state, houses: this.houses})
    }  
    }
    }

  
// @Action(AddHousingLocation)

//  addHouse(ctx:StateContext<HousingLocationStateModel>, addHousingLocation: AddHousingLocation){

//     // first get all  the housing locations and set that equal to the state
//     // then we can add on a house to the current state model 
//     this.houses = this.getAllHouses
//     const stateModel = ctx.getState()

//     ctx.setState({
//       ...stateModel, 
//       houses:[...stateModel.houses, addHousingLocation]
//     })

//   }




