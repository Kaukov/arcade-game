import Engine from './engine'
import Player from './player'
import Enemy from './enemy'
import Resources from './resources'
import {
  ENEMY_WIDTH,
  ENEMY_HEIGHT,
  ENEMY_ROWS
} from './constants'

const enemies = []

const game = new Engine(window)
const resources = new Resources()
const player = new Player(200, 380, 50)

ENEMY_ROWS.forEach(startingRow => {
  const enemy = new Enemy(getRandomEnemyStartingPos(), startingRow, 60, ENEMY_WIDTH, ENEMY_HEIGHT)

  enemies.push(enemy)
})

function getRandomEnemyStartingPos() {
  return Math.floor(Math.random() * (-100 + 10)) + 10;
}

game.setCanvas()
game.setResources(resources)
game.setPlayer(player)
game.setEnemies(enemies)
game.run()
