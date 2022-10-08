test('Remove all white space and set lowercase. Insert - between words', (title='Connect With Facebook') => {
  let new_title = '';
  for (let i = 0; i < title.length; i++) {
      if (i < 1) {
        new_title += title.charAt(i)
      }
      // ////// // // // / / /
      // ////// // // // / / /
      // ////// // // // / / /
      // ////// // // // / / /
      // ////// // // // / / /
      if (title.charAt(i) == /\/\\/) {
        new_title += '-';
        new_title += title.charAt(i);
        continue;
      }
      new_title += title.charAt(i)
  }


  const path = '/' + new_title.replace(/\s|\//g, '').toLowerCase();
  expect(path).toBe('/connect-with-facebook');
});

test('Take an array of strings and allocate a path as well as text', () => {
  const sidebarCards = ['Feed', 'Browse Recipes', 'Trending Recipes', 'Chose For Me', 'My Recipes', 'Breakfast', 'Lunch', 'Dinner', 'Shopping List']
  let paths = [];
  let titleCards = [];
  for (let i = 0; i < sidebarCards.length; i++) {
    if (sidebarCards[i] === 'Feed' || sidebarCards[i] === 'My Recipes') {
      titleCards.push(sidebarCards[i]);
      continue;
    } else {
      paths.push('/' + sidebarCards[i].replace(/\s/g, '').toLowerCase())
    }
  }
  expect(titleCards).toStrictEqual(['Feed', 'My Recipes']);
  expect(paths).toStrictEqual(['/browserecipes', '/trendingrecipes', '/choseforme', '/breakfast', '/lunch', '/dinner', '/shoppinglist']);
});


test('Remove all white space and set lowercase', (title='My Recipes') => {
  let className = title.replace(/\s|\//g, '');
  className = className.charAt(0).toLowerCase() + className.slice(1);
  className += 'Container';
  expect(className).toBe('myRecipesContainer');
});

test('Capitalise letters from api', (title='lunch/dinner') => {
  let newTitle = '';
  newTitle += (title.charAt(0).toUpperCase());
  for (let i = 1; i < title.length; i++) {
    newTitle += title.charAt(i);
    if(title.charAt(i) === '/') {
      newTitle = newTitle + title.charAt(i + 1).toUpperCase() + title.slice(i + 2);
      break;
    }
  }  
  expect(newTitle).toBe('Lunch/Dinner');
});