const game = new Engine(this)
const resources = new Resources()

const player = new Player(200, 380, 50)

const playerImg = new Image()
playerImg.src = './img/char-boy.png'

player.setSprite(playerImg)

game.setCanvas()
game.setResources(resources)
game.setPlayer(player)


game.run()
