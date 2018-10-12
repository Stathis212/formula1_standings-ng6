import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromStandings from './driverStandings.reducer';
import * as fromResults from './driverResults.reducer';
import * as fromRoot from '../../../_core/store/reducers';

export interface DriversState {
  standings: fromStandings.State;
  results: fromResults.State;
}

export interface State extends fromRoot.State {
  drivers: DriversState;
}

export const reducers: ActionReducerMap<DriversState> = {
  standings: fromStandings.reducer,
  results: fromResults.reducer
};

export const getDriversState = createFeatureSelector<State, DriversState>('drivers');

// Standings State Selectors

export const getStandingsState = createSelector(
  getDriversState,
  (state: DriversState) => state.standings
);

export const getDriverEntitiesState = createSelector(
  getDriversState,
  state => state.standings
);

export const getSelectedDriverId = createSelector(
  getDriverEntitiesState,
  fromStandings.getSelectedId
);

export const {
  selectIds: getDriverIds,
  selectEntities: getDriverEntities,
  selectAll: getAllDriverStandings,
  selectTotal: getTotalDrivers,
} = fromStandings.driverAdapter.getSelectors(getDriverEntitiesState);

export const getSelectedDriver = createSelector(
  getDriverEntities,
  getSelectedDriverId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const getDriverStandingsSeason = createSelector(
  getStandingsState,
  fromStandings.getSeason
);

export const getDriverStandingsRound = createSelector(
  getStandingsState,
  fromStandings.getRound
);

export const getDriverStandingsLoading = createSelector(
  getStandingsState,
  fromStandings.getLoading
);

// Results State Selectors

export const getResultsState = createSelector(
  getDriversState,
  (state: DriversState) => state.results
);

export const getDriverResults = createSelector(
  getResultsState,
  fromResults.getResults
);

export const getDriverResultsLoading = createSelector(
  getResultsState,
  fromResults.getLoading
);

