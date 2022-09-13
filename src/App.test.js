import { render, screen } from '@testing-library/react';
import App from './App';

test('Remove all white space and set lowercase', (title='Connect With Facebook') => {
  const path = '/' + title.replace(/\s|\//g, '').toLowerCase();
  expect(path).toBe('/connectwithfacebook');
});
