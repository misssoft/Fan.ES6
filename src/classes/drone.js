export class Drone{
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