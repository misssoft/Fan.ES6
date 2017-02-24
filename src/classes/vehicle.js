export class Vehicle{
    constructor(licenseNumber){
        this.licenseNumber = licenseNumber;
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
