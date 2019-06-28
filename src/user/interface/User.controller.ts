import { Controller, Get, Req } from '@nestjs/common';

import { UserService } from '../application/User.service';

@Controller('/users')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/profile')
  async getUserById(
    @Req() request,
  ) {
    const result = await this.userService.getUserById(request.user.id);
    return { message: 'profile received', result: { profile: result } };
  }
}
