import { renderHook } from '@testing-library/react-hooks';
import { useGetData } from './useGetData';
import getApi from './get';

jest.mock('./get');

const launchMock = getApi as jest.Mock;
const rocketMock = getApi as jest.Mock;

describe('useGet', () => {
  beforeEach(function () {
    jest.resetAllMocks();
  });

  it('returns data on successful request', async () => {
    const mockLaunchResponse = [
      {
        id: '123',
        name: 'FalconSat',
        date_utc: '2006-03-24T22:30:00.000Z',
        rocket: '5e9d0d95eda69955f709d1eb',
      },
    ];

    const mockRocketResponse = [
      {
        id: '5e9d0d95eda69955f709d1eb',
        name: 'Falcon',
      },
    ];

    const expectedLaunch = [
      {
        id: '123',
        name: 'FalconSat',
        date_utc: '2006-03-24T22:30:00.000Z',
        rocket: 'Falcon',
      },
    ];

    launchMock.mockResolvedValueOnce(mockLaunchResponse);
    rocketMock.mockResolvedValueOnce(mockRocketResponse);

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetData('/launches', '/rockets', true)
    );
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(expectedLaunch);
    expect(result.current.error).toEqual(null);
    expect(result.current.loading).toBeFalsy();
  });

  it('returns error on failed request', async () => {
    launchMock.mockResolvedValueOnce([]);
    rocketMock.mockRejectedValue(new Error('boo'));

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetData('/launches', '/rockets', true)
    );

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.error).not.toBeNull();
    expect(result.current.loading).toBeFalsy();
  });
});
