import { Selector } from "@ngxs/store";
import { HousingModel } from "../models/housing.model";
import { HousingLocationState, HousingLocationStateModel } from "./housing-location.state";


export class HousingLocationSelectors{  // slices can be used in other selectors
    @Selector([HousingLocationSelectors])
    static getHouses(state: HousingLocationStateModel): HousingModel[] {
      return state.houses;
    }
}

