import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2/:uid', component: Test2Component },
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
