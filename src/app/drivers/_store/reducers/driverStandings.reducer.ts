import { DriverStandingsActionsUnion, DriverStandingsActionTypes } from '../actions/driverStandings.actions';
import { DriverStanding } from '../../_models/driverStandings.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const driverAdapter: EntityAdapter<DriverStanding> = createEntityAdapter<DriverStanding>({
  selectId: driver => driver.Driver.driverId
});

export interface State extends EntityState<DriverStanding> {
  loading: boolean;
  total: string;
  season: string;
  round: string;
  selectedDriverId: string | null;
}

export const defaultDriver: State = {
  ids: [],
  entities: {},
  selectedDriverId: null,
  total: null,
  season: null,
  round: null,
  loading: false
};

export const initialState = driverAdapter.getInitialState(defaultDriver);

export function reducer(state: State = initialState, action: DriverStandingsActionsUnion): State {
  switch (action.type) {
    case DriverStandingsActionTypes.GetDriverStandings: {
      return {
        ...state,
        loading: true,
      };
    }
    case DriverStandingsActionTypes.GetDriverStandingsSuccess: {
      return driverAdapter.addAll(addDriverProperties(action.payload.MRData.StandingsTable.StandingsLists[0].DriverStandings), {
        ...state,
        loading: false,
        total: action.payload.MRData.total,
        season: action.payload.MRData.StandingsTable.StandingsLists[0].season,
        round: action.payload.MRData.StandingsTable.StandingsLists[0].round,
      });
    }
    case DriverStandingsActionTypes.GetDriverStandingsFailure: {
      return {
        ...state,
        entities: {},
        loading: false,
      };
    }
    case DriverStandingsActionTypes.SelectDriver: {
      return {
        ...state,
        selectedDriverId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

const getDriversState = createFeatureSelector<State>('drivers');

export const getDrivers = createSelector(
  getDriversState,
  driverAdapter.getSelectors().selectAll
);

export const getSeason = (state: State) => state.season;

export const getRound = (state: State) => state.round;

export const getLoading = (state: State) => state.loading;

export const getSelectedId = (state: State) => state.selectedDriverId;

export const getEntities = (state: State) => state.entities;

function addDriverProperties(drivers) {
  drivers.forEach(function (driver) {
    driver.position = parseInt(driver.position, 10);
    driver.fullName = driver.Driver.givenName + ' ' + driver.Driver.familyName;
    driver.constructorName = driver.Constructors[0].name;
    driver.wins = parseInt(driver.wins, 10);
  });
  return drivers;
}
