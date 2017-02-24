import {Car} from './classes/car.js';
import {Lorry} from './classes/lorry.js';
import {vehicles} from '../vehicledata.js';

import {VehicleDataService} from './services/vehicledataservice.js';

let dataService = new VehicleDataService();

dataService.loadData(vehicles);

console.log(dataService.cars);

console.log(dataService.lorries);

for(let car of dataService.cars){
    console.log('this is car: ' + car.licenseNumber);
}

for(let lorry of dataService.lorries){
    console.log('this is lorry: ' + lorry.licenseNumber);
}

for(let error of dataService.errors){
    console.log('An error occurred: ' +  error.message );
}

