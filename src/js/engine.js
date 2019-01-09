const CANVAS_WIDTH = 505
const CANVAS_HEIGHT = 606

class Engine {
  constructor (browser) {
    this.doc = browser.document
    this.win = browser.window
    this.canvas = this.doc.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    this.lastTime;
    this.resources;
  }

  setCanvas (width, height) {
    this.canvas.width = width || CANVAS_WIDTH
    this.canvas.height = height || CANVAS_HEIGHT

    this.doc.body.appendChild(this.canvas)
  }

  setResources (resourceClass) { this.resources = resourceClass }

  main () {
    const now = Date.now()
    const dt = (now - this.lastTime) / 1000.0

    update(dt)

    render()

    this.lastTime = now

    this.win.requestAnimationFrame(main)
  }

  update (dt) {
    // Update entities based on time for smooth framerate
  }
}
