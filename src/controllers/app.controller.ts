import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const user = await this.prisma.user.create({
      data: {
        name: 'Greg',
        email: 'greg@greg.com',
        password: '123',
      },
    });
    return user;
  }
}
