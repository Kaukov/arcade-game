export const CANVAS_WIDTH = 505
export const CANVAS_HEIGHT = 606

export const ROWS = 6
export const COLS = 5

export const WATER_BLOCK = './img/water-block.png'
export const STONE_BLOCK = './img/stone-block.png'
export const GRASS_BLOCK = './img/grass-block.png'

export const PLAYER_SPRITE_NAMES = [
  'char-boy',
  'char-cat-girl',
  'char-horn-girl',
  'char-pink-girl',
  'char-princess-girl'
]

export const ENEMY_SPRITE = './img/enemy-bug.png'
export const PLAYER_SPRITE = `./img/${PLAYER_SPRITE_NAMES[Math.floor(Math.random() * (PLAYER_SPRITE_NAMES.length - 1))]}.png`

export const PLAYER_INITIAL_X = 200
export const PLAYER_INITIAL_Y = 380

export const ENEMY_ROWS = [ 60, 140, 220 ]
export const ENEMY_WIDTH = 101
export const ENEMY_HEIGHT = 171
export const ENEMY_VELOCITY_MIN = 128;
export const ENEMY_VELOCITY_MAX = 512;
