export const insertIntoTopLevelWithoutPositionData: any = {
  initial: {
    id: "1",
    children: [
      {
        id: "2",
        children: [
          {
            id: 4,
            children: [],
          },
        ],
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
        children: [
          {
            id: 4,
            children: [],
          },
        ],
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
    fullData: {
      id: "1",
      children: [
        {
          id: "2",
          children: [
            {
              id: 4,
              children: [],
            },
          ],
        },
        {
          id: "3",
          children: [],
        },
        {
          id: "4",
          children: [],
        },
      ],
    },
    itemUpdated: {
      id: "1",
      children: [
        {
          id: "2",
          children: [
            {
              id: 4,
              children: [],
            },
          ],
        },
        {
          id: "3",
          children: [],
        },
        {
          id: "4",
          children: [],
        },
      ],
    },
  },
  position: undefined,
};

export const insertIntoTopLevelWithPositionData: any = {
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
    fullData: {
      id: "1",
      children: [
        {
          id: "2",
          children: [],
        },
        {
          id: "4",
          children: [],
        },
        {
          id: "3",
          children: [],
        },
      ],
    },

    itemUpdated: {
      id: "1",
      children: [
        {
          id: "2",
          children: [],
        },
        {
          id: "4",
          children: [],
        },
        {
          id: "3",
          children: [],
        },
      ],
    },
  },

  position: 1,
};

export const insertIntoNestedChildWithoutPositionData: any = {
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
        ],
      },
    ],
  },

  target: {
    id: "3",
    children: [
      {
        id: "4",
        children: [],
      },
    ],
  },

  value: [
    {
      id: "5",
      children: [],
    },
  ],

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

    itemUpdated: {
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
  },

  position: undefined,
};

export const insertIntoNestedChildWithPositionData: any = {
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
        ],
      },
    ],
  },

  target: {
    id: "3",
    children: [
      {
        id: "4",
        children: [],
      },
    ],
  },

  value: [
    {
      id: "5",
      children: [],
    },
  ],

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
            {
              id: "4",
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
        {
          id: "4",
          children: [],
        },
      ],
    },
  },

  position: 0,
};

export const insertIntoNestedChildWithMultipleValuesInArrayData: any = {
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
        ],
      },
    ],
  },

  target: {
    id: "3",
    children: [
      {
        id: "4",
        children: [],
      },
    ],
  },

  value: [
    {
      id: "5",
      children: [],
    },
    {
      id: "6",
      children: [],
    },
  ],

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
            {
              id: "6",
              children: [],
            },
            {
              id: "4",
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
        {
          id: "6",
          children: [],
        },
        {
          id: "4",
          children: [],
        },
      ],
    },
  },

  position: 0,
};