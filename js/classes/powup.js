
import { gameObject } from './gameObject.js';

export class Powup extends gameObject {

  constructor(row, column) {
    super(row, column);
    this.enabledPowerup = false;
    this.startTimePowerup = 0;
    this.endTimePowerup = 0;
    this.MAX_TIME_POWER_UP  = 10000;
  }
  toString() {
    console.log( `Powup at row ${this.rowNumber}
    and column ${this.columnObjectNumber}
    and is:  ${this.enabled} `);
  }
}
