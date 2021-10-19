import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

test('renders learn react link', () => {
  render(<CustomButton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
