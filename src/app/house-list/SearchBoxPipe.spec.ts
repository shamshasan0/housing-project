import { HousingModel } from "../models/housing.model";
import { SearchBoxPipe } from "./SearchBoxPipe";
describe('SearchBoxPipe', () => {

    const pipe = new SearchBoxPipe();
    const houses: HousingModel[] = [
        {
            "id": 1,
            "name": "A113 Transitional Housing",
            "city": "Santa Monica",
            "state": "CA",
            "photo": "/assets/images/brandon-griggs-wR11KBaB86U-unsplash.jpg",
            "availableUnits": 0,
            "wifi": false,
            "laundry": true
        },
        {
            "id": 1,
            "name": "A113 Transitional Housing",
            "city": "Santa Monica",
            "state": "CA",
            "photo": "/assets/images/brandon-griggs-wR11KBaB86U-unsplash.jpg",
            "availableUnits": 0,
            "wifi": false,
            "laundry": true
        },
        {
            "id": 2,
            "name": "Warm Beds Housing Support",
            "city": "Juneau",
            "state": "AK",
            "photo": "/assets/images/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
            "availableUnits": 1,
            "wifi": false,
            "laundry": false
        },
        {
            "id": 3,
            "name": "Homesteady Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "/assets/images/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": false
        }
    ]

    it('should filter and return houses based on search"', () => {
        const filterHouses = pipe.transform(houses, "Santa")
        expect(filterHouses).toEqual([houses[0], houses[1]]);
    });

    it('should return an empty array if none of the houses match the city"', () => {
        const filterHouses = pipe.transform(houses, "Plymouth")
        expect(filterHouses).toEqual([])
    });

    it('should return an empty array if houses are empty"', () => {
        const emptyHouses: HousingModel[] = []
        const filterHouses = pipe.transform(emptyHouses, "Chicago")
        expect(filterHouses).toEqual([])
    });

    it('should return the length of houses in the city of chicago"', () => {
        const filterHouses = pipe.transform(houses, "Chicago")
        expect(filterHouses.length).toEqual(1);
    });
    
});
