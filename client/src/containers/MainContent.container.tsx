import { useCallback, useContext } from 'react';
import Stack from '@mui/material/Stack';
import { MainContentTopBanner } from 'Views/MainContentTopBanner.view';
import { TasksContainer } from './Tasks.container';
import { AddTaskContainer } from './AddTask.container';
import { AppContext } from 'src/App.tsx';

export const MainContentContainer = () => {
  const { categories, tasks, setTasks, filter, showDoneTasks } = useContext(AppContext);

  const getTaskColor = useCallback(
    (taskCategory: string) => {
      const matchingCategory = categories.find((category) => category.label === taskCategory);
      return matchingCategory?.color ?? 'pink';
    },
    [categories]
  );

  const getFocusedTask = () => tasks.filter((task) => !task.done)[0];

  return (
    <Stack direction="column" className="main-content" p={2} width="60%">
      <MainContentTopBanner focusedTask={getFocusedTask()} />

      <AddTaskContainer categories={categories} tasks={tasks} setTasks={setTasks} />

      <TasksContainer
        getTaskColor={getTaskColor}
        tasks={tasks}
        setTasks={setTasks}
        showDoneTasks={showDoneTasks}
        filter={filter}
      />
    </Stack>
  );
};
