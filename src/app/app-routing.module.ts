import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthViewComponent} from "./views/auth-view/auth-view.component";
import {ErrorViewComponent} from "./views/error-view/error-view.component";
import {AuthGuard} from "./guards/auth.guard";
import {SeriesViewComponent} from "./views/series-view/series-view.component";

const routes: Routes = [
  {path: '', canActivate:[AuthGuard], component: SeriesViewComponent},
  {path: 'home', canActivate:[AuthGuard], component: SeriesViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
