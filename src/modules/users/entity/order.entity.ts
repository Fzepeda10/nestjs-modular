import { Product } from '@modules/products/entity/product.entity';
import { User } from './user.entity';

export class Order {
  date: Date;
  user: Omit<User, 'password'>;
  products: Product[];
}
