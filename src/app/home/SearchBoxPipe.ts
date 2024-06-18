import { Pipe, PipeTransform } from '@angular/core';
import { HousingModel } from '../models/housing.model';

@Pipe({
    name: 'searchBox',
    standalone: true
})
export class SearchBoxPipe implements PipeTransform {

    transform(houses: Array<HousingModel>, searchTxt: string): Array<HousingModel> {
        if (!searchTxt) return houses;
        return houses.filter(getData);
        function getData(value: HousingModel) {
            const city = value.city.toUpperCase();
            const search = searchTxt.toUpperCase();
            return city.indexOf(search) > -1;

        };
    };

}