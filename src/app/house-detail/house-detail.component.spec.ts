import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HouseDetailComponent } from './house-detail.component';
import { HousingService } from '../services/housing.services';
import { HousingModel } from '../models/housing.model';
import { of } from 'rxjs';
import routeConfig from '../../routes';

describe('HouseDetailComponent', () => {
  let component: HouseDetailComponent;
  let fixture: ComponentFixture<HouseDetailComponent>;
  let mockActivatedRoute;
  let mockHousingService: jasmine.SpyObj<HousingService>;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        params: { 'id': '1' }
      }
    };

    mockHousingService = jasmine.createSpyObj('HousingService', ['getHousingLocationById', 'submitApplication']);

    await TestBed.configureTestingModule({
      imports: [ HouseDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HousingService, useValue: mockHousingService },

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should fetch housing location on initialization', async () => {
//     // Arrange
//     const mockHousingLocation: HousingModel = { id: 1, name: 'Test Housing Location' };
//     mockHousingService.getHousingLocationById.and.resolveTo(mockHousingLocation);

//     // Act (constructor is called during component creation)
//     fixture.detectChanges();

//     // Assert
//     expect(component.housingLocation).toEqual(mockHousingLocation);
//     expect(mockHousingService.getHousingLocationById).toHaveBeenCalledWith(1);
//   });

  it('', () => {
    // Arrange
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    };

   component.applyForm.patchValue(user);

   component.submitApplication();

    expect(mockHousingService.submitApplication).toHaveBeenCalledWith(
      user.firstName,
      user.lastName,
      user.email
    );
  });

});
