import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Driver, Constructor } from '../../_models/driverStandings.model';

@Component({
  selector: 'app-drivers-driver-profile',
  templateUrl: './driver_profile.view.pug',
  styleUrls: ['./driver_profile.style.scss'],
})
export class DriverProfileComponent {

  @Input() profile: Driver;
  @Input() team: Constructor;

  constructor( ) {

  }

  removeAccents(string) {
    const accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    const accentsOut = 'AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
    string = string.split('');
    string.forEach((letter, index) => {
      const i = accents.indexOf(letter);
      if (i !== -1) {
        string[index] = accentsOut[i];
      }
    });
    return string.join('');
  }

}
