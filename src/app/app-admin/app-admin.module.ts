import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminPages, adminPageRoutes } from './pages';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(adminPageRoutes)
  ],
  declarations: adminPages
})
export class AppAdminModule { }
