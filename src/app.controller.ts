import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ph_backend/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
