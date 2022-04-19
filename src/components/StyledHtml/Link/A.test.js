import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { A } from './A';

describe('Link', () => {
  it('should have no accessibility violations', async () => {
    render(
      <A fontSize={0.6} linkTo="test.com" openInNewTab={true}>
        a11y
      </A>,
    );
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });
});
