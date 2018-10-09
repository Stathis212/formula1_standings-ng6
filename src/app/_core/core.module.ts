import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import * as core from './';

/*
const CORE_STORE = [

];*/

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // CORE_STORE
  ],
  declarations: [
    ...core.containers,
    ...core.components
  ],
  exports: [
    RouterModule,
    ...core.containers,
    ...core.components
  ],
  providers: [
    ...core.services,
    ...core.storage,
  ],
})
export class CoreModule { }
