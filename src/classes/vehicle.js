export class Vehicle{
    constructor(licenseNumber, model){
        this.licenseNumber = licenseNumber;
        this.model = model;
        this.gpsEnabled = true;
        console.log('Vehicle constructed with licenseNumber: ' + licenseNumber);
    }
    start(){
        console.log("starting vehicle...");
    }

    static gePetrolPrice(){
        console.log('Current Petrol Price: 110p/litre');
    }
}
