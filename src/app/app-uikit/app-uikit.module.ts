import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uiComponents } from './components';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ...uiComponents,
    CommonModule,
    RouterModule,
    FormsModule],
  declarations: [...uiComponents]
})
export class AppUikitModule { } 
