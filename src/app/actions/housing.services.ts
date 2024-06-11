import { Injectable } from '@angular/core';
import {  HousingModel } from '../models/housing.model';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'assets/api/house.json';
  houses: HousingModel[] = [];

  async getAllHousingLocations(): Promise<HousingModel[]> {
    const data = await fetch(this.url);
    this.houses = (await data.json()) ?? [];
    return this.houses;
  }
  async getHousingLocationById(id: number): Promise<HousingModel | undefined> {
    return this.houses.find( house => house.id === id );
    
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  
}

