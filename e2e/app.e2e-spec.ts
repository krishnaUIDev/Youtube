import { SrvupPage } from './app.po';

describe('Client App', () => {
  let page: SrvupPage;

  beforeEach(() => {
    page = new SrvupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
