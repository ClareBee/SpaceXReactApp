import { Launch } from './dataNormalisation';
import { getYear } from './getYearFromUnix';

export const sortByYear = (
  data: Launch[] | null,
  order: string
): Launch[] | [] => {
  if (!data) {
    return [];
  }
  const dataToSort = [...data];
  const sorted = dataToSort.sort(
    (a: any, b: any) => getYear(a.date_utc) - getYear(b.date_utc)
  );
  return order === 'asc' ? sorted : sorted.reverse();
};
