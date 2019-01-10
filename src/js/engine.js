const CANVAS_WIDTH = 505
const CANVAS_HEIGHT = 606

const ROWS = 6
const COLS = 5

const WATER_BLOCK = '../img/water-block.png'
const STONE_BLOCK = '../img/stone-block.png'
const GRASS_BLOCK = '../img/grass-block.png'

const ENEMY_SPRITE = '../img/enemy-bug.png'
const PLAYER_SPRITE = '../img/char-boy.png'

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

    this.win.requestAnimationFrame(main)
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

    this.main()
  }

  updateEntities (dt) {
    // Update enemies and the player (calling their update method)
    this.enemies.forEach(enemy => enemy.update(dt))
    this.player.update(dt)
  }

  render () {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (i === 0 || i === 1) {
          this.context.drawImage(GRASS_BLOCK, j * 101, i * 83)
        } else if (i === ROWS - 1) {
          this.context.drawImage(WATER_BLOCK, j * 101, i * 83)
        } else {
          this.context.drawImage(STONE_BLOCK, j * 101, i * 83)
        }
      }
    }

    this.renderEntities()
  }

  renderEntities () {
    // Render all enemies and the player
    this.enemies.forEach(enemy => enemy.render(ENEMY_SPRITE))
    this.player.render(PLAYER_SPRITE)
  }
}
