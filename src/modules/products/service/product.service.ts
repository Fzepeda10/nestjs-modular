import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDto, UpdateProductDto } from '../dto/product.dto';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Array<Product> = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw new NotFoundException('Item Not Found');

    return product;
  }

  create(payload: ProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const idPrd = this.products.findIndex((item) => item.id === id);
    if (idPrd < 0) throw new NotFoundException('Item not Found');

    this.products[idPrd] = {
      ...this.products[idPrd],
      ...payload,
      id: this.products[idPrd].id,
    };
    return this.products[idPrd];
  }

  delete(id: number) {
    const idPrd = this.products.findIndex((item) => item.id === id);
    if (idPrd < 0) throw new NotFoundException('Item not Found');

    this.products.splice(idPrd, 1);
    return this.products;
  }
}
