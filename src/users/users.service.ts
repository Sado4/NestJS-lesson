import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];

  findAll(): CreateUserDto[] {
    return this.users;
  }

  create(user: CreateUserDto) {
    return this.users.push(user);
  }
}
