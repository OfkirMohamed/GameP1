class badfire {
	constructor(image, x, y , sens	, speed) {
		this.image = image
		this.x = x
		this.y = y
		this.width = 80
		this.height = 80
		this.velocity = 15 * sens * ((speed+1)/2)
	}

	draw() {
		this.x -= this.velocity
		image(this.image, this.x, this.y, this.width, this.height)
	}

	collision(playerInfo) {

		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2


		console.log (dist(obstacleX, obstacleY, playerX, playerY))
		if (dist(obstacleX, obstacleY, playerX, playerY) > 80) {
		
			return false
		} else {
			playerInfo.health -= 10
			return true
		}
	}
}