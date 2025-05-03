window.SAVE = {
Version: 1.0,
X: 80,
Y: 40,    
StartX:8,
StartY:2,
scroll_configuration: 0 ,
Margin: 0 ,    
CameraX_frese : 0,		
CameraY_frese : 0,		
//0 = false 1 = true	
limit_left:0,
limit_rigth:80,
limit_up:40,
limit_down:0,
totalPrizes : 5,
backgroundMusic:["Music/smooth jazz.mp3"],
backgroundMusicTrack: 0 ,
/*
StyleBackground:'linear-gradient( rgb(32, 80, 248),rgb(32, 80, 248))',
backgroundImages:[["Backgrounds/Desert.png",512,512,0.5,0.5,0,0,true,false,0,0],
],
*/

StyleBackground:'linear-gradient(rgb(255, 255, 255), rgb(95, 255, 255))',
backgroundImages:[
//["Backgrounds/onlyClouds.png",1024,864,0.5,1,0,0,true,false,0,0],
//["Backgrounds/mountains3_noClouds.png",1024,864,0.3,1,0,0,true,false,0,0],
//["Backgrounds/backMountains.png",1024,864,0.1,1,0,0,true,false,0,0],
],

//["Backgrounds/Jungle.png",900,600,0.5,0.5,0,0,true,false,0,0],
//["Backgrounds/ocean.png",512,512,0.2,0.5,0,0,true,false,0,64],


/*
StyleBackground:'linear-gradient( rgb(8, 16, 88),rgb(8, 16, 88))',
backgroundImages:[["Backgrounds/sky.png",512,512,0.5,0.5,0,0,true,false,0,0],
],
*/
/*
StyleBackground:'linear-gradient( rgb(192, 192, 192),rgb(192, 192, 192))',
backgroundImages:[["Backgrounds/DarkForest.png",512,512,0.5,0.5,0,0,true,false,0,0],
],
*/
/*
StyleBackground:'linear-gradient( rgb(0, 0, 0),rgb(0, 0, 0))',
backgroundImages:[["Backgrounds/Cave.png",512,512,0.5,0.5,0,0,true,true,0,0],
],
*/
/*
StyleBackground:'linear-gradient(45deg, rgb(255, 255, 255), rgb(209, 0, 0))',
backgroundImages:[["Backgrounds/Fire.png",512,512,0.5,0.5,0,0,true,false,0,0],
],
*/


tiles:[
{
Name:"Tiles & Objects",
Images:["texturas/ASCII.png","texturas/GradientTexture.png","texturas/Sprites.png","texturas/decoraciones.png",
"texturas/Monkey.png","texturas/BigMonkey.png","texturas/Goomba.png","texturas/shy guy.png"],
SoundEffects:["SoundEfects/Checkpoint.wav","SoundEfects/Collect.wav","SoundEfects/Boing.mp3","SoundEfects/Boing.mp3","SoundEfects/Jump Attack.mp3"],
objects:[
// Print Blocks 
["Tile","rgba(0,0,0,0)",0,"00000000"],
["Tile","rgba(0,0,0,0)",1,"111110A0"],
["Tile","rgba(0,0,0,0)",1,"100021A0"],
["Tile","rgba(0,0,0,0)",1,"444432A0"],
["Tile","rgba(0,0,0,0)",1,"666633A0"],

// White Grass Blocks
["Tile","rgba(0,0,0,0)",1,"11111200"],
["Tile","rgba(0,0,0,0)",1,"11111210"],["Tile","rgba(0,0,0,0)",1,"11111240"],
["Tile","rgba(0,0,0,0)",1,"10002220"],["Tile","rgba(0,0,0,0)",1,"00000230"],["Tile","rgba(0,0,0,0)",1,"10002250"],
["Tile","rgba(0,0,0,0)",1,"10002350"],["Tile","rgba(0,0,0,0)",1,"10002450"],["Tile","rgba(0,0,0,0)",1,"10002550"],["Tile","rgba(0,0,0,0)",1,"10002650"],
["Tile","rgba(0,0,0,0)",1,"00000360"],["Tile","rgba(0,0,0,0)",1,"00000460"],["Tile","rgba(0,0,0,0)",1,"00000560"],


//Tree
["Tile","rgba(0,0,0,0)",1,"00000510"],
["Tile","rgba(0,0,0,0)",1,"00000530"],["Tile","rgba(0,0,0,0)",1,"00000630"],["Tile","rgba(0,0,0,0)",1,"00000730"],
["Tile","rgba(0,0,0,0)",1,"00000370"],
["Tile","rgba(0,0,0,0)",1,"00000470"],
["Tile","rgba(0,0,0,0)",1,"00000570"],
["Tile","rgba(0,0,0,0)",1,"00000740"],
//Brige
["Tile","rgba(0,0,0,0)",1,"00000440"],["Tile","rgba(0,0,0,0)",1,"00000540"],["Tile","rgba(0,0,0,0)",1,"00000640"],
["Tile","rgba(0,0,0,0)",1,"10002330"],
//Factory
["Tile","rgba(0,0,0,0)",1,"00000050"],
["Tile","rgba(0,0,0,0)",1,"11111620"],
["Tile","rgba(0,0,0,0)",1,"11111520"],
["Tile","rgba(0,0,0,0)",1,"00000030"],
["Tile","rgba(0,0,0,0)",1,"11111010"],["Tile","rgba(0,0,0,0)",1,"10002110"],
["Tile","rgba(0,0,0,0)",1,"00001020"],["Tile","rgba(0,0,0,0)",1,"00000120"],
["Tile","rgba(0,0,0,0)",1,"11111080"],

//CHINA TEMPLE
["Tile","rgba(0,0,0,0)",1,"11111000"],
["Tile","rgba(0,0,0,0)",1,"11111100"],["Tile","rgba(0,0,0,0)",1,"00000310"],
["Tile","rgba(0,0,0,0)",1,"00000300"],["Tile","rgba(0,0,0,0)",1,"00000400"],
["Tile","rgba(0,0,0,0)",1,"11111700"],["Tile","rgba(0,0,0,0)",1,"11111720"],
["Tile","rgba(0,0,0,0)",1,"11111600"],
["Tile","rgba(0,0,0,0)",1,"11111610"],["Tile","rgba(0,0,0,0)",1,"11111710"],

["Tile","rgba(0,0,0,0)",1,"11002160"],["Tile","rgba(0,0,0,0)",1,"00000150"],
["Tile","rgba(0,0,0,0)",1,"00000060"],["Tile","rgba(0,0,0,0)",1,"00000070"],
["Tile","rgba(0,0,0,0)",1,"00000170"],
["Tile","rgba(0,0,0,0)",1,"10002800"],["Tile","rgba(0,0,0,0)",1,"00000810"],["Tile","rgba(0,0,0,0)",1,"00000500"],
["Tile","rgba(0,0,0,0)",1,"00000180"],
["Tile","rgba(0,0,0,0)",1,"00000190"],



// MAYA Temple
["Tile","rgba(0,0,0,0)",1,"11111840"],
["Tile","rgba(0,0,0,0)",1,"11111940"],
["Tile","rgba(0,0,0,0)",1,"00000850"],
["Tile","rgba(0,0,0,0)",1,"11002950"],
["Tile","rgba(0,0,0,0)",1,"11111860"],
["Tile","rgba(0,0,0,0)",1,"00000960"],
// Donkey Kong
["Tile","rgba(0,0,0,0)",5,"00000920"],
["Tile","rgba(0,0,0,0)",1,"11002040"],
["Tile","rgba(0,0,0,0)",1,"00000140"],
// Others
["Tile","rgba(0,0,0,0)",1,"00000340"],["Tile","rgba(0,0,0,0)",1,"00000130"],
// Weird Textures
["Tile","rgba(0,0,0,0)",1,"11111B00"],["Tile","rgba(0,0,0,0)",1,"11111B10"],["Tile","rgba(0,0,0,0)",1,"11111B20"],
["Tile","rgba(0,0,0,0)",1,"00000C00"],["Tile","rgba(0,0,0,0)",1,"00000C10"],["Tile","rgba(0,0,0,0)",1,"00000C20"],
["Tile","rgba(0,0,0,0)",1,"11111B30"],
// Signals
["Tile","rgba(0,0,0,0)",1,"00000D00"],
["Tile","rgba(0,0,0,0)",1,"00000D10"],
["Tile","rgba(0,0,0,0)",1,"00000E00"],
["Tile","rgba(0,0,0,0)",1,"00000E10"],
// special Blocks
["Tile","rgba(0,0,0,0)",2,"40002808"],["Tile","rgba(0,0,0,0)",2,"50002908"],
["Tile","rgba(0,0,0,0)",1,"61111A00"],["Tile","rgba(0,0,0,0)",1,"11611A10"],["Tile","rgba(0,0,0,0)",1,"11161A20"],["Tile","rgba(0,0,0,0)",1,"16111A30"],["Tile","rgba(0,0,0,0)",1,"66661A40"],
["Tile","rgba(0,0,0,0)",2,"99993400",0],["Tile","rgba(0,0,0,0)",2,"88883500",0],
["Tile","rgba(0,0,0,0)",2,"55003606",1],
["Tile","rgba(0,0,0,0)",2,"31311200",2],
["Tile","rgba(0,0,0,0)",2,"13131210",3],
["Tile","rgba(0,0,0,0)",2,"33331040",4],
["Tile","rgba(0,0,0,0)",1,"10002430",5],
["Tile","#000",2,"15141050",6],["Tile","#000",2,"14151060",6],
["Tile","rgba(0,0,0,0)",1,"11111830",7],
["Tile","rgba(0,0,0,0)",1,"61111A50",7],
["Tile","rgba(0,0,0,0)",1,"11611A60",7],

["Object",128,128,"#","000000000",3,"10000", 0,0],["Object",128,128,"#","000000000",3,"11000", 0,0],
["Object",128,128,"#","000000000",3,"12000", 0,0],["Object",128,128,"#","000000000",3,"13000", 0,0],
["Object",128,256,"#","000000000",3,"10100", 0,0],
["Object",64,32,4,"660030300",4,"00100", 0,0],
["Object",64,32,5,"161120005",4,"01223", 0,4],
["Object",96,64,6,"161120005",5,"00045", 0,0],

["Object",42,42,0,"661132103",2,"22300", -1,8],["Object",84,84,1,"661132103",2,"21100", -1,8],
["Object",42,42,2,"661122103",2,"22300", -1,8],
["Object",32,32,7,"661132103",5,"2A200", -2,8],
["Object",32,32,"#","661132103",1,"08200", 0,8],
["Object",32,32,"#","111132103",1,"03200", 0,8],
["Object",32,64,8,"661110000",2,"03343", 0,0],
["Object",16,32,9,"661121163",2,"00823", 1,2],
["Object",64,32,"#","101122200",2,"02200", -2,0],
["Object",64,32,"#","101122200",2,"02200", 0,2],
["Object",32,32,10,"661120201",2,"01500", 0,0],
["Object",32,48,11,"160030000",6,"00023",-1,0],
["Object",32,32,12,"160030000",7,"00023",-1,0],
],
TileScripts:[
{
Action: function Action(Tile,p1,side) {
    Tile.action = true
	SoundEffectsCollection[0].play()
},
Loop: function Loop (Tile) {
	if(Tile.heg >= 64){
		Tile.action = false
	}else{
	Tile.heg += 2
	Tile.Yplus -= 2	
	}
},
},
{
Action: function Action(Tile,p1,side) {
	console.log("yes")
	SoundEffectsCollection[1].play()
	TransfromTile(Tile,Tile.BC,0,"00000000",0)
},
Loop: function Loop (Tile) {},
},
{
Action: function Action(Tile,p1,side) {
	if(side && p1.FristTouch){
		SoundEffectsCollection[2].play()
	Tile.XG = 96
	Tile.heg = 48
		if(p1.MoveY < 0){
	Tile.Yplus = -16
		}
	Tile.action = true
	}
},
Loop: function Loop (Tile) {
	if(Clock(Tile,5)){
	Tile.XG = 64
	Tile.heg = 32
	Tile.Yplus = 0
	Tile.action = false
	}
},
},
{
Action: function Action(Tile,p1,side) {
	if(side == false && p1.FristTouch){
		SoundEffectsCollection[3].play()
	Tile.YG = 64
	Tile.Wid = 48
		if(p1.BX < 0){
	Tile.Xplus = -16
		}
	Tile.action = true
	}
},
Loop: function Loop (Tile) {
	if(Clock(Tile,5)){
	Tile.YG = 32
	Tile.Wid = 32
	Tile.Xplus = 0
	Tile.action = false
	}
},
},
{
Action: function Action(Tile,p1,side) {
	if(p1.FristTouch){
	SoundEffectsCollection[3].play()
	myMiniSprites.push(new Mini_sprite(Tile.x-16,Tile.y-16,2,1,0,64,5,4,0,0,64,64))
	}
},
Loop: function Loop (Tile) {
	
	if(Clock(Tile,5)){
	Tile.YG = 128
	Tile.Wid = 32
	Tile.heg = 32
	Tile.Xplus = 0
	Tile.Yplus = 0	
	Tile.action = false
	}
},
},
{
Action: function Action(Tile,p1,side) {
	//myMiniSprites.push(new Mini_sprite(Tile.x-16,Tile.y-16,2,1,0,64,5,4,0,0,64,64))
	Tile.action = true
},
Loop: function Loop (Tile) {
	if(Clock(Tile,10)){
	myMiniSprites.push(new Mini_sprite(Tile.x+16,Tile.y,1,1,128,96,RandomNumber(1,16),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x,Tile.y,1,1,128+16,96,RandomNumber(1,16),5,0,0,16,16,0))
	Tile.action = false
	Tile.type = 0
	Tile.imgN = 0
	}
},
},
{
Action: function Action(Tile,p1,side) {
	if(side == false){
	if(Tile.intervald_time == undefined){Tile.intervald_time = 0}
	Tile.intervald_time += 2
	 if(Tile.intervald_time > 8){Tile.intervald_time = 8}
	Tile.action = true
	}
},
Loop: function Loop (Tile) {
    Tile.intervald_time --
	if(Tile.intervald_time < 1){
	Tile.action = false
	}
	Tile.BC = "rgb("+Tile.intervald_time*32+","+Tile.intervald_time*32+",0)"
	
},
},
{
Action: function Action(Tile,p1,side) {
	if( (!side  && p1.atack) || (side  && p1.atackY)){
		explosions32[0](Tile)
		Tile.type = 0
	    Tile.imgN = 0
	}else{
	Tile.action = true
	}
},
Loop: function Loop (Tile) {
	if(Clock(Tile,10)){
	myMiniSprites.push(new Mini_sprite(Tile.x,Tile.y,Tile.imgN,1,Tile.XG,Tile.YG,RandomNumber(1,8),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x+16,Tile.y,Tile.imgN,1,Tile.XG+16,Tile.YG,RandomNumber(1,8),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x,Tile.y+16,Tile.imgN,1,Tile.XG,Tile.YG+16,RandomNumber(1,8),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x+16,Tile.y+16,Tile.imgN,1,Tile.XG+16,Tile.YG+16,RandomNumber(1,8),5,0,0,16,16,0))
	Tile.action = false
	Tile.type = 0
	Tile.imgN = 0
	}
},
},
],
SpriteScripts:[
{
Action: function Action(Sprite) {
     Sprite.width = 32
	 Sprite.height = 32
	 Sprite.widthPrint = 42
	 Sprite.heightPrint = 42
	 Sprite.Xdiference_Print = -10
	 Sprite.Ydiference_Print = -10
	 Sprite.XG = 64
	 Sprite.YG = 96
	 Sprite.widthGrid = 84
	 Sprite.heightGrid = 84
	},
Loop: function Loop (sprite,player1) {
	PreProgramedMode (sprite,player1)
	sprite.angle += sprite.MoveX*2 
    },
RenderMode: function RenderMode (ctx,Sprite) {
	ctx.drawImage(
	image_collection[Sprite.img],
	64,
	96,
	84,
	84, 
	Sprite.xPrint - (10/scale_sprites),
	Sprite.yPrint - (10/scale_sprites),
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
 },
},
{
Action: function Action(Sprite) {
     Sprite.width = 64
	 Sprite.height = 64
	 Sprite.widthPrint = 84
	 Sprite.heightPrint = 84
	 Sprite.Xdiference_Print = -20
	 Sprite.Ydiference_Print = -20
	 Sprite.XG = 64
	 Sprite.YG = 96
	 Sprite.widthGrid = 84
	 Sprite.heightGrid = 84
	},
Loop: function Loop (sprite,player1) {
	PreProgramedMode (sprite,player1)
	sprite.angle += sprite.MoveX*2 
    },
RenderMode: function RenderMode (ctx,Sprite) {
	ctx.drawImage(
	image_collection[Sprite.img],
	64,
	96,
	84,
	84, 
	Sprite.xPrint - (20/scale_sprites),
	Sprite.yPrint - (20/scale_sprites),
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
 },
},
{
Action: function Action(Sprite) {
	 Sprite.Mode = 1
     Sprite.width = 32
	 Sprite.height = 16
	 Sprite.widthPrint = 42
	 Sprite.heightPrint = 42
	 Sprite.Xdiference_Print = -10
	 Sprite.Ydiference_Print = -10
	 Sprite.XG = 64
	 Sprite.YG = 96
	 Sprite.widthGrid = 84
	 Sprite.heightGrid = 84
	},
Loop: function Loop (sprite,player1) {
	if(Colision(sprite,player1,0,0,32,512)){
		
		sprite.State = 1
	}
	if(sprite.State == 1){
		(Gravedad(sprite,1))
	}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	ctx.drawImage(
	image_collection[Sprite.img],
	64,
	96,
	84,
	84, 
	Sprite.xPrint - (10/scale_sprites),
	Sprite.yPrint - (10/scale_sprites),
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
 },
},
{
Action: function Action(Sprite) {

	},
Loop: function Loop (sprite,player1) {
    PreProgramedMode (sprite,player1)
	if(sprite.Xplayertouch){
		explosions32[2](sprite)
		sprite.live = -1
	}
    },
RenderMode: function RenderMode (ctx,Sprite) {
if(Sprite.IN != undefined){
	if(Sprite.IN[0] == 1){
			ctx.globalCompositeOperation = 'destination-over';
			ctx.globalAlpha = 0.4
	}
	var XG = ( "0x"+ Sprite.IN[1]) * Sprite.width
	var YG = ( "0x"+ Sprite.IN[2]) * Sprite.height
	}else{var XG = 0 ;var YG = 0;}
	ctx.drawImage(
	image_collection[Sprite.img],
	XG,
	YG,
	Sprite.width,
	Sprite.height, 
	Sprite.xPrint,
	Sprite.yPrint,
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 1
},
},
{
Action: function Action(Sprite) {
	Sprite.Mode = 0
     Sprite.width = 32
	 Sprite.height = 32
	 Sprite.widthPrint = 64
	 Sprite.heightPrint = 32
	 Sprite.Xdiference_Print = -16
	 Sprite.XG = 0
	 Sprite.YG = 0
	 Sprite.widthGrid = 64
	 Sprite.heightGrid = 32
	 Sprite.LoopFotogram = 3
	 Sprite.FramesIntervalds = 2
	 Sprite.Xvelocity = -4
	 Sprite.sideX = false
	 Sprite.tick = 0
	},
Loop: function Loop (sprite,player1) {
    Gravedad_y_Brincar(sprite,1)
	if(sprite.jumped){
		sprite.XG = 0
		sprite.LoopFotogram = 3
	    sprite.FramesIntervalds = 2 
	}else{
		sprite.fotogram = 0
		sprite.XG = 198
		sprite.LoopFotogram = 0
	    sprite.FramesIntervalds = 0 
	}
	turn_if_obstacle_X(sprite)
	sprite.YG = 0
	if(!sprite.sideX){
		sprite.YG = 32
	if(Colision(sprite,player1,-48,0,32,48)){
		if(sprite.jumped){sprite.MoveY += -10
		sprite.jumped = false;
		}
	}
	}else{
		if(Colision(sprite,player1,32,0,32,48)){
		if(sprite.jumped){sprite.MoveY += -10
		sprite.jumped = false;
		}		
	}
	}
	sprite.MoveX = sprite.Xvelocity
    },
RenderMode: function RenderMode (ctx,Sprite) {
ctx.drawImage(
	image_collection[Sprite.img],
	0,
	32,
	64,
	32, 
	Sprite.xPrint - (16/scale_sprites),
	Sprite.yPrint ,
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
},
},
{
Action: function Action(Sprite) {
	Sprite.Mode = 0
     Sprite.width = 16
	 Sprite.height = 32
	 Sprite.widthPrint = 64
	 Sprite.heightPrint = 32
	 Sprite.Xdiference_Print = -16
	 Sprite.widthGrid = 64
	 Sprite.heightGrid = 32
	 Sprite.col = "161120005"
	},
Loop: function Loop (sprite,player1) {
	 PreProgramedMode(sprite,player1)
	 if(sprite.Yplayertouch){
		 sprite.moveY = 0
		 sprite.sideY = true
		 sprite.col = "001110003"
		 sprite.type = 1
		 sprite.XG = 0
		 sprite.YG = 128
		  player1.MoveY = -8;player1.BY = 0
	 }
},
RenderMode: function RenderMode (ctx,Sprite) {
ctx.drawImage(
	image_collection[Sprite.img],
	64,
	64,
	64,
	32, 
	(Sprite.xPrint) - (16/scale_sprites),
	(Sprite.yPrint)  - (8/scale_sprites),
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
},
},
{
Action: function Action(Sprite) {
	Sprite.Mode = 0
     Sprite.width = 64
	 Sprite.height = 64
	 Sprite.widthPrint = 96
	 Sprite.heightPrint = 64
	 Sprite.Xdiference_Print = -16
	 Sprite.widthGrid = 96
	 Sprite.heightGrid = 64
	},
Loop: function Loop (sprite,player1) {
	 //PreProgramedMode(sprite,player1)
	 if(sprite.Yplayertouch){
		 player1.MoveY = -8;player1.BY = 0
		 sprite.fotogram = 0
		 sprite.State = -1
		 sprite.intervald_time = 0
		 sprite.intervald_frame = 0
	 }
	 switch (sprite.State){
	 case -1 : 
		 if(Clock(sprite,60)){
			 sprite.fotogram = 0
			sprite.State = 0
		 }
		 sprite.YG = 128
		 sprite.LoopFotogram = 3
	break;
	case 0 :
		 sprite.YG = 0
		 sprite.LoopFotogram = 4
		 if(Clock(sprite,65)){
			 sprite.intervald_frame = 0
			 sprite.fotogram = 0
			 if(randomBoolean()){
				 sprite.State = 1
			 }
		 }
    break;
	case 1 :
		 sprite.YG = 64
		 sprite.LoopFotogram = 3
		 if(Clock(sprite,40)){
			 sprite.intervald_frame = 0
			 sprite.fotogram = 0
				 sprite.State = 0
		 }
		 if(sprite.intervald_time == 34){
		 mysprites.push(new  sprite_colision(sprite.x+80,sprite.y+32+8,32,32,8,"661132103",5,"29200", 2,8,false))
			 Scrips_collection[mysprites[mysprites.length -1].script].Action(mysprites[mysprites.length -1])
		 }
    break;
	 }
},
RenderMode: function RenderMode (ctx,Sprite) {
ctx.drawImage(
	image_collection[Sprite.img],
	0,
	0,
	96,
	64, 
	Sprite.xPrint - (16/scale_sprites),
	Sprite.yPrint ,
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
},
},
{
Action: function Action(Sprite) {
     Sprite.width = 24
	 Sprite.height = 24
	 Sprite.widthPrint = 32
	 Sprite.heightPrint = 32
	 Sprite.Xdiference_Print = -8
	 Sprite.Ydiference_Print = -8
	 Sprite.XG = 320
	 Sprite.YG = 64
	 Sprite.widthGrid = 32
	 Sprite.heightGrid = 32
	},
Loop: function Loop (sprite,player1) {
	PreProgramedMode (sprite,player1)
	sprite.angle += sprite.MoveX*3
    },
RenderMode: function RenderMode (ctx,Sprite) {
	ctx.drawImage(
	image_collection[Sprite.img],
	320,
	64,
	32,
	32, 
	Sprite.xPrint - (8/scale_sprites),
	Sprite.yPrint - (8/scale_sprites),
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
 },
},
{
Action: function Action(Sprite) {
	 Sprite.height = 32
	 Sprite.Ydiference_Print = -32
	 Sprite.heightPrint = 64
	 Sprite.heightGrid = 64
	 Sprite.XG  = 96
	 Sprite.YG = 192
	 Sprite.State = 0
	},
Loop: function Loop (Sprite,player1) {
	if(Sprite.State == 0){
	Sprite.heightPrint -= 2
	Sprite.height -= 1
	Sprite.y += 1
	Sprite.Ydiference_Print += 1
	if(Sprite.height < 0){
		Sprite.y -= 1
		Sprite.Ydiference_Print = 0
		Sprite.heightPrint = 0
		Sprite.height = 0
		if(Clock(Sprite,60)){
		Sprite.State = 1
		}
	}
	}else{
	Sprite.Ydiference_Print -= 1
	Sprite.y -= 1
	Sprite.heightPrint += 2
	Sprite.height += 1
	if(Sprite.height > 32){
		Sprite.y += 1
		Sprite.Ydiference_Print = -32
		Sprite.heightPrint = 64
		Sprite.height = 32
		if(Clock(Sprite,60)){
		Sprite.State = 0
		}
	}	
	}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	ctx.drawImage(
	image_collection[Sprite.img],
	96,
	192,
	32,
	64, 
	Sprite.xPrint ,
	Sprite.yPrint - (32/scale_sprites),
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
 },
},
{
Action: function Action(Sprite) {

	},
Loop: function Loop (Sprite,player1) {
	PreProgramedMode(Sprite,player1)
	Sprite.YG = 256
	if(!Sprite.sideX){
		Sprite.YG = 288
	}
	if(Sprite.MoveX	== 0 || Sprite.Xtouch ){
		Sprite.XG = 0
		Sprite.LoopFotogram = 2
		Sprite.FramesIntervalds = 3
	}else{
		Sprite.XG = 32
		Sprite.LoopFotogram = 4
		Sprite.FramesIntervalds = 2
	}
    },
RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) {
Sprite.Xvelocity = 0
Sprite.Yvelocity = 0
Sprite.type = 3
Sprite.width = 18
Sprite.height = 22
Sprite.Xdiference_Print = -8
Sprite.Ydiference_Print = -10
Sprite.live = 0
	},
Loop: function Loop (Sprite,player) {
	if(tick){
		Sprite.YG = 128
	}else{
		Sprite.YG = 160
	}
	if(Ax16 == 15){
if(Sprite.x +(Sprite.width /2) > (player.x + player.widthHalf)){
	Sprite.Xvelocity --
	Sprite.Mode = 0
}else{
	Sprite.Xvelocity ++
	Sprite.Mode = 3
}
if(Sprite.y +(Sprite.height /2) > (player.y + player.heightHalf)){
	Sprite.Yvelocity --
}else{
	Sprite.Yvelocity ++
}

	}
if(Sprite.Ytouch){
	Sprite.Yvelocity = Sprite.Yvelocity *-1
}
if(Sprite.Xtouch){
	Sprite.Xvelocity = Sprite.Xvelocity *-1
}
Sprite.MoveX = Sprite.Xvelocity
Sprite.MoveY = Sprite.Yvelocity
if(Sprite.live < 0){
	myMiniSprites.push(new Mini_sprite(Sprite.x,Sprite.y,Sprite.imgN,1,32,192,0,1,Sprite.Xvelocity,-10,32,32,0))
		Kills ++
	}
},
RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},
	{
	Action: function Action(Sprite) {
		 Sprite.height = Math.round(0.66 * Sprite.heightPrint)
		 Sprite.heightGrid = 48
		 Sprite.widthGrid = 32
		 Sprite.XG = ( "0x"+ Sprite.RenderMode[1]) * 32
		 Sprite.YG = ( "0x"+ Sprite.RenderMode[2]) * 48
		 let num = Math.round(0.25 * Sprite.widthPrint)
		 Sprite.width = Sprite.widthPrint - num
		 Sprite.Xdiference_Print = num * -0.5
		},
	Loop: function Loop (Sprite,p1) {
		Sprite.MoveX = Sprite.Xvelocity
		turn_if_obstacle_X(Sprite)
		if(Sprite.sideX){
			Sprite.Mode = 3
		}else{
			Sprite.Mode = 0
		}
		if(Sprite.BulletTouch){
			Sprite.XG = 64
			Sprite.FramesIntervalds = 1
			Sprite.LoopFotogram = 0
			SoundEffectsCollection[4].play()
			Sprite.live = 0
			Sprite.Xvelocity = 0
			Sprite.Up = 0
			Sprite.Left = 0
		}	
		Gravedad(Sprite,1)
		if(Sprite.live < 1 ){
			if(Clock(Sprite,32)){
				Sprite.x = -512
				Sprite.XG = 256
				Sprite.YG = 0
				Sprite.live = -1
			}
		}else{
		if(Sprite.Yplayertouch){
			Sprite.XG = 64
			Sprite.FramesIntervalds = 1
			Sprite.LoopFotogram = 0
			p1.MoveY = -8;p1.BY = 0
			SoundEffectsCollection[4].play()
			Sprite.live = 0
			Sprite.Xvelocity = 0
			Sprite.Up = 0
			Sprite.Left = 0
		}	
		}
},
RenderMode: function RenderMode (ctx,Sprite) {
     if(Sprite.IN != undefined){
	if(Sprite.IN[0] == 1){
			ctx.globalCompositeOperation = 'destination-over';
			ctx.globalAlpha = 0.4
	}
	var XG = ( "0x"+ Sprite.IN[1]) * 32
	var YG = ( "0x"+ Sprite.IN[2]) * 48
	}else{var XG = 0 ;var YG = 0;}
	ctx.drawImage(
	image_collection[Sprite.img],
	XG,
	YG,
	32,
	48, 
	Sprite.xPrint,
	Sprite.yPrint,
	Sprite.widthPrint,
	Sprite.heightPrint,
	)
	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 1
 },
	},
{
Action: function Action(Sprite) {
	let num = Math.round(0.125 * Sprite.heightPrint)
	 Sprite.height = Sprite.heightPrint - num
	 Sprite.Ydiference_Print = num *-1
	  num = Math.round(0.25 * Sprite.widthPrint)
	 Sprite.width = Sprite.widthPrint - num
	 Sprite.Xdiference_Print = num * -0.5
	},
Loop: function Loop (Sprite,p1) {
	Sprite.MoveX = Sprite.Xvelocity
	turn_if_obstacle_X(Sprite)
	if(Sprite.sideX){
		Sprite.Mode = 3
	}else{
		Sprite.Mode = 0
	}
	Gravedad(Sprite,1)
	if(Sprite.live < 1 ){
		if(Clock(Sprite,32)){
			Sprite.x = -512
			Sprite.XG = 256
			Sprite.YG = 0
		}
}
},
RenderMode: function RenderMode (ctx,Sprite) {
        PreRenderMode(ctx,Sprite)
 },
},
]
}
],

LevelTiles:"GetContext",
Inicial_Script:function InicialCharge(){
	//createBlocksLinear(100,true,3,8,3,16,128+64,128+64,80,0,1,"#FFF","10002220",0,1,0,0)
	//createBlocksLinear(100,true,3,8,3,8,128+64,128+64,80,0,1,"#FFF","11111200",0,1,0,0)
	
	//shoterr
	//createSprites_No_in_solid(1000,SAVE.X-16,SAVE.Y,16,0,32,32,0,"661110022",1,"09100",2,2)
	
	//Plataformer
	/*
	createSprites_No_in_solid(250,SAVE.X,SAVE.Y,16,0,32,32,0,"661122103",1,"09100", -1,8)
	createSprites_No_in_solid(250,SAVE.X,SAVE.Y,16,0,32,32,0,"661122200",1,"09000", -1,1)
	createSprites_No_in_solid(250,SAVE.X,SAVE.Y,16,0,32,32,0,"661122503",1,"09200", -2,1)
	createSprites_No_in_solid(250,SAVE.X,SAVE.Y,16,0,32,32,0,"661120201",1,"09300", 0,-8)
    
	createSprites(10,SAVE.X-16,1,16,SAVE.Y,32,32,4,"080020011",2,"06064 ",4,2 );
	*/
	//createSprites_No_in_solid(100,SAVE.X,32,80,0,32,32,0,"661122603",1,"09200", -2,12)
return true},
LevelCol: 
[
{"X":0,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":7,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":7,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":7,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":11,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":16,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":17,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":18,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":32,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":34,"Y":7,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":37,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":39,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":38,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":37,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":11,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":22,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":22,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":22,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":16,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":17,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":18,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":37,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":38,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":39,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":37,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":25,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":25,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":28,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":28,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":29,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":26,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":28,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":30,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":26,"Y":26,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":27,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":28,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":25,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":26,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":27,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":28,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":29,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":30,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":29,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":28,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":27,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":26,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":25,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":41,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":41,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":26,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":49,"Y":4,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":4,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":4,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":1,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":0,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":5,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":5,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":1,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":0,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":1,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":2,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":2,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":0,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":1,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":0,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":2,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":1,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":2,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":1,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":0,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":0,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":0,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":1,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":1,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":2,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":3,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":3,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":5,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":6,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":5,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":6,"col":"11111710","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":2,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":2,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":4,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":6,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":4,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":6,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":7,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":7,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":7,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":7,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":7,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":7,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":7,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":5,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":1,"col":"11111600","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1}

],
Levelsprites: [

]
}

