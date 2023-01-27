let difficulty = 0
let n = 0
let a = document.querySelector("#diff")
let timer = 0



const game = new Game(difficulty)

function preload () {
    game.preload()
}

function setup () {
    createCanvas(1280 ,720)
}

function draw (){
    game.draw()
    game.enemy.movements()
}

function keyPressed(){
    if (keyCode == 38) {
        game.player.y = 340
    }
    if (keyCode == 40) {
        game.player.y = 540
    }
    if ( keyCode == 49 && game.n > 0 && game.cooldown > 0 ) {
        game.blueballs.push(new badfire(game.blueBall,game.exp, game.player.x , game.player.y , -1 , 3))
        game.n -= 1
        game.cooldown = 0
    }
    
}

document.querySelector("#easy").addEventListener("click", function(){
    setTimeout(()=>{    
        game.a = 2
        game.player.health = 180
        game.enemy.health = 100
        game.start=1}, 1200)

})

document.querySelector("#medium").addEventListener("click", function(){
    setTimeout(()=>{    
    game.a = 3,5
    game.player.health = 180
    game.enemy.health = 120
    game.start=1}, 1200)
})
document.querySelector("#hard").addEventListener("click", function(){
    setTimeout(()=>{    
    game.a = 5
    game.player.health = 180
    game.enemy.health = 200
    game.start=1}, 1200)
})