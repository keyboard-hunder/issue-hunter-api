import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from '../application/User.service';

@Controller('/users')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/profile')
  @UseGuards(AuthGuard('bearer'))
  async getUserById(
    @Req() request,
  ) {
    const result = await this.userService.getUserById(request.user.id);
    return { message: 'profile received', result: { profile: result } };
  }
}
