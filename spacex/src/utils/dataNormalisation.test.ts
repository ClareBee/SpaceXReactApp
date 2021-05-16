import { normaliseData } from './dataNormalisation';
import { testLaunches, launches as typedLaunches } from './launchesData';
import { testRockets } from './rocketData';

describe('normaliseData', () => {
  it('transforms api payload into array of Launches', () => {
    expect(normaliseData(testLaunches, testRockets)).toEqual(typedLaunches);
  });

  it('meets constraints for Launch type', () => {
    const result = normaliseData(testLaunches, testRockets);
    const keys = Object.keys(result[0]);
    expect(keys).toEqual(['id', 'name', 'date_utc', 'rocket']);
  });
});
