const canvas = document.querySelector("canvas")

// UPDATE THE WIDTH AND HEIGHT
canvas.width = 500
canvas.height = 500

// Threejs
// awwwards

// GAMES ENGINES
// - Gamemaker Studio
// - Kaboom JS 


// frank's laboratory [CANVAS TUTORIAL]

const ctx = canvas.getContext("2d")
console.log(ctx)


// MAKING BASIC SHAPES

// RECTANGLES

// .rect()
// ctx.fillStyle = "#f00"
// ctx.rect(50, 50, 100, 50)
// ctx.fill()

// // .fillRect
// ctx.fillStyle = "green"
// ctx.fillRect(50, 100, 100, 50)

// // .fillRect
// ctx.fillStyle = "yellow"
// ctx.fillRect(50, 150, 100, 50)


// // CLEARING THE CANVAS
// ctx.clearRect(0, 0, canvas.width, canvas.height)


// CIRCLES
// .arc
// ctx.beginPath()
// ctx.fillStyle = "blue"
// ctx.arc(100, 50, 30, 0, Math.PI * 2)
// ctx.fill()

// LINES

// moveTo(x, y): Moves the paint brush to the specified coordinate 
// lineTo(x, y): Draws a line on the specified coordinate\

// ctx.beginPath()
// ctx.moveTo(100, 100)
// ctx.lineTo(150, 50)
// ctx.lineTo(200, 100)
// // ctx.lineTo(100, 100)
// ctx.closePath()


// ctx.lineWidth = 2
// ctx.strokeStyle = "#fff"
// ctx.fillStyle = "f00"
// ctx.stroke()
// ctx.fill()


// SQUARE 
// ctx.beginPath()

// ctx.moveTo(100, 100)
// ctx.lineTo(100, 200)
// ctx.lineTo(200, 200)
// ctx.lineTo(200, 100)
// // ctx.lineTo(97.5, 100)
// ctx.closePath()

// ctx.lineWidth = 5
// ctx.strokeStyle = "#fff"
// ctx.stroke()


// TEXT
// ctx.fillText(text, x, y, maxWidth)
ctx.font = "50px Arial"
ctx.fillStyle = "#fff"
ctx.fillText("JACE", 100, 100, 400)
// ctx.fill()