import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap, takeUntil } from 'rxjs/operators';

import {
  DriverResultsActionTypes,
  GetDriverResults,
  GetDriverResultsSuccess,
  GetDriverResultsFailure
} from '../actions/driverResults.actions';
import { DriversService } from '../../_services/drivers.service';


@Injectable()
export class DriverResultsEffects {

  constructor(
    private actions$: Actions,
    private driversService: DriversService,
    private router: Router,
  ) {}

  @Effect()
  getDrivers$ = this.actions$.pipe(
    ofType<GetDriverResults>(DriverResultsActionTypes.GetDriverResults),
    map(action => action.payload),
    switchMap(id => {
      return this.driversService.getDriverResults(id).pipe(
        map(res => new GetDriverResultsSuccess(res)),
        catchError(error => of(new GetDriverResultsFailure(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  getDriversSuccess$ = this.actions$.pipe(
    ofType<GetDriverResultsSuccess>(DriverResultsActionTypes.GetDriverResultsSuccess),
    map(drivers => drivers.payload),
    tap(drivers => {
      // console.log(drivers);
    })
  );

  @Effect({ dispatch: false })
  getDriversFailure$ = this.actions$.pipe(
    ofType<GetDriverResultsFailure>(DriverResultsActionTypes.GetDriverResultsFailure),
    map(action => action.payload),
    tap(drivers => {

    })
  );

}
