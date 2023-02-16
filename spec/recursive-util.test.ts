import RecursiveUtil from "../lib/RecursiveUtil";
import {
  insertIntoNestedChildWithoutPositionData,
  insertIntoNestedChildWithPositionData,
  insertIntoTopLevelWithoutPositionData,
  insertIntoTopLevelWithPositionData,
} from "./recursive-util-test-data";

describe("Static Recursive Utility Class", () => {
  test("insert into top level without position", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoTopLevelWithoutPositionData
    );

    const { mutatedItem, itemUpdated } = RecursiveUtil.RecursiveInsertAtIndex(
      initial,
      target,
      value,
      position
    );
    expect(mutatedItem).toEqual(returnResult.mutatedItem);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert into top level item with array position", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoTopLevelWithPositionData
    );

    const { mutatedItem, itemUpdated } = RecursiveUtil.RecursiveInsertAtIndex(
      initial,
      target,
      value,
      position
    );
    expect(mutatedItem).toEqual(returnResult.mutatedItem);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert into nested child without position passed", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoNestedChildWithoutPositionData
    );

    const { mutatedItem, itemUpdated } = RecursiveUtil.RecursiveInsertAtIndex(
      initial,
      target,
      value,
      position
    );

    expect(mutatedItem).toEqual(returnResult.mutatedItem);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert into nested child with position passed", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoNestedChildWithPositionData
    );

    const { mutatedItem, itemUpdated } = RecursiveUtil.RecursiveInsertAtIndex(
      initial,
      target,
      value,
      position
    );

    expect(mutatedItem).toEqual(returnResult.mutatedItem);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });
});
