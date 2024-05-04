import Stack from '@mui/material/Stack';
import { SidebarTopBanner } from 'Views/SidebarTopBanner.view';
import { useContext, useState } from 'react';
import { AppContext } from 'src/App';
import { SidePanelListContainer } from './SidePanelList.container';
import { SimpleDialog } from 'Views/SimpleDialog.view';
import Typography from '@mui/material/Typography';

export const SidePanelContainer = () => {
  const { categories, setCategories, setShowDoneTasks, filter, setFilter } = useContext(AppContext);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  return (
    <Stack direction="column" className="side-panel" p={3}>
      <SidebarTopBanner />

      <Stack className="divider" mb={5}>
        &nbsp;
      </Stack>

      <SidePanelListContainer
        categories={categories}
        setCategories={setCategories}
        setShowDoneTasks={setShowDoneTasks}
        filter={filter}
        setFilter={setFilter}
        setShowHelp={setShowHelp}
      />

      <SimpleDialog
        open={showHelp}
        handleClose={() => setShowHelp(false)}
        title="Quick Help"
        description={
          <>
            <Typography variant="body1">In order to add a new task:</Typography>
            <Typography variant="body1" gutterBottom>
              simply start typing in the designated placeholder on top of the app screen and then
              press 'Enter' on your keyboard to add the task to the list.
            </Typography>
            <Typography variant="body1" mt={2}>In order to cancel the current ongoing actions:</Typography>
            <Typography variant="body1">
              press 'Esc' on your keyboard to stop typing and cancel the current ongoing actions.
            </Typography>
          </>
        }
      />
    </Stack>
  );
};
