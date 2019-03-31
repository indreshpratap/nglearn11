import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { SeqService } from './services/seq.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppCoreModule } from './app-core/app-core.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCoreModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    
  ],
  providers: [ApiService, SeqService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
