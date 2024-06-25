import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from '../database/entities/Patient';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { CreatePatientDto } from './patientDtos/createPatient.dto';

@Injectable()
export class PatientService {
    
    
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>
    ){}

    createPatient(createPatientDto: CreatePatientDto): any {
        const newPatient = this.patientRepository.save(createPatientDto);
        return newPatient; 
    }
    
    findAllPatients(): Promise<Patient[]>{
        return this.patientRepository.find({where:{isDeleted:false}});
    }
    findById(id: number): Promise<Patient> {
        return this.patientRepository.findOne({where:{id, isDeleted:false}});
    }
    updatePatient(id:number , createPatientDto: CreatePatientDto) {
        return this.patientRepository.update(id ,createPatientDto).then(()=> this.patientRepository.findOne({where:{id, isDeleted:false}}));
    }
    deletePatient(id: number) {
        return this.patientRepository.update(id,{isDeleted: true}).then(()=>undefined);
    }
}
