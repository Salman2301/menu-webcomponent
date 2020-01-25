import { newE2EPage } from '@stencil/core/testing';

describe('wix-menu-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wix-menu-tag></wix-menu-tag>');

    const element = await page.find('wix-menu-tag');
    expect(element).toHaveClass('hydrated');
  });
});
