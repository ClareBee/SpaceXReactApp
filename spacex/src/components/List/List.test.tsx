import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { launches } from '../../utils/launchesData';
import List from './List';

describe('List', () => {
  it('displays launches', async () => {
    render(<List listItems={launches} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/FalconSat/)).toContainHTML('<p>FalconSat</p>');
  });
});
