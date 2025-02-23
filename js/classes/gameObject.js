
//import { IMAGE_SIZE } from "../sketch.js";
import { IMAGE_SIZE } from "../sketch.js";
/** @class gameObject representa una classe. */

export class gameObject {

  /**
   * Creates an instance of gameObject.
   *
   * @author eduardo
   * @param {number} row The row number of the map.
   * @param {number} column The column number of the ma.
   /*
  rowNumber=0;
  columnObjectNumber=0;
  coordXPixels=0;
  coordYPixels=0;*/
  constructor(row, column){
    this.rowNumber = row;
    this.columnObjectNumber = column;
    this.coordXPixels =  column * IMAGE_SIZE;
    this.coordYPixels =  row * IMAGE_SIZE;
  }
  /**
   * Shows the image of a GameObject.
   *
   * @param {img} img Image to be displayed
   */
  showObject(img) {
    if( this.coordXPixels == null || this.coordYPixels == null){
      this.coordXPixels = this.rowNumber * IMAGE_SIZE;
      this.coordYPixels = this.columnObjectNumber * IMAGE_SIZE;
    }
    //falta comprovar que coordXPixels i coordYPixels dintre canvas
    image(img, this.coordXPixels, this.coordYPixels);
  }

}
