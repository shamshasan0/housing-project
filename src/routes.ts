import { Routes } from '@angular/router';
import { HouseListComponent } from './app/house-list/house-list.component';
import { HouseDetailComponent } from './app/house-detail/house-detail.component';
const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'house-list',
    pathMatch: 'full'
  },
  {
    path: 'house-list',
    component: HouseListComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: HouseDetailComponent,
    title: 'Home details',
  },
];
export default routeConfig;