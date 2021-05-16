import { sortByYear } from './sortByYear';

describe('sort by Year', () => {
  it('returns in ascending order with asc flag', () => {
    const data = [
      {
        name: 'launchA',
        date_unix: 1174439400,
        date_utc: '2007-03-21T01:10:00.000Z',
      },
      {
        name: 'launchB',
        date_unix: 1247456100,

        date_utc: '2009-07-13T03:35:00.000Z',
      },
      {
        name: 'launchC',
        date_unix: 1143239400,
        date_utc: '2006-03-24T22:30:00.000Z',
      },
    ];
    const result = sortByYear(data, 'asc');
    expect(result[0].name).toEqual('launchC');
  });

  it('returns in descending order with desc flag', () => {
    const data = [
      {
        name: 'launchA',
        date_unix: 1174439400,
        date_utc: '2007-03-21T01:10:00.000Z',
      },
      {
        name: 'launchB',
        date_unix: 1247456100,

        date_utc: '2009-07-13T03:35:00.000Z',
      },
      {
        name: 'launchC',
        date_unix: 1143239400,
        date_utc: '2006-03-24T22:30:00.000Z',
      },
    ];
    const result = sortByYear(data, 'desc');
    expect(result[0].name).toEqual('launchB');
  });

  it('returns empty array if data missing', () => {
    const data = null;
    const result = sortByYear(data, 'desc');
    expect(result).toEqual([]);
  });
});
