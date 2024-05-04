import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import FinishedIcon from '@mui/icons-material/AssignmentTurnedIn';
import EventIcon from '@mui/icons-material/Event';
import HelpIcon from '@mui/icons-material/Help';
import { ListIcons } from 'Common/constants';
import { TestID } from 'src/testID';

export const SidebarListIcon: React.FC<{ icon: ListIcons; className: string }> = ({
  icon,
  className,
}) => {
  const testId = TestID.SidebarListIcon;
  switch (icon) {
    case ListIcons.Settings:
      return <SettingsIcon fontSize="small" className={className} data-testid={testId} />;
    case ListIcons.FinishedTasks:
      return <FinishedIcon fontSize="small" className={className} data-testid={testId} />;
    case ListIcons.EventIcon:
      return <EventIcon fontSize="small" className={className} data-testid={testId} />;
    case ListIcons.HelpIcon:
      return <HelpIcon fontSize="small" className={className} data-testid={testId} />;
    default:
      return <SettingsIcon fontSize="small" className={className} data-testid={testId} />;
  }
};
