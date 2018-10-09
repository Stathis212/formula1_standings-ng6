import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap, takeUntil } from 'rxjs/operators';

import {
  DriverStandingsActionTypes,
  GetDriverStandings,
  GetDriverStandingsSuccess,
  GetDriverStandingsFailure
} from '../actions/driverStandings.actions';
import { DriversService } from '../../_services/drivers.service';


@Injectable()
export class DriverStandingsEffects {

  constructor(
    private actions$: Actions,
    private driversService: DriversService,
    private router: Router,
  ) {}

  @Effect()
  getDrivers$ = this.actions$.pipe(
    ofType<GetDriverStandings>(DriverStandingsActionTypes.GetDriverStandings),
    map(action => action),
    switchMap(() => {
      return this.driversService.getDriverStandings().pipe(
        map(res => new GetDriverStandingsSuccess(res)),
        catchError(error => of(new GetDriverStandingsFailure(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  getDriversSuccess$ = this.actions$.pipe(
    ofType<GetDriverStandingsSuccess>(DriverStandingsActionTypes.GetDriverStandingsSuccess),
    map(drivers => drivers.payload),
    tap(drivers => {

    })
  );

  @Effect({ dispatch: false })
  getDriversFailure$ = this.actions$.pipe(
    ofType<GetDriverStandingsFailure>(DriverStandingsActionTypes.GetDriverStandingsFailure),
    map(action => action.payload),
    tap(drivers => {

    })
  );

}
