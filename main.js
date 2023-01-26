let difficulty = 0
let n = 0
let a = document.querySelector("#diff")
let timer = 0


// document.querySelector("#easy").addEventListener("click", function(){
//     difficulty = 2
//     a.innerText = "easy"
//     stop()
// })
// document.querySelector("#medium").addEventListener("click", function(){
//     difficulty = 2.5
//     a.innerText = "medium"

// })
// document.querySelector("#hard").addEventListener("click", function(){
//     difficulty = 3
//     a.innerText = "hard"
// })


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
    setTimeout(()=>{    game.a = 2
        game.player.health = 100
        game.enemy.health = 100
        game.start=1}, 1000)

})

document.querySelector("#medium").addEventListener("click", function(){
    game.a = 3
    game.player.health = 100
    game.enemy.health = 120
    game.start=1
})
document.querySelector("#hard").addEventListener("click", function(){
    game.a = 4
    game.player.health = 100
    game.enemy.health = 150
    game.start=1
})