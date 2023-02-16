import { DataStoreData } from "./types";

export interface RecursiveInsertAtIndexReturnType {
  mutatedItem: DataStoreData | null; // The original passed in item that will be mutated from the recusive operation
  itemUpdated: DataStoreData | null; // The item that was changed after the insert operation
}

class RecursiveUtil {
  static RecursiveInsertAtIndex(
    item: DataStoreData,
    target: DataStoreData,
    value: DataStoreData[],
    arrayPosition?: number
  ): RecursiveInsertAtIndexReturnType {

    let itemUpdated;

    loop(item);
    
    function loop(parent: DataStoreData): DataStoreData {
      if (parent.id === target.id) {
        if (arrayPosition === undefined || arrayPosition === -1)
          parent.children.push(...value);
        else
          parent.children.splice(
            arrayPosition,
            0,
            ...value
          );
          itemUpdated = parent;
      } else if (parent.children.length > 0) {
        for (let i = 0; i < parent.children.length; i++) {
          loop(parent.children[i]);
        }
      } else {
        return null;
      }
    }


    return { mutatedItem: item, itemUpdated };
  }
}

export default RecursiveUtil;
