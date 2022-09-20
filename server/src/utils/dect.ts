import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default async (query: string): Promise<string> => {
  const data = {
    query,
  };
  const config = {
    headers: {
      'X-Naver-Client-Id': process.env.CLIENT_ID,
      'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.post(process.env.PAPAGO_DECT_URL as string, data, config);
  return res.data.langCode;
};
