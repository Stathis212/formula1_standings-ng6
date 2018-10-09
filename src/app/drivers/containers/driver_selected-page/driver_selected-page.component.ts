import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DriverStanding } from '../../_models/driverStandings.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as fromDrivers from '../../_store/reducers';
import * as standingsActions from '../../_store/actions/driverStandings.actions';
import * as resultsActions from '../../_store/actions/driverResults.actions';
import { map } from 'rxjs/operators';
import { RaceTable } from '../../_models/driverResults.model';

@Component({
  selector: 'app-drivers-driver-selected-page',
  templateUrl: './driver_selected-page.view.pug',
  styleUrls: ['./driver_selected-page.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DriverSelectedPageComponent implements OnInit, OnDestroy {

  initialized: boolean;
  actionsSubscription: Subscription;
  driver$ = this.driversStore.pipe(select(fromDrivers.getSelectedDriver)) as Observable<DriverStanding>;
  drivers$ = this.driversStore.pipe(select(fromDrivers.getAllDriverStandings)) as Observable<DriverStanding[]>;
  results$ = this.driversStore.pipe(select(fromDrivers.getDriverResults)) as Observable<RaceTable>;
  loading$ = this.driversStore.pipe(select(fromDrivers.getDriverResultsLoading));

  constructor(private driversStore: Store<fromDrivers.State>, private route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map(params => new standingsActions.SelectDriver(params.id)))
      .subscribe(driversStore);
  }

  ngOnInit() {
    // Get Selected Driver Results by ID from route
    this.driversStore.dispatch(new resultsActions.GetDriverResults(this.route.snapshot.params.id));
    // Subscribe to all driver standings
    // If not empty select driver from entities & routerStore else get all standings
    this.drivers$.subscribe(drivers => {
      if (drivers.length > 0) {
        this.driversStore.dispatch(new standingsActions.SelectDriver(this.route.snapshot.params.id));
      } else {
        this.driversStore.dispatch(new standingsActions.GetDriverStandings());
      }
    });
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

}
