import { Injectable } from '@nestjs/common';
import { PrismaService } from '@udtt-libs/prisma';
import { User } from '@udtt/rest/users/domains';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async signup(user: User): Promise<User> {
    return await this.prisma.user
      .create({
        data: {
          nickname: user.nickname,
          email: user.email,
          city: user.city,
          country: user.country,
          password: user.password,
        },
      })
      .then(User.from);
  }
}
