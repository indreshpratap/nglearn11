import { AppUikitModule } from './app-uikit.module';

describe('AppUikitModule', () => {
  let appUikitModule: AppUikitModule;

  beforeEach(() => {
    appUikitModule = new AppUikitModule();
  });

  it('should create an instance', () => {
    expect(appUikitModule).toBeTruthy();
  });
});
