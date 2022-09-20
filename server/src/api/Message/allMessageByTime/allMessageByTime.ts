import { Context } from '@interfaces/context';
import { Message, PrismaClient, User } from '@prisma/client';
import translateText from '@utils/translateText';

const prisma = new PrismaClient();

interface TimeStamp {
  time: string;
}

export default {
  Query: {
    allMessagesByTime: async (
      _: Message,
      { time }: TimeStamp,
      { request, isAuthenticated }: Context,
    ): Promise<Message[]> => {
      isAuthenticated(request);
      const { roomId } = request.user;

      const Messages = await prisma.message.findMany({
        where: {
          AND: [
            {
              room: { id: roomId },
            },
            {
              createdAt: {
                gt: new Date(+time),
              },
            },
          ],
        },
        orderBy: {
          id: 'desc',
        },
        include: {
          user: true,
        },
      });

      let users = await prisma.room
        .findFirst({
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

      return Messages;
    },
  },
};
