import { AppPage } from './app.po';

describe('angular-jiu-justu-course App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('to app!');
  });
});
