import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { P } from './P';

describe('Paragraph', () => {
  it('should have no accessibility violations', async () => {
    render(<P fontSize={0.6}>a11y</P>);
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });
});
