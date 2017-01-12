import { GarageOpenerPage } from './app.po';

describe('garage-opener App', function() {
  let page: GarageOpenerPage;

  beforeEach(() => {
    page = new GarageOpenerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
