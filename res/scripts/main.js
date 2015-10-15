// Get Canvas refference and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Make a white [#ffffff] background
ctx.fillStyle = "#ffffff";
ctx.fillRect(1, 1, 360, 360);

// Mouse Events
canvas.addEventListener("mousedown", mouseDown, false);
var clickX;
var clickY;

// Array to store data and values
var values = [];

// Array to store property of a value
var valueProp = [];

// Function to manage 2-dim properties in 1-dim array [Euclid's Division Lemma]
var getValueNum = function(x, y,size) {
    return (((size * (x - 1)) + y) - 1);
}

function mouseDown(event) {
    clickX = event.offsetX;
    clickY = event.offsetY;
}

// Function that draws a sudoku grid
var drawGrid = function(context) {
    // Set stroke color to black
    context.strokeStyle = "#000000";
    
    // Draw a 9x9 grid using ctx.strokeRect();
    for (x = 0; x < 9; x++) {
        for (y = 0; y < 9; y++) {
            context.strokeRect(((x * 40) + 1), ((y * 40) + 1), 40, 40);
        }
    }
    
    context.beginPath();
    
    context.moveTo(121, 1);
    context.lineTo(121, 361);
    
    context.moveTo(241, 1);
    context.lineTo(241, 361);
    
    context.moveTo(1, 121);
    context.lineTo(361, 121);
    
    context.moveTo(1, 241);
    context.lineTo(361, 241);
    
    context.lineWidth = 3;
    context.stroke();
    
    context.strokeWidth = 3;
    context.strokeRect(1, 1, 360, 360);
    
    context.lineWidth = 1;
    context.strokeWidth = 1;
    
};

// Draw grid
drawGrid(ctx);

// Init array
for (x = 0; x < 9; x++) {
    for (y = 0; y < 9; y++) {
        values[getValueNum((x + 1), (y+ 1), 9)] = 0;
        valueProp[getValueNum((x+ 1), (y+ 1), 9)] = 0;
    }
}