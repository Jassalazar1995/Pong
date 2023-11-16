const canvas = document.querySelector('#pongCanvas')
const context = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 600

//This function will create the playing field, including the paddles and the ball
function draw(){
    //drawing the rectangle that will be played on
    context.fillStyle = 'orange'
    context.fillRect(0,0,1000,600)

    //drawing the  ball
    context.fillStyle = 'white'
    context.beginPath();
    context.arc(500,300,10, 0,Math.PI*2,false) // creates the ball 
    context.closePath();
    context.fill() //fills the ball in

  

    //Drawing the right padde
    context.fillStyle = 'white'
    context.fillRect(980,250,20,100)

    //Drawing the left paddle
    context.fillStyle = 'white'
    context.fillRect(0,250,20,100)
}


function movement(){
    let ballX = 500
    let ballY = 300
    ballX += 2
    ballY += 2

    //Ball collison with top and bottom
    if (ballY  > canvas.height || ballY < 0){
        ballSpeedY = -ballSpeedY
    }
}

function play(){
    movement()
    draw()
    requestAnimationFrame(play)
}
play()