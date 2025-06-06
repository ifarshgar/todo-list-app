import React from 'react';
import Stack from '@mui/material/Stack';
import { Task } from 'Views/Task.view';
import { SetStateType, TaskType } from 'src/types';
import { deleteTask, persistTask } from 'Api/helper';

type TaskContainerPropTypes = {
  getTaskColor: (taskCategory: string) => string;
  tasks: TaskType[];
  setTasks: SetStateType<TaskType>;
  showDoneTasks: boolean;
  filter: string | null;
};

export const TasksContainer: React.FC<TaskContainerPropTypes> = ({
  getTaskColor,
  tasks,
  setTasks,
  showDoneTasks,
  filter,
}) => {
  const onDelete = (id: string) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
    deleteTask(id);
  };

  const onChange = (id: string, str: string) => {
    const clonedTasks = [...tasks];
    for (const task of clonedTasks) {
      if (task.id === id) {
        task.text = str;
        persistTask(task);
      }
    }
    setTasks(clonedTasks);
  };

  const onDone = (id: string) => {
    const clonedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
        persistTask(task);
      }
      return task;
    });
    setTasks(clonedTasks);
  };

  const filterTasksByDone = (items: TaskType[]): TaskType[] => {
    return items.filter((task) => !!task.done === showDoneTasks);
  };

  const filterTasksByCategory = (items: TaskType[]): TaskType[] => {
    if (filter) {
      return items.filter((task) => task.category === filter);
    }
    return items;
  };

  const getFilteredTasks = (): TaskType[] => {
    const filter1 = filterTasksByDone(tasks);
    const filter2 = filterTasksByCategory(filter1);
    return filter2;
  };

  return (
    <Stack className="tasks" mt={5} gap={2} height="40vh" sx={{ overflowY: 'auto' }}>
      {getFilteredTasks().map((task) => (
        <Task
          key={task.id}
          task={task}
          getTaskColor={getTaskColor}
          onChange={onChange}
          onDelete={onDelete}
          onDone={onDone}
        />
      ))}
    </Stack>
  );
};
