import { formatDate, getOrdinal } from './formatDate';

describe('formatDate', () => {
  it('returns a formatted date given a utc string', () => {
    const date = formatDate('2009-07-13T03:35:00.000Z');
    expect(date).toEqual('13th Jul 2009');
  });
  it('returns n/a if string missing', () => {
    const date = formatDate(undefined);
    expect(date).toEqual('n/a');
  });
});

describe('ordinals', () => {
  it('returns st for 1, 21, 31', () => {
    const testData = [1, 21];
    testData.forEach((date) => {
      expect(getOrdinal(date)).toEqual('st');
    });
  });

  it('returns nd for 2, 22, 31', () => {
    const testData = [2, 22];
    testData.forEach((date) => {
      expect(getOrdinal(date)).toEqual('nd');
    });
  });

  it('returns rd for 3, 23', () => {
    const testData = [3, 23];
    testData.forEach((date) => {
      expect(getOrdinal(date)).toEqual('rd');
    });
  });

  it('returns th for 4, 25', () => {
    const testData = [4, 25];
    testData.forEach((date) => {
      expect(getOrdinal(date)).toEqual('th');
    });
  });
});
