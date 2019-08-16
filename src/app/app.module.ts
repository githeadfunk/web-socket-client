import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { CallbackComponent } from './callback/callback.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    CallbackComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
