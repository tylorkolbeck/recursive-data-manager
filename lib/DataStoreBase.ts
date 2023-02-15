import History from "./history/History";

class DataStoreBase {
  public history: History<StoreCommand> = new History();
  private _data: DataStoreData | null = null;
  protected subscribeCallback: SubscribeCallback | null = null;

  protected set(value: DataStoreData) {
    this._data = structuredClone(value);

    if (this.subscribeCallback !== null) this.subscribeCallback(this._get());
  }

  private _get(): DataStoreData {
    return structuredClone(this._data);
  }

  protected insert(command: InsertCommand): void {
    if (command.target === null) this.set(command.value);
  }

  protected delete(command: DeleteCommand): void {
    throw new Error("Delete not implemented");
  }
}

export default DataStoreBase;

export type SubscribeCallback = (data: DataStoreData) => void;

export interface DataStoreData {
  id: string;
  children: DataStoreData[];
}

export enum CommandOperation {
  delete = "delete",
  insert = "insert",
}

export interface StoreCommand {
  operation: CommandOperation;
  target: DataStoreData | null;
  value: DataStoreData | DataStoreData | null;
}

export interface InsertCommand extends StoreCommand {
  position: number | null;
}

export interface DeleteCommand extends StoreCommand {

}

export type Command = DeleteCommand | InsertCommand;
