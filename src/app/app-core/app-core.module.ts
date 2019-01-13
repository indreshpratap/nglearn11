import { NgModule } from '@angular/core';
import { corePages } from './pages';
import { coreComponents } from './components';
import { AppUikitModule } from '../app-uikit/app-uikit.module';


@NgModule({
  imports: [
    AppUikitModule
  ],
  declarations: [...corePages, ...coreComponents]
})
export class AppCoreModule { }
