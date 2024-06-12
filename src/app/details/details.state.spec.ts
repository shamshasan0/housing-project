import { TestBed } from '@angular/core/testing';
import {  provideStore,  Store } from '@ngxs/store';
import { DetailsState, DetailsStateModel } from './details.state';
import { DetailsAction } from './details.actions';

describe('Details store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [provideStore([DetailsState])]
      
    });

    store = TestBed.inject(Store);
  });

  it('should create an action and add an item', () => {
    const expected: DetailsStateModel = {
      items: ['item-1']
    };
    store.dispatch(new DetailsAction('item-1'));
    const actual = store.selectSnapshot(DetailsState.getState);
    expect(actual).toEqual(expected);
  });

});
