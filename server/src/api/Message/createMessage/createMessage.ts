import { Context } from '../../../interfaces/context';
import { PrismaClient } from '@prisma/client';
import TRIGGER from '@utils/trigger';
import dect from '@utils/dect';

const prisma = new PrismaClient();

export default {
  Mutation: {
    createMessage: async (
      _: boolean,
      args: { text: string },
      { request, isAuthenticated, pubsub }: Context,
    ): Promise<boolean> => {
      isAuthenticated(request);
      const { id, roomId } = request.user;
      const { text } = args;
      const lang = await dect(text);

      const message = await prisma.message.create({
        data: {
          text,
          source: lang,
          user: {
            connect: {
              id,
            },
          },
          room: {
            connect: {
              id: roomId,
            },
          },
        },
        include: {
          user: true,
        },
      });

      pubsub.publish(TRIGGER.NEW_MESSAGE, { newMessage: message });
      return true;
    },
  },
};
