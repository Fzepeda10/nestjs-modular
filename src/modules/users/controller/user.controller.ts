import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UpdateUserDto, UserDto } from '../dto/user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '../entity/user.entity';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'List of users',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOrdersByUser(id);
  }

  @Post()
  create(@Body() payload: UserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
