import { AspnetPage } from './app.po';

describe('aspnet App', function() {
  let page: AspnetPage;

  beforeEach(() => {
    page = new AspnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
