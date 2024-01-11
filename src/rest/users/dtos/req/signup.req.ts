import { User } from '@udtt/rest/users/domains';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const UserSchema = z
  .object({
    email: z.string().email(),
    firstName: z.string().min(1).max(255),
    lastName: z.string().min(1).max(255),
    nickname: z.string().min(0).max(255),
    password: z.string().regex(User.passwordRegex, 'Password is too weak').min(8).max(32),
    passwordConfirm: z.string().regex(User.passwordRegex, 'Password is too weak').min(8).max(32),
    city: z.string().min(0).max(255),
    country: z.string().min(0).max(255),
  })
  .superRefine(({ password, passwordConfirm }) => password === passwordConfirm);

export class SignupReq extends createZodDto(UserSchema) {
  public static toEntity(req: SignupReq): User {
    return User.new({
      nickname: req.nickname,
      email: req.email,
      city: req.city,
      country: req.country,
      password: req.password,
    });
  }
}
