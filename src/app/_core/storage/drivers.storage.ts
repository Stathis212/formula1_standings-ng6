import { Injectable } from '@angular/core';

@Injectable()
export class DriversStorage {

  constructor() { }

  checkDriversExist() {
    if (localStorage.getItem('drivers')) {
      return true;
    }
    return false;
  }

  setDrivers(cartId) {
    localStorage.setItem('drivers', cartId);
  }

}
