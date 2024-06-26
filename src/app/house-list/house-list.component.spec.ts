import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import routeConfig from '../../routes';
import { HouseListComponent } from './house-list.component';
import { HouseComponent } from '../house/house.component';
import { HousingModel } from '../models/housing.model';
import { Location } from '@angular/common';

describe('HouseListComponent', () => {

  // TEST 1: CREATING THE COMPONENT 
  // STATUS: COMPLETED
  let input: HTMLInputElement;
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
  // TEST 2
  // STATUS: IN PROGRESS
  it('test the input to match the houses displayed', () => {
    input = fixture.nativeElement.querySelector("input")

    const homes: HousingModel[] = [{

      "id": 8,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "photo": "/assets/images/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      "availableUnits": 10,
      "wifi": false,
      "laundry": false

    }]
  })


  // TEST 3
  // STATUS: IN PROGRESS
  it('observable should return houses', () => {
    expect(component).toBeDefined();
  });

  // TEST 4
  // STATUS: IN PROGRESS
  it('there should be 10 houses inside the houses observable', () => {
    expect(component).toBeDefined();

  })
  // TEST 5
  // STATUS: IN PROGRESS
  it('observable should return undefined if state is empty', () => {
    expect(component).toBeDefined();

  });



});
