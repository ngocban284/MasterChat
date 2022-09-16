import { Context } from '@interfaces/context';
import { Message, PrismaClient, User } from '@prisma/client';
import translateText from '@utils/translateText';

const prisma = new PrismaClient();

interface Pagination {
  page: number;
}

interface allMessages {
  messages: (Message & { user: User })[];
  nextPage: number | null;
}

export default {
  Query: {
    allMessageByPage: async (
      _: allMessages,
      args: Pagination,
      { request, isAuthenticated }: Context,
    ): Promise<allMessages> => {
      isAuthenticated(request);
      const { roomId } = request.user;
      const { page } = args;
      const maxId = await prisma.$queryRaw`SELECT MAX(id) from Message WHERE roomId = ${roomId}`;
      const lastId = maxId[0]['MAX(id)'];
      if (!lastId) {
        return {
          messages: [],
          nextPage: null,
        };
      }

      const Messages = await prisma.message.findMany({
        where: {
          room: { id: roomId },
        },
        take: -10,
        skip: (page - 1) * 10,
        cursor: { id: lastId },
        orderBy: {
          id: 'desc',
        },
        include: {
          user: true,
        },
      });

      let users = await prisma.room
        .findOne({
          where: {
            id: roomId,
          },
        })
        .users();

      const promise = Messages.map(async (message) => {
        const { source } = message;
        if (source !== 'in' && source !== 'out') {
          message.text = await translateText(message, request.user, users);
        }
      });
      await Promise.all(promise);

      if (Messages.length === 10) {
        return {
          messages: Messages,
          nextPage: page + 1,
        };
      }

      return {
        messages: Messages,
        nextPage: null,
      };
    },
  },
};
