import { TestBed } from '@angular/core/testing';
import { Store, provideStore } from '@ngxs/store';
import { HousingLocationState } from '../house/house.state';
import { HouseListComponent } from './house-list.component';
import { state } from '@angular/animations';
import { GetAllHousingLocations } from '../house/house.actions';

describe('HouseListComponent', () => {

let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([HousingLocationState])]
    });

    store = TestBed.inject(Store);
  });

  it('should get houses', () => {
    store
      .selectOnce(state => state.house)
      .subscribe(house => {
        // Note: this expectation will not be run!
        expect(house).toBeTruthy();
        console.log(house)
      });
  
    const house = store.selectSnapshot(state => state.house);
    expect(house).toBeTruthy();
  });

    const data = [
    {
        "id": 0,
        "name": "Acme Fresh Start Housing",
        "city": "Chicago",
        "state": "IL",
        "photo": "/assets/images/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
        "availableUnits": 4,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 1,
        "name": "A113 Transitional Housing",
        "city": "Santa Monica",
        "state": "CA",
        "photo": "/assets/images/brandon-griggs-wR11KBaB86U-unsplash.jpg",
        "availableUnits": 0,
        "wifi": false,
        "laundry": true
    },
    {
        "id": 2,
        "name": "Warm Beds Housing Support",
        "city": "Juneau",
        "state": "AK",
        "photo": "/assets/images/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
        "availableUnits": 1,
        "wifi": false,
        "laundry": false
    },
    {
        "id": 3,
        "name": "Homesteady Housing",
        "city": "Chicago",
        "state": "IL",
        "photo": "/assets/images/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
        "availableUnits": 1,
        "wifi": true,
        "laundry": false
    },
    {
        "id": 4,
        "name": "Happy Homes Group",
        "city": "Gary",
        "state": "IN",
        "photo": "/assets/images/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
        "availableUnits": 1,
        "wifi": true,
        "laundry": false
    },
    {
        "id": 5,
        "name": "Hopeful Apartment Group",
        "city": "Oakland",
        "state": "CA",
        "photo": "/assets/images/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
        "availableUnits": 2,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 6,
        "name": "Seriously Safe Towns",
        "city": "Oakland",
        "state": "CA",
        "photo": "/assets/images/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
        "availableUnits": 5,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 7,
        "name": "Hopeful Housing Solutions",
        "city": "Oakland",
        "state": "CA",
        "photo": "/assets/images/r-architecture-GGupkreKwxA-unsplash.jpg",
        "availableUnits": 2,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 8,
        "name": "Seriously Safe Towns",
        "city": "Oakland",
        "state": "CA",
        "photo": "/assets/images/saru-robert-9rP3mxf8qWI-unsplash.jpg",
        "availableUnits": 10,
        "wifi": false,
        "laundry": false
    },
    {
        "id": 9,
        "name": "Capital Safe Towns",
        "city": "Portland",
        "state": "OR",
        "photo": "/assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg",
        "availableUnits": 6,
        "wifi": true,
        "laundry": true
    }
]

// test selectors



});

//   it('should select requested animal names from state', () => {
//     const houseState = {
//       houses:  [
//         {
//             "id": 0,
//             "name": "Acme Fresh Start Housing",
//             "city": "Chicago",
//             "state": "IL",
//             "photo": "/assets/images/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//             "availableUnits": 4,
//             "wifi": true,
//             "laundry": true
//         }
//     ]

//     };
  
//     const value = HousingLocationState.getHouses;
//     console.log(value)
   

//     });



// it('should wait for completion of the asynchronous action', async () => {
//   class IncrementAsync {
//     static type = '[Counter] Increment async';
//   }

//   class DecrementAsync {
//     static type = '[Counter] Decrement async';
//   }

//   // Assume you will make some XHR call to your API or anything else
//   function getRandomDelay() {
//     return 1000 * Math.random();
//   }

//   @State({
//     name: 'counter',
//     defaults: 0
//   })
//   @Injectable()
//   class CounterState {
//     @Action(IncrementAsync)
//     incrementAsync(ctx: StateContext<number>) {
//       const delay = getRandomDelay();

//       return timer(delay).pipe(
//         tap(() => {
//           // We're incrementing the state value and setting it
//           ctx.setState(state => (state += 1));
//         }),
//         // After incrementing we want to decrement it again to the zero value
//         mergeMap(() => ctx.dispatch(new DecrementAsync()))
//       );
//     }

//     @Action(DecrementAsync)
//     decrementAsync(ctx: StateContext<number>) {
//       const delay = getRandomDelay();

//       return timer(delay).pipe(
//         tap(() => {
//           ctx.setState(state => (state -= 1));
//         })
//       );
//     }
//   }


//   const store: Store = TestBed.inject(Store);

//   await firstValueFrom(store.dispatch(new IncrementAsync()));

//   const counter = store.selectSnapshot(HousingLocationState);
//   expect(counter).toBe(0);
// });


  