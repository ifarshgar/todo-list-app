import { render, screen } from '@testing-library/react';
import { TestID } from 'src/testID';
import { SidebarTopBanner } from 'Views/SidebarTopBanner.view';

describe('SidebarTopBanner.view tests', () => {
  it('renders SidebarTopBanner', () => {
    const view = render(<SidebarTopBanner />);
    expect(view).not.toBeUndefined();
  });

  it('Checks title', () => {
    render(<SidebarTopBanner />);
    const view = screen.getByTestId(TestID.SidebarTopBannerTitle);
    expect(view).toBeInTheDocument();
  });

  it('Checks description', () => {
    render(<SidebarTopBanner />);
    const view = screen.getByTestId(TestID.SidebarTopBannerDescribtion);
    expect(view).toBeInTheDocument();
  });
});
