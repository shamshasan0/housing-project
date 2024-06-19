// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HousingLocationComponent } from './housing-location.component';
// import { provideStore, Store } from '@ngxs/store';
// import { HousingLocationState } from './housing-location.state';
// import { GetAllHousingLocations } from './housing-location.actions';


// // zoo.state.spec.ts
// export const SOME_DESIRED_STATE = {
//   animals: ['Panda']
// };

// describe('Zoo', () => {
//   let store: Store;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [provideStore([HousingLocationState])]
//     });

//     store = TestBed.inject(Store);
//     store.reset({
//       ...store.snapshot(),
//       zoo: SOME_DESIRED_STATE
//     });
//   });

//   it('it toggles feed', () => {
//     store.dispatch(new GetAllHousingLocations());

//     const add = store.selectSnapshot(state => state.zoo.add);
//     expect(add).toBe(true);
//   });
// });