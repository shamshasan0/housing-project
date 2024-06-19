import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { HousingLocationState } from './app/house/house.state';
import routeConfig from './routes';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(NgxsModule.forRoot([HousingLocationState])), provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err: Error) => console.error(err));


