import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Try Fix Pro in the taskbar', () => {
  render(<App />);
  const taskbarLink = screen
    .getAllByRole('link', { name: /try fix pro/i })
    .find((link) => link.getAttribute('href') === '/tile-fixpro');
  expect(taskbarLink).toHaveAttribute('href', '/tile-fixpro');
});
