import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

describe('Header', () => {
  it('displays reload button', () => {
    render(<Header handleReload={jest.fn()} reload={true} />);
    expect(screen.getByRole('button')).toHaveTextContent('Reload');
  });

  it('triggers reload on click', () => {
    const reloadFn = jest.fn();
    render(<Header handleReload={reloadFn} reload={true} />);
    screen.getByRole('button').click();
    expect(reloadFn).toHaveBeenCalled();
  });
});
