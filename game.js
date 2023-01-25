class Game {
    constructor(a){
        this.player = new Player
        this.playerImage
        this.enemy = new Enemy(a)
        this.enemyImage
        this.fireBall
        this.fireballs = []
        this.blueballs= []
        this.bg
        this.a = a
    }

    preload(){
        this.bg = loadImage('./img/magecoli.jpg')
        this.playerImage = loadImage("./img/ALY.png")
        this.enemyImage = loadImage('./img/NMY.png')
        this.fireBall = loadImage("./img/ball.png")
        this.blueBall = loadImage("./img/bluefire.png")
        this.loose = loadImage("./img/LOOSER.png")
    }
    draw(){
            // ENEMY
            if (this.player.health != 0 || this.enemy.health != 0) {
            clear()
            background(this.bg)
            this.player.draw()
            this.enemy.draw()
            if (frameCount % (120/this.a) == 0) this.fireballs.push(new badfire(this.fireBall, this.enemy.x , this.enemy.y , 1 , this.a))

            this.fireballs.forEach(function (balls) {
                balls.draw()
            })
            this.fireballs = this.fireballs.filter(fire => {
                if (fire.collision(this.player) || fire.x < 0 - fire.width) {66
                    return false
                } else {
                    return true
                }
            })


            this.enemy.movements()

            // HEALTH BAR 

            document.querySelector("#ALY").innerText = this.player.health
            document.querySelector("#NMY").innerText = this.enemy.health

            // HERO

            setInterval
            
            this.blueballs.forEach(function (balls) {
                balls.draw()
            })

            this.blueballs = this.blueballs.filter(fire => {
                if (fire.collision(this.enemy) || fire.x > 1280 - fire.width) return false
                else return true
            })

            // ENDGAME

            if (this.player.health <= 0){
                clear()
                background(this.bg)
                document.querySelector("#ALY").innerText = "LOOSER"
                document.querySelector("#NMY").innerText = "WINNER"  
                image(game.loose, 500, 400, 200, 280)
            }
            if (this.enemy.health <= 0){
                clear()
                background(this.bg)
                document.querySelector("#ALY").innerText = "WINNER"
                document.querySelector("#NMY").innerText = "LOOSER"  
                image(game.loose, 500, 400, 200, 280)
            }
        
        }
    } 
}