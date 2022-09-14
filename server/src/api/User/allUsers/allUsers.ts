import { PrismaClient, User, Room, Message } from '@prisma/client';

import { Context } from '@interfaces/context';

const prisma = new PrismaClient();

type result = (User & { rooms: Room[]; messages: Message[] })[];

export const allUsers = async (
  _: result,
  __: null,
  { request, isAuthenticated }: Context,
): Promise<result> => {
  const users = await prisma.user.findMany({
    include: {
      messages: true,
      rooms: true,
    },
  });
  return users;
};
