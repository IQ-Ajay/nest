import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

// import { User } from './database/entities/User';

@Controller()
export class AppController {
  usersService: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/api')
  redirectToApi() {
    return;
  }
  @Get("/test")
  getHello(): string {
    return this.appService.getHello();
  }
}
