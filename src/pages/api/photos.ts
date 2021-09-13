import type { NextApiRequest, NextApiResponse } from 'next';
import { subtractDate } from '@/utils/dates';

const { NEXT_PUBLIC_API_KEY } = process.env;
const API_URL = 'https://api.nasa.gov/planetary/apod';

const getPhotosByDate = async (endDate: string) => {
  const startDate = subtractDate(endDate, 9);
  const response = await fetch(
    `${API_URL}?api_key=${NEXT_PUBLIC_API_KEY}&start_date=${startDate}&end_date=${endDate}`
  );
  const data = {
    new_date: startDate,
    photos: await response.json()
  };
  return data;
};

type ResponseData = {
  new_date: string;
  photos: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const date = req.query.date as string;
  res.status(200).json(await getPhotosByDate(date));
}
