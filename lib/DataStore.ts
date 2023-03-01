import DataStoreBase from "./DataStoreBase";
import { Command, DataStoreData, DeleteCommand, InsertCommand, SubscribeCallback } from "./types";

class DataStore extends DataStoreBase {
  constructor() {
    super();
  }

  public dataChanged(subscribeCallback: SubscribeCallback): void {
    this.dataChangedCallback = subscribeCallback;
  }

  public itemChanged(subscribeCallback: SubscribeCallback): void {
    this.itemChangedCallback = subscribeCallback;
  }

  public execute(command: Command): void {
    switch (command.operation) {
      case "insert":
        this.insert(command as InsertCommand);
        break;
      case "delete":
        this.delete(command as DeleteCommand);
        break;
      default:
        throw new Error("Command not found: " + command.operation);
    }

    this.history.push(command);
  }

  public get(): DataStoreData {
    return this._get();
  }
}

export default DataStore;
