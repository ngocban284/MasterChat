import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default async (text: string, source: string, target: string): Promise<string> => {
  if (source === target) return text;
  const data = {
    source,
    target,
    text,
  };

  const config = {
    headers: {
      'X-Naver-Client-Id': process.env.CLIENT_ID,
      'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(process.env.PAPAGO_TRANSLTE_URL as string, data, config);
    return res.data.message.result.translatedText;
  } catch (err) {
    return '';
  }
};
