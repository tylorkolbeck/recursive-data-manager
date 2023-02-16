import { describe } from "node:test";
import DataStore from "../lib/DataStore";
import { Command, CommandOperation, DataStoreData, InsertCommand } from "../lib/types";
import { initalData } from "./test-data";

describe("Data Store Manager - initial setup", () => {
  let dataStore: DataStore;

  beforeEach(() => {
    dataStore = new DataStore();
  });

  test("Subscription callback getting called with passed store data", () => {
    expect.assertions(1);
    const insertCommand: InsertCommand = {
      operation: CommandOperation.insert,
      target: null,
      value: initalData,
    };

    dataStore.dataChanged((data: DataStoreData) => {
      expect(data).toEqual(initalData);
    });

    dataStore.execute(insertCommand);

  });

  test("Setting initial data", () => {
    const insertCommand: InsertCommand = {
      operation: CommandOperation.insert,
      target: null,
      value: initalData,
    };

    dataStore.execute(insertCommand);

    expect(dataStore.get()).toEqual(initalData);
  });


  test("Passed data has different memory reference then what is stored", () => {
    const insertCommand: InsertCommand = {
      operation: CommandOperation.insert,
      target: null,
      value: initalData,
    };

    dataStore.execute(insertCommand);

    expect(dataStore.get()).not.toBe(initalData);
  });

  test("It should throw an error if called with an unhandled command type", () => {
    const dummyCommand = 'some-operation-that-does-not-exist' as CommandOperation.insert;
    const command: Command = {
      operation: dummyCommand,
      target: null,
      value: initalData,
    }

    expect(() => dataStore.execute(command)).toThrow(`Command not found: ${dummyCommand}`)
  })

  test("History to not contain a command from an unkown operation", () => {
    const dummyCommand = 'some-operation-that-does-not-exist' as CommandOperation.insert;
    const command: Command = {
      operation: dummyCommand,
      target: null,
      value: initalData,
    }

    expect(() => dataStore.execute(command)).toThrow(`Command not found: ${dummyCommand}`)
    expect(dataStore.history.get()).toEqual([]);
  })

  test("History contains last insert command", () => {
    const insertCommand: InsertCommand = {
      operation: CommandOperation.insert,
      target: null,
      value: initalData,
    };

    dataStore.execute(insertCommand);

    expect(dataStore.history.get()[0]).toEqual(insertCommand);
  })

  test("History contains last delete command", () => {
    expect(false).toBe(true);
  })
});
