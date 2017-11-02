import { MIDPage } from './app.po';

describe('mid App', () => {
  let page: MIDPage;

  beforeEach(() => {
    page = new MIDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('m works!');
  });
});
