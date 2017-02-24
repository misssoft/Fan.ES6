import {Car} from '../classes/car.js';
import {Lorry} from '../classes/lorry.js';
import {DataError} from './data-error.js';

export class VehicleDataService{
    constructor(){
        this.cars = [];
        this.lorries = [];
        this.errors = [];
        this.vehicles = []
    }

    filterByModel(filter){
        return this.vehicles.filter(v=>v.model.indexOf(filter) >=0);
    }
    
    getVehicleByLicense(license){
        return this.cars.find(function(car){
            return car.licenseNumber == license;
        });
    }

    sortLorrisByLicense(){
        return this.lorries.sort(function(lorry1, lorry2){
            if (lorry1.licenseNumber < lorry2.licenseNumber)
             return -1;
            if (lorry1.licenseNumber > lorry2.licenseNumber)
             return 1;
            return 0;
        })
    }

    sortVehicleByLicense(){
        return this.vehicles.sort(function(v1, v2){
            if (v1.licenseNumber < v2.licenseNumber)
             return -1;
            if (v1.licenseNumber > v2.licenseNumber)
             return 1;
            return 0;
        })
    }

    loadData(vehicles){
        for (let vehicle of vehicles){
            switch(vehicle.type){
                case 'car':
                    let car = this.loadCar(vehicle);
                    this.cars.push(car);
                    this.vehicles.push(car);
                    break;
                case 'lorry':
                    let lorry = this.loadLorry(vehicle)
                    this.lorries.push(lorry);
                    this.vehicles.push(lorry);
                    break;
                default:
                    let e= new DataError(`Invalid Vehicle Type of ${vehicle.type}` ,vehicle);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(car){
        try {
            let c = new Car(car.license, car.model);
            return c;
        }catch(e){
            this.errors.push(new DataError(`Error loading a car: ${car.license}`));
        }
        return null;
    }

    loadLorry(lorry){
        try {
            let l = new Lorry(lorry.license, lorry.model);
            return l;
        }catch (e){
            this.errors.push(new DataError(`Error loading a lorry ${lorry.license}`));
        }
        return null;
    }
}