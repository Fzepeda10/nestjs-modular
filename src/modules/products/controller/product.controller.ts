import { Body, Controller, Get, Param, Post, Delete, Put, NotFoundException } from '@nestjs/common';
import { ParseIntPipe } from '@common/parse-int/parse-int.pipe';
import { ProductService } from '../service/product.service';
import { ProductDto, UpdateProductDto } from '../dto/product.dto';
import { Product } from '../entity/product.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductController {
  constructor(private _productService: ProductService) {}

  @Get()
  getProducts(): Product[] {
    return this._productService.findAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Product {
    return this._productService.findOne(id);
  }

  @Post()
  create(@Body() payload: ProductDto): Product {
    return this._productService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto): Product {
    return this._productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this._productService.delete(id);
  }
}
