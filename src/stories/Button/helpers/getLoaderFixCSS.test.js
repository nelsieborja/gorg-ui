import getLoaderFixCSS from './getLoaderFixCSS';

describe('getLoaderFixCSS', () => {
  test('getLoaderFixCSS is defined as a function', () => {
    expect(getLoaderFixCSS).toBeDefined();
    expect(typeof getLoaderFixCSS).toBe('function');
  });

  test('Passing no param should not fail', () => {
    expect(getLoaderFixCSS()).toBeUndefined();
  });

  // test('Passing non-object value should not fail', () => {
  //   expect(getLoaderFixCSS(null)).toBeUndefined();
  //   expect(getLoaderFixCSS(undefined)).toBeUndefined();
  //   expect(getLoaderFixCSS(123)).toBeUndefined();
  //   expect(getLoaderFixCSS('123')).toBeUndefined();
  // });
  test.each([[null], [undefined], [123], ['123']])(
    'Passing non-object (%s) value should not fail',
    nonObject => {
      expect(getLoaderFixCSS(nonObject)).toBeUndefined();
    }
  );

  test('Passing an empty object should return a default string containing ".-loader"', () => {
    expect(getLoaderFixCSS({})).toEqual(expect.stringContaining('.-loader'));
    expect(getLoaderFixCSS({})).toEqual(expect.stringMatching(/\.-loader/));
    expect(getLoaderFixCSS({})).toMatch(/\.-loader/);
  });

  test('Passing "color" only should return string containing ".-loader"', () => {
    expect(getLoaderFixCSS({ color: 1 })).toMatch(/\.-loader/);
  });
});
