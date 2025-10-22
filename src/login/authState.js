export class authState {
  static Unknown = new authState('unknown');
  static authenticated = new authState('authenticated');
  static unauthenticated = new authState('unauthenticated');

  constructor(name) {
    this.name = name;
  }
}
