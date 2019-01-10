export default class Entity {
  constructor (x, y, velocity) {
    this.x = x
    this.y = y
    this.velocity = velocity
    this.sprite = null
  }

  update () {
    //
  }

  render (context) {
    context.drawImage(this.sprite, this.x, this.y)
  }

  setSprite (sprite) {
    this.sprite = sprite
  }
}
