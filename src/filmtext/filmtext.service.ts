// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { FilmText } from '../database/entities/FilmText';
// import { Repository } from 'typeorm';

// @Injectable()
// export class FilmtextService {
//     constructor(
//         @InjectRepository(FilmText)
//         private readonly filmTextRepository: Repository<FilmText>,
//     ){}
//     findAll(): Promise<import("../database/entities/FilmText").FilmText[]> {
//         console.log("i reached to service")
//     return this.filmTextRepository.find();
//     }
// }
