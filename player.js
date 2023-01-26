class Player {
    constructor(){
        this.health = 100
        this.width = 100
        this.height = 140
        this.x = 100
        this.y = 540
    }
    draw (){

        image(game.playerImage, this.x, this.y, this.width, this.height)
    
        image(game.blueBall, this.x + 70 , this.y -10 , 70,70)

    }
    up(){
        if(keyCode == 38) this.y = 340
    }
    down(){
        if(keyCode == 40) this.y = 540    
    }
}

class Enemy {
    constructor(a){
        this.health = 60*a
        this.width = 100
        this.height = 140
        this.x = 1080
        this.y = 540
        this.a = a
    }

    draw(){
        image(game.enemyImage, this.x, this.y, this.width, this.height)
        image(game.fireBall, this.x-30, this.y+10 , 50,50)

    }
    fireBall(){
    this.bulletspeedx += 20*this.a
    }
    movements(){
    if (frameCount % (60/(1+this.a*2)) == 0)  this.y = 340 + 200*Math.floor(Math.random()*2)
    }
} 