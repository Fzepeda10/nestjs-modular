/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(ProductDto) {}
