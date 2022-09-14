import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export default (user: User, roomId: number): string => {
  const { id, nickName, avatar, lang } = user;
  return jwt.sign({ id, nickName, avatar, lang, roomId }, process.env.JWT_SECRET_KEY as string);
};
