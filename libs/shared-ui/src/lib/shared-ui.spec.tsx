import { render } from '@testing-library/react';

import NxTestSharedUi from './shared-ui';

describe('NxTestSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxTestSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
