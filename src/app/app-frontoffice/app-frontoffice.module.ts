import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { foPageRoutes, foPages } from './pages';
import { AppUikitModule } from '../app-uikit/app-uikit.module';

@NgModule({
  imports: [
    AppUikitModule,
    RouterModule.forChild(foPageRoutes)
  ],
  declarations: foPages
})
export class AppFrontofficeModule { }
