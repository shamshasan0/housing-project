import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { HousingLocationState } from './app/house-card/house-card.state';
import routeConfig from './routes';
import { HouseListComponent } from './app/house-list/house-list.component';
import { HouseCardComponent } from './app/house-card/house-card.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(NgxsModule.forRoot([HousingLocationState])), provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err: Error) => console.error(err));

bootstrapApplication(HouseListComponent, {
  providers: [importProvidersFrom(NgxsModule.forRoot([HousingLocationState])), provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err: Error) => console.error(err));

bootstrapApplication(HouseCardComponent, {
  providers: [importProvidersFrom(NgxsModule.forRoot([HousingLocationState])), provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err: Error) => console.error(err));




