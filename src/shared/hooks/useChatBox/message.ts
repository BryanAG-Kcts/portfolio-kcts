export class Message {
  private readonly _role: 'user' | 'model'
  private readonly _message

  constructor (role: 'user' | 'model', message: string) {
    this._role = role
    this._message = message
  }

  public get role (): string {
    return this._role
  }

  public get message (): string {
    return this._message
  }
}
