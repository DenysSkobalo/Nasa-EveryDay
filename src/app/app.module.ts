import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {HeaderComponent} from './components/header/header.component';
import {ModalComponent} from './components/modal/modal.component';
import {PostComponent} from './components/post/post.component';
import {ApplicationComponent} from './components/application/application.component';
import {HowWorkComponent} from './components/how-work/how-work.component';
import {ContactComponent} from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    ModalComponent,
    PostComponent,
    ApplicationComponent,
    HowWorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
