import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    console.log('getHello()');
    return 'Hello Worrld!';
  }
}
