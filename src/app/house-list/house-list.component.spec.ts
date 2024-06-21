import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import routeConfig from '../../routes';
import { HouseListComponent } from './house-list.component';

describe('HouseListComponent', () => {

  // TEST 1: CREATING THE COMPONENT 
  // STATUS: COMPLETED

  let component: HouseListComponent;
  let fixture: ComponentFixture<HouseListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot(), RouterModule.forRoot(routeConfig)]
    })
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the house list component', () => {
    expect(component).toBeDefined();
  });




});
