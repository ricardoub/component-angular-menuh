import { MenuhPage } from './app.po';

describe('menuh App', () => {
  let page: MenuhPage;

  beforeEach(() => {
    page = new MenuhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
