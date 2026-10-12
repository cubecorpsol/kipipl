import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
test('renders Try Fix Pro in the taskbar', () => {
  render(<App />);
  const taskbarLink = screen
    .getAllByRole('link', { name: /try fix pro/i })
    .find((link) => link.getAttribute('href') === '/tile-fixpro');
  expect(taskbarLink).toHaveAttribute('href', '/tile-fixpro');
=======
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> e5a0e02f1fc38dfe9e4e82b7dcad89b74dfe2727
});
