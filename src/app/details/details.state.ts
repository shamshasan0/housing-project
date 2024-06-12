// import { Injectable } from '@angular/core';
// import { State, Action, Selector, StateContext } from '@ngxs/store';
// import { DetailsAction } from './details.actions';

// export interface DetailsStateModel {
//   items: string[];
// }

// @State<DetailsStateModel>({
//   name: 'details',
//   defaults: {
//     items: []
//   }
// })
// @Injectable()
// export class DetailsState {

//   @Selector()
//   static getState(state: DetailsStateModel) {
//     return state;
//   }

//   @Action(DetailsAction)
//   add(ctx: StateContext<DetailsStateModel>, { payload }: DetailsAction) {
//     const stateModel = ctx.getState();
//     stateModel.items = [...stateModel.items, payload];
//     ctx.setState(stateModel);
//   }
// }
