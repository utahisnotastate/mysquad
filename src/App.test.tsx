import React from 'react';
import { render, screen } from '@testing-library/react';
import MySquad from "./components/MySquad";

test('renders learn react link', () => {
  render(<MySquad />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
