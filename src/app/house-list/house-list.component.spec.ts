import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import routeConfig from '../../routes';
import { HouseCardComponent } from '../house-card/house-card.component';
import { HouseListComponent } from './house-list.component';

describe('HouseListComponent', () => {

  // TEST 1: CREATING THE COMPONENT 
  // STATUS: COMPLETED

  let component: HouseListComponent;
  let fixture: ComponentFixture<HouseListComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot(), RouterModule.forRoot(routeConfig), HouseCardComponent]
    })
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListComponent);
    component = fixture.componentInstance;
  });

  // TEST 1
  // STATUS: COMPLETE
  it('should create the house list component', () => {
    expect(component).toBeDefined();
  });
});
