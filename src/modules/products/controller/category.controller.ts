import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';

import { CategoryService } from '../service/category.service';
import { CategoryDto, UpdateCategoryDto } from '../dto/category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('categories')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryDto) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(+id);
  }
}
