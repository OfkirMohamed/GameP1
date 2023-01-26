
class Game {
    constructor(a){
        this.start = 0
        this.n = 5
        this.player = new Player
        this.playerImage
        this.enemy = new Enemy(a)
        this.enemyImage
        this.fireBall
        this.fireballs = []
        this.blueballs= []
        this.bg
        this.a = a
        this.timerally = 0
        this.timerenemy = 0
        this.damage = []
        this.cooldown = 0
        this.acceuil
    }
    
    setup(){
        textSize(30);
    }
    preload(){
        this.bg = loadImage('./img/magecoli.jpg')
        this.playerImage = loadImage("./img/ALY.png")
        this.enemyImage = loadImage('./img/NMY.png')    
        this.fireBall = loadImage("./img/ball.png")
        this.blueBall = loadImage("./img/bluefire.png")
        this.loose = loadImage("./img/LOOSER.png")
        this.exp = loadImage("./img/Fire.gif")
        this.win = loadImage("./img/WIN.png")
        this.check = ""
        this.acceuil = loadImage("./img/acceuil.png")
    }
    draw(){
            if (frameCount % 20 == 0) this.cooldown = 1
            if (this.n > 5) this.n = 5
            if (frameCount % 100 == 0) this.n+=1
            // ENEMY
            if (this.player.health != 0 || this.enemy.health != 0) {
            clear()
            background(this.bg)
            this.player.draw()
            this.enemy.draw()
            if (frameCount % (120/this.a) == 0) this.fireballs.push(new badfire(this.fireBall,this.exp, this.enemy.x , this.enemy.y , 1 , this.a))

            this.fireballs.forEach(function (balls) {
                balls.draw()
            })
            this.fireballs = this.fireballs.filter(fire => {
                if (fire.collision(this.player) || fire.x < 0 - fire.width) {
                    if (fire.collision(this.player)) this.timerenemy = frameCount
                    return false 
                } else {
                    return true
                }   
            
            })
            if (frameCount - this.timerenemy  < 20){
                image(this.exp ,  this.player.x - 24, this.player.y-5, 150,150)
            }

            this.enemy.movements()

            // HEALTH BAR 

            document.querySelector("#ALY").innerText = this.player.health
            document.querySelector("#NMY").innerText = this.enemy.health
            document.querySelector("#diff").innerText = this.n


            // HERO

            this.blueballs.forEach(function (balls) {
                balls.draw()
            })

            this.blueballs = this.blueballs.filter(fire => {
                if (fire.collision(this.enemy)) {
                    this.timerally = frameCount
                    return false
                }
                 
                else return true
            })
            
            
            if (frameCount - this.timerally  < 30){
                image(this.exp ,  this.enemy.x+10, this.enemy.y, 150,150)
            }
            // ENDGAME


        }
        if (this.player.health <= 0 && this.start == 1){
            clear()
            background(this.bg)
            document.querySelector("#ALY").innerText = "LOOSER"
            document.querySelector("#NMY").innerText = "WINNER"  
            image(game.loose, 500, 400, 200, 280)
        }
        if (this.enemy.health <= 0 && this.start== 1){
            clear()
            background(this.bg)
            document.querySelector("#ALY").innerText = "WINNER"
            document.querySelector("#NMY").innerText = "LOOSER"  
            image(game.win, 380, 380, 500, 400)
        }
        if (this.enemy.health <=0 && this.start == 0){
            clear ()
            document.querySelector("#ALY").innerText = "YOU"
            document.querySelector("#NMY").innerText = "Your Enemy" 
            background(this.acceuil)
        }
    } 
}
