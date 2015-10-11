// Get Canvas refference and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Make a white [#ffffff] background
ctx.fillStyle = "#ffffff";
ctx.fillRect(1, 1, 360, 360);

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

drawGrid(ctx);