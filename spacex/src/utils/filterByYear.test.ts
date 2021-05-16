import { filterByYear } from './filterByYear';
import { launches } from './launchesData';

describe('filter by year', () => {
  it('returns only launches matching a given year', () => {
    const result = filterByYear(launches, 2006);
    expect(result.length).toEqual(1);
  });

  it('returns an empty array if there are no matches', () => {
    const result = filterByYear(launches, 1700);
    expect(result.length).toEqual(0);
  });
});
