import DataStore from "./DataStore";
import { Command, CommandOperation, DataStoreData } from "./types";

const testData: DataStoreData = {
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

const commands: Command[] = [
  {
    operation: CommandOperation.insert,
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

const dataStore = new DataStore();
dataStore.dataChanged((data: DataStoreData) => {
  console.log("*** DATA *** \n", data);
});

dataStore.execute(commands[0]);
console.log("*** HISTORY *** \n ", dataStore.history.get());
