import { format, sub, parse } from 'date-fns';

export const subtractDate = (date: string, days: number) => {
  return format(
    sub(parse(date, 'yyyy-MM-dd', new Date()), { days }),
    'yyyy-MM-dd'
  );
};

export const getCurrentDate = () => {
  return format(new Date(), 'yyyy-MM-dd');
};
