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
var song1 = ('resources/iwasallover.mp3');
var song2 = ('resources/sugar.mp3');
var song = new Audio(song1);
var currentsong = 'song1';
audio.loop = true;
song.loop = true;
audio.play();
song.play();
var drops = [];
var drops2 = [];
var drops3 = [];
var drops4 = [];

//agregar el boton de play
var playsprite = PIXI.Texture.fromImage('resources/play.png');
var pausesprite = PIXI.Texture.fromImage('resources/pause.png');
var playbutton = new PIXI.Sprite(playsprite);
playbutton.anchor.set(0.5);
playbutton.x = 50;
playbutton.y = app.screen.height - 50;
playbutton.scale.x = 0.5;
playbutton.scale.y = 0.5;
playbutton.interactive = true;
playbutton.buttonMode = true;
// Pointers normalize touch and mouse
playbutton.on('pointerdown', onClickplay);

app.stage.addChild(playbutton);

function onClickplay () {
    if(song.paused){//si la cancion esta pausada
        audio.pause();
        audio.currentTime = 0;
        song.pause();
        song.currentTime = 0;
        audio.play();
        song.play();
        playbutton.texture = playsprite;
    }else{
        song.pause();
        playbutton.texture = pausesprite;
    }
    
}

//agregar el boton de skip
var skipbutton = PIXI.Sprite.fromImage('resources/skip.png');
skipbutton.anchor.set(0.5);
skipbutton.x = app.screen.width-50;
skipbutton.y = app.screen.height - 50;
skipbutton.scale.x = 0.5;
skipbutton.scale.y = 0.5;
skipbutton.interactive = true;
skipbutton.buttonMode = true;
// Pointers normalize touch and mouse
skipbutton.on('pointerdown', onClickskip);

app.stage.addChild(skipbutton);

function onClickskip () {//si quieres agregar mas canciones pones if else y vas creando un loop
    if(currentsong == 'song1'){
    song.src = song2;
    song.play();
    currentsong = 'song2';
    songText.text = sugar;
    }else{
        song.src = song1;
        song.play();
        currentsong = 'song1';
        songText.text = allover;
    }
}


//agregar texto
var style = new PIXI.TextStyle({
    fontFamily: 'VT323',
    fontSize: 36,
    fill: ['#ffffff'],
    stroke: '#4a1850',
    fontWeight: 'bold',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});

var allover = 'i was all over her - salvia palth';
var sugar = 'sugar for the pill - slowdive';

var songText = new PIXI.Text(allover, style);
songText.x = 100;
songText.y = app.screen.height -50;

app.stage.addChild(songText);


//resize the screen to the correct size
window.addEventListener('resize', resize);
function resize() {
    
	// Resize the renderer
	app.renderer.resize(window.innerWidth, window.innerHeight);
    repeat();
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

//mover el texto
songText.x = 100;
songText.y = app.screen.height - 64;

//mover el boton de skip
skipbutton.x = app.screen.width-70;
skipbutton.y = app.screen.height - 50;


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
resize();
