// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from '../database/entities/User';
// import { Repository } from 'typeorm';

// @Injectable()
// export class UsersService {
//     constructor(
//         @InjectRepository(User)
//         private readonly usersRepository: Repository<User>,   
//     ){}
//     findAll(): Promise<User[]> {
//         return this.usersRepository.find();
//     }
// }
