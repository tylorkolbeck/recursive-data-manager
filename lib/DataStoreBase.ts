import History from "./history/History";
import RecursiveUtil from "./RecursiveUtil";
import {
  DataStoreData,
  DeleteCommand,
  InsertCommand,
  RecursiveOperationReturnData,
  StoreCommand,
  SubscribeCallback,
} from "./types";

class DataStoreBase {
  public history: History<StoreCommand> = new History();
  private _data: DataStoreData | null = null;
  protected dataChangedCallback: SubscribeCallback | null = null;
  protected itemChangedCallback: SubscribeCallback | null = null;

  protected set(value: RecursiveOperationReturnData) {
    this._data = structuredClone(value.fullData);
    if (this.dataChangedCallback !== null) this.dataChangedCallback(this._get());
  }

  protected _get(): DataStoreData {
    return structuredClone(this._data);
  }

  protected insert(command: InsertCommand): void {
    if (command.target === null) {
      if (!Array.isArray(command.value)) {
        this.set({fullData: command.value, itemUpdated: null}); 
        return
      }
      else {
        throw new Error(
          "When inserting new data which is indicated by a target of 'null' the value cannot be an array"
        );
      }
    }

    const afterInsertValue = RecursiveUtil.RecursiveInsert(
      this._get(),
      command.target,
      this.putInArray(command.value),
      command.position
    );

    this.set(afterInsertValue);
  }

  protected delete(command: DeleteCommand): void {
    const afterDeleteValue = RecursiveUtil.RecursiveDelete(
      this._get(),
      command.target,
    )
  }

  private putInArray(value: DataStoreData | DataStoreData[]): DataStoreData[] {
    return Array.isArray(value) ? value : [value];
  }
}

export default DataStoreBase;
