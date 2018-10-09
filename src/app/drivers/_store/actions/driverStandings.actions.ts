import { Action } from '@ngrx/store';
import { DriverStandingsResponseModel } from '../../_models/driverStandings.model';

export enum DriverStandingsActionTypes {
    GetDriverStandings = '[Drivers] Get Driver Standings',
    GetDriverStandingsSuccess = '[Drivers] Get Driver Standings Success',
    GetDriverStandingsFailure = '[Drivers] Get Driver Standings Failure',
    SelectDriver = '[Drivers] Select Driver',
}

export class GetDriverStandings implements Action {
    readonly type = DriverStandingsActionTypes.GetDriverStandings;
    constructor() {}
}

export class GetDriverStandingsSuccess implements Action {
    readonly type = DriverStandingsActionTypes.GetDriverStandingsSuccess;
    constructor(public payload: DriverStandingsResponseModel) {}
}

export class GetDriverStandingsFailure implements Action {
    readonly type = DriverStandingsActionTypes.GetDriverStandingsFailure;
    constructor(public payload: any) {}
}

export class SelectDriver implements Action {
    readonly type = DriverStandingsActionTypes.SelectDriver;
    constructor(public payload: string) {}
}

export type DriverStandingsActionsUnion =
  | GetDriverStandings
  | GetDriverStandingsSuccess
  | GetDriverStandingsFailure
  | SelectDriver;
