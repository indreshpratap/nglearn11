import { NgModule } from '@angular/core';
import { adminPages, adminPageRoutes } from './pages';
import { RouterModule } from '@angular/router';
import { AppUikitModule } from '../app-uikit/app-uikit.module';
import { adminComponents } from './components';

@NgModule({
  imports: [
    AppUikitModule,
    RouterModule.forChild(adminPageRoutes)
  ],
  declarations: [...adminPages,...adminComponents]
})
export class AppAdminModule { }
