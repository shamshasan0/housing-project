import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import routeConfig from '../../routes';
import { DetailsComponent } from '../details/details.component';
import { HouseComponent } from './house.component';

describe('HouseComponent', () => {



    let anchorTag: HTMLAnchorElement;
    let component: HouseComponent;
    let fixture: ComponentFixture<HouseComponent>;
    let router: Router;
    let location: Location;

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
           imports: [HouseComponent, DetailsComponent, RouterModule.forRoot(routeConfig)] }).compileComponents();        

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HouseComponent);
        component = fixture.componentInstance;
        component.housingLocation = housingLocation; 
        router = TestBed.get(Router)
        location = TestBed.get(Location)    
    });


it("default route of anchor tag should redirect to '/details:id'", fakeAsync(() => {
    anchorTag = fixture.nativeElement.querySelector("a")

    anchorTag.click();    
    tick();

    expect(anchorTag.href).toMatch("/details/1");

}))

  it("test path of anchor tag with id parameter", () => {
    expect(component).toBeDefined()
  });
  
})