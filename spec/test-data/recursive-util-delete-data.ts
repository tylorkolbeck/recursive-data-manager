export const deleteTopLevelTargetData: any = {
  initial: {
    id: "1",
    children: [
      {
        id: "2",
        children: [],
      },
      {
        id: "3",
        children: [],
      },
    ],
  },

  target: {
    id: "1",
    children: [
      {
        id: "2",
        children: [],
      },
      {
        id: "3",
        children: [],
      },
    ],
  },

  value: [
    {
      id: "4",
      children: [],
    },
  ],

  returnResult: {
    fullData: null,

    itemUpdated: null,
    position: -1,
  },

  position: -1,
};

export const deleteNestedTargetData: any = {
  initial: {
    id: "1",
    children: [
      {
        id: "2",
        children: [],
      },
      {
        id: "3",
        children: [
          {
            id: "4",
            children: [],
          },
          {
            id: "5",
            children: [],
          },
        ],
      },
    ],
  },

  target: {
    id: "4",
    children: [],
  },

  returnResult: {
    fullData: {
      id: "1",
      children: [
        {
          id: "2",
          children: [],
        },
        {
          id: "3",
          children: [
            {
              id: "5",
              children: [],
            },
          ],
        },
      ],
    },

    itemUpdated: {
      id: "3",
      children: [
        {
          id: "5",
          children: [],
        },
      ],
    },
    position: 0,
  },
};
