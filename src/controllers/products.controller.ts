import { Body, Controller, Get, Param, Post, Delete, Put, NotFoundException } from '@nestjs/common';
import { ParseIntPipe } from '@common/parse-int/parse-int.pipe';
import { ProductDto } from '@dto/product.dto';
import { Product } from '@entity/product.entity';
import { ProductService } from '@service/product.service';

@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductService) {}

  @Get()
  getProducts() {
    return this._productService.findAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this._productService.findOne(id);
  }

  @Post()
  create(@Body() payload: ProductDto) {
    return this._productService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: Partial<ProductDto>) {
    try {
      return this._productService.update(+id, payload);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this._productService.delete(+id);
  }
}
