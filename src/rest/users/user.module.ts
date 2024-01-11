import { Module } from '@nestjs/common';
import { UserService } from '@udtt/rest/users/services';
import { UserController } from '@udtt/rest/users/controllers';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
