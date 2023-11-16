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
    context.arc(500,300,10, 0,Math.PI*2,false) // creates the ball 
    context.fill() //fills the ball in
}
draw()
