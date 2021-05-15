import { Launch } from './dataNormalisation';
import { getYear } from './getYearFromUnix';

export const filterByYear = (
  data: [Launch] | null,
  year: number
): Launch[] | [] => {
  if (!data) {
    return [];
  }
  const dataToFilter = [...data];
  return dataToFilter.filter((item: any) => {
    const itemYear = getYear(item.date_utc);
    return itemYear === year;
  });
};
