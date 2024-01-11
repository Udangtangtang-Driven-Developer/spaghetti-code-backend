import { ResponseStatus, createResponseEntitySchema } from '@udtt-libs/dto';
import { User } from '@udtt/rest/users/domains';
import { createZodDto } from 'nestjs-zod';
import { number, string } from 'zod';

const SignupResSchema = createResponseEntitySchema({
  id: number(),
  nickname: string(),
  email: string(),
  createdAt: string(),
  updatedAt: string(),
});

export class SignupRes extends createZodDto(SignupResSchema) {
  public static from(user: User): SignupRes {
    const res = new SignupRes();
    res.message = 'User created successfully';
    res.code = ResponseStatus.OK;
    res.data = {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };

    return res;
  }
}
