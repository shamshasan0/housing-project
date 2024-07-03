import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import routeConfig from '../../routes';
import { HouseDetailComponent } from '../house-detail/house-detail.component';
import { HouseCardComponent } from './house-card.component';


describe('HouseCardComponent', () => {

    let fixture: ComponentFixture<HouseCardComponent>;

    const housingLocation = {
        "id": 1,
        "name": "A113 Transitional Housing",
        "city": "Santa Monica",
        "state": "CA",
        "photo": "/assets/images/brandon-griggs-wR11KBaB86U-unsplash.jpg",
        "availableUnits": 0,
        "wifi": false,
        "laundry": true
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideRouter(routeConfig),
            ],
            imports: [HouseCardComponent, HouseDetailComponent]
        }).compileComponents();

    });


    beforeEach(() => {

        fixture = TestBed.createComponent(HouseCardComponent);
        fixture.componentInstance.housingLocation = housingLocation;
        fixture.detectChanges();

    });



    it("should show the path of learn more", () => {

        const anchorTag = fixture.nativeElement.querySelector('a')
        expect(anchorTag.href).toMatch(`/details/${housingLocation.id}`)

    });

    it("test routing for anchor tag", fakeAsync(() => {
        const location: Location = TestBed.inject(Location)

        fixture.detectChanges()

        const anchorTag = fixture.nativeElement.querySelector('a')

        anchorTag.click()

        tick();
        
        expect(location.path()).toBe(`/details/${housingLocation.id}`);

    }));

})

