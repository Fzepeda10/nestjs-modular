import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { CustomerDto, UpdateCustomerDto } from '../dto/customer.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('customers')
@ApiTags('customers')
export class CustomerController {
  constructor(private customersService: CustomerService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(+id);
  }
}
