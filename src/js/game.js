import Engine from './engine'
import Player from './player'
import Enemy from './enemy'
import Resources from './resources'
import {
  ENEMY_WIDTH,
  ENEMY_HEIGHT,
  ENEMY_ROWS
} from './constants'
import { getRandomEnemyStartingPos, getRandomEnemyVelocity } from './utils'

const enemies = []

const game = new Engine(window)
const resources = new Resources()
const player = new Player(200, 380, 50)

ENEMY_ROWS.forEach(startingRow => {
  const enemy = new Enemy(getRandomEnemyStartingPos(), startingRow, getRandomEnemyVelocity(), ENEMY_WIDTH, ENEMY_HEIGHT)

  enemies.push(enemy)

  // 25% chance to spawn 2 enemies in the same row
  if (Math.random() >= 0.75) {
    const enemy2 = new Enemy(getRandomEnemyStartingPos(), startingRow, getRandomEnemyVelocity());

    enemies.push(enemy2);
  }
})

game.setCanvas()
game.setResources(resources)
game.setPlayer(player)
game.setEnemies(enemies)
game.run()
