
import { gameObject } from './gameObject.js';

export class Food extends gameObject {
  constructor(row, column) {
    super(row, column);
    this.pointsFood = 10;
  }
  toString() {
    console.log( `Food at row ${this.rowNumber}
    and column ${this.columnObjectNumber}
    with ${this.pointsFood} points`);
  }
}
