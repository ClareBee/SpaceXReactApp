import { getYear } from './getYearFromUnix';
export const filterByYear = (data: any, year: number) => {
  return data.filter((item: any) => {
    const itemYear = getYear(item.date_utc);
    return itemYear === year;
  });
};
