import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from '../database/entities/Patient';
import { Observable } from 'rxjs';
import { CreatePatientDto } from './patientDtos/createPatient.dto';

@Controller('patient')
export class PatientController {
   constructor( private patientService : PatientService){}
    @Get()
    findAllPatients(): Promise<Patient[]>{
        return this.patientService.findAllPatients() ;
    }

    @Get(':id')
    findById(@Param('id') id : number ): Promise<Patient>{
        return this.patientService.findById(id) ;

    }

    @Post('add')
    createPatient(@Body() createPatientDto : CreatePatientDto ){
        return this.patientService.createPatient(createPatientDto);
    }

    @Put('update/:id')
    updatePatient(@Param('id') id:number ,@Body() createPatientDto : CreatePatientDto ){
        return this.patientService.updatePatient(id , createPatientDto);
    }

    @Delete ('delete/:id')
    deletePatient(@Param('id') id:number ){
        return this.patientService.deletePatient(id);
    }

}
