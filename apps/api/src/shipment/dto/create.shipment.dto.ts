import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShipmentDto {
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly size: number;

  @IsString()
  @IsNotEmpty()
  readonly origin: string;

  @IsString()
  @IsNotEmpty()
  readonly destination: string;
}
