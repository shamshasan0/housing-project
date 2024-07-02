import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.services';
import { HousingModel } from '../models/housing.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
    <img
      class="listing-photo"
      [src]="housingLocation?.photo"
      alt="Exterior photo of {{ housingLocation?.name }}"
      crossorigin
    />
    <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">{{ housingLocation?.city }} {{ housingLocation?.state }}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{ housingLocation?.availableUnits }}</li>
        <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
        <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" formControlName="firstName" />

        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" formControlName="lastName" />

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
`,
  styleUrl: './house-detail.component.scss'
})
export class HouseDetailComponent {
  
  housingLocation: HousingModel | undefined;
firstName: any;


  constructor( private housingService: HousingService, private route: ActivatedRoute) {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    })

    }
  

  applyForm = new FormGroup({
    firstName: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.email]),
  });

  submitApplication() {
    if ( this.applyForm.invalid )
      alert('invalid credentials')
    
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
      );
    }
   

  }

