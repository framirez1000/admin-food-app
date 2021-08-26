import React from 'react';
import { render, screen } from './customRender';
import App from './App';
/*/import { react } from '@babel/types';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('<App /> rendering', async () => {
  render(<App />);
  expect(screen).toMatchSnapshot();
})
