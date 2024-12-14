import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

export class TBInvites {
  static readonly tb = prisma;

  static secretGuestId = (id: number) => id * 1482 + 4513;
  static unsecretGuestId = (id: number) => (id - 4513) / 1482;
}
