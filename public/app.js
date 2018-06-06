var app = new PIXI.Application({
    autoResize: true,
    resolution: devicePixelRatio,
    backgroundColor : 0x1099bb
});

document.body.appendChild(app.view);
//agregar background
var background = PIXI.Sprite.fromImage('resources/background.png');
// center the sprite anchor point
background.anchor.x = 0;
background.anchor.y = 0;

background.position.x = -40;
background.position.y = 0;


app.stage.addChild(background);

//agregar musica y sonido de lluvia
var audio = new Audio('resources/rain.mp3');
var song = new Audio('resources/song.mp3');
audio.loop = true;
song.loop = true;
audio.play();
song.play();
var drops = [];
var drops2 = [];
var drops3 = [];
var drops4 = [];

//agregar el boton de play
var playbutton = PIXI.Sprite.fromImage('resources/play.png');
playbutton.anchor.set(0.5);
playbutton.x = 50;
playbutton.y = app.screen.height - 50;
playbutton.scale.x = 0.5;
playbutton.scale.y = 0.5;
// Opt-in to interactivity
playbutton.interactive = true;

// Shows hand cursor
playbutton.buttonMode = true;

// Pointers normalize touch and mouse
playbutton.on('pointerdown', onClick);

app.stage.addChild(playbutton);

function onClick () {
    audio.pause();
    audio.currentTime = 0;
    song.pause();
    song.currentTime = 0;
    audio.play();
    song.play();
}

//resize the screen to the correct size
window.addEventListener('resize', resize);
function resize() {
    repeat();
	// Resize the renderer
	app.renderer.resize(window.innerWidth, window.innerHeight);
  
  // You can use the 'screen' property as the renderer visible
  // area, this is more useful than view.width/height because
  // it handles resolution
  //app.position.set(app.screen.width, app.screen.height);
  
}

//for loop para iniciar todas las primeras lluvias
var ranX;
var ranY;
var i;
for (i = 0; i < 300; i++) {
    ranX = Math.floor((Math.random() * app.screen.width));
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops[i] = new PIXI.Graphics();
    drops[i].beginFill(0x004BBC);
    drops[i].drawRect(ranX,ranY,4,20);
    app.stage.addChild(drops[i]);
}

//hacer gotas layer 2
var ranX;
var ranY;
var i;
for (i = 0; i < 400; i++) {
    ranX = Math.floor((Math.random() * app.screen.width));
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops2[i] = new PIXI.Graphics();
    drops2[i].beginFill(0x214887);
    drops2[i].drawRect(ranX,ranY,3,15);
    app.stage.addChild(drops2[i]);
}

//hacer gotas layer 3
var ranX;
var ranY;
var i;
for (i = 0; i < 500; i++) {
    ranX = Math.floor((Math.random() * app.screen.width));
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops3[i] = new PIXI.Graphics();
    drops3[i].beginFill(0x214887);
    drops3[i].drawRect(ranX,ranY,2,10);
    app.stage.addChild(drops3[i]);
}

//hacer gotas layer 4
var ranX;
var ranY;
var i;
for (i = 0; i < 600; i++) {
    ranX = Math.floor((Math.random() * app.screen.width));
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops4[i] = new PIXI.Graphics();
    drops4[i].beginFill(0x214887);
    drops4[i].drawRect(ranX,ranY,1,5);
    app.stage.addChild(drops4[i]);
}



app.ticker.add(function(delta){

var mouseposition = app.renderer.plugins.interaction.mouse.global;
shift = mouseposition.x;
//drops1
var i;
for (i = 0; i < 300; i++) {
    //drops[i].x = (shift-app.screen.width/2)*.25;
    speed = i/10;
    if(speed<30){
        speed = speed+5;
    }
    drops[i].y=drops[i].y+speed;
    if(drops[i].y>app.screen.height){
        drops[i].y=-30;
    }
}
//drops2
var i;
for (i = 0; i < 400; i++) {
    //drops2[i].x = (shift-app.screen.width/2)*.5;
    speed = i/15;
    if(speed<30){
        speed = speed+5;
    }
    drops2[i].y=drops2[i].y+speed;
    if(drops2[i].y>app.screen.height){
        drops2[i].y=-30;
    }
}
//drops3
var i;
for (i = 0; i < 500; i++) {
    //drops3[i].x = (shift-app.screen.width/2)*.75;
    speed = i/15;
    if(speed<30){
        speed = speed+5;
    }
    drops3[i].y=drops3[i].y+speed;
    if(drops3[i].y>app.screen.height){
        drops3[i].y=-30;
    }
}
//drops4
var i;
for (i = 0; i < 600; i++) {
    //drops4[i].x = (shift-app.screen.width/2)*1;
    speed = i/50;
    if(speed<30){
        speed = speed+5;
    }
    drops4[i].y=drops4[i].y+speed;
    if(drops4[i].y>app.screen.height){
        drops4[i].y=-30;
    }
}
//move background
//background.position.x = -100+(shift-app.screen.width/2)*.10;

});

function repeat(){

//mover el boton de play
playbutton.x = 50;
playbutton.y = app.screen.height - 50;

//for loop para iniciar todas las primeras lluvias
var ranX;
var ranY;
var i;
for (i = 0; i < 300; i++) {
    ranX = Math.floor((Math.random() * app.screen.width)-150);
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops[i].x = ranX;
    drops[i].y = ranY;
}

//hacer gotas layer 2
var ranX;
var ranY;
var i;
for (i = 0; i < 400; i++) {
    ranX = Math.floor((Math.random() * app.screen.width)-150);
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops2[i].x = ranX;
    drops2[i].y = ranY;
}

//hacer gotas layer 3
var ranX;
var ranY;
var i;
for (i = 0; i < 500; i++) {
    ranX = Math.floor((Math.random() * app.screen.width)-150);
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops3[i].x = ranX;
    drops3[i].y = ranY;
}

//hacer gotas layer 4
var ranX;
var ranY;
var i;
for (i = 0; i < 600; i++) {
    ranX = Math.floor((Math.random() * app.screen.width)-150);
    ranY = Math.floor((Math.random() * app.screen.height/3) + 1);
    drops4[i].x = ranX;
    drops4[i].y = ranY;
}
};