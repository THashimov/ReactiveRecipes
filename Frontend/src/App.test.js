test('Remove all white space and set lowercase', (title='Connect With Facebook') => {
  const path = '/' + title.replace(/\s|\//g, '').toLowerCase();
  expect(path).toBe('/connectwithfacebook');
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