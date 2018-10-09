import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import * as drivers from './';
import * as shared from '../_shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './_store/reducers';
import { DriverStandingsEffects } from './_store/effects/driverStandings.effects';
import { DriverResultsEffects } from './_store/effects/driverResults.effects';

import { NotFoundPageComponent } from '../_core/containers';
import { CoreModule } from '../_core/core.module';

const DRIVERS_STORE = [
  StoreModule.forFeature('drivers', reducers),
  EffectsModule.forFeature([DriverStandingsEffects, DriverResultsEffects]),
];

const DRIVERS_ROUTES = [
  { path: '', component: drivers.DriverStandingsPageComponent },
  { path: ':id', component: drivers.DriverSelectedPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DRIVERS_ROUTES),
    CoreModule,
    DRIVERS_STORE,
  ],
  declarations: [
    ...drivers.DRIVERS_CONTAINERS,
    ...drivers.DRIVERS_PRESENTATIONAL,
    ...shared.directives,
    ...shared.pipes
  ],
  exports: [
    RouterModule,
    ...drivers.DRIVERS_CONTAINERS,
    ...drivers.DRIVERS_PRESENTATIONAL,
  ],
  providers: [
    ...drivers.DRIVERS_SERVICES
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DriversModule { }
