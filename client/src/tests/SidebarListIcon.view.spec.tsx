import { render, screen } from '@testing-library/react';
import { SidebarListIcon } from 'Views/SidebarListIcon.view';
import { TestID } from 'src/testID';
import { ListIcons } from 'Common/constants';

describe('SidebarTopBanner.view tests', () => {
  it('renders SidebarTopBanner', () => {
    const view = render(<SidebarListIcon icon={ListIcons.EventIcon} className="light-grey" />);
    expect(view).not.toBeUndefined();
  });

  it('Checks the sidebar list icon', () => {
    render(<SidebarListIcon icon={ListIcons.EventIcon} className="light-grey" />);
    const view = screen.getByTestId(TestID.SidebarListIcon);
    expect(view).toHaveClass('light-grey');
  });
});
