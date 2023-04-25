import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { CustomerController } from './controller/customer.controller';
import { CustomerService } from './service/customer.service';
import { ProductsModule } from '@modules/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [UserController, CustomerController],
  providers: [UserService, CustomerService],
  exports: [UserService, CustomerService],
})
export class UsersModule {}
