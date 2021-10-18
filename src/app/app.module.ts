import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import {AuthService} from "./services/auth/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import { SeriesViewComponent } from './views/series-view/series-view.component';
import { GridViewComponent } from './views/grid-view/grid-view.component';
import { RowItemComponent } from './components/row-item/row-item.component';
import { ColItemComponent } from './components/col-item/col-item.component';
import { CardComponent } from './components/card/card.component';
import { SingleSerieViewComponent } from './views/single-serie-view/single-serie-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { NewSerieViewComponent } from './views/new-serie-view/new-serie-view.component';
import { CommentaryFormComponent } from './components/commentary-form/commentary-form.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    ErrorViewComponent,
    HeaderComponent,
    ErrorsFormComponent,
    SeriesViewComponent,
    GridViewComponent,
    RowItemComponent,
    ColItemComponent,
    CardComponent,
    SingleSerieViewComponent,
    EditSerieViewComponent,
    SerieFormComponent,
    NewSerieViewComponent,
    CommentaryFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
