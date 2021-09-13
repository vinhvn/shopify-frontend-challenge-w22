import type { NextApiRequest, NextApiResponse } from 'next';
import { subtractDate } from '@/utils/dates';
import type { PostData } from '@/utils/types';

const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_URL } = process.env;

const getPhotosByDate = async (endDate: string) => {
  const startDate = subtractDate(endDate, 4);
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}?api_key=${NEXT_PUBLIC_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`
  );
  const data = {
    new_date: subtractDate(startDate, 1),
    photos: await response.json().then((arr) => arr.reverse())
  };
  return data;
};

type ResponseData = {
  new_date: string;
  photos: PostData[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const date = req.query.date as string;
  res.status(200).json(await getPhotosByDate(date));
}
