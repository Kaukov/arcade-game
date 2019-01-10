const ENEMY_ROWS = [60, 140, 220]
const ENEMY_WIDTH = 101
const ENEMY_HEIGHT = 171

const enemies = []

const game = new Engine(this) // `this` refers to the browser window
const resources = new Resources()

const player = new Player(200, 380, 50)

ENEMY_ROWS.forEach(startingRow => {
  const enemy = new Enemy(getRandomEnemyStartingPos(), startingRow, 60)

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
