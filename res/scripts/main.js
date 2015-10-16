// Get Canvas refference and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Make a white [#ffffff] background
ctx.fillStyle = "#ffffff";
ctx.fillRect(1, 1, 360, 360);

// Mouse Events
canvas.addEventListener("mousemove", mouseHover, false);
canvas.addEventListener("click", mouseDown, false);
var clickX;
var clickY;
var xCords, yCords;

// Array to store data and values
var values = [];

// Array to store property of a value
var valueProp = [];

// Function to manage 2-dim properties in 1-dim array [Euclid's Division Lemma]
var getValueNum = function(x, y,size) {
    return (((size * (x - 1)) + y) - 1);
}

var clear = function(context) {
    // Make a white [#ffffff] background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(1, 1, 360, 360);
}

//var drawNumber = function(context) {
//    for (x = 0; x < 9; x++) {
//        for (y = 0; y < 9; y++) {
//            if (valueProp[getValueNum((x+1), (y+1), 9)] == 0) {
//                if !(values[getValueNum((x+1), (y+1), 9)] == 0) {
//                    context.fillStyle = "#000000";
//                }
//            }
//        }
//    }
//}

var hoverValue = function(x, y) {
    clear(ctx);
    drawGrid(ctx);
    ctx.fillStyle = "#388e3c";
    ctx.fillRect((((x-1) * 40) + 2), (((y-1) * 40) + 2), 38, 38);
}

function mouseHover(event) {
    clickX = event.offsetX;
    clickY = event.offsetY;
    
    var RawCordsX;
    var RawCordsY;
    
    RawCordsX = (clickX - 1) / 40;
    RawCordsY = (clickY - 1) / 40;
    
    
    if (RawCordsX >= 0 && RawCordsX <= 1){ xCords = 1; }
    if (RawCordsX > 1 && RawCordsX <= 2) { xCords = 2; }
    if (RawCordsX > 2 && RawCordsX <= 3) { xCords = 3; }
    if (RawCordsX > 3 && RawCordsX <= 4) { xCords = 4; }
    if (RawCordsX > 4 && RawCordsX <= 5) { xCords = 5; }
    if (RawCordsX > 5 && RawCordsX <= 6) { xCords = 6; }
    if (RawCordsX > 6 && RawCordsX <= 7) { xCords = 7; }
    if (RawCordsX > 7 && RawCordsX <= 8) { xCords = 8; }
    if (RawCordsX > 8 && RawCordsX <= 9) { xCords = 9; }
    
    if (RawCordsY >= 0 && RawCordsY <= 1){ yCords = 1; }
    if (RawCordsY > 1 && RawCordsY <= 2) { yCords = 2; }
    if (RawCordsY > 2 && RawCordsY <= 3) { yCords = 3; }
    if (RawCordsY > 3 && RawCordsY <= 4) { yCords = 4; }
    if (RawCordsY > 4 && RawCordsY <= 5) { yCords = 5; }
    if (RawCordsY > 5 && RawCordsY <= 6) { yCords = 6; }
    if (RawCordsY > 6 && RawCordsY <= 7) { yCords = 7; }
    if (RawCordsY > 7 && RawCordsY <= 8) { yCords = 8; }
    if (RawCordsY > 8 && RawCordsY <= 9) { yCords = 9; }
    
    hoverValue(xCords, yCords);
}

function mouseDown(event) {
    alert(xCords + " X|Y " + yCords);
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