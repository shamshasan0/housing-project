import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, provideStore, Store } from '@ngxs/store';
import { HouseComponent } from './house.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HouseListComponent } from '../house-list/house-list.component';
import { RouterModule } from '@angular/router';
import routeConfig from '../../routes';
import { HousingLocationState } from './house.state';


// describe('HouseListComponent', () => {

//     // TEST 1: CREATING THE COMPONENT 
//     // STATUS: IN PROGRESS

//     let component: HouseComponent;
//     let fixture: ComponentFixture<HouseComponent>;
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [NgxsModule.forRoot([HousingLocationState]), RouterModule.forRoot(routeConfig)]
//         })
//     });
//     beforeEach(() => {

//         fixture = TestBed.createComponent(HouseComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });
//     it('should create the house list component', () => {
//         expect(component).toBeDefined();
//     });

    // TEST 2: 



// });






// test the spacing between the houses (padding)


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
