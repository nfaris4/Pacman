export const configGame = {
  ROWS: 10,
  IMAGE_SIZE: 32,
  COLUMNS: 10,
  EXTRA_SIZE_HEIGHT: 300,
<<<<<<< HEAD
  SPEED_PACMAN: 32, //
  LIVES_PACMAN: 3,
=======
  SPEED_PACMAN: 32,
  LIVES_PACMAN: 3,
  //1 -> rock, 2 -> food, 3 -> pacman, 4 -> enemy, 5 -> powerup
>>>>>>> 8b5fd49221679ff0d9e1ec6eb12eb3991d0ae4b9
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 2, 2, 5, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 2, 1],
    [1, 2, 1, 3, 2, 2, 1, 2, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 3, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 5, 1],
    [1, 2, 1, 2, 2, 3, 1, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 3, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 4, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
};

// Calcular WIDTH_CANVAS
configGame.WIDTH_CANVAS = configGame.IMAGE_SIZE * configGame.COLUMNS;
configGame.HEIGHT_CANVAS = configGame.IMAGE_SIZE * configGame.ROWS;

console.log(configGame.WIDTH_CANVAS);
