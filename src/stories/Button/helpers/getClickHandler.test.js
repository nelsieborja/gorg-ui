import getClickHandler from './getClickHandler';

describe('getClickHandler', () => {
  test('getClickHandler is defined as a function', () => {
    expect(getClickHandler).toBeDefined();
    expect(typeof getClickHandler).toBe('function');
  });

  test('Passing no param should not fail', () => {
    expect(getClickHandler()).toEqual(expect.any(Object));
  });

  const onClick = jest.fn();
  test('Passing onClick only should return onClick as a valid function', () => {
    expect(getClickHandler(onClick)).toStrictEqual({ onClick });
    expect(getClickHandler(onClick).onClick).toEqual(expect.any(Function));
    expect(typeof getClickHandler(onClick).onClick).toBe('function');
  });

  test('Passing onClick + loading should return empty object', () => {
    expect(getClickHandler(onClick, true)).toEqual({});
  });

  test('Passing onClick as an invalid function should return empty object', () => {
    expect(getClickHandler('not a function')).toEqual({});
  });
});
