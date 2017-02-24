import {Car} from '../classes/car.js';
import {Lorry} from '../classes/lorry.js';
import {DataError} from './data-error.js';

export class VehicleDataService{
    constructor(){
        this.cars = [];
        this.lorries = [];
        this.errors = [];
    }

    loadData(vehicles){
        for (let vehicle of vehicles){
            switch(vehicle.type){
                case 'car':
                    let car = this.loadCar(vehicle);
                    this.cars.push(car);
                    break;
                case 'lorry':
                    let lorry = this.loadLorry(vehicle)
                    this.lorries.push(lorry);
                    break;
                default:
                    let e= new DataError('Invalid Vehicle Type of ' + vehicle.type ,vehicle);
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
            this.errors.push(new DataError('Error loading a car: ',car.license));
        }
        return null;
    }

    loadLorry(lorry){
        try {
            let l = new Lorry(lorry.license, lorry.model);
            return l;
        }catch (e){
            this.errors.push(new DataError('Error loading a lorry', lorry.license));
        }
        return null;
    }
}