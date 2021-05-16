import { Launch } from '../types/types';
import { getYear } from './getYearFromUnix';

export const filterByYear = (
  data: Launch[] | null,
  year: number
): Launch[] | [] => {
  if (!data) {
    return [];
  }
  const dataToFilter = [...data];
  return dataToFilter.filter((item: any) => getYear(item.date_utc) === year);
};
