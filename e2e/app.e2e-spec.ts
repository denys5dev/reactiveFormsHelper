import { ViewChildUpdatePage } from './app.po';

describe('view-child-update App', () => {
  let page: ViewChildUpdatePage;

  beforeEach(() => {
    page = new ViewChildUpdatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
