let difficulty = 3
let a = document.querySelector("#diff")


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
}

function keyPressed(){
    if (keyCode == 38) {
        game.player.y = 340
    }
    if (keyCode == 40) {
        game.player.y = 540
    }
}
 