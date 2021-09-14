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
  const inputDate = parse(date, 'yyyy-MM-dd', new Date());
  return (
    compareAsc(new Date(), inputDate) >= 0 &&
    compareAsc(parse('1995-06-16', 'yyyy-MM-dd', new Date()), inputDate) <= 0
  );
};
