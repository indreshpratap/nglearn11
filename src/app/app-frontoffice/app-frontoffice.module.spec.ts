import { AppFrontofficeModule } from './app-frontoffice.module';

describe('AppFrontofficeModule', () => {
  let appFrontofficeModule: AppFrontofficeModule;

  beforeEach(() => {
    appFrontofficeModule = new AppFrontofficeModule();
  });

  it('should create an instance', () => {
    expect(appFrontofficeModule).toBeTruthy();
  });
});
