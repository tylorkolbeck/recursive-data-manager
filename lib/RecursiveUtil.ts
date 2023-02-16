import { DataStoreData, RecursiveOperationReturnData } from "./types";

class RecursiveUtil {
  static RecursiveInsertAtIndex(
    item: DataStoreData,
    target: DataStoreData,
    value: DataStoreData[],
    arrayPosition: number = -1
  ): RecursiveOperationReturnData {
    let accumulator: RecursiveOperationReturnData = {
      mutatedItem: item,
      itemUpdated: null,
    };

    const insertOperation = (item: DataStoreData) => {
      if (arrayPosition === -1) item.children.push(...value);
      else item.children.splice(arrayPosition, 0, ...value);
    };

    RecursiveUtil.loop(item, target, insertOperation, accumulator);

    return accumulator;
  }


  protected static loop(
    parent: DataStoreData,
    target: DataStoreData,
    operation: (item: DataStoreData) => void,
    accumulator: RecursiveOperationReturnData
  ): DataStoreData {
    if (parent.id === target.id) {
      operation(parent);
      accumulator.itemUpdated = parent;
    } else if (parent.children.length > 0)
      parent.children.forEach((child) =>
        RecursiveUtil.loop(child, target, operation, accumulator)
      );
    else return null;
  }
}

export default RecursiveUtil;
