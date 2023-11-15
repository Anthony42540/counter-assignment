import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter'

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const initialCount = screen.getByTestId("count");
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(initialCount).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const initialCount = screen.getByTestId("count");
  const incrementButton = screen.getByText('-');
  fireEvent.click(incrementButton);
  expect(initialCount).toHaveTextContent("-1");
});
