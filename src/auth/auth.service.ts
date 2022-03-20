import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
// import { User, Bookmark } from '@prisma/client';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDTO) {
    console.log({ dto });
    const hash = await argon.hash(dto.password);

    console.log({ hash });

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    delete user.hash;
    return { user };
  }

  signin() {
    return { msg: 'I am signin' };
  }
}
