import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import routeConfig from '../../routes';
import { HouseListComponent } from './house-list.component';
import { HouseComponent } from '../house/house.component';
import { HousingModel } from '../models/housing.model';

describe('HouseListComponent', () => {

  // TEST 1: CREATING THE COMPONENT 
  // STATUS: COMPLETED
  let input: HTMLInputElement;
  let component: HouseListComponent;
  let fixture: ComponentFixture<HouseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot(), RouterModule.forRoot(routeConfig), HouseComponent]
    })
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  it('test redirect for the app-house', () => {
    const sectionContainer = fixture.nativeElement.querySelector(".results")
    console.log(sectionContainer)
  })


  // TEST 3
  // STATUS: IN PROGRESS
  it('there should be 10 houses inside the results container', () => {
    const sectionContainer = fixture.nativeElement.querySelector(".results")
    console.log(sectionContainer)
  })

  // TEST 4
  // STATUS: IN PROGRESS
  // it('house component should exist inside house list component', () => {
  //   fixture = TestBed.createComponent(HouseComponent)
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   expect(component).toBeDefined();
  // });


});
