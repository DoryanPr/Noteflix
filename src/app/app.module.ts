import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import {AuthService} from "./services/auth/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import { SeriesViewComponent } from './views/series-view/series-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    ErrorViewComponent,
    HeaderComponent,
    ErrorsFormComponent,
    SeriesViewComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
