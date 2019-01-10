import Entity from './entity'
import { PLAYER_INITIAL_X, PLAYER_INITIAL_Y } from './constants'

export default class Player extends Entity {
  update () {
    if (this.x > 400) {
      this.x = 400
    }

    if (this.x < 0) {
      this.x = 0
    }

    if (this.y > 380) {
      this.y = 380
    }

    if (this.y < 0) {
      this.x = PLAYER_INITIAL_X
      this.y = PLAYER_INITIAL_Y
    }
  }

  move (key) {
    switch (key) {
      case 'left':
        return this.x -= this.velocity + 50

      case 'up':
        return this.y -= this.velocity + 30

      case 'down':
        return this.y += this.velocity + 30

      case 'right':
        return this.x += this.velocity + 50
    }
  }
}
