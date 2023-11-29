/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, V> {
  key: T;
  value: V;
}

let dog: KeyValuePair<string, number> = {
  key: 'Fido',
  value: 5,
};

export {};