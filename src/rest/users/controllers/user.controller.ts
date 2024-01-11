import { Body, Controller, Post } from '@nestjs/common';
import { SignupReq } from '@udtt/rest/users/dtos/req';
import { SignupRes } from '@udtt/rest/users/dtos/res';
import { UserService } from '@udtt/rest/users/services';
import { ZodSerializerDto } from 'nestjs-zod';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @ZodSerializerDto(SignupRes)
  @Post('signup')
  public async signup(@Body() body: SignupReq) {
    const createdUser = await this._userService.signup(SignupReq.toEntity(body));
    return SignupRes.from(createdUser);
  }
}
