const canvas = document.querySelector('#pongCanvas')
const context = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 600
let rightPaddleY = 250
let leftPaddleY = 250
let ballX = canvas.width/2
let ballY = canvas.height /2
let ballSpeedX = 2
let ballSpeedY = 2
let ballSize = 10
paddleWidth = 20

// Drawing a ball
function drawBall(){
    context.fillStyle = 'white'
    context.beginPath();
    context.arc(ballX,ballY,ballSize, 0,Math.PI*2,false) // creates the ball 
    context.closePath(); // I am not sure why I need this method
    context.fill() //fills the ball in
}

//Drawing Game field
function drawGamefield(){
    context.fillStyle = 'orange'
    context.fillRect(0,0,1000,600)
}

//Drawing right paddle
function drawRightPaddle(){
    context.fillStyle = 'white'
    context.fillRect(980,rightPaddleY,paddleWidth,100)
}

//Drawing left paddle
function drawLeftPaddle(){
    context.fillStyle = 'white'
    context.fillRect(0,leftPaddleY,20,100)
}
//This function will create the playing field, including the paddles and the ball
function draw(){
    //drawing the rectangle that will be played on
    drawGamefield()
    //drawing the  ball
    drawBall()
    //Drawing the right padde
    drawRightPaddle()
    //Drawing the left paddle
    drawLeftPaddle()
}

function movement(){
    ballX += ballSpeedX
    ballY += ballSpeedY

    //Ball collison with top and bottom
    if (ballY + ballSize > canvas.height || ballY - ballSize< 0){
        ballSpeedY = -ballSpeedY
    }

    if (ballX < 10 + paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + 100 ||
        ballX > canvas.width - 10 - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + 100) {
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