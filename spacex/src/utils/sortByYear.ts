import { Launch } from '../types/types';
import { getYear } from './getYearFromUnix';

export const sortByYear = (
  data: Launch[] | null,
  order: string
): Launch[] | [] => {
  if (!data) {
    return [];
  }
  const sorted = [...data].sort(
    (a: any, b: any) => getYear(a.date_utc) - getYear(b.date_utc)
  );
  return order === 'asc' ? sorted : sorted.reverse();
};
