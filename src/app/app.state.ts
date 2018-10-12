import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { reducers } from './_core/store/reducers';
import { environment } from '../environments/environment';

export const AppState = [
  StoreModule.forRoot(reducers, {}),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router',
  }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'NgRx Drivers Store DevTools',
    logOnly: environment.production,
    maxAge: 25, //  Retains last 25 states
  }),
];
