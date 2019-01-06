import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { foPageRoutes, foPages } from './pages';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(foPageRoutes)
  ],
  declarations: foPages
})
export class AppFrontofficeModule { }
