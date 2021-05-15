import { getYear } from './getYearFromUnix';

export const sortByYear = (data: any, order: string) => {
  const sorted = data.sort(
    (a: any, b: any) => getYear(a.date_utc) - getYear(b.date_utc)
  );
  return order === 'asc' ? sorted : sorted.reverse();
};
