import {PatientService} from './services/patient-service.js';

console.log('Loading Patitent Data...');

let patientService = new PatientService();

let patients = patientService.getSeededPatients();

for (var patient of patients){
    console.log(patient.country);
}
