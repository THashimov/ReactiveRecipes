import { render, screen } from '@testing-library/react';
import App from './App';

test('Remove all white space and set lowercase', () => {
  const title = 'Get Started'
  const path = '/' + title.replace(/\s/g, '').toLowerCase();
  expect(path).toBe('/getstarted');
});
