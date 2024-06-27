import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import routeConfig from '../../routes';
import { HouseListComponent } from './house-list.component';
import { HouseComponent } from '../house/house.component';
import { HousingModel } from '../models/housing.model';
import { Location } from '@angular/common';
import { HousingService } from '../services/housing.services';
import { HousingLocationState } from '../house/house.state';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HouseListComponent', () => {

  // TEST 1: CREATING THE COMPONENT 
  // STATUS: COMPLETED
  let input: HTMLInputElement;
  let anchorTag: HTMLAnchorElement;
  let component: HouseListComponent;
  let fixture: ComponentFixture<HouseListComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot(), RouterModule.forRoot(routeConfig), HouseComponent]
    })
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router)
    location = TestBed.get(Location)
    router.initialNavigation();
  });

  // TEST 1
  // STATUS: COMPLETE
  it('should create the house list component', () => {
    expect(component).toBeDefined();
  });
});
