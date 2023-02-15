import DataStoreBase, {
  Command,
  DeleteCommand,
  InsertCommand,
  SubscribeCallback,
} from "./DataStoreBase";

class DataStore extends DataStoreBase {
  constructor() {
    super();
  }

  subscribe(subscribeCallback: SubscribeCallback): void {
    this.subscribeCallback = subscribeCallback;
  }

  execute(command: Command): void {
    // this.checkCommandData()
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

  get(): any {}
}

export default DataStore;
