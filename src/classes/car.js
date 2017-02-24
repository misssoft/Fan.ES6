import {Vehicle} from './vehicle.js';

export class Car extends Vehicle{
    constructor(licenseNumber){
        super(licenseNumber);
        console.log('Car constructed');
        this.gpsEnabled = false;
    }

    start(){
        console.log("starting car...");
        super.start();
    }

     static gePetrolPrice(){
        super.gePetrolPrice();
        console.log('Current Petrol Price: 220p/litre');
        super.gePetrolPrice();
    }
}