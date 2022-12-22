import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ModalComponent} from './components/modal/modal.component';
import {PostComponent} from './components/post/post.component';
import {ApplicationComponent} from './components/application/application.component';
import {HowWorkComponent} from './components/how-work/how-work.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';

import {FocusDirective} from "./directives/focus.directive";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    ModalComponent,
    PostComponent,
    ApplicationComponent,
    HowWorkComponent,
    ContactComponent,
    HomeComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
