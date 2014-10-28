var snake;

var context;
var screenWidth;
var screenHeight;
gameInitialize();
gameDraw();

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getcontext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHieght;
    
    canvas.width = screenWidth;
    canvas.hieght = screenHeight;
    
}


  
function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(180 ,250, 213)";
    context.fillRect (0, 0, screenWidth, screenHieght);
    }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

