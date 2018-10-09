import { Component, Input } from '@angular/core';
import { Result } from '../../_models/driverResults.model';

@Component({
  selector: 'app-drivers-driver-results',
  templateUrl: './driver_results.view.pug',
  styleUrls: ['./driver_results.style.scss'],
})
export class DriverResultsComponent {

  @Input() results: Result[];
  sortingName: string;
  isDesc: boolean;

  constructor( ) {

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
