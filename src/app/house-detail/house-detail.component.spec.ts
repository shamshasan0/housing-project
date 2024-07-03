import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HousingModel } from '../models/housing.model';
import { HousingService } from '../services/housing.services';
import { HouseDetailComponent } from './house-detail.component';

describe('HouseDetailComponent', () => {
  let component: HouseDetailComponent;
  let fixture: ComponentFixture<HouseDetailComponent>;
  let mockActivatedRoute;
  let mockHousingService: jasmine.SpyObj<HousingService>;
  const mockHousingLocation: HousingModel = { "id": 1,
    "name": "Hopeful Apartment Group",
    "city": "Oakland",
    "state": "CA",
    "photo": "/assets/images/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
    "availableUnits": 2,
    "wifi": true,
    "laundry": true };

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        params: { 'id': '1' }
      }
    };

    mockHousingService = jasmine.createSpyObj('HousingService', ['getHousingLocationById', 'submitApplication']);

    mockHousingService.getHousingLocationById.and.returnValue(Promise.resolve(mockHousingLocation));
  

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

  it('should fetch housing location on initialization', async () => {
    // Arrange
    
    // Act
    fixture.detectChanges(); // Trigger data binding

    // Assert
    await fixture.whenStable();

    expect(component.housingLocation).toEqual(mockHousingLocation);
  });
  it('should invoke submitApplication from housingService with filled out user info', () => {
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
      user.email,
    );
  });

  it('should invoke submitApplication from housingService with filled out user info', () => {
    // Arrange
    const user = {
      firstName: null,
      lastName: null,
      email: null
    };

   component.applyForm.patchValue(user);

   component.submitApplication();

    expect(mockHousingService.submitApplication).toHaveBeenCalledWith(
      '',
      '',
      '',
    );
  });

});




