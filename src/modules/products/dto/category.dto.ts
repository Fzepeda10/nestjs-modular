import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateCategoryDto extends PartialType(CategoryDto) {}
