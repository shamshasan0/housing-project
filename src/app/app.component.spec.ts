import { Location } from "@angular/common";
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'; // 1
import { Router, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import routeConfig from '../routes';
import { AppComponent } from './app.component';
import { HousingLocationState } from './house/house.state';
import { HouseListComponent } from "./house-list/house-list.component";

describe('AppComponent', () => {

  // TEST 1: CREATING THE COMPONENT 
  // STATUS: COMPLETED

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let logoImage: HTMLImageElement;
  let anchorTag: HTMLAnchorElement;
  let section: HTMLElement;
  let router: Router;
  let location: Location;

  beforeEach((() => {
    TestBed.configureTestingModule({ imports: [AppComponent, HouseListComponent, RouterModule.forRoot(routeConfig), NgxsModule.forRoot([HousingLocationState])] }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router)
    location = TestBed.get(Location)
    router.initialNavigation();
  });

  it('should create the app component', () => {
    expect(component).toBeDefined();
  })

  it('house list component should exist in app component', () => {
    fixture = TestBed.createComponent(HouseListComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeDefined();
  })
  // TEST 2
  // STATUS: COMPLETE
  it('should have an image of company logo within the header', () => {
    logoImage = fixture.nativeElement.querySelector("header > img")
    expect(logoImage.src).toMatch("/assets/images/logo.svg"); // even if port changes, this will still be valid
  });

  // TEST 3
  // STATUS: COMPLETE
  it('anchor and section tag should be siblings', () => {
    anchorTag = fixture.nativeElement.querySelector("a")
    section = fixture.nativeElement.querySelector("section")
    expect(anchorTag.nextSibling).toEqual(section) // if anchorTag is passed in, says section should be passed in    
  });

  // TEST 4
  // STATUS: COMPLETE
  it("default path of app component should match to '/'", () => {
    anchorTag = fixture.nativeElement.querySelector("a")
    expect(anchorTag.href).toMatch("/");
  });

  // TEST 5
  // STATUS: COMPLETE
  it("navigate to '' redirects to '/house-list' path'", fakeAsync(() => {
    router.navigate([""]);
    tick();
    expect(location.path()).toBe("/house-list");
  }));

  // TEST 6
  // STATUS: IN PROGRESS
  it('there should be a content section container class', () => {
    const sectionContainer = fixture.nativeElement.querySelector(".content")
    expect(sectionContainer).toBeDefined();
  })


});
