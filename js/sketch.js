/*
import { gameObject } from "./classes/gameObject.js";
import {Pacman} from './classes/pacman.js';
*/
const map = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 1]
];
const ROWS = 4;
const COLUMNS = 4;
export const IMAGE_SIZE = 32;
const WIDTH_CANVAS = IMAGE_SIZE * COLUMNS;
const HEIGHT_CANVAS = IMAGE_SIZE * ROWS;

let imgRock;
const arrRocks = [];
let numberImagesLoaded = 0;
console.log("Bgff");

function preload() {
  console.log("o");
  imgRock = loadImage("../media/roca.png", handleImage, handleError);
}

function handleError() {
  console.error("Error carregar pagina");
}

function handleImage() {
  console.error("Images carregada correctament");
  numberImagesLoaded++;
}

function setup() {

  createCanvas(configGame.WIDTH_CANVAS, configGame.HEIGHT_CANVAS).parent("sketch-pacman");

  for (let filaActual = 0; filaActual < ROWS; filaActual++) {
    for (let columnaActual = 0; columnaActual < ROWS; columnaActual++) {
      if (map[filaActual][columnaActual] === 1) {
        const roca = new gameObject(filaActual, columnaActual);
        arrRocks.push(roca);
      }
    } //fi for columnes

  } //fi for files
  console.log("array rocks mida es : ", arrRocks.length);
} //fi setup

function draw() {
  background(171, 248, 168);
 // arrRocks.forEach((roca) => roca.showObject(imgRock));
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
