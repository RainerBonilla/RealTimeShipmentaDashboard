import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { CreateShipmentDto } from './dto/create.shipment.dto';

@Controller('shipment')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post()
  async create(@Body() createShipment: CreateShipmentDto) {
    return this.shipmentService.insert(createShipment);
  }

  @Get()
  async findMany() {
    return await this.shipmentService.getMany();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.shipmentService.findById(id);
  }

  @Post(':id')
  async markAsDelivered(@Param('id') id: string) {
    return await this.shipmentService.markAsDelivered(id);
  }
}
