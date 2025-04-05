export enum ListIcons {
  Settings = 'settings',
  FinishedTasks = 'finished-tasks',
  EventIcon = 'event-icon',
  HelpIcon = 'help-icon',
}

export const mockTasks = [
  {
    id: '1',
    category: 'Personal',
    text: 'Write UI tests',
    time: '08:01 am',
    done: false,
  },
  {
    id: '2',
    category: 'School',
    text: 'Write the to-do app UI code',
    time: '11:42 pm',
    done: false,
  },
  {
    id: '3',
    category: 'Work',
    text: 'Implement container-view design pattern',
    time: '06:20 pm',
    done: false,
  },
  {
    id: '4',
    category: 'Work',
    text: 'Make a base structure for the app',
    time: '10:45 am',
    done: true,
  },
];

export const mockCategories = [
  { label: 'Personal', color: 'red' },
  { label: 'School', color: 'blue' },
  { label: 'Work', color: 'yellow' },
];
