import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.services';
import { HouseDetailComponent } from './house-detail.component';
import { HousingModel } from '../models/housing.model';
import { HousingLocationStateModel } from '../house-card/house-card.state';
import { of } from 'rxjs/internal/observable/of';

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

  it('should fetch housing location on initialization', async () => {
    // Arrange
    const mockHousingLocation: HousingModel = { "id": 5,
    "name": "Hopeful Apartment Group",
    "city": "Oakland",
    "state": "CA",
    "photo": "/assets/images/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
    "availableUnits": 2,
    "wifi": true,
    "laundry": true };

    mockHousingService.getHousingLocationById.and.returnValue(Promise.resolve(mockHousingLocation));

    // Act
    fixture.detectChanges(); // Trigger data binding

    // Assert
    fixture.whenStable().then(() => {
      expect(component.housingLocation).toEqual(mockHousingLocation);
    });

  it('should call submitApplication on HousingService with form values', () => {
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
});
