import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('classify-number')
  async classifyNumber(@Query('number') number: string) {
    const regex = /^-?\d+$/;

    if (!regex.test(number)) {
      return {
        number: number,
        error: true,
      };
    }

    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber)) {
      return {
        number: number,
        error: true,
      };
    }

    const classification = await this.appService.classifyNumber(parsedNumber);
    return classification;
  }
}
