import {
  DataStoreData,
  RecursiveDeleteOperationReturnData,
  RecursiveOperationReturnData,
} from "./types";

class RecursiveUtil {
  static RecursiveInsert(
    originalData: DataStoreData,
    target: DataStoreData,
    value: DataStoreData[],
    arrayPosition: number = -1
  ): RecursiveOperationReturnData {
    let accumulator: RecursiveOperationReturnData = {
      fullData: originalData,
      itemUpdated: null,
    };

    const insertOperation = (item: DataStoreData) => {
      if (arrayPosition === -1) item.children.push(...value);
      else item.children.splice(arrayPosition, 0, ...value);
    };

    RecursiveUtil.InsertLoop(
      originalData,
      target,
      insertOperation,
      accumulator
    );

    return accumulator;
  }

  static RecursiveDelete(
    originalData: DataStoreData,
    target: DataStoreData
  ): RecursiveDeleteOperationReturnData {
    let accumulator: RecursiveDeleteOperationReturnData = {
      fullData: null,
      itemUpdated: null,
      position: -1,
    };

    RecursiveUtil.DeleteLoop(
      originalData,
      target,
      accumulator,
    );

    return accumulator;
  }

  public static DeleteLoop(
    parent: DataStoreData,
    target: DataStoreData,
    accumulator: RecursiveDeleteOperationReturnData,
  ): void {
  if (parent.id === target.id) {
    // @ts-ignore
    parent = {id: null};
    accumulator.fullData = null;
    return
  }
   for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].id === target.id) {
      accumulator.itemUpdated = parent;
      accumulator.position = i;
      parent.children.splice(i, 1);
      return

    } else if (parent.children[i].children.length > 0) {
      RecursiveUtil.DeleteLoop(parent.children[i], target, accumulator);
    }
   }
  }

  private static InsertLoop(
    parent: DataStoreData,
    target: DataStoreData,
    operation: (item: DataStoreData) => void,
    accumulator: RecursiveOperationReturnData
  ): null {
    if (parent.id === target.id) {
      operation(parent);
      accumulator.itemUpdated = parent;
      return;
    } else if (parent.children.length > 0)
      for (let i = 0; i < parent.children.length; i++) {
        RecursiveUtil.InsertLoop(
          parent.children[i],
          target,
          operation,
          accumulator
        );
      }
    else return null;
  }
}

export default RecursiveUtil;
