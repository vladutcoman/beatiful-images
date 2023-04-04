import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders Beautiful Images text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Beautiful Images/i);
  expect(linkElement).toBeInTheDocument();
});
