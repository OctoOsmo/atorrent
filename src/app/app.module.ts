import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { TorrentsListComponent } from './components/torrents-list/torrents-list.component';
import {TorrentsService} from './services/torrents.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'torrents', component: TorrentsListComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TorrentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, TorrentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
