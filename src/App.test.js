import { render, screen } from '@testing-library/react';
import App from './App';

test('Remove all white space and set lowercase', () => {
  const specialChars = /\W|_/g;
  const title = 'Register / Log In'
  let path = '/';
  if (title.match(specialChars)) {
    let i = 0;
    while (title[i] !== specialChars && title[i] != ' ') {
      path += title[i].toLowerCase();
      i++;
    }
  } else {
    path = '/' + title.replace(/\s/g, '').toLowerCase();
  }
  expect(path).toBe('/register');
});
