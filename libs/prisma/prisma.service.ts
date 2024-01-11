import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnApplicationShutdown {
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  async onApplicationShutdown() {
    await this.$disconnect();
  }

  async onModuleInit() {
    await this.$connect();
  }
}
