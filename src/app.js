class Drone{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this._code = this.id+'_'+this.name;
    }

    get code(){
        return this._code;
    }

    set code(value){
        this._code = value;
    }

    static getSpeed(){
        console.log('MaxSpeed of all drones are ' + this.MaxSpeed);
    }

    fly(){
        console.log('Drone: ' + this.id + ' is flying');
    }
}

//class, object, instance
let drone = new Drone("DroneID", "DroneName")
console.log('Drone is a type of '+ typeof Drone);
console.log('drone is a type of ' + typeof drone);
console.log('Is drone a instance of Drone? ') ;
console.log(drone instanceof Drone)

// constructor
let sharper = new Drone("A111", "Sharper");
console.log('drone id: ' + sharper.id + " and its name: " + sharper.name);
let speeder = new Drone("A222", "Speeder");
console.log('drone id: ' + speeder.id + " and its name: " + speeder.name);


//method
sharper.fly();
speeder.fly();

// static/class property
Drone.MaxSpeed = 1000;
console.log("Drone static property: MaxSpeed = "+ Drone.MaxSpeed);

//static method;
Drone.getSpeed();

//getter and setter
console.log('this drone code is ' + sharper.code);
console.log('this drone code is ' + speeder.code);

sharper.code = 'I_AM_SHAPER';
speeder.code = 'I_AM_SPEEDER';

console.log('this drone code is ' + sharper.code);
console.log('this drone code is ' + speeder.code);