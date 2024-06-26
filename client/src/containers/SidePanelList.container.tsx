import React from 'react';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import { SidebarListButton } from 'Views/SidebarListButton.view';
import { FilterItem } from 'Views/FilterItem.view';
import { AddFilterContainer } from './AddFilter.container';
import { ListIcons } from 'Common/constants';
import { CategoryType, SetStateType, SetStateTypeSingle } from 'src/types';

export const SidePanelListContainer: React.FC<{
  setShowDoneTasks: SetStateTypeSingle<boolean>;
  categories: CategoryType[];
  setCategories: SetStateType<CategoryType>;
  filter: string | null;
  setFilter: SetStateTypeSingle<string | null>;
  setShowHelp: SetStateTypeSingle<boolean>;
}> = ({ setShowDoneTasks, categories, setCategories, filter, setFilter, setShowHelp }) => {
  const filterHandler = (label: string) => {
    if (label) {
      if (label === filter) {
        setFilter(null);
      } else {
        setFilter(label);
      }
    } else {
      setFilter(null);
    }
  };

  return (
    <List>
      <SidebarListButton
        label="To-Do Tasks"
        className="light-grey"
        icon={ListIcons.EventIcon}
        mt={2}
        onClick={() => setShowDoneTasks(false)}
      />

      <Stack className="side-panel-categories">
        {categories.map((category) => (
          <FilterItem
            key={category.label}
            label={category.label}
            className={category.color}
            clickHandler={() => filterHandler(category.label)}
            selected={category.label === filter}
          />
        ))}
      </Stack>

      <AddFilterContainer categories={categories} setCategories={setCategories} />

      <SidebarListButton
        label="Finished tasks"
        className="light-grey"
        icon={ListIcons.FinishedTasks}
        mt={2}
        onClick={() => setShowDoneTasks(true)}
      />

      <SidebarListButton
        label="Help"
        className="light-grey"
        icon={ListIcons.HelpIcon}
        mt={2}
        onClick={() => setShowHelp(true)}
      />
    </List>
  );
};
