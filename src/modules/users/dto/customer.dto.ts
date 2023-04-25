import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CustomerDto) {}
