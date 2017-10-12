import { ATPortalPage } from './app.po';

describe('at-portal App', () => {
  let page: ATPortalPage;

  beforeEach(() => {
    page = new ATPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
