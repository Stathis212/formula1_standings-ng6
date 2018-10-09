import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStandings from '../../_store/reducers';
import * as standingsActions from '../../_store/actions/driverStandings.actions';

@Component({
  selector: 'app-drivers-driver-standings-page',
  templateUrl: './driver_standings-page.view.pug',
  styleUrls: ['./driver_standings-page.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverStandingsPageComponent implements OnInit {

  drivers$ = this.standingsStore.pipe(select(fromStandings.getAllDriverStandings));
  season$ = this.standingsStore.pipe(select(fromStandings.getDriverStandingsSeason));
  round$ = this.standingsStore.pipe(select(fromStandings.getDriverStandingsRound));
  loading$ = this.standingsStore.pipe(select(fromStandings.getDriverStandingsLoading));

  constructor(private standingsStore: Store<fromStandings.State>) {

  }

  ngOnInit() {
    // Get all driver standings
    this.standingsStore.dispatch(new standingsActions.GetDriverStandings());
  }

}
