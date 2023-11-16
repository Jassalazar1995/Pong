const canvas = document.querySelector('#pongCanvas')
const context = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 600
rightPaddleY = 250
leftPaddleY = 250
let ballX = 500
let ballY = 300
ballSpeedX = 2
ballSpeedY = 2

//This function will create the playing field, including the paddles and the ball
function draw(){
    //drawing the rectangle that will be played on
    context.fillStyle = 'orange'
    context.fillRect(0,0,1000,600)

    //drawing the  ball
    context.fillStyle = 'white'
    context.beginPath();
    context.arc(ballX,ballY,10, 0,Math.PI*2,false) // creates the ball 
    context.closePath();
    context.fill() //fills the ball in

  


    //Drawing the right padde
    context.fillStyle = 'white'
    context.fillRect(980,rightPaddleY,20,100)

    //Drawing the left paddle
    context.fillStyle = 'white'
    context.fillRect(0,250,20,100)
}

function movement(){
    ballX += ballSpeedX
    ballY += ballSpeedY

    //Ball collison with top and bottom
    if (ballY  > canvas.height || ballY < 0){
        ballSpeedY = -ballSpeedY
    }
    if (ballX < 10 && ballY > 250 && ballY < 250 + 100 ||
        ballX > canvas.width - 10 - 20 && ballY > 250 && ballY < 250 + 100) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX < 0 || ballX > canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = 2;
        ballSpeedY = 2;
    }
}
//moving the paddles
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        rightPaddleY += 30
        console.log(rightPaddleY)
    }
    else if (event.key==='ArrowDown'){
        rightPaddleY -=30
    }

    else if(event.key === 'w'){
        leftPaddleY += 30
    }

    else if (event.key ==='s'){
        leftPaddleY -= 30
    }
})

function play(){
    movement()
    draw()
    requestAnimationFrame(play)
}
play()