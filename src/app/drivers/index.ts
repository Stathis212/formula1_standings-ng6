// Containers
import { DriverStandingsPageComponent } from './containers/driver_standings-page/driver_standings-page.component';
import { DriverSelectedPageComponent } from './containers/driver_selected-page/driver_selected-page.component';

// Presentational
import { DriversTableComponent } from './components/driver-standings/driver_standings.component';
import { DriverProfileComponent } from './components/driver-profile/driver_profile.component';
import { DriverResultsComponent } from './components/driver-results/driver_results.component';

// Services
import { DriversService } from './_services/drivers.service';

export * from './containers/driver_standings-page/driver_standings-page.component';
export * from './containers/driver_selected-page/driver_selected-page.component';

export const DRIVERS_CONTAINERS = [
  DriverStandingsPageComponent,
  DriverSelectedPageComponent,
];

export const DRIVERS_PRESENTATIONAL = [
  DriversTableComponent,
  DriverProfileComponent,
  DriverResultsComponent
];

export const DRIVERS_SERVICES = [
  DriversService
];
