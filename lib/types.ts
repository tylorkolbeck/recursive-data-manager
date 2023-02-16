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
  target: DataStoreData | DataStoreData[] | null;
  value: DataStoreData | DataStoreData[] | null;
}

export interface InsertCommand extends StoreCommand {
  target: DataStoreData | null;
  position?: number;
}

export interface DeleteCommand extends StoreCommand {

}

export type Command = DeleteCommand | InsertCommand;

export interface RecursiveOperationReturnData {
  mutatedItem: DataStoreData | null; // The original passed in item that will be mutated from the recusive operation
  itemUpdated: DataStoreData | null; // The item that was changed after the insert operation
}
