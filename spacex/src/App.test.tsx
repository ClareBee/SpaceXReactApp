import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', async () => {
  render(<App />);
  const header = screen.getByText(/launches/i);
  expect(header).toBeInTheDocument();
});
