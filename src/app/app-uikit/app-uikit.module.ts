import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uiComponents } from './components';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG } from './primeng';
import { HighlightDirective } from './directives/highlight.directive';
import { YesNoPipe } from './pipes/yesno.pipe';

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
    HighlightDirective,
    YesNoPipe,
    ReactiveFormsModule,
    ...PRIMENG
  ],
  declarations: [...uiComponents,YesNoPipe,HighlightDirective]
})
export class AppUikitModule { } 
