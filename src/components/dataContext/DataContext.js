import { createContext } from "react";

const DataContext = createContext({
  toDoListState: [
    {
    date: '14.10.2022', // today
    tasks: [
        {
          name: 'Visit david',
          status: false,
          importance: 3,
          description: 'Lorem Ipsum Dolor Sit met...',
        },
        {
          name: 'Goceries For Dinner',
          status: false,
          importance: 1,
          description: 'Lorem Ipsum Dolor Sit met...',
        },
        {
          name: 'Fix Dad’s iPad',
          status: true,
          importance: 2,
          description: 'Lorem Ipsum Dolor Sit met...',
        },
      ],
    },
    {
      date: '15.10.2022', // tomorrow
      tasks: [
        {
          name: 'Visit david',
          status: false,
          importance: 3,
          description: 'Lorem Ipsum Dolor Sit met...',
      },
      {
          name: 'Goceries For Dinner',
          status: false,
          importance: 1,
          description: 'Lorem Ipsum Dolor Sit met...',
      },
      {
          name: 'Fix Dad’s iPad',
          status: true,
          importance: 2,
          description: 'Lorem Ipsum Dolor Sit met...',
      },
      ],
    },
    {
      date: '16.10.2022',
      tasks: [
        {
          name: 'Visit david',
          status: false,
          importance: 3,
          description: 'Lorem Ipsum Dolor Sit met...',
      },
      {
          name: 'Goceries For Dinner',
          status: false,
          importance: 1,
          description: 'Lorem Ipsum Dolor Sit met...',
      },
      {
          name: 'Fix Dad’s iPad',
          status: true,
          importance: 2,
          description: 'Lorem Ipsum Dolor Sit met...',
      },
      ],
    },
  ],
});

export default DataContext
