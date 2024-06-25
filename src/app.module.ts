import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PatientModule } from './patient/patient.module';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { PatientController } from './patient/patient.controller';





@Module({
  imports: [
TypeOrmModule.forRoot({
    type: "mysql",
    host: "127.0.0.1",
    port:3306,
    username:"root",
    password:"root",
    database:"dev",
    synchronize:true,
    entities: [__dirname + '/**/entities/*{.ts,.js}']
}), 
PatientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggerMiddleware)
        .forRoutes(PatientController);
  }
}


// {
//   "type": "postgres",
//   "host": "localhost",
//   "port": 5432,
//   "username": "postgres",
//   "password": "root",
//   "database": "postgres",
//   "synchronize": true,
//   "entities": ["src/database/entities/*.js"]
// }


// {
//   type: "mysql",
//   host: "127.0.0.1",
//   port:3306,
//   username:"root",
//   password:"root",
//   database:"sakila",
//   synchronize:true,
//   entities: [__dirname + '/**/*{.ts,.js}']
// }

// {
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "root",
//   database: "postgres",
//   synchronize: false,
//   entities: [__dirname + '/**/entities/*{.ts,.js}']
// }


