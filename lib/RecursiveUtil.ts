import { DataStoreData, RecursiveDeleteOperationReturnData, RecursiveOperationReturnData } from "./types";

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

    
    RecursiveUtil.InsertLoop(originalData, target, insertOperation, accumulator);

    return accumulator;
  }


  static RecursiveDelete(
    originalData: DataStoreData,
    target: DataStoreData,
  ): RecursiveDeleteOperationReturnData {

    let accumulator: RecursiveDeleteOperationReturnData = {
      fullData: originalData,
      itemUpdated: null,
      position: -1,
      parent: null
    };

    const deleteOperation = (item: DataStoreData) => {

      RecursiveUtil.DeleteLoop(originalData, target, accumulator);

      // if (arrayPosition === -1) item.children.push(...value);
      // else item.children.splice(arrayPosition, 0, ...value);
    };

    let lastParent: DataStoreData | null = null;
    RecursiveUtil.InsertLoop(originalData, target, deleteOperation, accumulator);

    // const deleteOperation = (item: DataStoreData) => {
    //   if (arrayPosition === -1) item.children.push(...value);
    //   else item.children.splice(arrayPosition, 0, ...value);
    // };

    return accumulator;
    
  }

  private static DeleteLoop(
    parent: DataStoreData,
    target: DataStoreData,
    // operation: (item: DataStoreData) => void,
    accumulator: RecursiveDeleteOperationReturnData): void {
      // handle if the top level is the one being deleted
      if (parent.id === target.id && accumulator.parent === null) {
        accumulator.position = null;
        accumulator.parent = null;
        accumulator.itemUpdated = parent;
        accumulator.fullData = null;
        return
        // this is a delete of everything...
      } else {
        accumulator.parent = parent;
        for (let i = 0; i < parent.children.length; i++) {
          if (parent.children[i].id === target.id) {
            accumulator.itemUpdated = parent;
            accumulator.position = i;
            parent.children.splice(i, 1);
          }
        }
      }

     
    }

  private static InsertLoop(
    parent: DataStoreData,
    target: DataStoreData,
    operation: (item: DataStoreData) => void,
    accumulator: RecursiveOperationReturnData,
  ): null {


    if (parent.id === target.id) {
      operation(parent);
      accumulator.itemUpdated = parent;
      return
    } else if (parent.children.length > 0)
    for (let i = 0; i < parent.children.length; i++) {
      RecursiveUtil.InsertLoop(parent.children[i], target, operation, accumulator)
    }
    else return null;
  }
}

export default RecursiveUtil;
