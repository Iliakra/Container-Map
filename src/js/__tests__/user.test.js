/* eslint-disable no-undef */
import ErrorRepository from '../app';

const newErrorReposit = new ErrorRepository();

test('showing a description of code', () => {
  const received = newErrorReposit.translate(101);
  const expected = 'Некорректное имя пользователя!';
  expect(received).toBe(expected);
});

test('if there is no such code', () => {
  const received = newErrorReposit.translate(108);
  const expected = 'Unknown error';
  expect(received).toBe(expected);
});
