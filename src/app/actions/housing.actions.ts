
export class addHouse {
    static readonly type = '[Housing] add a house posting'
   
    constructor(public id: number, public name: string, public state: string,  public city: string, public photo: string, public availableUnits: number,  public wifi: boolean, public laundry: boolean) {}


}




