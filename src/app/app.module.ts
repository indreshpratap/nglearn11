import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { InterpolationComponent } from './examples/interpolation.component';
import { PropertyBindingComponent } from './examples/property-binding.component';
import { NgClassStyleComponent } from './examples/ngclass-style.component';
import { ConditionalComponent } from './examples/conditional.component';
import { NgForComponent } from './examples/ngfor.component';
import { YesNoPipe } from './pipes/yesno.pipe';
import { TodoComponent } from './examples/todo.component';
import { InputComponent } from './examples/input.component';
import { MessageComponent } from './examples/components/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    NgClassStyleComponent,
    ConditionalComponent,
    NgForComponent,
    YesNoPipe,
    TodoComponent,
    InputComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
