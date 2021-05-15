// 1st Mar 2020
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getOrdinal = (day: number): string => {
  if ([1, 21, 31].includes(day)) {
    return 'st';
  } else if (day === 2 || day === 22) {
    return 'nd';
  } else if (day === 3 || day === 23) {
    return 'rd';
  } else {
    return 'th';
  }
};

// e.g. 1st Mar 2020
export const formatDate = (dateUtc: string | undefined): string => {
  if (!dateUtc) {
    return 'n/a';
  }

  const date = new Date(dateUtc);
  const dayOfMonth = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  return `${dayOfMonth}${getOrdinal(dayOfMonth)} ${MONTHS[month]} ${year}`;
};
