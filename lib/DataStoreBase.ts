import History from "./history/History";
import {
  DataStoreData,
  DeleteCommand,
  InsertCommand,
  StoreCommand,
  SubscribeCallback,
} from "./types";

class DataStoreBase {
  public history: History<StoreCommand> = new History();
  private _data: DataStoreData | null = null;
  protected subscribeCallback: SubscribeCallback | null = null;

  protected set(value: DataStoreData) {
    this._data = structuredClone(value);

    if (this.subscribeCallback !== null) this.subscribeCallback(this._get());
  }

  protected _get(): DataStoreData {
    return structuredClone(this._data);
  }

  protected insert(command: InsertCommand): void {
    if (command.target === null) this.set(command.value);

    DataStoreBase.RecursiveInsertAtIndex(
      this._get(),
      command
    );
  }

  protected delete(command: DeleteCommand): void {
    throw new Error("Delete not implemented");
  }

  private static RecursiveInsertAtIndex(
    parent: DataStoreData,
    command: InsertCommand
  ): DataStoreData {
    console.log("RECURSIVE INSERT NOT IMPLEMENTED");
  }
}

export default DataStoreBase;
