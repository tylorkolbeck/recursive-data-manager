import { DataStoreData } from "../lib/types";

export const initalData: DataStoreData = {
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