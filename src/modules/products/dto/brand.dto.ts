import { PartialType } from '@nestjs/swagger';
import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class BrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(BrandDto) {}
