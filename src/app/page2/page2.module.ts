import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';

const routes: Routes = [
  { path: '', component: Page2Component }
];

@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Page2Module { }
