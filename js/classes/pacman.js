import {gameObject} from './gameObject.js';
/*
import {IMAGE_SIZE} from '../sketch2.js';
import {WIDTH_CANVAS} from '../sketch2.js';
*/
import {configGame} from "../constants.js";

const { IMAGE_SIZE, WIDTH_CANVAS, SPEED_PACMAN } = configGame;

export class Pacman extends gameObject {


  constructor(row,column){
    super(row,column);
    this.directionPacman =1; // 1 -> right, 2 -> up, 3 -> left, 4 -> down
    this.speedPacman = configGame.SPEED_PACMAN; //Image size
    this.scorePacman = 0;
    this.pacmanlives=configGame.LIVES_PACMAN;
    //this.widthCanvasPacman = 128;
   // this.pacmanDiameter =32;
  }

  moveRight(){
    //Move pacman right
    let temp = this.coordXPixels+this.speedPacman;
    if ( temp < 0 || temp > (WIDTH_CANVAS - IMAGE_SIZE) ){
      console.log("Error, no es pot moure a la dreta");
      return;
    }
    else {
      this.directionPacman = 1;
      this.coordXPixels = temp;
    }
  } //End moveRight

  moveUp(){
    let temp = this.coordYPixels-this.speedPacman;
    if ( temp < 0){
      console.log("Error, no es pot moure a l¡esquerra");
      return;
    }
    else {
      this.directionPacman = 2;
      this.coordYPixels = temp;
    }

  } //End moveUp

  moveDown(){
    let temp = this.coordYPixels+this.speedPacman;
    if ( temp < 0){
      console.log("Error, no es pot moure a l¡esquerra");
      return;
    }
    else {
      this.directionPacman = 4;
      this.coordYPixels = temp;
    }
  } //End moveDown

  moveLeft(){
    let temp = this.coordXPixels-this.speedPacman;
    if ( temp < 0){
      console.log("Error, no es pot moure a l¡esquerra");
      return;
    }
    else {
      this.directionPacman = 3;
      this.coordXPixels = temp;
    }
  } //End moveLeft

  testCollideRock(roca){
    let distancia = dist(this.coordXPixels,
      this.coordYPixels, roca.coordXPixels, roca.coordYPixels);
    // console.log( "Distancia entre pacman i roca: " + distancia);

    if (distancia < IMAGE_SIZE) {
      //mHE FOTUT nata amb una roca
      alert("Has xocat amb una roca, has perdut una vida");
      this.pacmanlives--;
      this.spawnPacman();
      } //End switch
    }
      //mHE FOTUT nata amb una roca
/*
  testCollideRock(roca){
    let distancia = dist(this.coordXPixels,
      this.coordYPixels, roca.coordXPixels, roca.coordYPixels);
   // console.log( "Distancia entre pacman i roca: " + distancia);

    if (distancia < IMAGE_SIZE) {
      //mHE FOTUT nata amb una roca
      switch (this.directionPacman) {
        case 1: //Direccio dreta -> corregeixo this.moveLeft();
          this.coordXPixels = this.coordXPixels - this.speedPacman;
          break;
        case 2: //Direccio up -> corregeixo this.moveDown();
          this.coordYPixels = this.coordYPixels + this.speedPacman;
          break;
        case 3: //Direccio left -> corregeixo this.moveRight();
          this.coordXPixels = this.coordXPixels + this.speedPacman;
          break;
        case 4: //Direccio down -> corregeixo this.moveUp();
          this.coordYPixels = this.coordYPixels - this.speedPacman;
          break;
        default:
          console.log("Error, direcció no reconeguda");
      } //End switch
    } //end if
      else {
        //console.log("Roca a massa distan");
      }
    }
    */
testCollideFood(food) {
  let distancia = dist(this.coordXPixels,
    this.coordYPixels, food.coordXPixels, food.coordYPixels);
  // console.log( "Distancia entre pacman i roca: " + distancia);

  if (distancia < IMAGE_SIZE) {
    console.log("Has agafat una food");
    return true;
  } else {
    console.log("Food massa lluny");
    return false;
  }
}
spawnPacman(){
  this.coordXPixels = 7*32;
  this.coordYPixels = 7*32;
}

testCollidePowerup(powerup){
    let distancia = dist(this.coordXPixels,
      this.coordYPixels, powerup.coordXPixels, powerup.coordYPixels);
    // console.log( "Distancia entre pacman i roca: " + distancia);

    if (distancia < IMAGE_SIZE) {
      console.log("Has agafat una powerup");
      return true;
    } else {
      console.log("Powerup massa lluny");
      return false;
    }
  }
spawnPacman(){
  this.coordXPixels = 7*32;
  this.coordYPixels = 7*32;
}


}
