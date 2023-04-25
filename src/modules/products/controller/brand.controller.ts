import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';

import { BrandService } from '../service/brand.service';
import { BrandDto, UpdateBrandDto } from '../dto/brand.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('brands')
@ApiTags('brands')
export class BrandController {
  constructor(private brandsService: BrandService) {}

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  @Post()
  create(@Body() payload: BrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandDto) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.remove(+id);
  }
}
