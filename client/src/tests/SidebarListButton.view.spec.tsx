import { render, screen } from '@testing-library/react';
import { ListIcons } from 'Common/constants';
import { SidebarListButton } from 'Views/SidebarListButton.view';

describe('SidebarListButton.view tests', () => {
  it('renders SidebarTopBanner', () => {
    const view = render(
      <SidebarListButton label="TestLabel" className="red" icon={ListIcons.EventIcon} />
    );
    expect(view).not.toBeUndefined();
  });

  it('Checks SidebarListButton label', () => {
    render(<SidebarListButton label="TestLabel" className="red" icon={ListIcons.EventIcon} />);
    const view = screen.getByText('TestLabel');
    expect(view).toBeInTheDocument();
  });
});
