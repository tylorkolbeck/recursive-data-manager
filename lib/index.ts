import DataStore from "./DataStore";
import {
  Command,
  CommandOperation,
  DataStoreData,
  DeleteCommand,
  InsertCommand,
} from "./types";

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
  } as InsertCommand,
  {
    operation: CommandOperation.delete,
    target: {
      id: "stage_sub_1_1",
      children: [],
    },
  } as DeleteCommand,
];

// const initialCommand: InsertCommand = {
//   operation: CommandOperation.insert,
//   target: null,
//   value: testData,
//   position: null,
// };

const insertCmd = commands[0];
const deleteCmd = commands[1];

const dataStore = new DataStore();
dataStore.dataChanged((data: DataStoreData) => {
  console.log("*** DATA *** \n", JSON.stringify(data, null, 2));
});

dataStore.execute(insertCmd);
console.log("*** HISTORY *** \n ", dataStore.history.get());
