// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HouseComponent } from './house.component';
// import { provideStore, Store } from '@ngxs/store';
// import { HousingLocationState } from './house.state';
// import { GetAllHousingLocations } from './house.actions';
// import { Observable } from 'rxjs/internal/Observable';

// const SOME_DESIRED_STATE = {
//     houses: ["chicago blvd"]
// }


// describe('HousingLocationState', () => {
//   let store: Store;
//   let actions$: Observable<any>;

//   actions$.pipe(ofActionDispatched(LoginSuccess)).subscribe(async (action) => {
//     await expect(action).toBeTruthy()
//     done()
// })


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [provideStore([HousingLocationState])]
//     });

//     store = TestBed.inject(Store);
//     store.reset({
//       ...store.snapshot(),
//       locations: SOME_DESIRED_STATE
//     });
//   });

//   it('it gets all houses', () => {
   

//     const getAll = store.selectSnapshot(state => state.locations.getAll);
//     expect(getAll).toBe(true);
// })
// });