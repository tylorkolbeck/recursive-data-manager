"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataStore_1 = require("./DataStore");
var DataStoreBase_1 = require("./DataStoreBase");
var testData = {
    id: "stage_1",
    children: [
        {
            id: "stage_sub_1",
            children: [
                {
                    id: "stage_sub_1_1",
                    children: [],
                },
                {
                    id: "stage_sub_1_2",
                    children: [],
                },
            ],
        },
        {
            id: "stage_sub_2",
            children: [
                {
                    id: "stage_sub_2_1",
                    children: [],
                },
                {
                    id: "stage_sub_2_2",
                    children: [],
                },
            ],
        },
    ],
};
var commands = [
    {
        operation: DataStoreBase_1.CommandOperation.insert,
        target: null,
        value: testData,
        position: null,
    },
];
// const initialCommand: InsertCommand = {
//   operation: CommandOperation.insert,
//   target: null,
//   value: testData,
//   position: null,
// };
var dataStore = new DataStore_1.default();
dataStore.subscribe(function (data) {
    console.log("** DATA *** \n", data);
});
dataStore.execute(commands[0]);
console.log("*** HISTORY *** \n ", dataStore.history.get());
//# sourceMappingURL=index.js.map