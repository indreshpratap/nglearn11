import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { SeqService } from './services/seq.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppCoreModule } from './app-core/app-core.module';
import { AppAdminModule } from './app-admin/app-admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppCoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, SeqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
