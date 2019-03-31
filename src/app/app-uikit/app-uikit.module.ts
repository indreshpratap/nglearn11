import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uiComponents } from './components';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG } from './primeng';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIMENG
  ],
  exports: [
    ...uiComponents,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIMENG
  ],
  declarations: [...uiComponents]
})
export class AppUikitModule { } 
