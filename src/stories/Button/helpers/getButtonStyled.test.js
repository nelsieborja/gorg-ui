import getButtonStyled from './getButtonStyled';

describe('getButtonStyled', () => {
  test('getButtonStyled is defined as a function', () => {
    expect(getButtonStyled).toBeDefined();
    expect(typeof getButtonStyled).toBe('function');
  });

  test('passing any value should not fail', () => {
    expect(getButtonStyled('test')).toBeTruthy();
  });

  test('passing empty value should not fail', () => {
    expect(getButtonStyled()).toBeTruthy();
  });

  // test('passing null value should not fail', () => {
  //   expect(getButtonStyled(null)).not.toBeNull();
  // });

  // test('passing undefined value should not fail', () => {
  //   expect(getButtonStyled(undefined)).not.toBeUndefined();
  // });

  // test('passing object should not fail', () => {
  //   expect(getButtonStyled({ any: 'any' })).toBeTruthy();
  // });

  // test('passing array should not fail', () => {
  //   expect(getButtonStyled([])).toBeTruthy();
  // });
  test.each([
    [null, 'toBeNull'],
    [undefined, 'toBeUndefined'],
    [{ any: 'any' }, 'toBeFalsy'],
    [[], 'toBeFalsy']
  ])('Passing non-string (%s) value should not fail', (nonString, check) => {
    expect(getButtonStyled(nonString)).not[check]();
  });
});
