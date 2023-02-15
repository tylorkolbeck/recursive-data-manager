class History<T> {
  private _history: T[] = [];

  constructor() {}

  public get() {
    return this._history;
  }

  public push(command: T): void {
    this._history.push(command);
  }

  public pop(): T {
    const lastCommand = this._history.pop();
    return lastCommand ? lastCommand : null;
  }
}

export default History;