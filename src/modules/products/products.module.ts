import { Module } from '@nestjs/common';

// ? Controllers
import { BrandController } from './controller/brand.controller';
import { ProductController } from './controller/product.controller';
import { CategoryController } from './controller/category.controller';

// ? Services
import { BrandService } from './service/brand.service';
import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';

@Module({
  controllers: [ProductController, BrandController, CategoryController],
  providers: [ProductService, BrandService, CategoryService],
  exports: [ProductService, BrandService, CategoryService],
})
export class ProductsModule {}
