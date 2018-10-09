import { Action } from '@ngrx/store';
import { DriverResultsResponseModel } from '../../_models/driverResults.model';

export enum DriverResultsActionTypes {
  GetDriverResults = '[Drivers] Get Driver Results',
  GetDriverResultsSuccess = '[Drivers] Get Driver Results Success',
  GetDriverResultsFailure = '[Drivers] Get Driver Results Failure',
}

export class GetDriverResults implements Action {
    readonly type = DriverResultsActionTypes.GetDriverResults;
    constructor(public payload: string) {}
}

export class GetDriverResultsSuccess implements Action {
    readonly type = DriverResultsActionTypes.GetDriverResultsSuccess;
    constructor(public payload: DriverResultsResponseModel) {}
}

export class GetDriverResultsFailure implements Action {
    readonly type = DriverResultsActionTypes.GetDriverResultsFailure;
    constructor(public payload: any) {}
}

export type DriverResultsActionsUnion =
  | GetDriverResults
  | GetDriverResultsSuccess
  | GetDriverResultsFailure;
