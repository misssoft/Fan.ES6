import {Patient} from '../classes/patient.js';

export class PatientService{
    constructor(){
        this.patients = [];
    }

    getSeededPatients(){
        this.patients.push( new Patient("Ann", "Shipley", "UK"));
        this.patients.push( new Patient("Ben", "Woodley", "UK"));
        this.patients.push( new Patient("Tom", "Bean", "UK"));
        this.patients.push( new Patient("Tom", "Bitter", "US"));
        this.patients.push( new Patient("Andy", "Sorter", "US"));
        this.patients.push( new Patient("Matt", "Shabier", "US"));
        this.patients.push( new Patient("Paul", "Friender", "US"));
        this.patients.push( new Patient("Matt", "Shabier", "US"));
        this.patients.push( new Patient("Steve", "Yinner", "UAE"));
        this.patients.push( new Patient("David", "Fresher", "UAE"));

        return this.patients;
    }
}