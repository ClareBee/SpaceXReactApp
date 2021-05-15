import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useGet } from './useGet';

describe('useGet', () => {
  it('returns data on successful request', async () => {
    const mock = new MockAdapter(axios);

    const mockResponse = {
      data: [
        {
          name: 'FalconSat',
          date_utc: '2006-03-24T22:30:00.000Z',
          rocket: '5e9d0d95eda69955f709d1eb',
        },
      ],
    };

    mock
      .onGet(process.env.REACT_APP_API_URL + '/launches')
      .reply(200, mockResponse);
    const { result, waitForNextUpdate } = renderHook(() => useGet('/launches'));

    expect(result.current.data).toEqual(null);
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockResponse);
    expect(result.current.error).toEqual(null);
    expect(result.current.loading).toBeFalsy();
  });

  it('returns error on failed request', async () => {
    const mock = new MockAdapter(axios);

    mock.onGet(process.env.REACT_APP_API_URL + '/launches').reply(500, null);
    const { result, waitForNextUpdate } = renderHook(() => useGet('/launches'));

    expect(result.current.data).toEqual(null);
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(null);
    expect(result.current.error).not.toBeNull();
    expect(result.current.loading).toBeFalsy();
  });
});
