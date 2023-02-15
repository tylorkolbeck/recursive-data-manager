import DataStoreBase from "./DataStoreBase";
import { Command, DataStoreData, DeleteCommand, InsertCommand, SubscribeCallback } from "./types";

class DataStore extends DataStoreBase {
  constructor() {
    super();
  }

  subscribe(subscribeCallback: SubscribeCallback): void {
    this.subscribeCallback = subscribeCallback;
  }

  execute(command: Command): void {
    switch (command.operation) {
      case "insert":
        this.insert(command as InsertCommand);
        break;
      case "delete":
        this.delete(command as DeleteCommand);
      default:
        throw new Error("Command not found: " + command.operation);
    }

    this.history.push(command);

  }

  get(): DataStoreData {
    return this._get();
  }
}

export default DataStore;
