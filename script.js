const canvas = document.querySelector('#pongCanvas')
const context = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 600
let rightPaddleY = 250
let rightPaddleHeight = 100
let leftPaddleY = 250
let leftPaddleHeight = 100
let ballX = canvas.width/2
let ballY = canvas.height /2
let ballSpeedX = 2
let ballSpeedY = 2
let ballSize = 10
paddleWidth = 20
rightScore = 0
leftScore = 0
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


//Will be used to create the points
function makeText(text,x,y){
    context.fillStyle = 'white'
    context.font = '46px Arial'
    context.fillText(text,x,y)
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
    //Drawing right hand side score
    makeText(rightScore,3*canvas.width/4,50)
    //Drawing left hand side score
    makeText(leftScore,canvas.width/4,50)
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
    // if (ballX < 0 || ballX > canvas.width) {
    //     ballX = canvas.width / 2;
    //     ballY = canvas.height / 2;
    //     ballSpeedX = 2;
    //     ballSpeedY = 2;
    // }

    //Scores
    if(ballX<0){
        rightScore++
        rightPaddleHeight = Math.max(20, rightPaddleHeight-15)
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = 2;
        ballSpeedY = 2;
    }

    else if(ballX> canvas.width){
        leftScore++
        leftPaddleHeight = Math.max(20,leftPaddleHeight-15)
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = 2;
        ballSpeedY = 2;
    }

}
//moving the paddles
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        rightPaddleY = Math.max(rightPaddleY - 15,0)
    }
    else if (event.key==='ArrowDown'){
        rightPaddleY = Math.min(rightPaddleY +15, canvas.height - 100)
        }

    else if(event.key === 'w'){
        leftPaddleY = Math.max(leftPaddleY - 15,0)
    }

    else if (event.key ==='s'){
        leftPaddleY = Math.min(leftPaddleY +15,canvas.height-100)
    }
})

function play(){
    movement()
    draw()
    requestAnimationFrame(play)
}
play()