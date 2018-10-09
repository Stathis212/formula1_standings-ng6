import * as fromDrivers from '../reducers';
import * as fromStandings from './driverStandings.reducer';
import * as fromActions from '../actions/driverStandings.actions';
import { DriverStanding, DriverStandingsResponseModel } from '../../_models/driverStandings.model';

describe('DriverStandingsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromStandings;
      const action = {} as any;
      const state = fromStandings.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('GET DRIVER STANDINGS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromStandings;
      const action = new fromActions.GetDriverStandings();
      const state = fromStandings.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.entities).toEqual({});
    });
  });

  describe('GET DRIVER STANDINGS SUCCESS action', () => {
    it('should populate the standings array', () => {
      const standings: DriverStandingsResponseModel = {
        MRData: {
          xmlns: '',
          series: '',
          url: '',
          limit: '',
          offset: '',
          total: '1',
          StandingsTable: {
            season: '2013',
            StandingsLists: [
              {
                season: '2013',
                round: '19',
                DriverStandings: [
                  {
                    position: '1',
                    positionText: '1',
                    points: '397',
                    wins: '13',
                    Driver: {
                      driverId: 'vettel',
                      permanentNumber: '5',
                      code: 'VET',
                      url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                      givenName: 'Sebastian',
                      familyName: 'Vettel',
                      dateOfBirth: '1987-07-03',
                      nationality: 'German'
                    },
                    Constructors: [
                      {
                        constructorId: 'red_bull',
                        url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                        name: 'Red Bull',
                        nationality: 'Austrian'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      };
      const entities = {
        'vettel': standings.MRData.StandingsTable.StandingsLists[0].DriverStandings[0],
      };
      const { initialState } = fromStandings;
      const action = new fromActions.GetDriverStandingsSuccess(standings);
      const state = fromStandings.reducer(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe('GET DRIVER STANDINGS action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromStandings;
      const action = new fromActions.GetDriverStandingsFailure({});
      const state = fromStandings.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const { initialState } = fromStandings;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.GetDriverStandingsFailure({});
      const state = fromStandings.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

describe('DriverStandingsReducer Selectors', () => {
  describe('getDriverStandingsEntities', () => {
    it('should return .entities', () => {
      const entities: { [key: string]: DriverStanding } = {
        'vettel': {
          position: '1',
          positionText: '1',
          points: '397',
          wins: '13',
          Driver: {
            driverId: 'vettel',
            permanentNumber: '5',
            code: 'VET',
            url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
            givenName: 'Sebastian',
            familyName: 'Vettel',
            dateOfBirth: '1987-07-03',
            nationality: 'German'
          },
          Constructors: [
            {
              constructorId: 'red_bull',
              url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
              name: 'Red Bull',
              nationality: 'Austrian'
            }
          ]
        }
      };
      const { initialState  } = fromStandings;
      const previousState = { ...initialState, entities };
      const slice = fromStandings.getEntities(previousState);
      console.log(slice);
      expect(slice).toEqual(entities);
    });
  });
});

  describe('getDriverStandingsLoading', () => {
    it('should return .loading', () => {
      const { initialState } = fromStandings;
      const previousState = { ...initialState, loading: true };
      const slice = fromStandings.getLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

});
