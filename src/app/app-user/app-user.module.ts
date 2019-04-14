import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userPages, userRoutes } from './pages';
import { AppUikitModule } from '../app-uikit/app-uikit.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    AppUikitModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: userPages
})
export class AppUserModule { }
