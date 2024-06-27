import { TestBed } from '@angular/core/testing';
import { Store, provideStore } from '@ngxs/store';
import { HousingLocationState } from './house.state';
import { HousingService } from '../services/housing.services';
import { GetAllHousingLocations } from './house.actions';

describe('HousingLocationState', () => {
let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousingService, provideStore([HousingLocationState]) ]
    });


  });

//   it('should get houses', () => {
//     store
//       .selectOnce(state => state.house)
//       .subscribe(house => {
//         // Note: this expectation will not be run!
//         expect(house).toBeTruthy();
//       });
  
//     const house = store.selectSnapshot(state => state.house);
//     expect(house).toBeTruthy();
//   });

    // TEST 3
  // STATUS: IN PROGRESS
  it('observable should return all the houses', () => {

  });

  // TEST 4
  // STATUS: IN PROGRESS
  it('there should be 10 houses inside the houses observable', () => {
    

  })
  // TEST 5
  // STATUS: IN PROGRESS
  it('observable should return undefined if state is empty', () => {
    
    

  });

});
