import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  getCategoryByProductId(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId} and ${id}`;
  }
}
