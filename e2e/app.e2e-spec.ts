import { NewjackAppPage } from './app.po';

describe('newjack-app App', function() {
  let page: NewjackAppPage;

  beforeEach(() => {
    page = new NewjackAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
