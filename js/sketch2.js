import { gameObject } from "./classes/gameObject.js";
import { Pacman } from "./classes/pacman.js";
import { Food } from "./classes/food.js";
import { configGame } from "./constants.js";
import { ErrorPac } from "./classes/errorPac.js";
import { Powup } from "./classes/powup.js";

let imgRock;
let numberImagesLoaded = 0;
const arrRocks = [];

let imgFood;
const arrFood = [];

let imgPacmanLeft, imgPacmanRight, imgPacmanUp, imgPacmanDown, imgPacman;
let myPacman;
let wakaSound;
let timer = 0;
let startTimeGame = 0;
let imgPowerUp;
const arrPowerUp = [];

function preload() {
  imgRock = loadImage("../media/terracastell32.png", handleImage, handleError);
  imgFood = loadImage("../media/all32.png", handleImage, handleError);
  imgPacman = loadImage("../media/simonLeft32.png", handleImage, handleError);
  imgPacmanRight = loadImage("../media/simonRight32.png", handleImage, handleError);
  imgPacmanUp = loadImage("../media/simonUp32.png", handleImage, handleError);
  imgPacmanLeft = loadImage("../media/simonLeft32.png", handleImage, handleError);
  imgPacmanDown = loadImage("../media/simonDown32.png", handleImage, handleError);
  imgPowerUp = loadImage("../media/zombie32.png", handleImage, handleError);
  wakaSound = loadSound("../media/audio/WakaWaka.mp3", handleErrorSound);
}

function handleErrorSound() {
  console.error("Error al cargar el audio");
}

function handleError() {
  console.error("Error al cargar una imagen");
  try {
    throw new ErrorPac(20, "Falta imagen por cargar");
  } catch (error) {
    console.error("Error al cargar una imagen");
    showError();
  }
}

function handleImage() {
  numberImagesLoaded++;
}

function setup() {
  createCanvas(configGame.WIDTH_CANVAS, configGame.HEIGHT_CANVAS + configGame.EXTRA_SIZE_HEIGHT).parent("sketch-pacman");
  for (let fila = 0; fila < configGame.ROWS; fila++) {
    for (let columna = 0; columna < configGame.COLUMNS; columna++) {
      if (configGame.map[fila][columna] === 1) {
        arrRocks.push(new gameObject(fila, columna));
      } else if (configGame.map[fila][columna] === 2) {
        arrFood.push(new Food(fila, columna));
      } else if (configGame.map[fila][columna] === 3) {
        myPacman = new Pacman(fila, columna);
      } else if (configGame.map[fila][columna] === 5) {
        arrPowerUp.push(new Powup(fila, columna));
      }
    }
  }
  startTimeGame = millis();
}

function draw() {
  background(171, 248, 168);
  arrRocks.forEach(roca => roca.showObject(imgRock));
  arrPowerUp.forEach(powerup => powerup.showObject(imgPowerUp));
  arrFood.forEach(food => food.showObject(imgFood));
  arrRocks.forEach(roca => myPacman.testCollideRock(roca));

  for (let i = arrFood.length - 1; i >= 0; i--) {
    if (myPacman.testCollideFood(arrFood[i])) {
      myPacman.scorePacman += arrFood[i].pointsFood;
      arrFood.splice(i, 1);
    }
  }

  testFinishGameWithZombie();

  textSize(20);
  textAlign(CENTER, CENTER);
  timer = millis() - startTimeGame;
  text("Score: " + myPacman.scorePacman, 150, configGame.HEIGHT_CANVAS + 50);
  text("Time: " + timer, 150, configGame.HEIGHT_CANVAS + 100);

  switch (myPacman.directionPacman) {
    case 1:
      myPacman.showObject(imgPacmanRight);
      break;
    case 2:
      myPacman.showObject(imgPacmanUp);
      break;
    case 3:
      myPacman.showObject(imgPacmanLeft);
      break;
    case 4:
      myPacman.showObject(imgPacmanDown);
      break;
    default:
      myPacman.showObject(imgPacman);
  }

  if (wakaSound && !wakaSound.isPlaying()) {
    wakaSound.play();
  }

  testFinishGame();
}


function testFinishGame() {
  if (arrFood.length === 0) {
    noLoop();
    if (confirm("¡Ganaste! ¿Quieres jugar otra vez?")) {
      restartGame();
    } else {
      alert("Gracias por jugar");
    }
    loop();
  }
}

function testFinishGameWithZombie() {
  for (let i = arrPowerUp.length - 1; i >= 0; i--) {
    if (myPacman.testCollidePowerup(arrPowerUp[i]) && !arrPowerUp[i].enabledPowerup) {
      arrPowerUp[i].enabledPowerup = true;
      arrPowerUp[i].startTimePowerup = millis();

      noLoop();

      if (confirm("¡Perdiste! ¿Quieres jugar otra vez?")) {
        restartGame();
      } else {
        alert("Gracias por jugar");
      }

      loop();
    }
  }
}


function keyPressed() {
  if (!myPacman) return;
  if (keyCode === LEFT_ARROW) {
    myPacman.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    myPacman.moveRight();
  } else if (keyCode === UP_ARROW) {
    myPacman.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    myPacman.moveDown();
  }
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
globalThis.keyPressed = keyPressed;
