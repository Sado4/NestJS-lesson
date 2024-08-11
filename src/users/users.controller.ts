import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): CreateUserDto[] {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @Put()
  // update(@Body(ValidationPipe) createUserDto: CreateUserDto) {
  //   return this.usersService.update(createUserDto);
  // }

  // @Delete(':id')
  // remove(@Body(ValidationPipe) createUserDto: CreateUserDto) {
  //   return this.usersService.delete(createUserDto);
  // }
}
