import type { NextApiRequest, NextApiResponse } from 'next';
import type { PostData } from '@/utils/types';

const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_URL } = process.env;

const getPhotosByDate = async (date: string) => {
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}?api_key=${NEXT_PUBLIC_API_KEY}&date=${date}&thumbs=true`
  );
  const data = {
    photo: await response.json()
  };
  return data;
};

type ResponseData = {
  photo: PostData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const date = req.query.date as string;
  res.status(200).json(await getPhotosByDate(date));
}
