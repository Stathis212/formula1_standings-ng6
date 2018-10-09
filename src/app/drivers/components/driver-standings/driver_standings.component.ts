import { Component, Input } from '@angular/core';
import { DriverStanding } from '../../_models/driverStandings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-driver-standings',
  templateUrl: './driver_standings.view.pug',
  styleUrls: ['./driver_standings.style.scss']
})
export class DriversTableComponent {

  @Input() drivers: DriverStanding[];
  sortingName: string;
  isDesc: boolean;
  searchText = '';

  constructor( private router: Router ) {

  }

  convertToNum(str) {
    return parseInt(str, 10);
  }

  selectDriver( name: string ) {
    this.router.navigate(['drivers', name]);
  }

  onKey(event: any) { // without type info
    this.searchText = event.target.value;
  }

  sort(name: string): void {
    if (name && this.sortingName !== name) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortingName = name;
  }

}
