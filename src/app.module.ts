import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UserController } from './controllers/user.controller';
import { OrderController } from './controllers/order.controller';
import { BrandController } from './controllers/brand.controller';
import { CustomerController } from './controllers/customer.controller';
import { ProductService } from './service/product.service';
import { BrandService } from './service/brand.service';
import { CategoryService } from './service/category.service';
import { CustomerService } from './service/customer.service';
import { OrderService } from './service/order.service';
import { UserService } from './service/user.service';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    CategoriesController,
    UserController,
    OrderController,
    BrandController,
    CustomerController,
  ],
  providers: [AppService, ProductService, BrandService, CategoryService, CustomerService, OrderService, UserService],
})
export class AppModule {
  /*  */
}
