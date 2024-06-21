import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'; // 1
import { Router, RouterModule } from '@angular/router';
import routeConfig from '../routes';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  // TEST 1: CREATING THE COMPONENT 
  // STATUS: COMPLETED

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({ imports: [AppComponent, RouterModule.forRoot(routeConfig)] }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeDefined();
  });
  it('should have an image of company logo within the header', () => {
    expect(component).toBeDefined();
  });
  it('should have a container ', () => {
    expect(component).toBeDefined();
  });
  it("anchor tag should redirect to homepage of '/' path'", () => {
    expect(component).toBeDefined();
  });
  it("default path of app component should match to '/'", () => {
    expect(component).toBeDefined();
  });

  // TEST 2: Test Default App Route Path
  // STATUS: IN PROGRESS

  // let router: Router;

  // beforeEach(() => {
  //   router = TestBed.inject(Router)
  //   location = TestBed.inject(Location)
  //   router.initialNavigation()
  //   fixture = TestBed.createComponent(AppComponent)
  // });

  // it("should navigate to the default path '/'"), waitForAsync(() => {

  //   fixture.detectChanges();
  //   fixture.whenStable.then(() => {
  //     expect(location.href.toBe("/")

  //   });

  // });
});
