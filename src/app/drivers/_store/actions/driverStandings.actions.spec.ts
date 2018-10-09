import { GetDriverStandings, DriverStandingsActionTypes, GetDriverStandingsSuccess } from './driverStandings.actions';
import { DriverStandingsResponseModel } from '../../_models/driverStandings.model';
import { GetDriverResultsSuccess } from './driverResults.actions';

describe('GetDriverStandings', () => {
  it('should create an action', () => {
    const action = new GetDriverStandings();
    expect({...action}).toEqual({ type: DriverStandingsActionTypes.GetDriverStandings });
  });
});

describe('GetDriverStandingsFailure', () => {
  it('should create an action', () => {
    const payload: DriverStandingsResponseModel = {
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
                  'Constructors': [
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

    const action = new GetDriverStandingsSuccess(payload);

    expect({ ...action }).toEqual({
      type: DriverStandingsActionTypes.GetDriverStandingsSuccess,
      payload,
    });

  });
});

describe('GetDriverStandingsSuccess', () => {
  it('should create an action', () => {});
});
