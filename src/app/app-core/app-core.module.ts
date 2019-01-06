import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { corePages } from './pages';
import { coreComponents } from './components';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...corePages, ...coreComponents]
})
export class AppCoreModule { }
