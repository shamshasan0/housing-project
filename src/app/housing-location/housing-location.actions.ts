// export class HousingLocationAction {
//   static readonly type = '[HousingLocation] Add item';
//   constructor(readonly payload: string) { }
// }


export class AddHousingLocation {
  static readonly type = '[Housing] add a housing location'
  constructor(public id: number, public name: string, public city: string, public state: string, public photo: string, public availableUnits: number, public wifi: boolean, public laundry: boolean){

  }
}

export class GetAllHousingLocations {
  static readonly type = '[Housing] get the housing information of all houses'
 
  constructor() {}


}


// export class getHousingLocationById {
//   static readonly type = '[Housing] grab info of a house by its id' 
 
//   constructor(public id: number){

//   }





