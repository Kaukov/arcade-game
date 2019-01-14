import Entity from './entity'
import { getRandomEnemyVelocity } from './utils'
import { CANVAS_WIDTH, ENEMY_CANVAS_OFFSET } from './constants'

export default class Enemy extends Entity {
  constructor (x, y, velocity, width, height) {
    super(x, y, velocity)

    this.width = width
    this.height = height
  }

  update () {
    if (this.x > CANVAS_WIDTH + ENEMY_CANVAS_OFFSET) {
      this.x = -100

      this.velocity = getRandomEnemyVelocity()
    }
  }

  move (dt) {
    this.x += this.velocity * dt;
  }
}
