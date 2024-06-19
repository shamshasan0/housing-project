// import { TestBed } from '@angular/core/testing';
// import { provideStore, Store } from '@ngxs/store';
// import { HousingLocationState, HousingLocationStateModel } from './housing-location.state';
// import { GetAllHousingLocations } from './housing-location.actions';

// describe('HousingLocation store', () => {
//   let store: Store;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//        providers: [provideStore([HousingLocationState])]
      
//     });

//     store = TestBed.inject(Store);
//   });

//   it('should create an action and add an item', () => {
//     const expected: HousingLocationStateModel = {
//       houses: []
//     };
//     store.dispatch(new GetAllHousingLocations());
//     const actual = store.selectSnapshot(HousingLocationState.getState);
//     expect(actual).toEqual(expected);
//   });

// });
