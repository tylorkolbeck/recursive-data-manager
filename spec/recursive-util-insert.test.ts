import RecursiveUtil from "../lib/RecursiveUtil";
import {
  insertIntoNestedChildWithMultipleValuesInArrayData,
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

    const { fullData, itemUpdated } = RecursiveUtil.RecursiveInsert(
      initial,
      target,
      value,
      position
    );
    expect(fullData).toEqual(returnResult.fullData);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert into top level item with array position", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoTopLevelWithPositionData
    );

    const { fullData, itemUpdated } = RecursiveUtil.RecursiveInsert(
      initial,
      target,
      value,
      position
    );
    expect(fullData).toEqual(returnResult.fullData);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert into nested child without position passed", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoNestedChildWithoutPositionData
    );

    const { fullData, itemUpdated } = RecursiveUtil.RecursiveInsert(
      initial,
      target,
      value,
      position
    );

    expect(fullData).toEqual(returnResult.fullData);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert into nested child with position passed", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoNestedChildWithPositionData
    );

    const { fullData, itemUpdated } = RecursiveUtil.RecursiveInsert(
      initial,
      target,
      value,
      position
    );

    expect(fullData).toEqual(returnResult.fullData);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert into nested child with multiple values in value array", () => {
    const { initial, target, value, returnResult, position } = structuredClone(
      insertIntoNestedChildWithMultipleValuesInArrayData
    );

    const { fullData, itemUpdated } = RecursiveUtil.RecursiveInsert(
      initial,
      target,
      value,
      position
    );

    expect(fullData).toEqual(returnResult.fullData);
    expect(itemUpdated).toEqual(returnResult.itemUpdated);
  });

  test("insert where target cannot be found", () => {
    expect(true).toBe(false);
  })
});
