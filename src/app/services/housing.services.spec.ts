import { TestBed } from '@angular/core/testing';
import { HousingService } from './housing.services';
import { HousingModel } from '../models/housing.model';
describe('HousingService', () => {

    let service: HousingService; // Replace with your service class

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HousingService] // Replace with your service class
        });
        service = TestBed.inject(HousingService); // Replace with your service class
    });

    const mockData: HousingModel[] = [
        {
            id: 1, name: 'House 1',
            city: 'Gainesville',
            state: 'GA',
            photo: '',
            availableUnits: 0,
            wifi: false,
            laundry: false
        },
        {
            id: 2, name: 'House 2',
            city: 'Washington D.C',
            state: 'Washington',
            photo: '',
            availableUnits: 0,
            wifi: false,
            laundry: false
        }
    ];

    it('should fetch and parse housing locations correctly', async () => {
        // Mock data
        // Mock fetch call and response
        spyOn(window, 'fetch').and.returnValue(Promise.resolve({
            json: () => Promise.resolve(mockData)
        } as Response));

        // Call the getAllHousingLocations method
        const result = await service.getAllHousingLocations();

        // Assert
        expect(result).toEqual(mockData); // Check if the returned data matches the mock data
        expect(window.fetch).toHaveBeenCalledWith(service.url); // Check if fetch was called with the correct URL
    });

    it('should return housing location by ID when houses are already loaded', async () => {
        // Call the getHousingLocationById method with an existing ID
        
        const idToFind = 2;
        const result = await service.getHousingLocationById(idToFind);
    
        // Assert
        expect(result).toBeDefined();
        expect(result?.id).toBe(idToFind);
      });
    
      it('should return undefined for non-existing ID when houses are already loaded', async () => {
        // Call the getHousingLocationById method with a non-existing ID
        const idToFind = 999;
        const result = await service.getHousingLocationById(idToFind);
    
        // Assert
        expect(result).toBeUndefined();
      });


it('should log first name, last name, and email', () => {
    // Arrange
    const consoleSpy = spyOn(console, 'log'); // Spy on console.log

    const firstName = 'Susan';
    const lastName = 'Kloak';
    const email = 'susan.kloak@gmail.com';

    // Act
    service.submitApplication(firstName, lastName, email);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(firstName, lastName, email);
  });


});