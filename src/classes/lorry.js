import {Vehicle} from './vehicle.js';

export class Lorry extends Vehicle{
     constructor (license, model, load){
         super(license, model);
         this.load = load;
     }
}