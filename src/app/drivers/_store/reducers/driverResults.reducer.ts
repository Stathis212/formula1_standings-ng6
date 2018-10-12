import { DriverResultsActionsUnion, DriverResultsActionTypes } from '../actions/driverResults.actions';
import { createFeatureSelector } from '@ngrx/store';
import { RaceTable } from '../../_models/driverResults.model';

export interface State {
  loading: boolean;
  results: RaceTable;
}

const initialState: State = {
  loading: false,
  results: null
};

export function reducer(state = initialState, action: DriverResultsActionsUnion): State {
  switch (action.type) {
    case DriverResultsActionTypes.GetDriverResults: {
      return {
        ...state,
        loading: true,
      };
    }
    case DriverResultsActionTypes.GetDriverResultsSuccess: {
      return {
        ...state,
        loading: false,
        results: addResultProperties(action.payload.MRData.RaceTable)
      };
    }
    case DriverResultsActionTypes.GetDriverResultsFailure: {
      return {
        ...state,
        loading: false,
        results: null
      };
    }
    default: {
      return state;
    }
  }
}

const getDriversState = createFeatureSelector<State>('drivers');

export const getResults = (state: State) => state.results;

export const getLoading = (state: State) => state.loading;

function addResultProperties(results) {
  results.Races.forEach(function (result) {
    result.round = parseInt(result.round, 10);
    result.constructorName = result.Results[0].Constructor.name;
    result.grid = parseInt(result.Results[0].grid, 10);
    result.number = parseInt(result.Results[0].number, 10);
  });
  return results;
}
