/**
 * Created by franklinhc on 9/12/15.
 */
window.onload = onReady; // first function call

// mouse position any time
var mouseX, mouseY, mousePos;

var frameCounter;
var canvas;
var ctx;
// for frame rate
var filterStrength = 20;
var frameTime = 0, lastLoop = new Date, thisLoop;

// box2D world
var world;
var SCALE = 30;
var myObject;
var myObjects = [];
var myMovingBasquet;
var currentAngule;
var create = true;
var go = false;
var again = false;

//image
var logo = new Image();
logo.src = "img/logo.jpg";
var img = new Image();
img.src = "img/start.svg";
var imgEnd = new Image();
imgEnd.src = "img/ende.svg";


// Sound
var drehung = 0;
var turnr = false;
var turnl = false;
var music = document.createElement('AUDIO');
music.src = "sound/theme.mp3";
music.volume = 0.3;
var roll = document.createElement('AUDIO');
roll.src = "sound/marble_roll.mp3";
roll.volume = 0.5;
var col1 = document.createElement('AUDIO');
col1.src = "sound/marble_collide_1.mp3";
var col2 = document.createElement('AUDIO');
col2.src = "sound/marble_collide_2.mp3";
var col3 = document.createElement('AUDIO');
col3.src = "sound/marble_collide_3.mp3";
var col4 = document.createElement('AUDIO');
col4.src = "sound/marble_collide_4.mp3";
var col5 = document.createElement('AUDIO');
col5.src = "sound/marble_collide_5.mp3";
var cols = [col1,col2,col3,col4,col5];
var xspeed = [0,0,0];
var yspeed = [0,0,0];
var velo = 0;
var prevvelo = 0;


var myBall;


//Time
var minutes = 0;
var seconds = 0;
var minutesEnd;
var secondsEnd;
var secs;

// box2D variables
var   b2Vec2, b2BodyDef , b2Body , b2FixtureDef , b2Fixture , b2World , b2MassData , b2PolygonShape , b2CircleShape , b2DebugDraw ;





function onReady() {
    // your inicialization code here  ----------------------------------------------

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    frameCounter = 0;
    canvas.addEventListener('click', cord);
    document.onkeydown=function(){keyInput()};
    document.onkeyup=function(){keyOutput()};


    // setup world
    var   b2Vec2 = Box2D.Common.Math.b2Vec2
        , b2BodyDef = Box2D.Dynamics.b2BodyDef
        , b2Body = Box2D.Dynamics.b2Body
        , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
        , b2Fixture = Box2D.Dynamics.b2Fixture
        , b2World = Box2D.Dynamics.b2World
        , b2MassData = Box2D.Collision.Shapes.b2MassData
        , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
        , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
        , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
        ;


    world = new b2World(
        new b2Vec2(0, 30)    //gravity
        ,  false             //allow sleep
    );

    music.play();
    music.loop = true;

    mouseX = canvas.width/2;
    mouseY = canvas.height/2;
    myMovingBasquet = new Box2Dbasket (canvas.width/2, canvas.height/2);
// ---------------------------------------
    currentAngule = 0;

    draw();

} // end onReady()


// your drawing code here ---------------------------------------------------
function draw () {
    if (create === true){
        myBall = new Box2DCircle(975, -10, 12);
        create = false;
    }

    if (go === true){
        roll.play();
        roll.loop = true;
    }

    // for background
    ctx.fillStyle="#2B2B2B"; // dark gray
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    myBall.draw(ctx);
//-----------------------------------------------------------------
    myMovingBasquet.draw(ctx);
    myMovingBasquet.SetAngularVelocity(currentAngule);


    // BLACK HOLE STUFF---------------------------------------------------------------
    ctx.fillStyle = "rgba(251, 0, 0)";
    ctx.strokeStyle = "rgba(251, 0, 0, 0.9)";
    ctx.beginPath();
    ctx.arc(myMovingBasquet.mySpotScreenX , myMovingBasquet.mySpotScreenY , 10 , 0, Math.PI * 2, true);
    ctx.closePath();
    //ctx.fill();
    //ctx.stroke();

    ctx.fillStyle = "rgba(251, 0, 0)";
    ctx.strokeStyle = "rgba(251, 0, 0, 0.9)";
    ctx.beginPath();
    ctx.arc(myMovingBasquet.mySpotScreenX2 , myMovingBasquet.mySpotScreenY2 , 10 , 0, Math.PI * 2, true);
    ctx.closePath();
    //ctx.fill();
    //ctx.stroke();

    ctx.fillStyle = "rgba(251, 0, 0)";
    ctx.strokeStyle = "rgba(251, 0, 0, 0.9)";
    ctx.beginPath();
    ctx.arc(myMovingBasquet.mySpotScreenX3 , myMovingBasquet.mySpotScreenY3 , 10 , 0, Math.PI * 2, true);
    ctx.closePath();
    //ctx.fill();
    //ctx.stroke();

    // black hole 1------------------------------------------
    var a = myBall.miX - myMovingBasquet.mySpotScreenX;
    var b = myBall.miY - myMovingBasquet.mySpotScreenY;
    var distance = Math.sqrt(a * a + b * b);
    var minDist = 20;
    if (distance < minDist) {
        myBall.removeBody();
        create = true;
    }
    // black hole 2------------------------------------------
    var a2 = myBall.miX - myMovingBasquet.mySpotScreenX2;
    var b2 = myBall.miY - myMovingBasquet.mySpotScreenY2;
    var distance = Math.sqrt(a2 * a2 + b2 * b2);
    var minDist = 20;
    if (distance < minDist) {
        myBall.removeBody();
        create = true;
    }
    // black hole 3------------------------------------------
    var a3 = myBall.miX - myMovingBasquet.mySpotScreenX3;
    var b3 = myBall.miY - myMovingBasquet.mySpotScreenY3;
    var distance = Math.sqrt(a3 * a3 + b3 * b3);
    var minDist = 20;
    if (distance < minDist) {
        myBall.removeBody();
        create = true;
    }

    // destroying Ball-------------------------------------------------
    if (myBall.miY > canvas.height) {
        myBall.removeBody();
        create = true;
    }

    //---------------------------------------------------------------------

    // Sounds
    if (turnr && Math.abs(drehung) < 1) {
        drehung += 0.01;
    } else if (turnl && Math.abs(drehung) < 1) {
        drehung -= 0.01;
    } else {
        drehung = drehung * 0.94;
    }
    currentAngule = drehung;


if (go === true){
    xspeed[1] = xspeed[0];
    xspeed[0] = myBall.miX;
    xspeed[2] = Math.abs(xspeed[1] - xspeed[0]);
    yspeed[1] = yspeed[0];
    yspeed[0] = myBall.miY;
    yspeed[2] = Math.abs(yspeed[1] - yspeed[0]);
    prevvelo = velo;
    velo = xspeed[2] + yspeed[2];

    if (velo > 10){
        velo = 10;
    }

    if (Math.abs(prevvelo)-Math.abs(velo)>0.5){
        var rand = Math.floor(Math.random()*5);
        var hitspeed = (Math.abs(prevvelo) - Math.abs(velo)) * 0.1 + 0.2;
        if (hitspeed > 1) {hitspeed = 1}
        cols[rand].volume = hitspeed;
        cols[rand].load();
        cols[rand].play();
    }
    roll.volume = 0.1 * velo;
}
// --------------------------------------------------------
    ctx.drawImage(logo , 76.5 , 62.5);
    world.Step(
        1 / 60   //frame-rate speed of the whole game
        ,  10       //velocity iterations
        ,  10       //position iterations
    );

    // printing text in canvas
    ctx.fillStyle = "#E0E0E0";
    ctx.font = "normal 30px Krungthep";

    requestAnimFrame(draw);

    // start page
    if(go === false) {
        ctx.drawImage(img,0,0);
    } else {
        if ( again === false){
             secs = Math.floor(seconds++ / 60);
            ctx.fillText("Time " + minutes + "m " + secs + "s", 82.59, 400.8);
        } else {
            ctx.fillText("Time " + minutes + "m " + secs + "s", 82.59, 400.8);
        }

        ctx.fillText("Time " + minutes + "m " + secs + "s", 82.59, 400.8);
        minutesEnd=minutes;
        secondsEnd=secs;
        ctx.fillStyle = "#2B2B2B";

        // Time
        if (secs > 59 ) {
            seconds = 0;
            minutes++;
        }
    }

    // end page
    var c = 1120 - myBall.miX;
    var d = 610 - myBall.miY;
    var distance = Math.sqrt(c * c + d * d);
    var minDist = 60;
    if (distance < minDist) {
        again = true;
        myBall.removeBody();
       // create = true;
    }
    if (again === true){
        ctx.fillStyle = "#E0E0E0";
        ctx.font = "normal 50px Krungthep";

        ctx.drawImage(imgEnd, 0, 0);
        ctx.fillText("Time " + minutesEnd + "m " + secondsEnd + "s", 880, 500.8);

    }
    console.log(myBall.miX , myBall. miY);
}



// for events  ---------------------------------------------------
function cord() {
    console.log(mouseX,mouseY);
}

function keyInput(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 37: // left
            go = true;
            again = false;
            turnl = true;
            break;
        case 38: // stop
            currentAngule = 0.0;
            break;
        case 39: // right
            go = true;
            again = false;
            turnr = true;
            break;
        case 40:

            break;
        case 65: // "a"

            break;
        case 90: // "z"

            break;
    }
}

    function keyOutput(e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 37: // left
                turnl = false;

                currentAngule = -0.0;
                break;
            case 38: // stop ^
                currentAngule = 0.0;
                break;
            case 39: // right
                turnr = false;
                currentAngule = 0.0;
                break;
            case 40:

                break;
            case 65: // "a"

                break;
            case 90: // "z"

                break;
        }
    }

// for animation request  ---------------------------------------------------
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();