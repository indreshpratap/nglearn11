import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uiComponents } from './components';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...uiComponents,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...uiComponents]
})
export class AppUikitModule { } 
