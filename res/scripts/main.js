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

// Select Event
var selectedX, selectedY;
selectedX = -1;
selectedY = -1;

// Keyboard Event
window.addEventListener('keydown',this.keyEvent, false);

// Array to store data and values
var values = [];

// Array to store property of a value
var valueProp = [];

// Array for possible variations dump
var having = [];

// First render flag
var flag = 0;

// Function to manage 2-dim properties in 1-dim array [Euclid's Division Lemma]
var getValueNum = function(x, y,size) {
    return (((size * (x - 1)) + y) - 1);
}

var clear = function(context) {
    // Make a white [#ffffff] background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(1, 1, 360, 360);
}

var hoverValue = function(x, y) {
    clear(ctx);
    ctx.fillStyle = "#388e3c";
    ctx.fillRect((((x-1) * 40) + 2), (((y-1) * 40) + 2), 38, 38);
    drawArrayGrid(ctx);
    drawGrid(ctx);
};

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

var selectValue = function(x, y) {
    selectedX = x;
    selectedY = y;
};

var resetPossiblities = function() {
    for (n = 0; n < 9; n++) {
        having[n] = false;
    }
}

var checkRow = function(x, y) {
    for (n = 1; n < 10; n++) {
        if (values[getValueNum(n, y, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(n, y, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
    }
}

var checkColumn = function(x, y) {
    for (n = 1; n < 10; n++) {
        if (values[getValueNum(x, n, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
        if (values[getValueNum(x, n, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
    }
}

var checkCell = function(x, y) {
    if (x > 0 && x < 4) {
        if (y > 0 && y < 4) {
            /* Quad I */
            // debug::alert("Quad I");
            for (n = 1; n < 4; n++) {
                for (m = 1; m < 4; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
        
        if (y > 3 && y < 7) {
            /* Quad II */
            // debug::alert("Quad II");
            for (n = 1; n < 4; n++) {
                for (m = 4; m < 7; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
        
        if (y > 6 && y < 10) {
            /* Quad III */
            // debug::alert("Quad III");
            for (n = 1; n < 4; n++) {
                for (m = 7; m < 10; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
    }
    
    if (x > 3 && x < 7) {
        if (y > 0 && y < 4) {
            /* Quad IV */
            // debug::alert("Quad IV");
            for (n = 4; n < 7; n++) {
                for (m = 1; m < 4; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
        if (y > 3 && y < 7) {
            /* Quad V */
            // debug::alert("Quad V");
            for (n = 4; n < 7; n++) {
                for (m = 4; m < 7; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
        if (y > 6 && y < 10) {
            /* Quad VI */
            // debug::alert("Quad VI");
            for (n = 4; n < 7; n++) {
                for (m = 7; m < 10; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
    }
    
    if (x > 6 && x < 10) {
        if (y > 0 && y < 4) {
            /* Quad VII */
            // debug::alert("Quad VII");
            for (n = 7; n < 10; n++) {
                for (m = 1; m < 4; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
        if (y > 3 && y < 7) {
            /* Quad VIII */
            // debug::alert("Quad VIII");
            for (n = 7; n < 10; n++) {
                for (m = 4; m < 7; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
        if (y > 6 && y < 10) {
            /* Quad IX */
            // debug::alert("Quad IX");
            for (n = 7; n < 10; n++) {
                for (m = 7; m < 10; m++) {
                    if (values[getValueNum(n, m, 9)] == 1) { having[0] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 2) { having[1] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 3) { having[2] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 4) { having[3] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 5) { having[4] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 6) { having[5] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 7) { having[6] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 8) { having[7] = true; /* debug::alert("true"); */ }
                    if (values[getValueNum(n, m, 9)] == 9) { having[8] = true; /* debug::alert("true"); */ }
                }
            }
        }
    }
}

var solveForValue = function(x, y) {
    resetPossiblities();
    checkRow(x, y);
    checkColumn(x, y);
    checkCell(x, y);
    
    var count = 0;
    for (n = 0; n < 9; n++) {
        if(having[n] == true) { count++; }
    }
    
    if (count == 8) {
        if (having[0] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 1; }
        if (having[1] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 2; }
        if (having[2] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 3; }
        if (having[3] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 4; }
        if (having[4] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 5; }
        if (having[5] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 6; }
        if (having[6] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 7; }
        if (having[7] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 8; }
        if (having[8] == false) { valueProp[getValueNum(x, y, 9)] = 1; values[getValueNum(x, y, 9)] = 9; }
        return true;
    } else {return false;} 
}

function keyEvent(event) {
    var keycode = event.keyCode;
    var num = 0;
    
    // Debug :: alert(keycode);
    
    if (selectedX > -1 && selectedY > -1) {
        if (keycode == 48) { values[getValueNum(selectedX, selectedY, 9)] = 0; }
        if (keycode == 49) { values[getValueNum(selectedX, selectedY, 9)] = 1; }
        if (keycode == 50) { values[getValueNum(selectedX, selectedY, 9)] = 2; }
        if (keycode == 51) { values[getValueNum(selectedX, selectedY, 9)] = 3; }
        if (keycode == 52) { values[getValueNum(selectedX, selectedY, 9)] = 4; }
        if (keycode == 53) { values[getValueNum(selectedX, selectedY, 9)] = 5; }
        if (keycode == 54) { values[getValueNum(selectedX, selectedY, 9)] = 6; }
        if (keycode == 55) { values[getValueNum(selectedX, selectedY, 9)] = 7; }
        if (keycode == 56) { values[getValueNum(selectedX, selectedY, 9)] = 8; }
        if (keycode == 57) { values[getValueNum(selectedX, selectedY, 9)] = 9; }
        
        if (keycode == 96) { values[getValueNum(selectedX, selectedY, 9)] = 0; }
        if (keycode == 97) { values[getValueNum(selectedX, selectedY, 9)] = 1; }
        if (keycode == 98) { values[getValueNum(selectedX, selectedY, 9)] = 2; }
        if (keycode == 99) { values[getValueNum(selectedX, selectedY, 9)] = 3; }
        if (keycode == 100) { values[getValueNum(selectedX, selectedY, 9)] = 4; }
        if (keycode == 101) { values[getValueNum(selectedX, selectedY, 9)] = 5; }
        if (keycode == 102) { values[getValueNum(selectedX, selectedY, 9)] = 6; }
        if (keycode == 103) { values[getValueNum(selectedX, selectedY, 9)] = 7; }
        if (keycode == 104) { values[getValueNum(selectedX, selectedY, 9)] = 8; }
        if (keycode == 105) { values[getValueNum(selectedX, selectedY, 9)] = 9; }
        
        if (keycode == 83) { solveForValue(selectedX, selectedY); }
    }
    
    hoverValue(xCords, yCords);
}

function mouseDown(event) {
    // Debug :: alert(xCords + " X|Y " + yCords);
    selectValue(xCords, yCords);
}

var drawArrayGrid = function (context) {
    context.fillStyle = "#000000";
    context.font = "30px Arial";
    
    // xlocal and ylocal are just vars created for the "for" loop
    for (xlocal = 1; xlocal < 10; xlocal++) {
        for (ylocal = 1; ylocal < 10; ylocal++) {
            if (valueProp[getValueNum(xlocal, ylocal, 9)] == 1) {
                context.fillStyle = "#B71C1C";
            } else { context.fillStyle = "#000000"; }
            
            if (values[getValueNum(xlocal, ylocal, 9)] != 0) {
                context.fillText(values[getValueNum(xlocal, ylocal, 9)], (((xlocal-1) * 40) + 12), (((ylocal-1) * 40) + 32));
            }
        }
    }
}

// Function that draws a sudoku grid
var drawGrid = function(context) {
    // Set stroke color to black
    context.strokeStyle = "#000000";
    
    ctx.fillStyle = "#0080ff";
    ctx.fillRect((((selectedX-1) * 40) + 2), (((selectedY-1) * 40) + 2), 38, 38);
    
    
    if (flag == 0) {
        // Init array
        for (x = 0; x < 9; x++) {
            for (y = 0; y < 9; y++) {
                values[getValueNum((x + 1), (y+ 1), 9)] = 0;
                //valueProp[getValueNum((x+ 1), (y+ 1), 9)] = 0;
            }
        }
        flag  = 1;
    }
    
    drawArrayGrid(context);
    
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

drawArrayGrid(ctx);

