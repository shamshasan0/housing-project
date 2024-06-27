import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxsModule, provideStore, State } from '@ngxs/store';
import { HouseComponent } from './house.component';
import { Router, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HousingLocationState } from './house.state';
import { Location } from '@angular/common';
import routeConfig from '../../routes';

describe('HouseComponent', () => {

    let anchorTag: HTMLAnchorElement;
    let component: HouseComponent;
    let fixture: ComponentFixture<HouseComponent>;
    let router: Router;
    let location: Location;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [(HouseComponent), RouterModule.forRoot(routeConfig)]
        });

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HouseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router = TestBed.get(Router)
        location = TestBed.get(Location)
        router.initialNavigation();
    });


it("default route of anchor tag should match to '/details:id'", () => {
    anchorTag = fixture.nativeElement.querySelector('a')    
    console.log(anchorTag)
  });

  it("test path of anchor tag with id parameter", () => {
    anchorTag = fixture.nativeElement.querySelector('a')    
    expect(anchorTag.href).toMatch("/details/:id");
  });
  
})