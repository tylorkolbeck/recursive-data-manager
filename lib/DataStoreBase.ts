import History from "./history/History";
import RecursiveUtil from "./RecursiveUtil";
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
    if (command.target === null) {
      if (!Array.isArray(command.value)) {
        this.set(command.value); 
        return
      }
      else {
        throw new Error(
          "When inserting new data which is indicated by a target of 'null' the value cannot be an array"
        );
      }
    }

    RecursiveUtil.RecursiveInsertAtIndex(
      this._get(),
      command.target,
      this.putInArray(command.value),
      command.position
    );
  }

  protected delete(command: DeleteCommand): void {
    throw new Error("Delete not implemented");
  }

  private putInArray(value: DataStoreData | DataStoreData[]): DataStoreData[] {
    return Array.isArray(value) ? value : [value];
  }
}

export default DataStoreBase;
