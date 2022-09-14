import { PrismaClient, User, Room, Message } from '@prisma/client';
import { Context } from '../../../interfaces/context';

const prisma = new PrismaClient();

export default {
  Query: {
    me: async (
      _: User | null,
      __: null,
      { request, isAuthenticated }: Context,
    ): Promise<User | null> => {
      isAuthenticated(request);
      const { id } = request.user;
      return prisma.user.findOne({
        where: {
          id: id,
        },
      });
    },
  },
};
