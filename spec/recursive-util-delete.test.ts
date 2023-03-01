import RecursiveUtil from "../lib/RecursiveUtil";
import { deleteNestedTargetData, deleteTopLevelTargetData } from "./test-data/recursive-util-delete-data";


describe("Static Recursive Utility Class - [Delete Operations]", () => {
  test("Delete top level target", () => {
    const { initial, target, returnResult, position } = structuredClone(
      deleteTopLevelTargetData
    );

    const { fullData, itemUpdated } = RecursiveUtil.RecursiveDelete(initial, target);

    expect(fullData).toBe(null);
    expect(itemUpdated).toBe(null);
    expect(position).toBe(returnResult.position);
  })

  test("Delete nested target", () => {
    const { initial, target, returnResult } = structuredClone(
      deleteNestedTargetData
    );

    const { fullData, itemUpdated, position, parent } = RecursiveUtil.RecursiveDelete(
      initial,
      target
    );

    expect(itemUpdated).toEqual(returnResult.itemUpdated);
    expect(fullData).toBe(null);
    expect(position).toBe(returnResult.position);
  });

 
  // test("Delete non-existent target", () => {
  //   const deleteNonExistentTargetData: any = {
  //     initial: {
  //       id: "1",
  //       children: [
  //         {
  //           id: "2",
  //           children: [],
  //         },
  //         {
  //           id: "3",
  //           children: [
  //             {
  //               id: "4",
  //               children: [],
  //             },
  //             {
  //               id: "5",
  //               children: [],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  
  //     target: {
  //       id: "6",
  //       children: [],
  //     },
  
  //     returnResult: {
  //       fullData: {
  //         id: "1",
  //         children: [
  //           {
  //             id: "2",
  //             children: [],
  //           },
  //           {
  //             id: "3",
  //             children: [
  //               {
  //                 id: "4",
  //                 children: [],
  //               },
  //               {
  //                 id: "5",
  //                 children: [],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  
  //       itemUpdated: null,
  //     },
  //   };
  
  //   const { initial, target, returnResult } = structuredClone(
  //     deleteNonExistentTargetData
  //   );
  
  //   RecursiveUtil.RecursiveDelete(initial, target);
  
  //   const { fullData, itemUpdated } = RecursiveUtil.RecursiveDelete(
  //     initial,
  //     target
  //   );
  
  //   expect(itemUpdated).toEqual(returnResult.itemUpdated);
  //   expect(fullData).toBe(returnResult.fullData);
  // });
});
