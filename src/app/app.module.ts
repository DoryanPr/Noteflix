import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { SeriesViewComponent } from './views/series-view/series-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SingleSerieViewComponent } from './views/single-serie-view/single-serie-view.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { NewSerieViewComponent } from './views/new-serie-view/new-serie-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    SeriesViewComponent,
    EditSerieViewComponent,
    ErrorViewComponent,
    SingleSerieViewComponent,
    HeaderComponent,
    ErrorsFormComponent,
    NewSerieViewComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
