import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../_core/services';
import { DriversStorage } from '../../_core/storage';

import { DriverStandingsResponseModel } from '../_models/driverStandings.model';
import { DriverResultsResponseModel } from '../_models/driverResults.model';

@Injectable()
export class DriversService {

  constructor( private api: Api, private driversStorage: DriversStorage ) {}

  getDriverStandings(): Observable<DriverStandingsResponseModel> {
    return this.api.get<DriverStandingsResponseModel>('f1/2013/driverStandings.json');
  }

  getDriverResults(id: string): Observable<DriverResultsResponseModel> {
    return this.api.get<DriverResultsResponseModel>(`f1/2013/drivers/${id}/results.json`);
  }

}
