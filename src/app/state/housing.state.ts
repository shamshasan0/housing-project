import { State, Action, StateContext, Selector} from '@ngxs/store';
import { HousingModel } from '../models/housing.model';
import { addHouse } from '../actions/housing.actions';


// export interface HousingModel {
//     id: number;
//     name: string;
    // city: string;
    // state: string;
    // photo: string;
    // availableUnits: number;
    // wifi: boolean;
    // laundry: boolean;
//   }

@State<HousingModel>({
    name: 'house',
})

export class HousingState {
    addHouse({ patchState }: StateContext<HousingModel>, { id, name, state, city, availableUnits, wifi, laundry  }: addHouse) {
        patchState({ id: id, name:name, state:state, city:city, availableUnits: availableUnits, wifi:wifi, laundry:laundry})
    }
}
    
