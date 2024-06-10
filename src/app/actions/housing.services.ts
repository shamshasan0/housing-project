import { Injectable } from '@angular/core';
import {  HousingModel } from '../models/housing.model';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'assets/api/house.json';

  async getAllHousingLocations(): Promise<HousingModel[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingModel | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  
}

