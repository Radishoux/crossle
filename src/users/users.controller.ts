import { Controller, Get, Post  } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getHello(): string {
    console.log('getHello()');
    return this.userService.getHello();
  }

  @Post()
  postHello(): string {
    console.log('postHello()');
    return 'Help!';
  }
}
