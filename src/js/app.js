
export default class ErrorRepository {
  constructor() {
    this.errorType = new Map([
      [101, 'Некорректное имя пользователя!'],
      [102, 'Неверный логин!'],
      [103, 'Неверный пароль!'],
    ]);
  }

  translate(code) {
    const description = this.errorType.get(code);
    if (!this.errorType.has(code)) {
      return 'Unknown error';
    }
    return description;
  }
}
