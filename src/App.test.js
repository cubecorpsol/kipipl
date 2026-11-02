import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tile Fix Pro in the taskbar', () => {
  render(<App />);
  const taskbarLink = screen
    .getAllByRole('link', { name: /tile fix pro/i })
    .find((link) => link.getAttribute('href') === '/tile-fixpro');
  expect(taskbarLink).toHaveAttribute('href', '/tile-fixpro');
});
