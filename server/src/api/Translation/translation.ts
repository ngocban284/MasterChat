import { Context } from '@interfaces/context';
import { PrismaClient } from '@prisma/client';
import getSecondLang from '@utils/getSecondLang';
import req from '@utils/request';
import dect from '@utils/dect';

interface translationResponse {
  translatedText?: string;
  errorMsg?: string;
}

const prisma = new PrismaClient();

export default {
  Mutation: {
    translation: async (
      _: translationResponse,
      args: { text: string },
      { request, isAuthenticated }: Context,
    ): Promise<translationResponse> => {
      try {
        isAuthenticated(request);
        const { text } = args;
        const { lang, roomId } = request.user;
        const source = await dect(text);

        const users = await prisma.room
          .findOne({
            where: {
              id: roomId,
            },
          })
          .users();

        if (source === lang) {
          const target = getSecondLang(
            users.filter((user) => !user.isDeleted),
            lang,
          );

          const translatedText = await req(text, source, target);
          return { translatedText: translatedText };
        }

        const translatedText = await req(text, source, lang);
        return { translatedText: translatedText };
      } catch (e) {
        return { errorMsg: e as string };
      }
    },
  },
};
