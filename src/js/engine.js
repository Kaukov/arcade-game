const CANVAS_WIDTH = 505
const CANVAS_HEIGHT = 606

const ROWS = 6
const COLS = 5

const WATER_BLOCK = './img/water-block.png'
const STONE_BLOCK = './img/stone-block.png'
const GRASS_BLOCK = './img/grass-block.png'

const ENEMY_SPRITE = './img/enemy-bug.png'
const PLAYER_SPRITE = './img/char-boy.png'

const PLAYER_INITIAL_X = 200
const PLAYER_INITIAL_Y = 380

class Engine {
  constructor (browser) {
    this.doc = browser.document
    this.win = browser.window
    this.canvas = this.doc.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    this.lastTime
    this.resources

    this.enemies
    this.player
  }

  setCanvas (width, height) {
    this.canvas.width = width || CANVAS_WIDTH
    this.canvas.height = height || CANVAS_HEIGHT

    this.doc.body.appendChild(this.canvas)
  }

  setResources (resourceClass) { this.resources = resourceClass }

  setPlayer (player) { this.player = player }

  setEnemies (enemies) { this.enemies = enemies }

  main () {
    const now = Date.now()
    const dt = (now - this.lastTime) / 1000.0

    this.update(dt)

    this.render()

    this.lastTime = now

    this.win.requestAnimationFrame(this.main.bind(this))
  }

  update (dt) {
    // Update entities based on time for smooth framerate
    this.updateEntities(dt)
  }

  run () {
    if (!this.resources || !this.player || !this.enemies) {
      throw new Error(`Resources, player or entities not defined!`)
    }

    this.lastTime = Date.now()

    this.doc.addEventListener('keydown', this.movePlayer.bind(this))

    this.main()
  }

  updateEntities (dt) {
    // Update enemies and the player (calling their update method)
    this.enemies.forEach(enemy => {
      enemy.move(dt)

      enemy.update()
    })

    this.player.update()

    this.checkForCollision()
  }

  checkForCollision () {
    this.enemies.forEach(enemy => {
      if (
        this.player.x < enemy.x + enemy.width / 2 &&
        this.player.x + enemy.width / 2 > enemy.x &&
        this.player.y < enemy.y + enemy.height / 4 &&
        this.player.y + enemy.height / 4 > enemy.y
      ) {
        this.player.x = PLAYER_INITIAL_X
        this.player.y = PLAYER_INITIAL_Y
      }
    })
  }

  render () {
    const grassImg = new Image()
    grassImg.src = GRASS_BLOCK

    const waterImg = new Image()
    waterImg.src = WATER_BLOCK

    const stoneImg = new Image()
    stoneImg.src = STONE_BLOCK

    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (i === ROWS - 1 || i === ROWS - 2) {
          this.context.drawImage(grassImg, j * 101, i * 83)
        } else if (i === 0) {
          this.context.drawImage(waterImg, j * 101, i * 83)
        } else {
          this.context.drawImage(stoneImg, j * 101, i * 83)
        }
      }
    }

    this.renderEntities()
  }

  renderEntities () {
    // Render all enemies and the player
    this.enemies.forEach(enemy => {
      const enemySprite = new Image()
      enemySprite.src = ENEMY_SPRITE

      enemy.setSprite(enemySprite)

      enemy.render(this.context)
    })

    const playerSprite = new Image()
    playerSprite.src = PLAYER_SPRITE

    this.player.setSprite(playerSprite)
    this.player.render(this.context)
  }

  movePlayer (event) {
    const keys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    }

    return this.player.move(keys[event.keyCode])
  }
}
