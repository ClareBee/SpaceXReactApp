import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { launches } from '../../utils/launchesData';
import Actions from './Actions';

describe('Actions', () => {
  it('displays list of years as options', () => {
    render(
      <Actions
        filterLaunches={jest.fn()}
        sortLaunches={jest.fn()}
        items={launches}
        flag="asc"
      />
    );
    expect(screen.getByText('2016')).toContainHTML(
      '<option value="2016" data-testid="select-option">2016</option>'
    );
  });

  it('has a select that can be changed', () => {
    render(
      <Actions
        filterLaunches={jest.fn()}
        sortLaunches={jest.fn()}
        items={launches}
        flag="asc"
      />
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '2000' } });
    const options = screen.getAllByTestId('select-option') as [
      HTMLOptionElement
    ];
    expect(options[0].selected).toBeTruthy();
  });

  it('has a button to sort the launches', () => {
    const sortFn = jest.fn();
    render(
      <Actions
        filterLaunches={jest.fn()}
        sortLaunches={sortFn}
        items={launches}
        flag="asc"
      />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Sort by Ascending');
    button.click();
    expect(sortFn).toHaveBeenCalled();
  });
});
