import { PrismaClient, User, Room, Message } from '@prisma/client';
import { Context } from '@interfaces/context';
import { withFilter } from 'graphql-subscriptions';
import TRIGGER from '@utils/trigger';

const prisma = new PrismaClient();

export default {
  newUser: {
    Subscription: {
      subscribe: withFilter(
        (_: boolean, __: null, { pubsub }: Context) => pubsub.asyncIterator(TRIGGER.NEW_USER),
        async (payload, variables, context): Promise<boolean> => {
          const { roomId } = context.connection.context.user;
          if (payload.newUser.roomId === roomId) {
            return true;
          }
          return false;
        },
      ),
    },
  },
};
