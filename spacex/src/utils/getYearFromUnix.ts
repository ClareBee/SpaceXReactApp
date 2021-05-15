export const getYear = (utcString: string): number => {
  return Number(utcString.substring(0, 4));
};
