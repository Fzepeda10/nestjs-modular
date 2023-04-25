import { Injectable, NotFoundException, Logger, Inject } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UpdateUserDto, UserDto } from '../dto/user.dto';
import { Order } from '../entity/order.entity';
import { ProductService } from '@modules/products/service/product.service';
import { ConfigType } from '@nestjs/config';
import config from '../../../config';

@Injectable()
export class UserService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'correo@mail.com',
      password: '12345',
      role: 'admin',
    },
  ];

  constructor(
    private _productService: ProductService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}

  findAll() {
    Logger.verbose(this.configService.database.name, UserService.name);
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(data: UserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }

  getOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this._productService.findAll(),
    };
  }
}
