import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
dotenv.config();
import { GraphQLServer, PubSub } from 'graphql-yoga';
import { authenticateJwt } from './middlewares/passport';
import isAuthenticated from './middlewares/isAuthenticated';
import schema from './schema';
import logger from 'morgan';
import 'module-alias/register';
import { verify } from 'jsonwebtoken';
import { ApolloError } from 'apollo-server';

const PORT = process.env.PORT || 4000;

const prisma = new PrismaClient();
const pubsub = new PubSub();
const server = new GraphQLServer({
  schema,
  context: ({ request, connection }) => ({ request, connection, isAuthenticated, pubsub }),
});

server.express.use(logger('dev'));
server.express.use(authenticateJwt);

interface ConnectionParams {
  authToken: string;
}

server.start(
  {
    port: PORT,
    cors: { origin: true },
    endpoint: '/graphql',
    subscriptions: {
      path: '/subscriptions',
      onConnect: async (connectionParams: ConnectionParams) => {
        const { authToken } = connectionParams;
        console.log('authToken', authToken);
        const user: any = verify(authToken as string, process.env.JWT_SECRET_KEY as string);
        const findUser = await prisma.user.findOne({ where: { id: user.id } });
        if (!findUser) throw new Error('Not valid user token');
        return { user: { ...findUser, roomId: user.roomId } };
      },
    },
    formatError: (err: ApolloError) => {
      console.error('--- GraphQL Error ---');
      console.error('Path:', err.path);
      console.error('Message:', err.message);
      return err;
    },
  },
  () => {
    console.log(`Server running on http://localhost:${PORT}`);
  },
);
