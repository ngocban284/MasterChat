import { PrismaClient, User } from '@prisma/client';
import { getRandomNumber, randomImage } from '../../../utils/util';
import generateToken from '../../../utils/generateToken';
import ERROR_MSG from '../../../utils/errorMessage';

const prisma = new PrismaClient();

interface CreateRoomResponse {
  userId: number;
  roomId: number;
  code: string;
  token: string;
}

export default {
  Mutation: {
    createRoom: async (_: CreateRoomResponse, args: User): Promise<CreateRoomResponse> => {
      const { nickname, avatar, lang } = args;
      if (!nickname || !avatar || !lang) throw new Error(ERROR_MSG.invalid);
      const newUser = await prisma.user.create({
        data: {
          nickname,
          lang,
          avatar,
        },
      });

      let rdCode;
      while (true) {
        rdCode = getRandomNumber(6);
        const isExistRoom = await prisma.room.findFirst({
          where: {
            code: rdCode,
          },
        });
        if (!isExistRoom) break;
      }

      const newRoom = await prisma.room.create({
        data: {
          users: {
            connect: {
              id: newUser.id,
            },
          },
          avatar: randomImage(),
          code: rdCode,
        },
      });
      const jwtToken = generateToken(newUser, newRoom.id);

      return { userId: newUser.id, roomId: newRoom.id, code: rdCode, token: jwtToken };
    },
  },
};
