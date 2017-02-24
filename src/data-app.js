import {Car} from './classes/car.js';
import {Lorry} from './classes/lorry.js';
import {vehicles} from '../vehicledata.js';

import {VehicleDataService} from './services/vehicledataservice.js';

let dataService = new VehicleDataService();

dataService.loadData(vehicles);

console.log(dataService.cars);

console.log(dataService.lorries);

for(let car of dataService.cars){
    console.log(car);
}

let car = dataService.getVehicleByLicense('DEF123');
console.log(car);

for(let lorry of dataService.lorries){
    console.log(lorry);
}

for(let error of dataService.errors){
    console.log(error);
}

let sortedLorries = dataService.sortLorrisByLicense();

for(let lorry of sortedLorries){
    console.log(lorry);
}


let sortedVehicles = dataService.sortVehicleByLicense();

for(let v of sortedVehicles){
    console.log(v);
}

let filteredVehicles = dataService.filterByModel('M');

for (let v of filteredVehicles){
    console.log(v);
}
