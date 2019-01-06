import { AppAdminModule } from './app-admin.module';

describe('AppAdminModule', () => {
  let appAdminModule: AppAdminModule;

  beforeEach(() => {
    appAdminModule = new AppAdminModule();
  });

  it('should create an instance', () => {
    expect(appAdminModule).toBeTruthy();
  });
});
