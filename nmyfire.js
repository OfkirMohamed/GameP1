class badfire {
	constructor(image, boom , x, y , sens	, speed) {
		this.image = image
		this.boom = boom
		this.x = x
		this.y = y
		this.width = 80
		this.height = 80
		this.velocity = 15 * sens * ((speed+1)/2)
		this.n = 0
		this.count = 0
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
		if (dist(obstacleX, obstacleY, playerX, playerY) > 80) {
		
			return false
		} else {
			playerInfo.health -= 10
			this.count=frameCount
			this.n=1
			return true
		}
	}
}