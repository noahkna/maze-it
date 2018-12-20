/**
 * Created by franklinhc on 28/3/17.
 */
function Box2Dbasket( x,  y) {
    this.miX;

    this.miY;

    this.myAngle;


    // BLACK HOLE 1 =================================================
    var mySpotX = 323; // x position for the ball in the maze
    var mySpotY = -343; // y position for the ball in the maze
    this.mySpotScreenX = 0;
    this.mySpotScreenY = 0;
    var a = 0 - mySpotX;
    var b = 0 - mySpotY;
    var mySpotRadio = Math.sqrt(a * a + b * b); // my radius
    //===============================================================
    // BLACK HOLE 2 =================================================
    var mySpotX2 = -185; // x position for the ball in the maze
    var mySpotY2 = -378 ; // y position for the ball in the maze
    this.mySpotScreenX2 = 0;
    this.mySpotScreenY2 = 0;
    var a2 = 0 - mySpotX2;
    var b2 = 0 - mySpotY2;
    var mySpotRadio2 = Math.sqrt(a2 * a2 + b2 * b2); // my radius
    //===============================================================
    // BLACK HOLE 3 =================================================
    var mySpotX3 = -86; // x position for the ball in the maze
    var mySpotY3 = 233 ; // y position for the ball in the maze
    this.mySpotScreenX3 = 0;
    this.mySpotScreenY3 = 0;
    var a3 = 0 - mySpotX3;
    var b3 = 0 - mySpotY3;
    var mySpotRadio3 = Math.sqrt(a3 * a3 + b3 * b3); // my radius
    //===============================================================


    var miWidht  = 180 / SCALE/2;
    var miHeight = 10 / SCALE/2-6;


    var r = 30;

    var   b2Vec2 = Box2D.Common.Math.b2Vec2

    this.b2Vec2 = Box2D.Common.Math.b2Vec2
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

    // making body
    this.bodyDef = new b2BodyDef;
    //this.bodyDef.type = b2Body.b2_dynamicBody;
    this.bodyDef.type = b2Body.b2_kinematicBody;
    this.bodyDef.position.x = x/ SCALE + miWidht;
    this.bodyDef.position.y = y/ SCALE + miHeight;

    // making the box
   this.fixDef = new b2FixtureDef;
    this.fixDef.shape = new b2PolygonShape;
    this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 0.2; // Bounce
    this.fixDef.shape.SetAsBox(0, 0);

    // making the base
    this.fixDef2 = new b2FixtureDef;
    this.fixDef2.density = 1.0;
    this.fixDef2.friction = 0.5;
    this.fixDef2.restitution = 0.2;
    this.fixDef2.shape = new b2PolygonShape;
    this.points2 = [{x: -0.62 , y: -1.1 }, {x: 0.66 , y: -1.1} , {x: 1.3, y: 0.01}, {x: 0.66, y: 1.12}, {x: -0.62 , y: 1.12}, {x: -1.26 , y: 0.01}];
    for (var i = 0; i < this.points2.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points2[i].x, this.points2[i].y);
        this.points2[i] = vec;
    }
    this.fixDef2.shape.SetAsArray(this.points2, this.points2.length);

    // 2nd Loop  - 1
    this.fixDef3 = new b2FixtureDef;
    this.fixDef3.density = 1.0;
    this.fixDef3.friction = 0.5;
    this.fixDef3.restitution = 0.2;
    this.fixDef3.shape= new b2PolygonShape;
    //this.points = [{x: 1, y: 0}, {x: 3, y: -3}, {x: 3, y: 0}];
    this.points3 = [{x: -1.8, y: -3.14},{x: 1.73, y: -3.14}, {x: 1.67, y: -3.03}, {x: -1.73, y: -3.03}] ; //, {x: -1.79, y: 2.93}, {x: 1.67, y: 2.93}

    for (var i = 0; i < this.points3.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points3[i].x, this.points3[i].y);
        this.points3[i] = vec;
    }
    this.fixDef3.shape.SetAsArray(this.points3, this.points3.length);

    // 2nd Loop  - Clockwise 2
    this.fixDef4 = new b2FixtureDef;
    this.fixDef4.density = 1.0;
    this.fixDef4.friction = 0.5;
    this.fixDef4.restitution = 0.2;
    this.fixDef4.shape= new b2PolygonShape;

    this.points4 = [{x: 1.73, y: -3.14},{x: 3.5, y: -0.08}, {x: 3.37, y: -0.08}, {x: 1.67, y: -3.03}] ;

    for (var i = 0; i < this.points4.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points4[i].x, this.points4[i].y);
        this.points4[i] = vec;
    }
    this.fixDef4.shape.SetAsArray(this.points4, this.points4.length);

    // 2nd Loop  - Clockwise 3
    this.fixDef5 = new b2FixtureDef;
    this.fixDef5.density = 1.0;
    this.fixDef5.friction = 0.5;
    this.fixDef5.restitution = 0.2;
    this.fixDef5.shape= new b2PolygonShape;

    this.points5 = [{x: 3.37, y: -0.08},{x: 3.5, y: -0.08}, {x: 3.27, y: 0.31} ,{x: 3.18, y: 0.25}] ;

    for (var i = 0; i < this.points5.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points5[i].x, this.points5[i].y);
        this.points5[i] = vec;
    }
    this.fixDef5.shape.SetAsArray(this.points5, this.points5.length);

    // 2nd Loop  - Clockwise 4 Door
    this.fixDef6 = new b2FixtureDef;
    this.fixDef6.density = 1.0;
    this.fixDef6.friction = 0.5;
    this.fixDef6.restitution = 0.2;
    this.fixDef6.shape= new b2PolygonShape;

    this.points6 = [{x: 3.11, y: 0.21},{x: 3.16, y: 0.12}, {x: 4.24, y: 0.75} ,{x: 4.19, y: 0.84}] ;//[{x: 3.18, y: 0.25},{x: 3.27, y: 0.31}, {x: 2.46, y: 1.71} ,{x: 2.37, y: 1.65}]

    for (var i = 0; i < this.points6.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points6[i].x, this.points6[i].y);
        this.points6[i] = vec;
    }
    this.fixDef6.shape.SetAsArray(this.points6, this.points6.length);

    // 2nd Loop  - Clockwise 5
    this.fixDef7 = new b2FixtureDef;
    this.fixDef7.density = 1.07
    this.fixDef7.friction = 0.5;
    this.fixDef7.restitution = 0.2;
    this.fixDef7.shape= new b2PolygonShape;

    this.points7 = [{x: 2.37, y: 1.65},{x: 2.46, y: 1.71}, {x: 1.73, y: 2.97} ,{x: 1.67, y: 2.87}] ;

    for (var i = 0; i < this.points7.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points7[i].x, this.points7[i].y);
        this.points7[i] = vec;
    }
    this.fixDef7.shape.SetAsArray(this.points7, this.points7.length);

    // 2nd Loop  - Clockwise 6
    this.fixDef8 = new b2FixtureDef;
    this.fixDef8.density = 1.07
    this.fixDef8.friction = 085;
    this.fixDef8.restitution = 0.2;
    this.fixDef8.shape= new b2PolygonShape;

    this.points8 = [{x: 1.67, y: 2.87},{x: 1.73, y: 2.97}, {x: -1.8, y: 2.97} ,{x: -1.73, y: 2.87}] ;

    for (var i = 0; i < this.points8.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points8[i].x, this.points8[i].y);
        this.points8[i] = vec;
    }
    this.fixDef8.shape.SetAsArray(this.points8, this.points8.length);9
    // 2nd Loop  - Clockwise 7
    this.fixDef9 = new b2FixtureDef;
    this.fixDef9.density = 1.07
    this.fixDef9.friction = 085;
    this.fixDef9.restitution = 0.2;
    this.fixDef9.shape= new b2PolygonShape;

    this.points9 = [{x: -1.73, y: 2.87},{x: -1.8, y: 2.97}, {x: -3.56, y: -0.08} ,{x: -3.44, y: -0.08}] ;

    for (var i = 0; i < this.points9.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points9[i].x, this.points9[i].y);
        this.points9[i] = vec;
    }
    this.fixDef9.shape.SetAsArray(this.points9, this.points9.length);

    // 2nd Loop  - Clockwise 8
    this.fixDef10 = new b2FixtureDef;
    this.fixDef10.density = 1.07
    this.fixDef10.friction = 085;
    this.fixDef10.restitution = 0.2;
    this.fixDef10.shape= new b2PolygonShape;

    this.points10 = [{x: -3.44, y: -0.08},{x: -3.56, y: -0.08}, {x: -1.8, y: -3.14} ,{x: -1.73, y: -3.03}] ;

    for (var i = 0; i < this.points10.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points10[i].x, this.points10[i].y);
        this.points10[i] = vec;
    }
    this.fixDef10.shape.SetAsArray(this.points10, this.points10.length);

    // 3rd Loop
    // 3rd Loop  - Clockwise 1
    this.fixDef11 = new b2FixtureDef;
    this.fixDef11.density = 1.07
    this.fixDef11.friction = 085;
    this.fixDef11.restitution = 0.2;
    this.fixDef11.shape= new b2PolygonShape;
    this.points11 = [{x: -3.35, y: -2.64},{x: -2.45, y: -4.2}, {x: -2.39, y: -4.1} ,{x: -3.26, y: -2.59}] ;

    for (var i = 0; i < this.points11.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points11[i].x, this.points11[i].y);
        this.points11[i] = vec;
    }
    this.fixDef11.shape.SetAsArray(this.points11, this.points11.length);

    // 3rd Loop  - Clockwise 2
    this.fixDef12 = new b2FixtureDef;
    this.fixDef12.density = 1.07
    this.fixDef12.friction = 085;
    this.fixDef12.restitution = 0.2;
    this.fixDef12.shape= new b2PolygonShape;
    this.points12 = [{x: -2.45, y: -4.2},{x: 2.39, y: -4.2}, {x: 2.33, y: -4.1} ,{x: -2.39, y: -4.1}] ;

    for (var i = 0; i < this.points12.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points12[i].x, this.points12[i].y);
        this.points12[i] = vec;
    }
    this.fixDef12.shape.SetAsArray(this.points12, this.points12.length);

    // 3rd Loop  - Clockwise 3
    this.fixDef13 = new b2FixtureDef;
    this.fixDef13.density = 1.07
    this.fixDef13.friction = 085;
    this.fixDef13.restitution = 0.2;
    this.fixDef13.shape= new b2PolygonShape;
    this.points13 = [{x: 2.39, y: -4.2},{x: 4.8, y: -0.01}, {x: 4.68, y: -0.01} ,{x: 2.33, y: -4.1}] ;

    for (var i = 0; i < this.points13.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points13[i].x, this.points13[i].y);
        this.points13[i] = vec;
    }
    this.fixDef13.shape.SetAsArray(this.points13, this.points13.length);

    // 3rd Loop  - Clockwise 4
    this.fixDef14 = new b2FixtureDef;
    this.fixDef14.density = 1.07
    this.fixDef14.friction = 085;
    this.fixDef14.restitution = 0.2;
    this.fixDef14.shape= new b2PolygonShape;
    this.points14 = [{x: 4.8, y: -0.01},{x: 2.39, y: 4.17}, {x: 2.33, y: 4.07} ,{x: 4.68, y: -0.01}] ;

    for (var i = 0; i < this.points14.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points14[i].x, this.points14[i].y);
        this.points14[i] = vec;
    }
    this.fixDef14.shape.SetAsArray(this.points14, this.points14.length);

    // 3rd Loop  - Clockwise 5
    this.fixDef15 = new b2FixtureDef;
    this.fixDef15.density = 1.07
    this.fixDef15.friction = 085;
    this.fixDef15.restitution = 0.2;
    this.fixDef15.shape= new b2PolygonShape;
    this.points15 = [{x: 2.33, y: 4.07},{x: 2.39, y: 4.17}, {x: -2.45, y: 4.17} ,{x: -2.39, y: 4.07}] ;

    for (var i = 0; i < this.points15.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points15[i].x, this.points15[i].y);
        this.points15[i] = vec;
    }
    this.fixDef15.shape.SetAsArray(this.points15, this.points15.length);

    // 3rd Loop  - Clockwise 6
    this.fixDef16 = new b2FixtureDef;
    this.fixDef16.density = 1.07
    this.fixDef16.friction = 085;
    this.fixDef16.restitution = 0.2;
    this.fixDef16.shape= new b2PolygonShape;
    this.points16 = [{x: -2.39, y: 4.07},{x: -2.46, y: 4.15}, {x: -4.87, y: -0.01} ,{x: -4.75, y: -0.01}] ;

    for (var i = 0; i < this.points16.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points16[i].x, this.points16[i].y);
        this.points16[i] = vec;
    }
    this.fixDef16.shape.SetAsArray(this.points16, this.points16.length);

    // 3rd Loop  - Clockwise 7
    this.fixDef17 = new b2FixtureDef;
    this.fixDef17.density = 1.07
    this.fixDef17.friction = 085;
    this.fixDef17.restitution = 0.2;
    this.fixDef17.shape= new b2PolygonShape;
    this.points17 = [{x: -4.87, y: -0.01},{x: -3.93, y: -1.61}, {x: -3.84, y: -1.56} ,{x: -4.75, y: -0.01}] ;

    for (var i = 0; i < this.points17.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points17[i].x, this.points17[i].y);
        this.points17[i] = vec;
    }
    this.fixDef17.shape.SetAsArray(this.points17, this.points17.length);

    // 4th Loop
    // 4th Loop - Clockwise 1
    this.fixDef18 = new b2FixtureDef;
    this.fixDef18.density = 1.07
    this.fixDef18.friction = 085;
    this.fixDef18.restitution = 0.2;
    this.fixDef18.shape= new b2PolygonShape;
    this.points18 = [{x: -3.42, y: -4.42},{x: -3.22, y: -4.08}, {x: -3.26, y: -3.94} ,{x: -3.51, y: -4.37}] ;

    for (var i = 0; i < this.points18.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points18[i].x, this.points18[i].y);
        this.points18[i] = vec;
    }
    this.fixDef18.shape.SetAsArray(this.points18, this.points18.length);

    // 4th Loop - Clockwise 2
    this.fixDef19 = new b2FixtureDef;
    this.fixDef19.density = 1.07
    this.fixDef19.friction = 085;
    this.fixDef19.restitution = 0.2;
    this.fixDef19.shape= new b2PolygonShape;
    this.points19 = [{x: -3.26, y: -3.94},{x: -3.22, y: -4.08}, {x: -0.03, y: -5.92} ,{x: -0.03, y: -5.8}] ;

    for (var i = 0; i < this.points19.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points19[i].x, this.points19[i].y);
        this.points19[i] = vec;
    }
    this.fixDef19.shape.SetAsArray(this.points19, this.points19.length);

    // 4th Loop - Clockwise 3
    this.fixDef20 = new b2FixtureDef;
    this.fixDef20.density = 1.07
    this.fixDef20.friction = 085;
    this.fixDef20.restitution = 0.2;
    this.fixDef20.shape= new b2PolygonShape;
    this.points20 = [{x: -0.03, y: -5.92},{x: 5.21, y: -2.9}, {x: 5.1, y: -2.84} ,{x: -0.03, y: -5.8}] ;

    for (var i = 0; i < this.points20.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points20[i].x, this.points20[i].y);
        this.points20[i] = vec;
    }
    this.fixDef20.shape.SetAsArray(this.points20, this.points20.length);
    // 4th Loop - Clockwise 4
    this.fixDef21 = new b2FixtureDef;
    this.fixDef21.density = 1.07
    this.fixDef21.friction = 085;
    this.fixDef21.restitution = 0.2;
    this.fixDef21.shape= new b2PolygonShape;
    this.points21 = [{x: 5.21, y: -2.9},{x: 5.21, y: 3.16}, {x: 5.1, y: 3.09} ,{x: 5.1, y: -2.84}] ;

    for (var i = 0; i < this.points21.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points21[i].x, this.points21[i].y);
        this.points21[i] = vec;
    }
    this.fixDef21.shape.SetAsArray(this.points21, this.points21.length);

    // 4th Loop - Clockwise 5
    this.fixDef22 = new b2FixtureDef;
    this.fixDef22.density = 1.07
    this.fixDef22.friction = 085;
    this.fixDef22.restitution = 0.2;
    this.fixDef22.shape= new b2PolygonShape;
    this.points22 = [{x: 5.21, y: 3.15},{x: -0.03, y: 6.18}, {x: -0.03, y: 6.05} ,{x: 5.1, y: 3.09}] ;

    for (var i = 0; i < this.points22.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points22[i].x, this.points22[i].y);
        this.points22[i] = vec;
    }
    this.fixDef22.shape.SetAsArray(this.points22, this.points22.length);

    // 4th Loop - Clockwise 6
    this.fixDef23 = new b2FixtureDef;
    this.fixDef23.density = 1.07
    this.fixDef23.friction = 085;
    this.fixDef23.restitution = 0.2;
    this.fixDef23.shape= new b2PolygonShape;
    this.points23 = [{x: -0.06, y: 6.16},{x: -5.27, y: 3.15}, {x: -5.16, y: 3.09} ,{x: -0.03, y: 6.05}] ;

    for (var i = 0; i < this.points23.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points23[i].x, this.points23[i].y);
        this.points23[i] = vec;
    }
    this.fixDef23.shape.SetAsArray(this.points23, this.points23.length)

    // 4th Loop - Clockwise 7
    this.fixDef24 = new b2FixtureDef;
    this.fixDef24.density = 1.07
    this.fixDef24.friction = 085;
    this.fixDef24.restitution = 0.2;
    this.fixDef24.shape= new b2PolygonShape;
    this.points24 = [{x: -0.03, y: 6.16}, {x: -5.27, y: 3.15}, {x: -5.16, y: 3.09} ,{x: -0.03, y: 6.05}] ;

    for (var i = 0; i < this.points24.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points24[i].x, this.points24[i].y);
        this.points24[i] = vec;
    }
    this.fixDef24.shape.SetAsArray(this.points24, this.points24.length);

    // 4th Loop - Clockwise 8
    this.fixDef25 = new b2FixtureDef;
    this.fixDef25.density = 1.07
    this.fixDef25.friction = 085;
    this.fixDef25.restitution = 0.2;
    this.fixDef25.shape= new b2PolygonShape;
    this.points25 = [{x: -5.27, y: -2.9},{x: -5.16, y: -2.84},{x: -5.16, y: 3.09}, {x: -5.27, y: 3.15} ];

    for (var i = 0; i < this.points25.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points25[i].x, this.points25[i].y);
        this.points25[i] = vec;
    }
    this.fixDef25.shape.SetAsArray(this.points25, this.points25.length);

    // 4th Loop - Clockwise 9
    this.fixDef26 = new b2FixtureDef;
    this.fixDef26.density = 1.07
    this.fixDef26.friction = 085;
    this.fixDef26.restitution = 0.2;
    this.fixDef26.shape= new b2PolygonShape;
    this.points26 = [{x: -4.43, y: -3.38},{x: -4.38, y: -3.29},{x: -5.16, y: -2.84}, {x: -5.27, y: -2.9} ];

    for (var i = 0; i < this.points26.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points26[i].x, this.points26[i].y);
        this.points26[i] = vec;
    }
    this.fixDef26.shape.SetAsArray(this.points26, this.points26.length);

    // 4th Loop - Clockwise 10
    this.fixDef27 = new b2FixtureDef;
    this.fixDef27.density = 1.07
    this.fixDef27.friction = 085;
    this.fixDef27.restitution = 0.2;
    this.fixDef27.shape= new b2PolygonShape;
    this.points27 = [{x: -2.58, y: 4.61},{x: -2.49, y: 4.66},{x: -2.63, y: 4.92}, {x: -2.73, y: 4.87} ];

    for (var i = 0; i < this.points27.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points27[i].x, this.points27[i].y);
        this.points27[i] = vec;
    }
    this.fixDef27.shape.SetAsArray(this.points27, this.points27.length);

    // 5th Loop – Clockwise 1
    this.fixDef28 = new b2FixtureDef;
    this.fixDef28.density = 1.07
    this.fixDef28.friction = 085;
    this.fixDef28.restitution = 0.2;
    this.fixDef28.shape= new b2PolygonShape;
    this.points28 = [{x: 6.26, y: -0.05},{x: 6.37, y: 0.06},{x: 6.37, y: 3.82}, {x: 6.26, y: 3.76} ];

    for (var i = 0; i < this.points28.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points28[i].x, this.points28[i].y);
        this.points28[i] = vec;
    }
    this.fixDef28.shape.SetAsArray(this.points28, this.points28.length);

    // 5th Loop – Clockwise 2
    this.fixDef29 = new b2FixtureDef;
    this.fixDef29.density = 1.07
    this.fixDef29.friction = 085;
    this.fixDef29.restitution = 0.2;
    this.fixDef29.shape= new b2PolygonShape;
    this.points29 = [{x: 6.26, y: 3.76},{x: 6.37, y: 3.82},{x: -0.03, y: 7.52}, {x: -0.03, y: 7.39} ];

    for (var i = 0; i < this.points29.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points29[i].x, this.points29[i].y);
        this.points29[i] = vec;
    }
    this.fixDef29.shape.SetAsArray(this.points29, this.points29.length);

    // 5th Loop – Clockwise 3
    this.fixDef30 = new b2FixtureDef;
    this.fixDef30.density = 1.07
    this.fixDef30.friction = 085;
    this.fixDef30.restitution = 0.2;
    this.fixDef30.shape= new b2PolygonShape;
    this.points30 = [{x: -6.32, y: 3.76},{x: -0.03, y: 7.39},{x: -0.06, y: 7.5}, {x: -6.43, y: 3.82} ];

    for (var i = 0; i < this.points30.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points30[i].x, this.points30[i].y);
        this.points30[i] = vec;
    }
    this.fixDef30.shape.SetAsArray(this.points30, this.points30.length);

    // 5th Loop – Clockwise 4
    this.fixDef31 = new b2FixtureDef;
    this.fixDef31.density = 1.07
    this.fixDef31.friction = 085;
    this.fixDef31.restitution = 0.2;
    this.fixDef31.shape= new b2PolygonShape;
    this.points31 = [{x: -1.99, y: 6.04},{x: -1.9, y: 6.09},{x: -2.04, y: 6.35}, {x: -2.14, y: 6.3} ];

    for (var i = 0; i < this.points31.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points31[i].x, this.points31[i].y);
        this.points31[i] = vec;
    }
    this.fixDef31.shape.SetAsArray(this.points31, this.points31.length);

    // 5th Loop – Clockwise 5
    this.fixDef32 = new b2FixtureDef;
    this.fixDef32.density = 1.07
    this.fixDef32.friction = 085;
    this.fixDef32.restitution = 0.2;
    this.fixDef32.shape= new b2PolygonShape;
    this.points32 = [{x: -4.23, y: 4.69},{x: -4.14, y: 4.74},{x: -4.28, y: 5}, {x: -4.37, y: 4.95} ];

    for (var i = 0; i < this.points32.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points32[i].x, this.points32[i].y);
        this.points32[i] = vec;
    }
    this.fixDef32.shape.SetAsArray(this.points32, this.points32.length);


    // 5th Loop – Clockwise 6
    this.fixDef33 = new b2FixtureDef;
    this.fixDef33.density = 1.07
    this.fixDef33.friction = 085;
    this.fixDef33.restitution = 0.2;
    this.fixDef33.shape= new b2PolygonShape;
    this.points33 = [{x: -6.43, y: -3.57},{x: -6.32, y: -3.51},{x: -6.32, y: 3.76}, {x: -6.43, y: 3.82} ];

    for (var i = 0; i < this.points33.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points33[i].x, this.points33[i].y);
        this.points33[i] = vec;
    }
    this.fixDef33.shape.SetAsArray(this.points33, this.points33.length);

    // 5th Loop – Clockwise 7
    this.fixDef34 = new b2FixtureDef;
    this.fixDef34.density = 1.07
    this.fixDef34.friction = 085;
    this.fixDef34.restitution = 0.2;
    this.fixDef34.shape= new b2PolygonShape;
    this.points34 = [{x: -0.03, y: -7.26},{x: -0.03, y: -7.14},{x: -6.32, y: -3.51}, {x: -6.4, y: -3.58} ];

    for (var i = 0; i < this.points34.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points34[i].x, this.points34[i].y);
        this.points34[i] = vec;
    }
    this.fixDef34.shape.SetAsArray(this.points34, this.points34.length);

    // 5th Loop – Clockwise 8
    this.fixDef35 = new b2FixtureDef;
    this.fixDef35.density = 1.07
    this.fixDef35.friction = 085;
    this.fixDef35.restitution = 0.2;
    this.fixDef35.shape= new b2PolygonShape;
    this.points35 = [{x: -0.03, y: -7.26},{x: 6.37, y: -3.57},{x: 6.26, y: -3.51}, {x: -0.03, y: -7.14} ];

    for (var i = 0; i < this.points35.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points35[i].x, this.points35[i].y);
        this.points35[i] = vec;
    }
    this.fixDef35.shape.SetAsArray(this.points35, this.points35.length);

    // 5th Loop – Clockwise 9
    this.fixDef36 = new b2FixtureDef;
    this.fixDef36.density = 1.07
    this.fixDef36.friction = 085;
    this.fixDef36.restitution = 0.2;
    this.fixDef36.shape= new b2PolygonShape;
    this.points36 = [{x: 6.26, y: -3.51},{x: 6.37, y: -3.57},{x: 6.37, y: -1.18}, {x: 6.26, y: -1.18} ];

    for (var i = 0; i < this.points36.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points36[i].x, this.points36[i].y);
        this.points36[i] = vec;
    }
    this.fixDef36.shape.SetAsArray(this.points36, this.points36.length);

    // 5th Loop – Clockwise 10
    this.fixDef37 = new b2FixtureDef;
    this.fixDef37.density = 1.07
    this.fixDef37.friction = 085;
    this.fixDef37.restitution = 0.2;
    this.fixDef37.shape= new b2PolygonShape;
    this.points37 = [{x: 6.26, y: -0.05},{x: 7.47, y: -0.05},{x: 7.47, y: 0.06}, {x: 6.37, y: 0.06} ];

    for (var i = 0; i < this.points37.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points37[i].x, this.points37[i].y);
        this.points37[i] = vec;
    }
    this.fixDef37.shape.SetAsArray(this.points37, this.points37.length);

    // 6th Loop – Clockwise 1
    this.fixDef38 = new b2FixtureDef;
    this.fixDef38.density = 1.07
    this.fixDef38.friction = 085;
    this.fixDef38.restitution = 0.2;
    this.fixDef38.shape= new b2PolygonShape;
    this.points38 = [{x: 1.72, y: -7.55}, {x: 7.51, y: -4.18}, {x: 7.4, y: -4.11}, {x: 1.67, y: -7.46}];

    for (var i = 0; i < this.points38.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points38[i].x, this.points38[i].y);
        this.points38[i] = vec;
    }
    this.fixDef38.shape.SetAsArray(this.points38, this.points38.length);

    // 6th Loop – Clockwise 2
    this.fixDef39 = new b2FixtureDef;
    this.fixDef39.density = 1.07
    this.fixDef39.friction = 085;
    this.fixDef39.restitution = 0.2;
    this.fixDef39.shape= new b2PolygonShape;
    this.points39 = [{x: 7.51, y: -4.18}, {x: 7.52, y: 4.55}, {x: 7.44, y: 4.47}, {x: 7.4, y: -4.11}];

    for (var i = 0; i < this.points39.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points39[i].x, this.points39[i].y);
        this.points39[i] = vec;
    }
    this.fixDef39.shape.SetAsArray(this.points39, this.points39.length);

    // 6th Loop – Clockwise 3
    this.fixDef40 = new b2FixtureDef;
    this.fixDef40.density = 1.07
    this.fixDef40.friction = 085;
    this.fixDef40.restitution = 0.2;
    this.fixDef40.shape= new b2PolygonShape;
    this.points40 = [{x: 7.44, y: 4.47}, {x: 7.55, y: 4.54}, {x: 0.06, y: 8.86}, {x: 0.06, y: 8.74}];

    for (var i = 0; i < this.points40.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points40[i].x, this.points40[i].y);
        this.points40[i] = vec;
    }
    this.fixDef40.shape.SetAsArray(this.points40, this.points40.length);

    // 6th Loop – Clockwise 4
    this.fixDef41 = new b2FixtureDef;
    this.fixDef41.density = 1.07
    this.fixDef41.friction = 085;
    this.fixDef41.restitution = 0.2;
    this.fixDef41.shape= new b2PolygonShape;
    this.points41 = [{x: 0.06, y: 8.74}, {x: 0.06, y: 8.86}, {x: -7.46, y: 4.47}, {x: -7.36, y: 4.41}];

    for (var i = 0; i < this.points41.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points41[i].x, this.points41[i].y);
        this.points41[i] = vec;
    }
    this.fixDef41.shape.SetAsArray(this.points41, this.points41.length);

    // 6th Loop – Clockwise 5
    this.fixDef42 = new b2FixtureDef;
    this.fixDef42.density = 1.07
    this.fixDef42.friction = 085;
    this.fixDef42.restitution = 0.2;
    this.fixDef42.shape= new b2PolygonShape;
    this.points42 = [{x: -7.5, y: -4.24}, {x: -7.4, y: -4.18}, {x: -7.36, y: 4.41}, {x: -7.46, y: 4.47}];

    for (var i = 0; i < this.points42.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points42[i].x, this.points42[i].y);
        this.points42[i] = vec;
    }
    this.fixDef42.shape.SetAsArray(this.points42, this.points42.length);

    // 6th Loop – Clockwise 6
    this.fixDef43 = new b2FixtureDef;
    this.fixDef43.density = 1.07
    this.fixDef43.friction = 085;
    this.fixDef43.restitution = 0.2;
    this.fixDef43.shape= new b2PolygonShape;
    this.points43 = [{x: -0.01, y: -8.56}, {x: -0.02, y: -8.44}, {x: -7.4, y: -4.18}, {x: -7.5, y: -4.27}];

    for (var i = 0; i < this.points43.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points43[i].x, this.points43[i].y);
        this.points43[i] = vec;
    }
    this.fixDef43.shape.SetAsArray(this.points43, this.points43.length);

    // 6th Loop – Clockwise 7
    this.fixDef44 = new b2FixtureDef;
    this.fixDef44.density = 1.07
    this.fixDef44.friction = 085;
    this.fixDef44.restitution = 0.2;
    this.fixDef44.shape= new b2PolygonShape;
    this.points44 = [{x: -0.01, y: -8.56}, {x: 0.33, y: -8.36}, {x: 0.33, y: -8.24}, {x: -0.02, y: -8.44}];

    for (var i = 0; i < this.points44.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points44[i].x, this.points44[i].y);
        this.points44[i] = vec;
    }
    this.fixDef44.shape.SetAsArray(this.points44, this.points44.length);

    // 6th Loop – Clockwise 8
    this.fixDef45 = new b2FixtureDef;
    this.fixDef45.density = 1.07
    this.fixDef45.friction = 085;
    this.fixDef45.restitution = 0.2;
    this.fixDef45.shape= new b2PolygonShape;
    this.points45 = [{x: 1.15, y: -8.83}, {x: 1.2, y: -8.74}, {x: 0.33, y: -8.24}, {x: 0.33, y: -8.36}];

    for (var i = 0; i < this.points45.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points45[i].x, this.points45[i].y);
        this.points45[i] = vec;
    }
    this.fixDef45.shape.SetAsArray(this.points45, this.points45.length);

    // 7th Loop – Clockwise 1
    this.fixDef46 = new b2FixtureDef;
    this.fixDef46.density = 1.07
    this.fixDef46.friction = 085;
    this.fixDef46.restitution = 0.2;
    this.fixDef46.shape= new b2PolygonShape;
    this.points46 = [{x: 5.01, y: 7.13}, {x: 5.06, y: 7.22}, {x: -0.03, y: 10.16}, {x: -0.03, y: 10.04}];

    for (var i = 0; i < this.points46.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points46[i].x, this.points46[i].y);
        this.points46[i] = vec;
    }
    this.fixDef46.shape.SetAsArray(this.points46, this.points46.length);

    // 7th Loop – Clockwise 2
    this.fixDef47 = new b2FixtureDef;
    this.fixDef47.density = 1.07
    this.fixDef47.friction = 085;
    this.fixDef47.restitution = 0.2;
    this.fixDef47.shape= new b2PolygonShape;
    this.points47 = [{x: -8.72, y: 5.14}, {x: -8.61, y: 5.08}, {x: -0.03, y: 10.04}, {x: -0.06, y: 10.15}];

    for (var i = 0; i < this.points47.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points47[i].x, this.points47[i].y);
        this.points47[i] = vec;
    }
    this.fixDef47.shape.SetAsArray(this.points47, this.points47.length);

    // 7th Loop – Clockwise 3
    this.fixDef48 = new b2FixtureDef;
    this.fixDef48.density = 1.07
    this.fixDef48.friction = 085;
    this.fixDef48.restitution = 0.2;
    this.fixDef48.shape= new b2PolygonShape;
    this.points48 = [{x: -8.72, y: -4.89}, {x: -8.61, y: -4.83}, {x: -8.61, y: 5.08}, {x: -8.72, y: 5.14}];

    for (var i = 0; i < this.points48.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points48[i].x, this.points48[i].y);
        this.points48[i] = vec;
    }
    this.fixDef48.shape.SetAsArray(this.points48, this.points48.length);

    // 7th Loop – Clockwise 4
    this.fixDef49 = new b2FixtureDef;
    this.fixDef49.density = 1.07
    this.fixDef49.friction = 085;
    this.fixDef49.restitution = 0.2;
    this.fixDef49.shape= new b2PolygonShape;
    this.points49 = [{x: -8.72, y: -4.89}, {x: -0.03, y: -9.91}, {x: -0.03, y: -9.78}, {x: -8.61, y: -4.83}];

    for (var i = 0; i < this.points49.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points49[i].x, this.points49[i].y);
        this.points49[i] = vec;
    }
    this.fixDef49.shape.SetAsArray(this.points49, this.points49.length);

    // 7th Loop – Clockwise 5
    this.fixDef50 = new b2FixtureDef;
    this.fixDef50.density = 1.07
    this.fixDef50.friction = 085;
    this.fixDef50.restitution = 0.2;
    this.fixDef50.shape= new b2PolygonShape;
    this.points50 = [{x: -0.03, y: -9.78}, {x: -0.03, y: -9.91}, {x: 8.66, y: -4.89}, {x: 8.55, y: -4.83}];

    for (var i = 0; i < this.points50.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points50[i].x, this.points50[i].y);
        this.points50[i] = vec;
    }
    this.fixDef50.shape.SetAsArray(this.points50, this.points50.length);

    // 7th Loop – Clockwise 6
    this.fixDef51 = new b2FixtureDef;
    this.fixDef51.density = 1.07
    this.fixDef51.friction = 085;
    this.fixDef51.restitution = 0.2;
    this.fixDef51.shape= new b2PolygonShape;
    this.points51 = [{x: 8.55, y: -4.83}, {x: 8.66, y: -4.89}, {x: 8.66, y: 5.14}, {x: 8.55, y: 5.08}];

    for (var i = 0; i < this.points51.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points51[i].x, this.points51[i].y);
        this.points51[i] = vec;
    }
    this.fixDef51.shape.SetAsArray(this.points51, this.points51.length);

    // 7th Loop – Clockwise 7
    this.fixDef52 = new b2FixtureDef;
    this.fixDef52.density = 1.07
    this.fixDef52.friction = 085;
    this.fixDef52.restitution = 0.2;
    this.fixDef52.shape= new b2PolygonShape;
    this.points52 = [{x: 8.55, y: 5.08}, {x: 8.66, y: 5.14}, {x: 6.56, y: 6.36}, {x: 6.41, y: 6.32}];

    for (var i = 0; i < this.points52.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points52[i].x, this.points52[i].y);
        this.points52[i] = vec;
    }
    this.fixDef52.shape.SetAsArray(this.points52, this.points52.length);

    // 7th Loop – Clockwise 8
    this.fixDef53 = new b2FixtureDef;
    this.fixDef53.density = 1.07
    this.fixDef53.friction = 085;
    this.fixDef53.restitution = 0.2;
    this.fixDef53.shape= new b2PolygonShape;
    this.points53 = [{x: 6.41, y: 6.32}, {x: 6.56, y:6.36}, {x: 7.09, y: 7.27}, {x: 7, y: 7.32}];

    for (var i = 0; i < this.points53.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points53[i].x, this.points53[i].y);
        this.points53[i] = vec;
    }
    this.fixDef53.shape.SetAsArray(this.points53, this.points53.length);

    // 8th Loop – Anti-Clockwise 1
    this.fixDef54 = new b2FixtureDef;
    this.fixDef54.density = 1.07
    this.fixDef54.friction = 085;
    this.fixDef54.restitution = 0.2;
    this.fixDef54.shape= new b2PolygonShape;
    this.points54 = [{x: -4.49, y: -10.98}, {x: -4.38, y: -10.98}, {x: -4.38, y: -10.48}, {x: -4.49, y: -10.48}];

    for (var i = 0; i < this.points54.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points54[i].x, this.points54[i].y);
        this.points54[i] = vec;
    }
    this.fixDef54.shape.SetAsArray(this.points54, this.points54.length);

    // 8th Loop – Anti-Clockwise 2
    this.fixDef55 = new b2FixtureDef;
    this.fixDef55.density = 1.07
    this.fixDef55.friction = 085;
    this.fixDef55.restitution = 0.2;
    this.fixDef55.shape= new b2PolygonShape;
    this.points55 = [{x: -5.96, y: -10.43}, {x: -6.02, y: -10.53}, {x: -4.38, y: -10.53}, {x: -4.38, y: -10.43}];

    for (var i = 0; i < this.points55.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points55[i].x, this.points55[i].y);
        this.points55[i] = vec;
    }
    this.fixDef55.shape.SetAsArray(this.points55, this.points55.length);

    // 8th Loop – Anti-Clockwise 3
    this.fixDef56 = new b2FixtureDef;
    this.fixDef56.density = 1.07
    this.fixDef56.friction = 085;
    this.fixDef56.restitution = 0.2;
    this.fixDef56.shape= new b2PolygonShape;
    this.points56 = [{x: -6.02, y: -10.53}, {x: -5.96, y: -10.43}, {x: -11.98, y: 0}, {x: -12.1, y: 0}];

    for (var i = 0; i < this.points56.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points56[i].x, this.points56[i].y);
        this.points56[i] = vec;
    }
    this.fixDef56.shape.SetAsArray(this.points56, this.points56.length);

    // 8th Loop – Anti-Clockwise 4
    this.fixDef57 = new b2FixtureDef;
    this.fixDef57.density = 1.07
    this.fixDef57.friction = 085;
    this.fixDef57.restitution = 0.2;
    this.fixDef57.shape= new b2PolygonShape;
    this.points57 = [{x: -12.1, y: 0}, {x: -11.98, y: 0}, {x: -5.96, y: 10.44}, {x: -6.02, y: 10.54}];

    for (var i = 0; i < this.points57.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points57[i].x, this.points57[i].y);
        this.points57[i] = vec;
    }
    this.fixDef57.shape.SetAsArray(this.points57, this.points57.length);

    // 8th Loop – Anti-Clockwise 5
    this.fixDef58 = new b2FixtureDef;
    this.fixDef58.density = 1.07
    this.fixDef58.friction = 085;
    this.fixDef58.restitution = 0.2;
    this.fixDef58.shape= new b2PolygonShape;
    this.points58 = [{x: -6.03, y: 10.51}, {x: -5.96, y: 10.44}, {x: 3.14, y: 10.44}, {x: 3.14, y: 10.54}];

    for (var i = 0; i < this.points58.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points58[i].x, this.points58[i].y);
        this.points58[i] = vec;
    }
    this.fixDef58.shape.SetAsArray(this.points58, this.points58.length);

    // 8th Loop – Anti-Clockwise 6
    this.fixDef59 = new b2FixtureDef;
    this.fixDef59.density = 1.07
    this.fixDef59.friction = 085;
    this.fixDef59.restitution = 0.2;
    this.fixDef59.shape= new b2PolygonShape;
    this.points59 = [{x: 4.73, y: 10.54}, {x: 4.73, y: 10.44}, {x: 6.09, y: 10.44}, {x: 6.15, y: 10.54}];

    for (var i = 0; i < this.points59.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points59[i].x, this.points59[i].y);
        this.points59[i] = vec;
    }
    this.fixDef59.shape.SetAsArray(this.points59, this.points59.length);

    // 8th Loop – Anti-Clockwise 7
    this.fixDef60 = new b2FixtureDef;
    this.fixDef60.density = 1.07
    this.fixDef60.friction = 085;
    this.fixDef60.restitution = 0.2;
    this.fixDef60.shape= new b2PolygonShape;
    this.points60 = [{x: 12.11, y: 0}, {x: 12.23, y: 0}, {x: 6.15, y: 10.54}, {x: 6.09, y: 10.44}];

    for (var i = 0; i < this.points60.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points60[i].x, this.points60[i].y);
        this.points60[i] = vec;
    }
    this.fixDef60.shape.SetAsArray(this.points60, this.points60.length);

    // 8th Loop – Anti-Clockwise 8
    this.fixDef61 = new b2FixtureDef;
    this.fixDef61.density = 1.07
    this.fixDef61.friction = 085;
    this.fixDef61.restitution = 0.2;
    this.fixDef61.shape= new b2PolygonShape;
    this.points61 = [{x: 6.09, y: -10.43}, {x: 6.16, y: -10.51}, {x: 12.23, y: 0}, {x: 12.11, y: 0}];

    for (var i = 0; i < this.points61.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points61[i].x, this.points61[i].y);
        this.points61[i] = vec;
    }
    this.fixDef61.shape.SetAsArray(this.points61, this.points61.length);

    // 8th Loop – Anti-Clockwise 9
    this.fixDef62 = new b2FixtureDef;
    this.fixDef62.density = 1.07
    this.fixDef62.friction = 085;
    this.fixDef62.restitution = 0.2;
    this.fixDef62.shape= new b2PolygonShape;
    this.points62 = [{x: 7.14, y: -9.34}, {x: 7.2, y: -9.25}, {x: 6.9, y: -9.08}, {x: 6.85, y: -9.17}];

    for (var i = 0; i < this.points62.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points62[i].x, this.points62[i].y);
        this.points62[i] = vec;
    }
    this.fixDef62.shape.SetAsArray(this.points62, this.points62.length);

    // 8th Loop – Anti-Clockwise 10
    this.fixDef63 = new b2FixtureDef;
    this.fixDef63.density = 1.07
    this.fixDef63.friction = 085;
    this.fixDef63.restitution = 0.2;
    this.fixDef63.shape= new b2PolygonShape;
    this.points63 = [{x: -2.95, y: -10.43}, {x: -2.95, y: -10.53}, {x: 6.16, y: -10.51}, {x: 6.09, y: -10.43}];

    for (var i = 0; i < this.points63.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points63[i].x, this.points63[i].y);
        this.points63[i] = vec;
    }
    this.fixDef63.shape.SetAsArray(this.points63, this.points63.length);

    // 8th Loop – Anti-Clockwise 11
    this.fixDef64 = new b2FixtureDef;
    this.fixDef64.density = 1.07
    this.fixDef64.friction = 085;
    this.fixDef64.restitution = 0.2;
    this.fixDef64.shape= new b2PolygonShape;
    this.points64 = [{x: 7.78, y: -7.57}, {x: 8.07, y: -7.74}, {x: 8.12, y: -7.64}, {x: 7.83, y: -7.48}];

    for (var i = 0; i < this.points64.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points64[i].x, this.points64[i].y);
        this.points64[i] = vec;
    }
    this.fixDef64.shape.SetAsArray(this.points64, this.points64.length);

    // 9th Loop – Clockwise 1
    this.fixDef65 = new b2FixtureDef;
    this.fixDef65.density = 1.07
    this.fixDef65.friction = 085;
    this.fixDef65.restitution = 0.2;
    this.fixDef65.shape= new b2PolygonShape;
    this.points65 = [{x: 6.78, y: -11.91}, {x: 6.87, y: -11.96}, {x: 13.75, y: -0.05}, {x: 13.63, y: -0.05}];

    for (var i = 0; i < this.points65.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points65[i].x, this.points65[i].y);
        this.points65[i] = vec;
    }
    this.fixDef65.shape.SetAsArray(this.points65, this.points65.length);

    // 9th Loop – Clockwise 2
    this.fixDef66 = new b2FixtureDef;
    this.fixDef66.density = 1.07
    this.fixDef66.friction = 085;
    this.fixDef66.restitution = 0.2;
    this.fixDef66.shape= new b2PolygonShape;
    this.points66 = [{x: 8.12, y: -8.97}, {x: 8.07, y: -9.06}, {x: 8.37, y: -9.23}, {x: 8.42, y: -9.14}];

    for (var i = 0; i < this.points66.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points66[i].x, this.points66[i].y);
        this.points66[i] = vec;
    }
    this.fixDef66.shape.SetAsArray(this.points66, this.points66.length);

    // 9th Loop – Clockwise 3
    this.fixDef67 = new b2FixtureDef;
    this.fixDef67.density = 1.07
    this.fixDef67.friction = 085;
    this.fixDef67.restitution = 0.2;
    this.fixDef67.shape= new b2PolygonShape;
    this.points67 = [{x: 9.22, y: -7.03}, {x: 9.17, y: -7.12}, {x: 9.46, y: -7.29}, {x: 9.52, y: -7.19}];

    for (var i = 0; i < this.points67.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points67[i].x, this.points67[i].y);
        this.points67[i] = vec;
    }
    this.fixDef67.shape.SetAsArray(this.points67, this.points67.length);

    // 9th Loop – Clockwise 4
    this.fixDef68 = new b2FixtureDef;
    this.fixDef68.density = 1.07
    this.fixDef68.friction = 085;
    this.fixDef68.restitution = 0.2;
    this.fixDef68.shape= new b2PolygonShape;
    this.points68 = [{x: 13.63, y: -0.05}, {x: 13.75, y: -0.05}, {x: 6.86, y: 11.88}, {x: 6.8, y: 11.78}];

    for (var i = 0; i < this.points68.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points68[i].x, this.points68[i].y);
        this.points68[i] = vec;
    }
    this.fixDef68.shape.SetAsArray(this.points68, this.points68.length);

    // 9th Loop – Clockwise 5
    this.fixDef69 = new b2FixtureDef;
    this.fixDef69.density = 1.07
    this.fixDef69.friction = 085;
    this.fixDef69.restitution = 0.2;
    this.fixDef69.shape= new b2PolygonShape;
    this.points69 = [{x: -6.92, y: 11.88}, {x: -6.96, y: 11.78}, {x: 6.8, y: 11.78}, {x: 6.86, y: 11.88}];

    for (var i = 0; i < this.points69.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points69[i].x, this.points69[i].y);
        this.points69[i] = vec;
    }
    this.fixDef69.shape.SetAsArray(this.points69, this.points69.length);

    // 9th Loop – Clockwise 6
    this.fixDef70 = new b2FixtureDef;
    this.fixDef70.density = 1.07
    this.fixDef70.friction = 085;
    this.fixDef70.restitution = 0.2;
    this.fixDef70.shape= new b2PolygonShape;
    this.points70 = [{x: -13.82, y: -0.05}, {x: -13.69, y: -0.05}, {x: -6.86, y: 11.78}, {x: -6.92, y: 11.88}];

    for (var i = 0; i < this.points70.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points70[i].x, this.points70[i].y);
        this.points70[i] = vec;
    }
    this.fixDef70.shape.SetAsArray(this.points70, this.points70.length);

    // 9th Loop – Clockwise 7
    this.fixDef71 = new b2FixtureDef;
    this.fixDef71.density = 1.07
    this.fixDef71.friction = 085;
    this.fixDef71.restitution = 0.2;
    this.fixDef71.shape= new b2PolygonShape;
    this.points71 = [{x: -6.92, y: -11.99}, {x: -6.86, y: -11.88}, {x: -13.68, y: -0.05}, {x: -13.82, y: -0.05}];

    for (var i = 0; i < this.points71.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points71[i].x, this.points71[i].y);
        this.points71[i] = vec;
    }
    this.fixDef71.shape.SetAsArray(this.points71, this.points71.length);

    // 9th Loop – Clockwise 8
    this.fixDef72 = new b2FixtureDef;
    this.fixDef72.density = 1.07
    this.fixDef72.friction = 085;
    this.fixDef72.restitution = 0.2;
    this.fixDef72.shape= new b2PolygonShape;
    this.points72 = [{x: -6.86, y: -11.88}, {x: -6.92, y: -11.99}, {x: 5.54, y: -11.99}, {x: 5.54, y: -11.88}];

    for (var i = 0; i < this.points72.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points72[i].x, this.points72[i].y);
        this.points72[i] = vec;
    }
    this.fixDef72.shape.SetAsArray(this.points72, this.points72.length);

    // 9th Loop – Clockwise 9
    this.fixDef73 = new b2FixtureDef;
    this.fixDef73.density = 1.07
    this.fixDef73.friction = 085;
    this.fixDef73.restitution = 0.2;
    this.fixDef73.shape= new b2PolygonShape;
    this.points73 = [{x: 3.07, y: 11.12}, {x: 3.17, y: 11.12}, {x: 3.17, y: 11.84}, {x:3.07, y: 11.84}];

    for (var i = 0; i < this.points73.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points73[i].x, this.points73[i].y);
        this.points73[i] = vec;
    }
    this.fixDef73.shape.SetAsArray(this.points73, this.points73.length);

    // 10th Loop – Clockwise 1
    this.fixDef74 = new b2FixtureDef;
    this.fixDef74.density = 1.07
    this.fixDef74.friction = 085;
    this.fixDef74.restitution = 0.2;
    this.fixDef74.shape= new b2PolygonShape;
    this.points74 = [{x: 13.01, y: 3.78}, {x: 12.97, y: 3.63}, {x: 14.05, y: 4.31}, {x: 14, y: 4.4}];

    for (var i = 0; i < this.points74.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points74[i].x, this.points74[i].y);
        this.points74[i] = vec;
    }
    this.fixDef74.shape.SetAsArray(this.points74, this.points74.length);

    // 10th Loop – Clockwise 2
    this.fixDef75 = new b2FixtureDef;
    this.fixDef75.density = 1.07
    this.fixDef75.friction = 085;
    this.fixDef75.restitution = 0.2;
    this.fixDef75.shape= new b2PolygonShape;
    this.points75 = [{x: 7.6, y: 13.16}, {x: 7.54, y: 13.05}, {x: 12.97, y: 3.63}, {x: 13.01, y:3.78}];

    for (var i = 0; i < this.points75.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points75[i].x, this.points75[i].y);
        this.points75[i] = vec;
    }
    this.fixDef75.shape.SetAsArray(this.points75, this.points75.length);

    // 10th Loop – Clockwise 3
    this.fixDef76 = new b2FixtureDef;
    this.fixDef76.density = 1.07
    this.fixDef76.friction = 085;
    this.fixDef76.restitution = 0.2;
    this.fixDef76.shape= new b2PolygonShape;
    this.points76 = [{x: -7.66, y: 13.16}, {x: -7.6, y: 13.05}, {x: 7.54, y: 13.05}, {x: 7.6, y: 13.16}];

    for (var i = 0; i < this.points76.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points76[i].x, this.points76[i].y);
        this.points76[i] = vec;
    }
    this.fixDef76.shape.SetAsArray(this.points76, this.points76.length);

    // 10th Loop – Clockwise 4
    this.fixDef77 = new b2FixtureDef;
    this.fixDef77.density = 1.07
    this.fixDef77.friction = 085;
    this.fixDef77.restitution = 0.2;
    this.fixDef77.shape= new b2PolygonShape;
    this.points77 = [{x: 1.17, y: 11.84}, {x: 1.27, y: 11.84}, {x: 1.27, y: 13.1}, {x: 1.17, y: 13.1}];

    for (var i = 0; i < this.points77.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points77[i].x, this.points77[i].y);
        this.points77[i] = vec;
    }
    this.fixDef77.shape.SetAsArray(this.points77, this.points77.length);

    // 10th Loop – Clockwise 5
    this.fixDef78 = new b2FixtureDef;
    this.fixDef78.density = 1.07
    this.fixDef78.friction = 085;
    this.fixDef78.restitution = 0.2;
    this.fixDef78.shape= new b2PolygonShape;
    this.points78 = [{x: -15.29, y: -0.05}, {x:-15.17, y: -0.05}, {x: -7.6, y: 13.05}, {x: -7.68, y: 13.13}];

    for (var i = 0; i < this.points78.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points78[i].x, this.points78[i].y);
        this.points78[i] = vec;
    }
    this.fixDef78.shape.SetAsArray(this.points78, this.points78.length);

    // 10th Loop – Clockwise 6
    this.fixDef79 = new b2FixtureDef;
    this.fixDef79.density = 1.07
    this.fixDef79.friction = 085;
    this.fixDef79.restitution = 0.2;
    this.fixDef79.shape= new b2PolygonShape;
    this.points79 = [{x: -7.66, y: -13.27}, {x:-7.6, y: -13.16}, {x: -15.17, y: -0.05}, {x: -15.29, y: -0.05}];

    for (var i = 0; i < this.points79.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points79[i].x, this.points79[i].y);
        this.points79[i] = vec;
    }
    this.fixDef79.shape.SetAsArray(this.points79, this.points79.length);

    // 10th Loop – Clockwise 7
    this.fixDef80 = new b2FixtureDef;
    this.fixDef80.density = 1.07
    this.fixDef80.friction = 085;
    this.fixDef80.restitution = 0.2;
    this.fixDef80.shape= new b2PolygonShape;
    this.points80 = [{x: -7.6, y: -13.16}, {x:-7.66, y: -13.27}, {x: 7.61, y: -13.24}, {x: 7.54, y: -13.16}];

    for (var i = 0; i < this.points80.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points80[i].x, this.points80[i].y);
        this.points80[i] = vec;
    }
    this.fixDef80.shape.SetAsArray(this.points80, this.points80.length);

    // 10th Loop – Clockwise 8
    this.fixDef81 = new b2FixtureDef;
    this.fixDef81.density = 1.07
    this.fixDef81.friction = 085;
    this.fixDef81.restitution = 0.2;
    this.fixDef81.shape= new b2PolygonShape;
    this.points81 = [{x: 7.54, y: -13.16}, {x: 7.61, y: -13.24}, {x: 15.23, y: -0.05}, {x: 15.1, y: -0.05}];

    for (var i = 0; i < this.points81.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points81[i].x, this.points81[i].y);
        this.points81[i] = vec;
    }
    this.fixDef81.shape.SetAsArray(this.points81, this.points81.length);

    // 10th Loop – Clockwise 9
    this.fixDef82 = new b2FixtureDef;
    this.fixDef82.density = 1.07
    this.fixDef82.friction = 085;
    this.fixDef82.restitution = 0.2;
    this.fixDef82.shape= new b2PolygonShape;
    this.points82 = [{x: 15.1, y: -0.05}, {x: 15.23, y: -0.05}, {x: 13.74, y: 2.53}, {x: 13.64, y: 2.47}];

    for (var i = 0; i < this.points82.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points82[i].x, this.points82[i].y);
        this.points82[i] = vec;
    }
    this.fixDef82.shape.SetAsArray(this.points82, this.points82.length);


    //10th Loop – Clockwise 10
    this.fixDef83 = new b2FixtureDef;
    this.fixDef83.density = 1.07
    this.fixDef83.friction = 085;
    this.fixDef83.restitution = 0.2;
    this.fixDef83.shape= new b2PolygonShape;
    this.points83 = [{x: 5.39, y: -13.26}, {x: 5.5, y: -13.26}, {x: 5.5, y: -12.66}, {x: 5.39, y: -12.66}];

    for (var i = 0; i < this.points83.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points83[i].x, this.points83[i].y);
        this.points83[i] = vec;
    }
    this.fixDef83.shape.SetAsArray(this.points83, this.points83.length);

    //11th Loop – Clockwise 1
    this.fixDef84 = new b2FixtureDef;
    this.fixDef84.density = 1.07
    this.fixDef84.friction = 085;
    this.fixDef84.restitution = 0.2;
    this.fixDef84.shape= new b2PolygonShape;
    this.points84 = [{x: -2.91, y: 15.25}, {x: -3.01, y: 15.25}, {x: -3, y: 14.38}, {x: -2.9, y: 14.27}];

    for (var i = 0; i < this.points84.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points84[i].x, this.points84[i].y);
        this.points84[i] = vec;
    }
    this.fixDef84.shape.SetAsArray(this.points84, this.points84.length);

    //11th Loop – Clockwise 2
    this.fixDef85 = new b2FixtureDef;
    this.fixDef85.density = 1.07
    this.fixDef85.friction = 085;
    this.fixDef85.restitution = 0.2;
    this.fixDef85.shape= new b2PolygonShape;
    this.points85 = [{x: -8.36, y: 14.38}, {x: -8.3, y: 14.27}, {x: -2.9, y: 14.27}, {x: -3, y: 14.38}];

    for (var i = 0; i < this.points85.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points85[i].x, this.points85[i].y);
        this.points85[i] = vec;
    }
    this.fixDef85.shape.SetAsArray(this.points85, this.points85.length);

    //11th Loop – Clockwise 3
    this.fixDef86 = new b2FixtureDef;
    this.fixDef86.density = 1.07
    this.fixDef86.friction = 085;
    this.fixDef86.restitution = 0.2;
    this.fixDef86.shape= new b2PolygonShape;
    this.points86 = [{x: -16.68, y: -0.08}, {x: -16.57, y: -0.05}, {x: -8.3, y: 14.27}, {x: -8.36, y: 14.38}];

    for (var i = 0; i < this.points86.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points86[i].x, this.points86[i].y);
        this.points86[i] = vec;
    }
    this.fixDef86.shape.SetAsArray(this.points86, this.points86.length);

    //11th Loop – Clockwise 4
    this.fixDef87 = new b2FixtureDef;
    this.fixDef87.density = 1.07
    this.fixDef87.friction = 085;
    this.fixDef87.restitution = 0.2;
    this.fixDef87.shape= new b2PolygonShape;
    this.points87 = [{x: -13, y: -6.45}, {x: -12.86, y: -6.49}, {x: -16.57, y: -0.05}, {x: -16.7, y: -0.05}];

    for (var i = 0; i < this.points87.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points87[i].x, this.points87[i].y);
        this.points87[i] = vec;
    }
    this.fixDef87.shape.SetAsArray(this.points87, this.points87.length);

    //11th Loop – Clockwise 5
    this.fixDef88 = new b2FixtureDef;
    this.fixDef88.density = 1.07
    this.fixDef88.friction = 085;
    this.fixDef88.restitution = 0.2;
    this.fixDef88.shape= new b2PolygonShape;
    this.points88 = [{x: -14.07, y: -7.04}, {x: -14.02, y: -7.13}, {x: -12.86, y: -6.49}, {x: -13, y: -6.45}];

    for (var i = 0; i < this.points88.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points88[i].x, this.points88[i].y);
        this.points88[i] = vec;
    }
    this.fixDef88.shape.SetAsArray(this.points88, this.points88.length);

    //11th Loop – Clockwise 6
    this.fixDef89 = new b2FixtureDef;
    this.fixDef89.density = 1.07
    this.fixDef89.friction = 085;
    this.fixDef89.restitution = 0.2;
    this.fixDef89.shape= new b2PolygonShape;
    this.points89 = [{x: -12.17, y: -7.68}, {x: -12.26, y: -7.74}, {x: -8.36, y: -14.48}, {x: -8.3, y: -14.38}];

    for (var i = 0; i < this.points89.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points89[i].x, this.points89[i].y);
        this.points89[i] = vec;
    }
    this.fixDef89.shape.SetAsArray(this.points89, this.points89.length);

    //11th Loop – Clockwise 7
    this.fixDef90 = new b2FixtureDef;
    this.fixDef90.density = 1.07
    this.fixDef90.friction = 085;
    this.fixDef90.restitution = 0.2;
    this.fixDef90.shape= new b2PolygonShape;
    this.points90 = [{x: -10.71, y: -11.04}, {x: -10.65, y: -11.13}, {x: -10.32, y: -10.91}, {x: -10.37, y: -10.82}];

    for (var i = 0; i < this.points90.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points90[i].x, this.points90[i].y);
        this.points90[i] = vec;
    }
    this.fixDef90.shape.SetAsArray(this.points90, this.points90.length);

    //11th Loop – Clockwise 8
    this.fixDef91 = new b2FixtureDef;
    this.fixDef91.density = 1.07
    this.fixDef91.friction = 085;
    this.fixDef91.restitution = 0.2;
    this.fixDef91.shape= new b2PolygonShape;
    this.points91 = [{x: -8.3, y: -14.38}, {x: -8.36, y: -14.48}, {x: 8.31, y: -14.46}, {x: 8.24, y: -14.38}];

    for (var i = 0; i < this.points91.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points91[i].x, this.points91[i].y);
        this.points91[i] = vec;
    }
    this.fixDef91.shape.SetAsArray(this.points91, this.points91.length);

    //11th Loop – Clockwise 9
    this.fixDef92 = new b2FixtureDef;
    this.fixDef92.density = 1.07
    this.fixDef92.friction = 085;
    this.fixDef92.restitution = 0.2;
    this.fixDef92.shape= new b2PolygonShape;
    this.points92 = [{x: 8.24, y: -14.38}, {x: 8.3, y: -14.48}, {x: 16.63, y: -0.05}, {x: 16.51, y: -0.05}];

    for (var i = 0; i < this.points92.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points92[i].x, this.points92[i].y);
        this.points92[i] = vec;
    }
    this.fixDef92.shape.SetAsArray(this.points92, this.points92.length);

    //11th Loop – Clockwise 10
    this.fixDef93 = new b2FixtureDef;
    this.fixDef93.density = 1.07
    this.fixDef93.friction = 085;
    this.fixDef93.restitution = 0.2;
    this.fixDef93.shape= new b2PolygonShape;
    this.points93 = [{x: 16.51, y: -0.05}, {x: 16.63, y: -0.05}, {x: 8.3, y: 14.38}, {x: 8.24, y: 14.27}];

    for (var i = 0; i < this.points93.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points93[i].x, this.points93[i].y);
        this.points93[i] = vec;
    }
    this.fixDef93.shape.SetAsArray(this.points93, this.points93.length);

    //11th Loop – Clockwise 11
    this.fixDef94 = new b2FixtureDef;
    this.fixDef94.density = 1.07
    this.fixDef94.friction = 085;
    this.fixDef94.restitution = 0.2;
    this.fixDef94.shape= new b2PolygonShape;
    this.points94 = [{x: -1.55, y: 14.38}, {x: -1.55, y: 14.27}, {x: 8.24, y: 14.27}, {x: 8.3, y: 14.38}];

    for (var i = 0; i < this.points94.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points94[i].x, this.points94[i].y);
        this.points94[i] = vec;
    }
    this.fixDef94.shape.SetAsArray(this.points94, this.points94.length);

    //12th Loop – Clockwise 1
    this.fixDef95 = new b2FixtureDef;
    this.fixDef95.density = 1.07
    this.fixDef95.friction = 085;
    this.fixDef95.restitution = 0.2;
    this.fixDef95.shape= new b2PolygonShape;
    this.points95 = [{x: -2.39, y: -15.65}, {x: -2.39, y: -15.75}, {x: 9.05, y: -15.73}, {x: 8.98, y: -15.65}];

    for (var i = 0; i < this.points95.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points95[i].x, this.points95[i].y);
        this.points95[i] = vec;
    }
    this.fixDef95.shape.SetAsArray(this.points95, this.points95.length);

    //12th Loop – Clockwise 2
    this.fixDef96 = new b2FixtureDef;
    this.fixDef96.density = 1.07
    this.fixDef96.friction = 085;
    this.fixDef96.restitution = 0.2;
    this.fixDef96.shape= new b2PolygonShape;
    this.points96 = [{x: 8.98, y: -15.65}, {x: 9.08, y: -15.73}, {x: 18.11, y: -0.04}, {x: 17.99, y: -0.04}];

    for (var i = 0; i < this.points96.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points96[i].x, this.points96[i].y);
        this.points96[i] = vec;
    }
    this.fixDef96.shape.SetAsArray(this.points96, this.points96.length);

    //12th Loop – Clockwise 3
    this.fixDef97 = new b2FixtureDef;
    this.fixDef97.density = 1.07
    this.fixDef97.friction = 085;
    this.fixDef97.restitution = 0.2;
    this.fixDef97.shape= new b2PolygonShape;
    this.points97 = [{x: 9.04, y: 15.67}, {x: 8.98, y: 15.56}, {x: 17.99, y: -0.04}, {x: 18.09, y: -0.02}];

    for (var i = 0; i < this.points97.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points97[i].x, this.points97[i].y);
        this.points97[i] = vec;
    }
    this.fixDef97.shape.SetAsArray(this.points97, this.points97.length);

    //12th Loop – Clockwise 4
    this.fixDef98 = new b2FixtureDef;
    this.fixDef98.density = 1.07
    this.fixDef98.friction = 085;
    this.fixDef98.restitution = 0.2;
    this.fixDef98.shape= new b2PolygonShape;
    this.points98 = [{x: -9.12, y: 15.64}, {x: -9.04, y: 15.56}, {x: 8.98, y: 15.56}, {x: 9.04, y: 15.67}];

    for (var i = 0; i < this.points98.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points98[i].x, this.points98[i].y);
        this.points98[i] = vec;
    }
    this.fixDef98.shape.SetAsArray(this.points98, this.points98.length);

    //12th Loop – Clockwise 5
    this.fixDef99 = new b2FixtureDef;
    this.fixDef99.density = 1.07
    this.fixDef99.friction = 085;
    this.fixDef99.restitution = 0.2;
    this.fixDef99.shape= new b2PolygonShape;
    this.points99 = [{x: -18.17, y: -0.04}, {x: -18.05, y: -0.04}, {x: -9.04, y: 15.56}, {x: -9.1, y: 15.67}];

    for (var i = 0; i < this.points99.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points99[i].x, this.points99[i].y);
        this.points99[i] = vec;
    }
    this.fixDef99.shape.SetAsArray(this.points99, this.points99.length);

    //12th Loop – Clockwise 6
    this.fixDef100 = new b2FixtureDef;
    this.fixDef100.density = 1.07
    this.fixDef100.friction = 085;
    this.fixDef100.restitution = 0.2;
    this.fixDef100.shape= new b2PolygonShape;
    this.points100 = [{x: -9.1, y: -15.75}, {x: -9.04, y: -15.65}, {x: -18.05, y: -0.04}, {x: -18.17, y: -0.04}];

    for (var i = 0; i < this.points100.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points100[i].x, this.points100[i].y);
        this.points100[i] = vec;
    }
    this.fixDef100.shape.SetAsArray(this.points100, this.points100.length);

    //12th Loop – Clockwise 7
    this.fixDef101 = new b2FixtureDef;
    this.fixDef101.density = 1.07
    this.fixDef101.friction = 085;
    this.fixDef101.restitution = 0.2;
    this.fixDef101.shape= new b2PolygonShape;
    this.points101 = [{x: -9.04, y: -15.65}, {x: -9.1, y: -15.75}, {x: -5.35, y: -15.75}, {x: -5.35, y: -15.65}];

    for (var i = 0; i < this.points101.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points101[i].x, this.points101[i].y);
        this.points101[i] = vec;
    }
    this.fixDef101.shape.SetAsArray(this.points101, this.points101.length);




    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.Object.GetBody().CreateFixture(this.fixDef2); // Base
    //2nd Loop
    this.Object.GetBody().CreateFixture(this.fixDef3); // 2nd Loop - 1
    this.Object.GetBody().CreateFixture(this.fixDef4); // 2nd Loop - 2
    this.Object.GetBody().CreateFixture(this.fixDef5); // 2nd Loop - 3
    this.Object.GetBody().CreateFixture(this.fixDef6); // 2nd Loop - 4 DOOR
    this.Object.GetBody().CreateFixture(this.fixDef7); // 2nd Loop - 5
    this.Object.GetBody().CreateFixture(this.fixDef8); // 2nd Loop - 6
    this.Object.GetBody().CreateFixture(this.fixDef9); // 2nd Loop - 7
    this.Object.GetBody().CreateFixture(this.fixDef10); // 2nd Loop - 8
    // 3rd Loop
    this.Object.GetBody().CreateFixture(this.fixDef11); // 3rd Loop - 11
    this.Object.GetBody().CreateFixture(this.fixDef12); // 3rd Loop - 12
    this.Object.GetBody().CreateFixture(this.fixDef13); // 3rd Loop - 13
    this.Object.GetBody().CreateFixture(this.fixDef14); // 3rd Loop - 14
    this.Object.GetBody().CreateFixture(this.fixDef15); // 3rd Loop - 15
    this.Object.GetBody().CreateFixture(this.fixDef16); // 3rd Loop - 16
    this.Object.GetBody().CreateFixture(this.fixDef17); // 3rd Loop - 17
    //4th Loop
    this.Object.GetBody().CreateFixture(this.fixDef18); // 4thLoop - 18
    this.Object.GetBody().CreateFixture(this.fixDef19); // 4thLoop - 19
    this.Object.GetBody().CreateFixture(this.fixDef20); // 4thLoop - 20
    this.Object.GetBody().CreateFixture(this.fixDef21); // 4thLoop - 21
    this.Object.GetBody().CreateFixture(this.fixDef22); // 4thLoop - 22
    this.Object.GetBody().CreateFixture(this.fixDef23); // 4thLoop - 23
    this.Object.GetBody().CreateFixture(this.fixDef24); // 4thLoop - 24
    this.Object.GetBody().CreateFixture(this.fixDef25); // 4thLoop - 25
    this.Object.GetBody().CreateFixture(this.fixDef26); // 4thLoop - 26
    this.Object.GetBody().CreateFixture(this.fixDef27); // 4thLoop - 27
    //5th Loop
    this.Object.GetBody().CreateFixture(this.fixDef28); // 5thLoop - 28
    this.Object.GetBody().CreateFixture(this.fixDef29); // 5thLoop - 29
    this.Object.GetBody().CreateFixture(this.fixDef30); // 5thLoop - 30
    this.Object.GetBody().CreateFixture(this.fixDef31); // 5thLoop - 31
    this.Object.GetBody().CreateFixture(this.fixDef32); // 5thLoop - 32
    this.Object.GetBody().CreateFixture(this.fixDef33); // 5thLoop - 33
    this.Object.GetBody().CreateFixture(this.fixDef34); // 5thLoop - 34
    this.Object.GetBody().CreateFixture(this.fixDef35); // 5thLoop - 35
    this.Object.GetBody().CreateFixture(this.fixDef36); // 5thLoop - 36
    this.Object.GetBody().CreateFixture(this.fixDef37); // 5thLoop - 37
    //6th Loop
    this.Object.GetBody().CreateFixture(this.fixDef38); // 6thLoop - 38
    this.Object.GetBody().CreateFixture(this.fixDef39); // 6thLoop - 39
    this.Object.GetBody().CreateFixture(this.fixDef40); // 6thLoop - 40
    this.Object.GetBody().CreateFixture(this.fixDef41); // 6thLoop - 41
    this.Object.GetBody().CreateFixture(this.fixDef42); // 6thLoop - 42
    this.Object.GetBody().CreateFixture(this.fixDef43); // 6thLoop - 43
    this.Object.GetBody().CreateFixture(this.fixDef44); // 6thLoop - 44
    this.Object.GetBody().CreateFixture(this.fixDef45); // 6thLoop - 45
    //7th Loop
    this.Object.GetBody().CreateFixture(this.fixDef46); // 7thLoop - 46
    this.Object.GetBody().CreateFixture(this.fixDef47); // 7thLoop - 47
    this.Object.GetBody().CreateFixture(this.fixDef48); // 7thLoop - 48
    this.Object.GetBody().CreateFixture(this.fixDef49); // 7thLoop - 49
    this.Object.GetBody().CreateFixture(this.fixDef50); // 7thLoop - 50
    this.Object.GetBody().CreateFixture(this.fixDef51); // 7thLoop - 51
    this.Object.GetBody().CreateFixture(this.fixDef52); // 7thLoop - 52
    this.Object.GetBody().CreateFixture(this.fixDef53); // 7thLoop - 53
    this.Object.GetBody().CreateFixture(this.fixDef54); // 7thLoop - 54
    this.Object.GetBody().CreateFixture(this.fixDef55); // 7thLoop - 55
    this.Object.GetBody().CreateFixture(this.fixDef56); // 7thLoop - 56
    //8th Loop
    this.Object.GetBody().CreateFixture(this.fixDef57); // 8thLoop - 57
    this.Object.GetBody().CreateFixture(this.fixDef58); // 8thLoop - 58
    this.Object.GetBody().CreateFixture(this.fixDef59); // 8thLoop - 59
    this.Object.GetBody().CreateFixture(this.fixDef60); // 8thLoop - 60
    this.Object.GetBody().CreateFixture(this.fixDef61); // 8thLoop - 61
    this.Object.GetBody().CreateFixture(this.fixDef62); // 8thLoop - 62
    this.Object.GetBody().CreateFixture(this.fixDef63); // 8thLoop - 63
    this.Object.GetBody().CreateFixture(this.fixDef64); // 8thLoop - 64
    //9th Loop
    this.Object.GetBody().CreateFixture(this.fixDef65); // 9thLoop - 65
    this.Object.GetBody().CreateFixture(this.fixDef66); // 9thLoop - 66
    this.Object.GetBody().CreateFixture(this.fixDef67); // 9thLoop - 67
    this.Object.GetBody().CreateFixture(this.fixDef68); // 9thLoop - 68
    this.Object.GetBody().CreateFixture(this.fixDef69); // 9thLoop - 69
    this.Object.GetBody().CreateFixture(this.fixDef70); // 9thLoop - 70
    this.Object.GetBody().CreateFixture(this.fixDef71); // 9thLoop - 71
    this.Object.GetBody().CreateFixture(this.fixDef72); // 9thLoop - 72
    this.Object.GetBody().CreateFixture(this.fixDef73); // 9thLoop - 73
    //10th Loop
    this.Object.GetBody().CreateFixture(this.fixDef74); // 10th Loop - 74
    this.Object.GetBody().CreateFixture(this.fixDef75); // 10th Loop - 75
    this.Object.GetBody().CreateFixture(this.fixDef76); // 10th Loop - 76
    this.Object.GetBody().CreateFixture(this.fixDef77); // 10th Loop - 77
    this.Object.GetBody().CreateFixture(this.fixDef78); // 10th Loop - 78
    this.Object.GetBody().CreateFixture(this.fixDef79); // 10th Loop - 79
    this.Object.GetBody().CreateFixture(this.fixDef80); // 10th Loop - 80
    this.Object.GetBody().CreateFixture(this.fixDef81); // 10th Loop - 81
    this.Object.GetBody().CreateFixture(this.fixDef82); // 10th Loop - 82
    this.Object.GetBody().CreateFixture(this.fixDef83); // 10th Loop - 83
    //11th Loop
    this.Object.GetBody().CreateFixture(this.fixDef84); // 11th Loop - 84
    this.Object.GetBody().CreateFixture(this.fixDef85); // 11th Loop - 85
    this.Object.GetBody().CreateFixture(this.fixDef86); // 11th Loop - 86
    this.Object.GetBody().CreateFixture(this.fixDef87); // 11th Loop - 87
    this.Object.GetBody().CreateFixture(this.fixDef88); // 11th Loop - 88
    this.Object.GetBody().CreateFixture(this.fixDef89); // 11th Loop - 89
    this.Object.GetBody().CreateFixture(this.fixDef90); // 11th Loop - 90
    this.Object.GetBody().CreateFixture(this.fixDef91); // 11th Loop - 91
    this.Object.GetBody().CreateFixture(this.fixDef92); // 11th Loop - 92
    this.Object.GetBody().CreateFixture(this.fixDef93); // 11th Loop - 93
    this.Object.GetBody().CreateFixture(this.fixDef94); // 11th Loop - 94
    //12th Loop
    this.Object.GetBody().CreateFixture(this.fixDef95); // 12th Loop - 95
    this.Object.GetBody().CreateFixture(this.fixDef96); // 12th Loop - 96
    this.Object.GetBody().CreateFixture(this.fixDef97); // 12th Loop - 97
    this.Object.GetBody().CreateFixture(this.fixDef98); // 12th Loop - 98
    this.Object.GetBody().CreateFixture(this.fixDef99); // 12th Loop - 99
    this.Object.GetBody().CreateFixture(this.fixDef100); // 12th Loop - 100
    this.Object.GetBody().CreateFixture(this.fixDef101); // 12th Loop - 101



    this.update = function() {
        miX = this.Object.GetBody().GetPosition().x * SCALE;
        miY = this.Object.GetBody().GetPosition().y * SCALE;
        myAngle = this.Object.GetBody().GetAngle();
        //console.log("miX = " + miX + "   miY = " + miY + "    myAngle = "+ myAngle);
        //console.log("myAngle = "+ myAngle);
        // BLACK HOLE 1
        this.mySpotScreenX =   canvas.width/2 + 93.5 + Math.cos(myAngle - 0.8) * mySpotRadio;
        this.mySpotScreenY =  canvas.height/2 - 178 + Math.sin(myAngle - 0.8) * mySpotRadio;
        // Black Hole 2
        this.mySpotScreenX2 =   canvas.width/2 + 93.5 + Math.cos(myAngle + 4.25) * mySpotRadio2;
        this.mySpotScreenY2 =  canvas.height/2 - 178 + Math.sin(myAngle + 4.25) * mySpotRadio2;
        // Black Hole 3
        this.mySpotScreenX3 =   canvas.width/2 + 93.5 + Math.cos(myAngle + 1.93) * mySpotRadio3;
        this.mySpotScreenY3 =  canvas.height/2 - 178 + Math.sin(myAngle + 1.93) * mySpotRadio3;

    };

    this.draw = function(ctx) {

        this.update();

        ctx.fillStyle = "rgb(125 , 2 , 196)";
        ctx.strokeStyle = "rgb(125 , 2 , 196)";

        //drawing rect
        ctx.save();
        ctx.translate(miX, miY);
        ctx.rotate(myAngle);

        // Base
        ctx.beginPath();
        ctx.moveTo((this.points2[0].x*SCALE), (this.points2[0].y*SCALE));
        for (var i = 1; i < this.points2.length; i++) {
            ctx.lineTo((this.points2[i].x*SCALE), (this.points2[i].y*SCALE));
        }
        ctx.lineTo(this.points2[0].x*SCALE, this.points2[0].y*SCALE );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //2nd Loop - 1
        ctx.beginPath();

        ctx.moveTo((this.points3[0].x*SCALE), (this.points3[0].y*SCALE));
        for (var i = 1; i < this.points3.length; i++) {
            ctx.lineTo((this.points3[i].x*SCALE), (this.points3[i].y*SCALE));
        }
        ctx.lineTo(this.points3[0].x*SCALE, this.points3[0].y*SCALE );
       // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //2nd Loop - 2
        ctx.beginPath();

        ctx.moveTo((this.points4[0].x*SCALE), (this.points4[0].y*SCALE));
        for (var i = 1; i < this.points4.length; i++) {
            ctx.lineTo((this.points4[i].x*SCALE), (this.points4[i].y*SCALE));
        }
        ctx.lineTo(this.points4[0].x*SCALE, this.points4[0].y*SCALE );
       // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //2nd Loop - 3
        ctx.beginPath();

        ctx.moveTo((this.points5[0].x*SCALE), (this.points5[0].y*SCALE));
        for (var i = 1; i < this.points5.length; i++) {
            ctx.lineTo((this.points5[i].x*SCALE), (this.points5[i].y*SCALE));
        }
        ctx.lineTo(this.points5[0].x*SCALE, this.points5[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //2nd Loop - 4 Door
        ctx.beginPath();
        ctx.fillStyle = "rgb(224 , 181 , 0)";
        ctx.strokeStyle = "rgb(224 , 181 , 0)";
        ctx.moveTo((this.points6[0].x*SCALE), (this.points6[0].y*SCALE));
        for (var i = 1; i < this.points6.length; i++) {
            ctx.lineTo((this.points6[i].x*SCALE), (this.points6[i].y*SCALE));
        }
        ctx.lineTo(this.points6[0].x*SCALE, this.points6[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //2nd Loop - 7
        ctx.beginPath();
        ctx.fillStyle = "rgb(125 , 2, 196)";
        ctx.strokeStyle = "rgb(125 , 2, 196)";
        ctx.moveTo((this.points7[0].x*SCALE), (this.points7[0].y*SCALE));
        for (var i = 1; i < this.points7.length; i++) {
            ctx.lineTo((this.points7[i].x*SCALE), (this.points7[i].y*SCALE));
        }
        ctx.lineTo(this.points7[0].x*SCALE, this.points7[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //2nd Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points8[0].x*SCALE), (this.points8[0].y*SCALE));
        for (var i = 1; i < this.points8.length; i++) {
            ctx.lineTo((this.points8[i].x*SCALE), (this.points8[i].y*SCALE));
        }
        ctx.lineTo(this.points8[0].x*SCALE, this.points8[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points9[0].x*SCALE), (this.points9[0].y*SCALE));
        for (var i = 1; i < this.points9.length; i++) {
            ctx.lineTo((this.points9[i].x*SCALE), (this.points9[i].y*SCALE));
        }
        ctx.lineTo(this.points9[0].x*SCALE, this.points9[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 2
        ctx.beginPath();

        ctx.moveTo((this.points10[0].x*SCALE), (this.points10[0].y*SCALE));
        for (var i = 1; i < this.points10.length; i++) {
            ctx.lineTo((this.points10[i].x*SCALE), (this.points10[i].y*SCALE));
        }
        ctx.lineTo(this.points10[0].x*SCALE, this.points10[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points11[0].x*SCALE), (this.points11[0].y*SCALE));
        for (var i = 1; i < this.points11.length; i++) {
            ctx.lineTo((this.points11[i].x*SCALE), (this.points11[i].y*SCALE));
        }
        ctx.lineTo(this.points11[0].x*SCALE, this.points11[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points12[0].x*SCALE), (this.points12[0].y*SCALE));
        for (var i = 1; i < this.points12.length; i++) {
            ctx.lineTo((this.points12[i].x*SCALE), (this.points12[i].y*SCALE));
        }
        ctx.lineTo(this.points12[0].x*SCALE, this.points12[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points13[0].x*SCALE), (this.points13[0].y*SCALE));
        for (var i = 1; i < this.points13.length; i++) {
            ctx.lineTo((this.points13[i].x*SCALE), (this.points13[i].y*SCALE));
        }
        ctx.lineTo(this.points13[0].x*SCALE, this.points13[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points14[0].x*SCALE), (this.points14[0].y*SCALE));
        for (var i = 1; i < this.points14.length; i++) {
            ctx.lineTo((this.points14[i].x*SCALE), (this.points14[i].y*SCALE));
        }
        ctx.lineTo(this.points14[0].x*SCALE, this.points14[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points15[0].x*SCALE), (this.points15[0].y*SCALE));
        for (var i = 1; i < this.points15.length; i++) {
            ctx.lineTo((this.points15[i].x*SCALE), (this.points15[i].y*SCALE));
        }
        ctx.lineTo(this.points15[0].x*SCALE, this.points15[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points16[0].x*SCALE), (this.points16[0].y*SCALE));
        for (var i = 1; i < this.points16.length; i++) {
            ctx.lineTo((this.points16[i].x*SCALE), (this.points16[i].y*SCALE));
        }
        ctx.lineTo(this.points16[0].x*SCALE, this.points16[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //3rd Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points17[0].x*SCALE), (this.points17[0].y*SCALE));
        for (var i = 1; i < this.points17.length; i++) {
            ctx.lineTo((this.points17[i].x*SCALE), (this.points17[i].y*SCALE));
        }
        ctx.lineTo(this.points17[0].x*SCALE, this.points17[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 1
        ctx.beginPath();
        ctx.fillStyle = "rgb(41 , 171 , 226)";
        ctx.strokeStyle = "rgb(41 , 171 , 226)";
        ctx.moveTo((this.points18[0].x*SCALE), (this.points18[0].y*SCALE));
        for (var i = 1; i < this.points18.length; i++) {
            ctx.lineTo((this.points18[i].x*SCALE), (this.points18[i].y*SCALE));
        }
        ctx.lineTo(this.points18[0].x*SCALE, this.points18[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points19[0].x*SCALE), (this.points19[0].y*SCALE));
        for (var i = 1; i < this.points19.length; i++) {
            ctx.lineTo((this.points19[i].x*SCALE), (this.points19[i].y*SCALE));
        }
        ctx.lineTo(this.points19[0].x*SCALE, this.points19[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points20[0].x*SCALE), (this.points20[0].y*SCALE));
        for (var i = 1; i < this.points20.length; i++) {
            ctx.lineTo((this.points20[i].x*SCALE), (this.points20[i].y*SCALE));
        }
        ctx.lineTo(this.points20[0].x*SCALE, this.points20[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points21[0].x*SCALE), (this.points21[0].y*SCALE));
        for (var i = 1; i < this.points21.length; i++) {
            ctx.lineTo((this.points21[i].x*SCALE), (this.points21[i].y*SCALE));
        }
        ctx.lineTo(this.points21[0].x*SCALE, this.points21[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points22[0].x*SCALE), (this.points22[0].y*SCALE));
        for (var i = 1; i < this.points22.length; i++) {
            ctx.lineTo((this.points22[i].x*SCALE), (this.points22[i].y*SCALE));
        }
        ctx.lineTo(this.points22[0].x*SCALE, this.points22[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points23[0].x*SCALE), (this.points23[0].y*SCALE));
        for (var i = 1; i < this.points23.length; i++) {
            ctx.lineTo((this.points23[i].x*SCALE), (this.points23[i].y*SCALE));
        }
        ctx.lineTo(this.points23[0].x*SCALE, this.points23[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points24[0].x*SCALE), (this.points24[0].y*SCALE));
        for (var i = 1; i < this.points24.length; i++) {
            ctx.lineTo((this.points24[i].x*SCALE), (this.points24[i].y*SCALE));
        }
        ctx.lineTo(this.points24[0].x*SCALE, this.points24[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //4th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points25[0].x*SCALE), (this.points25[0].y*SCALE));
        for (var i = 1; i < this.points25.length; i++) {
            ctx.lineTo((this.points25[i].x*SCALE), (this.points25[i].y*SCALE));
        }
        ctx.lineTo(this.points25[0].x*SCALE, this.points25[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points26[0].x*SCALE), (this.points26[0].y*SCALE));
        for (var i = 1; i < this.points26.length; i++) {
            ctx.lineTo((this.points26[i].x*SCALE), (this.points26[i].y*SCALE));
        }
        ctx.lineTo(this.points26[0].x*SCALE, this.points26[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points27[0].x*SCALE), (this.points27[0].y*SCALE));
        for (var i = 1; i < this.points27.length; i++) {
            ctx.lineTo((this.points27[i].x*SCALE), (this.points27[i].y*SCALE));
        }
        ctx.lineTo(this.points27[0].x*SCALE, this.points27[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points28[0].x*SCALE), (this.points28[0].y*SCALE));
        for (var i = 1; i < this.points28.length; i++) {
            ctx.lineTo((this.points28[i].x*SCALE), (this.points28[i].y*SCALE));
        }
        ctx.lineTo(this.points28[0].x*SCALE, this.points28[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points29[0].x*SCALE), (this.points29[0].y*SCALE));
        for (var i = 1; i < this.points29.length; i++) {
            ctx.lineTo((this.points29[i].x*SCALE), (this.points29[i].y*SCALE));
        }
        ctx.lineTo(this.points29[0].x*SCALE, this.points29[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points30[0].x*SCALE), (this.points30[0].y*SCALE));
        for (var i = 1; i < this.points30.length; i++) {
            ctx.lineTo((this.points30[i].x*SCALE), (this.points30[i].y*SCALE));
        }
        ctx.lineTo(this.points30[0].x*SCALE, this.points30[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points31[0].x*SCALE), (this.points31[0].y*SCALE));
        for (var i = 1; i < this.points31.length; i++) {
            ctx.lineTo((this.points31[i].x*SCALE), (this.points31[i].y*SCALE));
        }
        ctx.lineTo(this.points31[0].x*SCALE, this.points31[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points32[0].x*SCALE), (this.points32[0].y*SCALE));
        for (var i = 1; i < this.points32.length; i++) {
            ctx.lineTo((this.points32[i].x*SCALE), (this.points32[i].y*SCALE));
        }
        ctx.lineTo(this.points32[0].x*SCALE, this.points32[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points33[0].x*SCALE), (this.points33[0].y*SCALE));
        for (var i = 1; i < this.points33.length; i++) {
            ctx.lineTo((this.points33[i].x*SCALE), (this.points33[i].y*SCALE));
        }
        ctx.lineTo(this.points33[0].x*SCALE, this.points33[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points34[0].x*SCALE), (this.points34[0].y*SCALE));
        for (var i = 1; i < this.points34.length; i++) {
            ctx.lineTo((this.points34[i].x*SCALE), (this.points34[i].y*SCALE));
        }
        ctx.lineTo(this.points34[0].x*SCALE, this.points34[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //5th Loop - 10
        ctx.beginPath();
        ctx.moveTo((this.points35[0].x*SCALE), (this.points35[0].y*SCALE));
        for (var i = 1; i < this.points35.length; i++) {
            ctx.lineTo((this.points35[i].x*SCALE), (this.points35[i].y*SCALE));
        }
        ctx.lineTo(this.points35[0].x*SCALE, this.points35[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points36[0].x*SCALE), (this.points36[0].y*SCALE));
        for (var i = 1; i < this.points36.length; i++) {
            ctx.lineTo((this.points36[i].x*SCALE), (this.points36[i].y*SCALE));
        }
        ctx.lineTo(this.points36[0].x*SCALE, this.points36[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points37[0].x*SCALE), (this.points37[0].y*SCALE));
        for (var i = 1; i < this.points37.length; i++) {
            ctx.lineTo((this.points37[i].x*SCALE), (this.points37[i].y*SCALE));
        }
        ctx.lineTo(this.points37[0].x*SCALE, this.points37[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points38[0].x*SCALE), (this.points38[0].y*SCALE));
        for (var i = 1; i < this.points38.length; i++) {
            ctx.lineTo((this.points38[i].x*SCALE), (this.points38[i].y*SCALE));
        }
        ctx.lineTo(this.points38[0].x*SCALE, this.points38[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points39[0].x*SCALE), (this.points39[0].y*SCALE));
        for (var i = 1; i < this.points39.length; i++) {
            ctx.lineTo((this.points39[i].x*SCALE), (this.points39[i].y*SCALE));
        }
        ctx.lineTo(this.points39[0].x*SCALE, this.points39[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points40[0].x*SCALE), (this.points40[0].y*SCALE));
        for (var i = 1; i < this.points40.length; i++) {
            ctx.lineTo((this.points40[i].x*SCALE), (this.points40[i].y*SCALE));
        }
        ctx.lineTo(this.points40[0].x*SCALE, this.points40[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points41[0].x*SCALE), (this.points41[0].y*SCALE));
        for (var i = 1; i < this.points41.length; i++) {
            ctx.lineTo((this.points41[i].x*SCALE), (this.points41[i].y*SCALE));
        }
        ctx.lineTo(this.points41[0].x*SCALE, this.points41[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points42[0].x*SCALE), (this.points42[0].y*SCALE));
        for (var i = 1; i < this.points42.length; i++) {
            ctx.lineTo((this.points42[i].x*SCALE), (this.points42[i].y*SCALE));
        }
        ctx.lineTo(this.points42[0].x*SCALE, this.points42[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //6th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points43[0].x*SCALE), (this.points43[0].y*SCALE));
        for (var i = 1; i < this.points43.length; i++) {
            ctx.lineTo((this.points43[i].x*SCALE), (this.points43[i].y*SCALE));
        }
        ctx.lineTo(this.points43[0].x*SCALE, this.points43[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points44[0].x*SCALE), (this.points44[0].y*SCALE));
        for (var i = 1; i < this.points44.length; i++) {
            ctx.lineTo((this.points44[i].x*SCALE), (this.points44[i].y*SCALE));
        }
        ctx.lineTo(this.points44[0].x*SCALE, this.points44[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points45[0].x*SCALE), (this.points45[0].y*SCALE));
        for (var i = 1; i < this.points45.length; i++) {
            ctx.lineTo((this.points45[i].x*SCALE), (this.points45[i].y*SCALE));
        }
        ctx.lineTo(this.points45[0].x*SCALE, this.points45[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points46[0].x*SCALE), (this.points46[0].y*SCALE));
        for (var i = 1; i < this.points46.length; i++) {
            ctx.lineTo((this.points46[i].x*SCALE), (this.points46[i].y*SCALE));
        }
        ctx.lineTo(this.points46[0].x*SCALE, this.points46[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points47[0].x*SCALE), (this.points47[0].y*SCALE));
        for (var i = 1; i < this.points47.length; i++) {
            ctx.lineTo((this.points47[i].x*SCALE), (this.points47[i].y*SCALE));
        }
        ctx.lineTo(this.points47[0].x*SCALE, this.points47[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ///7th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points48[0].x*SCALE), (this.points48[0].y*SCALE));
        for (var i = 1; i < this.points48.length; i++) {
            ctx.lineTo((this.points48[i].x*SCALE), (this.points48[i].y*SCALE));
        }
        ctx.lineTo(this.points48[0].x*SCALE, this.points48[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points49[0].x*SCALE), (this.points49[0].y*SCALE));
        for (var i = 1; i < this.points49.length; i++) {
            ctx.lineTo((this.points49[i].x*SCALE), (this.points49[i].y*SCALE));
        }
        ctx.lineTo(this.points49[0].x*SCALE, this.points49[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points50[0].x*SCALE), (this.points50[0].y*SCALE));
        for (var i = 1; i < this.points50.length; i++) {
            ctx.lineTo((this.points50[i].x*SCALE), (this.points50[i].y*SCALE));
        }
        ctx.lineTo(this.points50[0].x*SCALE, this.points50[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points51[0].x*SCALE), (this.points51[0].y*SCALE));
        for (var i = 1; i < this.points51.length; i++) {
            ctx.lineTo((this.points51[i].x*SCALE), (this.points51[i].y*SCALE));
        }
        ctx.lineTo(this.points51[0].x*SCALE, this.points51[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points52[0].x*SCALE), (this.points52[0].y*SCALE));
        for (var i = 1; i < this.points52.length; i++) {
            ctx.lineTo((this.points52[i].x*SCALE), (this.points52[i].y*SCALE));
        }
        ctx.lineTo(this.points52[0].x*SCALE, this.points52[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 10
        ctx.beginPath();
        ctx.moveTo((this.points53[0].x*SCALE), (this.points53[0].y*SCALE));
        for (var i = 1; i < this.points53.length; i++) {
            ctx.lineTo((this.points53[i].x*SCALE), (this.points53[i].y*SCALE));
        }
        ctx.lineTo(this.points53[0].x*SCALE, this.points53[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //7th Loop - 11
        ctx.beginPath();
        ctx.fillStyle = "rgb(247 , 147 , 30)";
        ctx.strokeStyle = "rgb(247 , 147 , 30)";
        ctx.moveTo((this.points54[0].x*SCALE), (this.points54[0].y*SCALE));
        for (var i = 1; i < this.points54.length; i++) {
            ctx.lineTo((this.points54[i].x*SCALE), (this.points54[i].y*SCALE));
        }
        ctx.lineTo(this.points54[0].x*SCALE, this.points54[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points55[0].x*SCALE), (this.points55[0].y*SCALE));
        for (var i = 1; i < this.points55.length; i++) {
            ctx.lineTo((this.points55[i].x*SCALE), (this.points55[i].y*SCALE));
        }
        ctx.lineTo(this.points55[0].x*SCALE, this.points55[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points56[0].x*SCALE), (this.points56[0].y*SCALE));
        for (var i = 1; i < this.points56.length; i++) {
            ctx.lineTo((this.points56[i].x*SCALE), (this.points56[i].y*SCALE));
        }
        ctx.lineTo(this.points56[0].x*SCALE, this.points56[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points57[0].x*SCALE), (this.points57[0].y*SCALE));
        for (var i = 1; i < this.points57.length; i++) {
            ctx.lineTo((this.points57[i].x*SCALE), (this.points57[i].y*SCALE));
        }
        ctx.lineTo(this.points57[0].x*SCALE, this.points57[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points58[0].x*SCALE), (this.points58[0].y*SCALE));
        for (var i = 1; i < this.points58.length; i++) {
            ctx.lineTo((this.points58[i].x*SCALE), (this.points58[i].y*SCALE));
        }
        ctx.lineTo(this.points58[0].x*SCALE, this.points58[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points59[0].x*SCALE), (this.points59[0].y*SCALE));
        for (var i = 1; i < this.points59.length; i++) {
            ctx.lineTo((this.points59[i].x*SCALE), (this.points59[i].y*SCALE));
        }
        ctx.lineTo(this.points59[0].x*SCALE, this.points59[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points60[0].x*SCALE), (this.points60[0].y*SCALE));
        for (var i = 1; i < this.points60.length; i++) {
            ctx.lineTo((this.points60[i].x*SCALE), (this.points60[i].y*SCALE));
        }
        ctx.lineTo(this.points60[0].x*SCALE, this.points60[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points61[0].x*SCALE), (this.points61[0].y*SCALE));
        for (var i = 1; i < this.points61.length; i++) {
            ctx.lineTo((this.points61[i].x*SCALE), (this.points61[i].y*SCALE));
        }
        ctx.lineTo(this.points61[0].x*SCALE, this.points61[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points62[0].x*SCALE), (this.points62[0].y*SCALE));
        for (var i = 1; i < this.points62.length; i++) {
            ctx.lineTo((this.points62[i].x*SCALE), (this.points62[i].y*SCALE));
        }
        ctx.lineTo(this.points62[0].x*SCALE, this.points62[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points63[0].x*SCALE), (this.points63[0].y*SCALE));
        for (var i = 1; i < this.points63.length; i++) {
            ctx.lineTo((this.points63[i].x*SCALE), (this.points63[i].y*SCALE));
        }
        ctx.lineTo(this.points63[0].x*SCALE, this.points63[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //8th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points64[0].x*SCALE), (this.points64[0].y*SCALE));
        for (var i = 1; i < this.points64.length; i++) {
            ctx.lineTo((this.points64[i].x*SCALE), (this.points64[i].y*SCALE));
        }
        ctx.lineTo(this.points64[0].x*SCALE, this.points64[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points65[0].x*SCALE), (this.points65[0].y*SCALE));
        for (var i = 1; i < this.points65.length; i++) {
            ctx.lineTo((this.points65[i].x*SCALE), (this.points65[i].y*SCALE));
        }
        ctx.lineTo(this.points65[0].x*SCALE, this.points65[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points66[0].x*SCALE), (this.points66[0].y*SCALE));
        for (var i = 1; i < this.points66.length; i++) {
            ctx.lineTo((this.points66[i].x*SCALE), (this.points66[i].y*SCALE));
        }
        ctx.lineTo(this.points66[0].x*SCALE, this.points66[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points67[0].x*SCALE), (this.points67[0].y*SCALE));
        for (var i = 1; i < this.points67.length; i++) {
            ctx.lineTo((this.points67[i].x*SCALE), (this.points67[i].y*SCALE));
        }
        ctx.lineTo(this.points67[0].x*SCALE, this.points67[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points68[0].x*SCALE), (this.points68[0].y*SCALE));
        for (var i = 1; i < this.points68.length; i++) {
            ctx.lineTo((this.points68[i].x*SCALE), (this.points68[i].y*SCALE));
        }
        ctx.lineTo(this.points68[0].x*SCALE, this.points68[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points69[0].x*SCALE), (this.points69[0].y*SCALE));
        for (var i = 1; i < this.points69.length; i++) {
            ctx.lineTo((this.points69[i].x*SCALE), (this.points69[i].y*SCALE));
        }
        ctx.lineTo(this.points69[0].x*SCALE, this.points69[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points70[0].x*SCALE), (this.points70[0].y*SCALE));
        for (var i = 1; i < this.points70.length; i++) {
            ctx.lineTo((this.points70[i].x*SCALE), (this.points70[i].y*SCALE));
        }
        ctx.lineTo(this.points70[0].x*SCALE, this.points70[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points71[0].x*SCALE), (this.points71[0].y*SCALE));
        for (var i = 1; i < this.points71.length; i++) {
            ctx.lineTo((this.points71[i].x*SCALE), (this.points71[i].y*SCALE));
        }
        ctx.lineTo(this.points71[0].x*SCALE, this.points71[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points72[0].x*SCALE), (this.points72[0].y*SCALE));
        for (var i = 1; i < this.points72.length; i++) {
            ctx.lineTo((this.points72[i].x*SCALE), (this.points72[i].y*SCALE));
        }
        ctx.lineTo(this.points72[0].x*SCALE, this.points72[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //9th Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points73[0].x*SCALE), (this.points73[0].y*SCALE));
        for (var i = 1; i < this.points73.length; i++) {
            ctx.lineTo((this.points73[i].x*SCALE), (this.points73[i].y*SCALE));
        }
        ctx.lineTo(this.points73[0].x*SCALE, this.points73[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points74[0].x*SCALE), (this.points74[0].y*SCALE));
        for (var i = 1; i < this.points74.length; i++) {
            ctx.lineTo((this.points74[i].x*SCALE), (this.points74[i].y*SCALE));
        }
        ctx.lineTo(this.points74[0].x*SCALE, this.points74[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points75[0].x*SCALE), (this.points75[0].y*SCALE));
        for (var i = 1; i < this.points75.length; i++) {
            ctx.lineTo((this.points75[i].x*SCALE), (this.points75[i].y*SCALE));
        }
        ctx.lineTo(this.points75[0].x*SCALE, this.points75[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points76[0].x*SCALE), (this.points76[0].y*SCALE));
        for (var i = 1; i < this.points76.length; i++) {
            ctx.lineTo((this.points76[i].x*SCALE), (this.points76[i].y*SCALE));
        }
        ctx.lineTo(this.points76[0].x*SCALE, this.points76[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points77[0].x*SCALE), (this.points77[0].y*SCALE));
        for (var i = 1; i < this.points77.length; i++) {
            ctx.lineTo((this.points77[i].x*SCALE), (this.points77[i].y*SCALE));
        }
        ctx.lineTo(this.points77[0].x*SCALE, this.points77[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points78[0].x*SCALE), (this.points78[0].y*SCALE));
        for (var i = 1; i < this.points78.length; i++) {
            ctx.lineTo((this.points78[i].x*SCALE), (this.points78[i].y*SCALE));
        }
        ctx.lineTo(this.points78[0].x*SCALE, this.points78[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points79[0].x*SCALE), (this.points79[0].y*SCALE));
        for (var i = 1; i < this.points79.length; i++) {
            ctx.lineTo((this.points79[i].x*SCALE), (this.points79[i].y*SCALE));
        }
        ctx.lineTo(this.points79[0].x*SCALE, this.points79[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points80[0].x*SCALE), (this.points80[0].y*SCALE));
        for (var i = 1; i < this.points80.length; i++) {
            ctx.lineTo((this.points80[i].x*SCALE), (this.points80[i].y*SCALE));
        }
        ctx.lineTo(this.points80[0].x*SCALE, this.points80[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points81[0].x*SCALE), (this.points81[0].y*SCALE));
        for (var i = 1; i < this.points81.length; i++) {
            ctx.lineTo((this.points81[i].x*SCALE), (this.points81[i].y*SCALE));
        }
        ctx.lineTo(this.points81[0].x*SCALE, this.points81[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points82[0].x*SCALE), (this.points82[0].y*SCALE));
        for (var i = 1; i < this.points82.length; i++) {
            ctx.lineTo((this.points82[i].x*SCALE), (this.points82[i].y*SCALE));
        }
        ctx.lineTo(this.points82[0].x*SCALE, this.points82[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //10th Loop - 10
        ctx.beginPath();
        ctx.moveTo((this.points83[0].x*SCALE), (this.points83[0].y*SCALE));
        for (var i = 1; i < this.points83.length; i++) {
            ctx.lineTo((this.points83[i].x*SCALE), (this.points83[i].y*SCALE));
        }
        ctx.lineTo(this.points83[0].x*SCALE, this.points83[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points84[0].x*SCALE), (this.points84[0].y*SCALE));
        for (var i = 1; i < this.points84.length; i++) {
            ctx.lineTo((this.points84[i].x*SCALE), (this.points84[i].y*SCALE));
        }
        ctx.lineTo(this.points84[0].x*SCALE, this.points84[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points85[0].x*SCALE), (this.points85[0].y*SCALE));
        for (var i = 1; i < this.points85.length; i++) {
            ctx.lineTo((this.points85[i].x*SCALE), (this.points85[i].y*SCALE));
        }
        ctx.lineTo(this.points85[0].x*SCALE, this.points85[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points86[0].x*SCALE), (this.points86[0].y*SCALE));
        for (var i = 1; i < this.points86.length; i++) {
            ctx.lineTo((this.points86[i].x*SCALE), (this.points86[i].y*SCALE));
        }
        ctx.lineTo(this.points86[0].x*SCALE, this.points86[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points87[0].x*SCALE), (this.points87[0].y*SCALE));
        for (var i = 1; i < this.points87.length; i++) {
            ctx.lineTo((this.points87[i].x*SCALE), (this.points87[i].y*SCALE));
        }
        ctx.lineTo(this.points87[0].x*SCALE, this.points87[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points88[0].x*SCALE), (this.points88[0].y*SCALE));
        for (var i = 1; i < this.points88.length; i++) {
            ctx.lineTo((this.points88[i].x*SCALE), (this.points88[i].y*SCALE));
        }
        ctx.lineTo(this.points88[0].x*SCALE, this.points88[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points89[0].x*SCALE), (this.points89[0].y*SCALE));
        for (var i = 1; i < this.points89.length; i++) {
            ctx.lineTo((this.points89[i].x*SCALE), (this.points89[i].y*SCALE));
        }
        ctx.lineTo(this.points89[0].x*SCALE, this.points89[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points90[0].x*SCALE), (this.points90[0].y*SCALE));
        for (var i = 1; i < this.points90.length; i++) {
            ctx.lineTo((this.points90[i].x*SCALE), (this.points90[i].y*SCALE));
        }
        ctx.lineTo(this.points90[0].x*SCALE, this.points90[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 8
        ctx.beginPath();
        ctx.moveTo((this.points91[0].x*SCALE), (this.points91[0].y*SCALE));
        for (var i = 1; i < this.points91.length; i++) {
            ctx.lineTo((this.points91[i].x*SCALE), (this.points91[i].y*SCALE));
        }
        ctx.lineTo(this.points91[0].x*SCALE, this.points91[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 9
        ctx.beginPath();
        ctx.moveTo((this.points92[0].x*SCALE), (this.points92[0].y*SCALE));
        for (var i = 1; i < this.points92.length; i++) {
            ctx.lineTo((this.points92[i].x*SCALE), (this.points92[i].y*SCALE));
        }
        ctx.lineTo(this.points92[0].x*SCALE, this.points92[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 10
        ctx.beginPath();
        ctx.moveTo((this.points93[0].x*SCALE), (this.points93[0].y*SCALE));
        for (var i = 1; i < this.points93.length; i++) {
            ctx.lineTo((this.points93[i].x*SCALE), (this.points93[i].y*SCALE));
        }
        ctx.lineTo(this.points93[0].x*SCALE, this.points93[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //11th Loop - 11
        ctx.beginPath();
        ctx.moveTo((this.points94[0].x*SCALE), (this.points94[0].y*SCALE));
        for (var i = 1; i < this.points94.length; i++) {
            ctx.lineTo((this.points94[i].x*SCALE), (this.points94[i].y*SCALE));
        }
        ctx.lineTo(this.points94[0].x*SCALE, this.points94[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //12th Loop - 1
        ctx.beginPath();
        ctx.moveTo((this.points95[0].x*SCALE), (this.points95[0].y*SCALE));
        for (var i = 1; i < this.points95.length; i++) {
            ctx.lineTo((this.points95[i].x*SCALE), (this.points95[i].y*SCALE));
        }
        ctx.lineTo(this.points95[0].x*SCALE, this.points95[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //12th Loop - 2
        ctx.beginPath();
        ctx.moveTo((this.points96[0].x*SCALE), (this.points96[0].y*SCALE));
        for (var i = 1; i < this.points96.length; i++) {
            ctx.lineTo((this.points96[i].x*SCALE), (this.points96[i].y*SCALE));
        }
        ctx.lineTo(this.points96[0].x*SCALE, this.points96[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //12th Loop - 3
        ctx.beginPath();
        ctx.moveTo((this.points97[0].x*SCALE), (this.points97[0].y*SCALE));
        for (var i = 1; i < this.points97.length; i++) {
            ctx.lineTo((this.points97[i].x*SCALE), (this.points97[i].y*SCALE));
        }
        ctx.lineTo(this.points97[0].x*SCALE, this.points97[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //12th Loop - 4
        ctx.beginPath();
        ctx.moveTo((this.points98[0].x*SCALE), (this.points98[0].y*SCALE));
        for (var i = 1; i < this.points98.length; i++) {
            ctx.lineTo((this.points98[i].x*SCALE), (this.points98[i].y*SCALE));
        }
        ctx.lineTo(this.points98[0].x*SCALE, this.points98[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //12th Loop - 5
        ctx.beginPath();
        ctx.moveTo((this.points99[0].x*SCALE), (this.points99[0].y*SCALE));
        for (var i = 1; i < this.points99.length; i++) {
            ctx.lineTo((this.points99[i].x*SCALE), (this.points99[i].y*SCALE));
        }
        ctx.lineTo(this.points99[0].x*SCALE, this.points99[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //12th Loop - 6
        ctx.beginPath();
        ctx.moveTo((this.points100[0].x*SCALE), (this.points100[0].y*SCALE));
        for (var i = 1; i < this.points100.length; i++) {
            ctx.lineTo((this.points100[i].x*SCALE), (this.points100[i].y*SCALE));
        }
        ctx.lineTo(this.points100[0].x*SCALE, this.points100[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //12th Loop - 7
        ctx.beginPath();
        ctx.moveTo((this.points101[0].x*SCALE), (this.points101[0].y*SCALE));
        for (var i = 1; i < this.points101.length; i++) {
            ctx.lineTo((this.points101[i].x*SCALE), (this.points101[i].y*SCALE));
        }
        ctx.lineTo(this.points101[0].x*SCALE, this.points101[0].y*SCALE );
        // ctx.lineWidth = 8;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();


        // Hole 1 FIX
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.strokeStyle = "rgba(0, 0, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(mySpotX , mySpotY , 10 , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Hole 2 FIX
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.strokeStyle = "rgba(0, 0, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(mySpotX2 , mySpotY2 , 10 , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Hole 3 FIX
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.strokeStyle = "rgba(0, 0, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(mySpotX3 , mySpotY3 , 10 , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    };

    this.SetAngularVelocity = function (a) { // For Rotation
        this.Object.GetBody().SetAngularVelocity(a);
    };

    this.SetLinearVelocity = function (vec) { // For Rotation
        this.Object.GetBody().SetLinearVelocity(vec);
    };



   this.done = function() {
        //console.log("miX = "+ miX +"   miY = "+ miY + "  canvas.height = " +canvas.height + "   altoRect = " + altoRect + "   anchoRect = " + anchoRect);
        if (miY > canvas.height + altoRect || miX < -anchoRect || miX > canvas.width +anchoRect ) {
            world.DestroyBody(this.Box.GetBody());
            return true;
        }
        return false;
    };
}