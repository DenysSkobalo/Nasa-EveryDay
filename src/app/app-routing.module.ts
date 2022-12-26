import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApplicationComponent} from "./components/application/application.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {DocsComponent} from "./components/docs/docs.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'app', component: ApplicationComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
