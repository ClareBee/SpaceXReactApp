import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const header = await screen.findByText('Header');
  expect(header).toBeInTheDocument();
});
