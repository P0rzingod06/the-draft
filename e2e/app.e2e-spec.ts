import { DraftAppPage } from './app.po';

describe('draft-app App', function() {
  let page: DraftAppPage;

  beforeEach(() => {
    page = new DraftAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
