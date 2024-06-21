import { Routes } from '@angular/router';
import { HouseListComponent } from './app/house-list/house-list.component';
import { DetailsComponent } from './app/details/details.component';
import { AppComponent } from './app/app.component';
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
    component: DetailsComponent,
    title: 'Home details',
  },
];
export default routeConfig;