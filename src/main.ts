import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { HousingLocationState } from './app/housing-location/housing-location.state';
import routeConfig from './routes';
import { HousingLocationComponent } from './app/housing-location/housing-location.component';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent,  {
  providers: [importProvidersFrom(NgxsModule.forRoot([HousingLocationState])),provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));

// bootstrapApplication(HomeComponent, {
//   providers: [importProvidersFrom(NgxsModule.forRoot([HousingLocationState])),provideProtractorTestingSupport(), provideRouter(routeConfig)],
// }).catch((err) => console.error(err));

