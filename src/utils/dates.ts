import { format, sub, parse, compareAsc } from 'date-fns';

export const subtractDate = (date: string, days: number) => {
  return format(
    sub(parse(date, 'yyyy-MM-dd', new Date()), { days }),
    'yyyy-MM-dd'
  );
};

export const getCurrentDate = () => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const formatFullDate = (date: string) => {
  return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM dd, yyyy');
};

export const checkValidDate = (date: string) => {
  return compareAsc(new Date(), parse(date, 'yyyy-MM-dd', new Date())) >= 0;
};
