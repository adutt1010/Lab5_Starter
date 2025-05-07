// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber (4 tests)
test('valid phone numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone numbers', () => {
  expect(isPhoneNumber('123456')).toBe(false);        // no dash
  expect(isPhoneNumber('123-45-678')).toBe(false);    // wrong grouping
});

// isEmail (4 tests)
test('valid emails', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('user_name@domain.org')).toBe(true);
});
test('invalid emails', () => {
  expect(isEmail('invalid-email')).toBe(false);       // missing @domain
  expect(isEmail('test@.com')).toBe(false);           // missing domain name
});

// isStrongPassword (4 tests)
test('strong passwords', () => {
  expect(isStrongPassword('Password123')).toBe(true);
  expect(isStrongPassword('Strong_123')).toBe(true);
});
test('weak passwords', () => {
  expect(isStrongPassword('123')).toBe(false);        // must start with letter + length
  expect(isStrongPassword('!@#$%')).toBe(false);      // invalid chars
});

// isDate (4 tests)
test('valid dates', () => {
  expect(isDate('12/31/2023')).toBe(true);
  expect(isDate('1/1/2000')).toBe(true);
});
test('invalid dates', () => {
  expect(isDate('2020/01/01')).toBe(false);           // wrong format (YYYY/MM/DD)
  expect(isDate('12-31-1999')).toBe(false);           // wrong delimiter
});

// isHexColor (4 tests)
test('valid hex colors', () => {
  expect(isHexColor('#FF5733')).toBe(true);
  expect(isHexColor('#abc')).toBe(true);
});
test('invalid hex colors', () => {
  expect(isHexColor('1234')).toBe(false);             // length 4, no #
  expect(isHexColor('#12FGG4')).toBe(false);          // invalid hex digit G
});