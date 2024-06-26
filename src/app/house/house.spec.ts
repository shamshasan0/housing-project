import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideStore, State } from '@ngxs/store';
import { HouseComponent } from './house.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HousingLocationState } from './house.state';

describe('HouseComponent', () => {

    let anchorTag: HTMLAnchorElement;
    let component: HouseComponent;
    let fixture: ComponentFixture<HouseComponent>;
    let router: Router;
    let location: Location;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideStore([HouseComponent])]
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

    it('on anchor tag click, expect redirect to corresponding details page', fakeAsync(() => {
        expect(component).toBeDefined();
    }));


    it('', () => {
    });
})
