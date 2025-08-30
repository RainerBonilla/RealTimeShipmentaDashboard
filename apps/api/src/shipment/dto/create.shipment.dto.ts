import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShipmentDto {
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  readonly size: number;
}
