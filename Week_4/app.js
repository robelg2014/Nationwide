
const addh2 = () => {
    // creating h2
    let h2 = $('<h2>').text("just getting started")
    $('body').append(h2)
    
}
 const changeH2 = () => {
     let h2 = $('<h2>').text("getting warmed up")
     $('body').append(h2)
 }
addh2()
changeH2()



// loop to do action for so many times
var generateSquares = (amountOfSquares) => {
for(var counter = 0; counter <= amountOfSquares; counter++){
    console.log(counter)
// create a square 
let square = $('<div>').addClass('square')
// add css to the squares
square.css('background-color', rgbGenerator() )
// append the square to the body
$('body').append(square)
}
}

var rgbGenerator = () => {
    var red = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)

    return "rgb(" + red + "," + green + "," + blue + ")"
}
generateSquares(50)
