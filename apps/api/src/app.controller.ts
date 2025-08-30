import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Shipment } from '@repo/types/shipment';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/shipments')
  async getShipemnts(): Promise<Shipment[]> {
    return await this.appService.getShipments()
  }
}
