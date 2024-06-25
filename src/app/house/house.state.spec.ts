// import { TestBed } from '@angular/core/testing';
// import { Store, provideStore } from '@ngxs/store';
// import { HousingLocationState } from '../house/house.state';
// import { HouseListComponent } from '../house-list/house-list.component';
// import { state } from '@angular/animations';
// import { GetAllHousingLocations } from '../house/house.actions';

// describe('HouseState', () => {

// let store: Store;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [provideStore([HousingLocationState])]
//     });

//     store = TestBed.inject(Store);
//   });

//   it('should get houses', () => {
//     store
//       .selectOnce(state => state.house)
//       .subscribe(house => {
//         // Note: this expectation will not be run!
//         expect(house).toBeTruthy();
//         console.log(house)
//       });
  
//     const house = store.selectSnapshot(state => state.house);
//     expect(house).toBeTruthy();
//   });
// });
