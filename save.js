window.SAVE = {
Version: 1.0,
X: 160,
Y: 60,    
StartX:8,
StartY:2,
scroll_configuration: 0 ,
Margin: 0 ,    
CameraX_frese : 0,		
CameraY_frese : 0,		
//0 = false 1 = true	
limit_left:0,
limit_rigth:160,
limit_up:60,
limit_down:0,
totalPrizes : 5,
//backgroundMusic:["Music/smooth jazz.mp3"],
backgroundMusic:["Music/Joakim Karud - Clouds.mp3"],
backgroundMusicTrack: 0 ,

StyleBackground:'linear-gradient(rgb(255, 255, 255), rgb(95, 255, 255))',
backgroundImages:[
["Backgrounds/FlorClouds.png",2042,128,0.6,0,0,0,true,false,0,0],
//["Backgrounds/Temple.png",2042,448,0.5,0,0,0,true,false,0,0],
["Backgrounds/Cloud.png",2048,448,0.4,0,0,0,true,false,0,0],
],
LevelEfects:[],

tiles:[
{
Name:"Tiles & Objects",
Images:["texturas/Texturas ASCII_DIY.png","texturas/GradientTexture.png","texturas/Sprites.png","texturas/decoraciones.png",
"texturas/Monkey.png","texturas/BigMonkey.png","texturas/Goomba.png","texturas/shy guy.png","texturas/3x3 Textures.png",
"texturas/terrain.png","texturas/terrainShadow.png","texturas/Explosion.png","texturas/Grinch.png"],
SoundEffects:["SoundEfects/Checkpoint.wav","SoundEfects/Collect.wav","SoundEfects/Boing.mp3","SoundEfects/Boing.mp3","SoundEfects/Jump Attack.mp3",
"SoundEfects/bubble-pop.mp3","SoundEfects/Destroy.wav","SoundEfects/Break.wav","SoundEfects/Fuse.ogg","SoundEfects/ExplosionTNT.ogg"
,"SoundEfects/Alert.wav","SoundEfects/bomb.mp3"],
objects:[
// Print Blocks 
["Tile","rgba(0,0,0,0)",0,"00000000"],
["Tile","rgba(0,0,0,0)",1,"111110A0"],
["Tile","rgba(0,0,0,0)",1,"100021A0"],
["Tile","rgba(0,0,0,0)",1,"44443290"],
["Tile","rgba(0,0,0,0)",1,"444432A0"],
["Tile","rgba(0,0,0,0)",1,"66663390"],
["Tile","rgba(0,0,0,0)",1,"666633A0"],

// White Grass Blocks
["Tile","rgba(0,0,0,0)",1,"11111200"],
["Tile","rgba(0,0,0,0)",1,"11111210"],["Tile","rgba(0,0,0,0)",1,"11111240"],
["Tile","rgba(0,0,0,0)",1,"10002220"],["Tile","rgba(0,0,0,0)",1,"00000230"],["Tile","rgba(0,0,0,0)",1,"10002250"],
["Tile","rgba(0,0,0,0)",1,"10002350"],["Tile","rgba(0,0,0,0)",1,"10002450"],["Tile","rgba(0,0,0,0)",1,"10002550"],["Tile","rgba(0,0,0,0)",1,"10002650"],
["Tile","rgba(0,0,0,0)",1,"00000360"],["Tile","rgba(0,0,0,0)",1,"00000460"],["Tile","rgba(0,0,0,0)",1,"00000560"],
["Tile","rgba(0,0,0,0)",1,"11111890"],
["Tile","rgba(0,0,0,0)",1,"100027B0"],
["Tile","rgba(0,0,0,0)",1,"A11118A0"],
["Tile","rgba(0,0,0,0)",1,"A00028B0"],
["Tile","rgba(0,0,0,0)",1,"12121790"],
["Tile","rgba(0,0,0,0)",1,"A21217A0"],

//Tree
["Tile","rgba(0,0,0,0)",1,"00000510"],
["Tile","rgba(0,0,0,0)",1,"00000530"],["Tile","rgba(0,0,0,0)",1,"00000630"],["Tile","rgba(0,0,0,0)",1,"00000730"],
["Tile","rgba(0,0,0,0)",1,"00000370"],
["Tile","rgba(0,0,0,0)",1,"00000470"],
["Tile","rgba(0,0,0,0)",1,"00000570"],
["Tile","rgba(0,0,0,0)",1,"00000670"],
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

// Water Temple
["Tile","rgba(0,0,0,0)",1,"11111580"],
["Tile","rgba(0,0,0,0)",1,"11111590"],
["Tile","rgba(0,0,0,0)",1,"11111680"],
["Tile","rgba(0,0,0,0)",1,"11111690"],
["Tile","rgba(0,0,0,0)",1,"11111780"],

["Tile","rgba(0,0,0,0)",1,"100025A0"],
["Tile","rgba(0,0,0,0)",1,"000005B0"],
["Tile","rgba(0,0,0,0)",1,"100026A0"],
["Tile","rgba(0,0,0,0)",1,"000006B0"],
["Tile","rgba(0,0,0,0)",1,"000000F8"],
["Tile","rgba(0,0,0,0)",1,"000002F8"],

// MAYA Temple
["Tile","rgba(0,0,0,0)",1,"11111840"],
["Tile","rgba(0,0,0,0)",1,"11111940"],
["Tile","rgba(0,0,0,0)",1,"00000850"],
["Tile","rgba(0,0,0,0)",1,"11002950"],
["Tile","rgba(0,0,0,0)",1,"11111860"],
["Tile","rgba(0,0,0,0)",1,"00000960"],

["Tile","rgba(0,0,0,0)",1,"11111870"],
["Tile","rgba(0,0,0,0)",1,"44443880"],
// Donkey Kong
["Tile","rgba(0,0,0,0)",5,"00000920"],
["Tile","rgba(0,0,0,0)",1,"11002040"],
["Tile","rgba(0,0,0,0)",1,"00000140"],
// Roma Temple
["Tile","rgba(0,0,0,0)",1,"00000970"],
["Tile","rgba(0,0,0,0)",1,"00000980"],
["Tile","rgba(0,0,0,0)",1,"00000990"],

["Tile","rgba(0,0,0,0)",1,"11111A70"],
["Tile","rgba(0,0,0,0)",1,"11111B70"],
["Tile","rgba(0,0,0,0)",1,"00000A80"],
["Tile","rgba(0,0,0,0)",1,"11002B80"],
["Tile","rgba(0,0,0,0)",1,"11111A90"],
["Tile","rgba(0,0,0,0)",1,"00000B90"],

// Others
["Tile","rgba(0,0,0,0)",1,"00000340"],["Tile","rgba(0,0,0,0)",1,"00000130"],
// Weird Textures
["Tile","rgba(0,0,0,0)",1,"11111B00"],["Tile","rgba(0,0,0,0)",1,"11111B10"],["Tile","rgba(0,0,0,0)",1,"11111B20"],
["Tile","rgba(0,0,0,0)",1,"00000C00"],["Tile","rgba(0,0,0,0)",1,"00000C10"],["Tile","rgba(0,0,0,0)",1,"00000C20"],
["Tile","rgba(0,0,0,0)",1,"11111B30"],
["Tile","rgba(0,0,0,0)",1,"11111C30"],

["Tile","rgba(0,0,0,0)",1,"66661B40"],
["Tile","rgba(0,0,0,0)",1,"66661D40"],
["Tile","rgba(0,0,0,0)",1,"66661B60"],
["Tile","rgba(0,0,0,0)",1,"66661D60"],

["Tile","rgba(0,0,0,0)",1,"66661C40"],
["Tile","rgba(0,0,0,0)",1,"66661B50"],


// Signals
["Tile","rgba(0,0,0,0)",1,"00000D00"],
["Tile","rgba(0,0,0,0)",1,"00000D10"],
["Tile","rgba(0,0,0,0)",1,"00000E00"],
["Tile","rgba(0,0,0,0)",1,"00000E10"],
// Super Mario 
["Tile","rgba(0,0,0,0)",1,"11111280"],
["Tile","rgba(0,0,0,0)",1,"11111380"],
["Tile","rgba(0,0,0,0)",1,"11111480"],
// special Blocks
["Tile","rgba(0,0,0,0)",2,"40002808"],["Tile","rgba(0,0,0,0)",2,"50002908"],

["Tile","rgba(0,0,0,0)",1,"61111A00"],["Tile","rgba(0,0,0,0)",1,"11611A10"],["Tile","rgba(0,0,0,0)",1,"11161A20"],["Tile","rgba(0,0,0,0)",1,"16111A30"],["Tile","rgba(0,0,0,0)",1,"66661A40"],

["Tile","rgba(0,0,0,0)",2,"99993400",0],//Chekpoint
["Tile","rgba(0,0,0,0)",2,"88883500",0],//Finishi

["Tile","rgba(0,0,0,0)",2,"55003606",1], // Star
["Tile","rgba(0,0,0,0)",2,"31311200",2],
["Tile","rgba(0,0,0,0)",2,"13131210",3],
["Tile","rgba(0,0,0,0)",2,"33331040",4],
["Tile","rgba(0,0,0,0)",1,"10002430",5],
["Tile","#000",2,"15141050",6],["Tile","#000",2,"14151060",6],
["Tile","rgba(0,0,0,0)",1,"11111830",7],
["Tile","rgba(0,0,0,0)",1,"61111A50",7],
["Tile","rgba(0,0,0,0)",1,"11611A60",7],
["Tile","rgba(0,0,0,0)",1,"11113F00",11],
["Tile","rgba(0,0,0,0)",1,"221133F0"],
["Tile","rgba(0,0,0,0)",1,"331134F0"],
//["Tile","rgba(0,0,0,0)",1,"11111D20",8],
//["Tile","rgba(0,0,0,0)",1,"11112D20",8],
//["Tile","rgba(0,0,0,0)",1,"11111420",9],


["Object",128,128,"#","000000000",3,"10000", 0,0],["Object",128,128,"#","000000000",3,"11000", 0,0],
["Object",128,128,"#","000000000",3,"12000", 0,0],["Object",128,128,"#","000000000",3,"13000", 0,0],
["Object",128,128,"#","000000000",3,"10100", 0,0],
["Object",128,256,"#","000000000",3,"10100", 0,0],

["Object",64,32,4,"660030300",4,"00100", 0,0], // Monkey
["Object",64,32,5,"161120005",4,"01223", 0,4], // scaler Monkey
["Object",96,64,6,"161120005",5,"00045", 0,0], // Donkey Kong

["Object",42,42,0,"661132103",2,"22300", -1,8], // Spike Ball
["Object",84,84,1,"661132103",2,"21100", -1,8], // Big Spike Ball
["Object",42,42,2,"661132103",2,"22300", -1,8], // Fall Spike Ball
["Object",42,42,14,"661132103",2,"22300", -1,8], // Spike Ball 2
["Object",32,32,7,"661132103",5,"2A200", -2,8], // Barrel
["Object",32,32,7,"661132103",5,"2A200", 2,8],// Barrel
["Object",32,32,"#","661132103",1,"08200", 0,8], // fire
["Object",32,32,"#","111132103",1,"03200", 0,8], // Box
["Object",32,64,8,"661110000",2,"03343", 0,0], // Fire
["Object",16,32,9,"661121163",2,"00823", 1,2], // Fire Whit Legs
["Object",64,32,"#","101122200",2,"02200", -2,0],// Left_Right_Platafrom
["Object",64,32,"#","101122200",2,"02200", 0,2], // Up_Down_Platafrom
["Object",32,32,10,"661120201",2,"01500", 0,0], // Fly
["Object",32,48,11,"160030000",6,"00023",-1,0], // Gomba
["Object",32,48,11,"160030000",6,"30023",1,0],  // Gomba
["Object",32,48,11,"160030000",6,"30223",-1,0],  // Toy
["Object",32,48,11,"160030000",6,"30223",1,0],  // Toy
["Object",32,32,12,"160030000",7,"00023",-1,0], // Shyguy
["Object",32,32,12,"160030000",7,"30023",1,0],  // Shyguy
["Object",64,64,12,"160030000",7,"00323",-2,0],	// Topo
["Object",64,64,12,"160030000",7,"30323",2,0],  // Topo
["Object",32,32,13,"6600100000",2,"23800", 2,2],// Eye
["Object",32,32,15,"160010000",2,"03900",-2,0], // BulletBill
["Object",32,32,15,"160010000",2,"33900",2,0],  // BulletBill
["Object",128,128,15,"160010000",2,"03000",-2,0], // BigBulletBill
["Object",128,128,15,"160010000",2,"33000",2,0],  // BigBulletBill
["Object",32,32,16,"160010000",2,"25800",2,2], // redBulletBill
["Object",128,128,16,"160010000",2,"23100",2,2],  //redBigBulletBill
["Object",32,32,17,"110020011",2,"67062",4,1], // STAR
["Object",48,64,18,"660030000",2,"00524",0,0], // Zombie
["Object",32,32,"#","660022001",2,"06924",-2,2], // FISH
["Object",32,32,"#","660022001",2,"36924",2,2], // FISH
["Object",32,32,19,"660030000",2,"08828",0,0], // SLEEP FISH
["Object",64,64,20,"160030000",2,"02500",0,0], // TWOMP
["Object",52,52,21,"660010011",2,"05741",1,5], // ESQUELETON
["Object",52,52,21,"660010011",2,"05741",5,1], // ESQUELETON
["Object",52,52,21,"660010000",2,"05741",0,0], // ESQUELETON
["Object",36,48,22,"160032103",2,"00944",2,2],// Angel
["Object",32,32,"#","660010088",2,"08A00",3,3], // Spectre
["Object",32,32,26,"000000000",2,"00024", 4,0], // Spectre Spawn
["Object",32,32,23,"161122103",1,"09100", -1,8], // Globos
["Object",32,32,23,"161122200",1,"09000", -1,1],
["Object",32,32,23,"161122503",1,"09200", -2,1],
["Object",32,32,23,"161120201",1,"09300", 0,-4],
["Object",32,32,23,"161120022",1,"09300", 2,2],
["Object",96,96,24,"661110000",2,"22500", 0,0], // Cierra Circular
["Object",96,96,24,"661110001",2,"22500", 0,-4],
["Object",96,96,24,"661110001",2,"22500", 0,4],
["Object",96,96,24,"661110010",2,"22500", 4,0],
["Object",32,40,27,"111132103",2,"0A000", 0,0],
["Object",32,32,28,"000032103",2,"0A224", 0,0],
["Object",32,32,29,"160032103",2,"20700", 0,0],
["Object",32,32,30,"000000000",2,"0A500", 1,0], // Present
["Object",32,32,30,"000000000",2,"3A500", -1,0], // Present
//["Object",92,112,31,"660030000",12,"301D2", -2,0],  Grinch
//["Object",32,32,25,"000030000",9,"08028", 0,0],


// Minecraft
/*
["Tile","rgba(0,0,0,0)",9,"11111200"],
["Tile","rgba(0,0,0,0)",10,"00000200"],
["Tile","rgba(0,0,0,0)",9,"11111300"],
["Tile","rgba(0,0,0,0)",10,"10002300"], //grass
["Tile","rgba(0,0,0,0)",9,"11111440"], 
["Tile","rgba(0,0,0,0)",10,"10002440"], // Grass Ice
["Tile","rgba(0,0,0,0)",9,"11111500"],
["Tile","rgba(0,0,0,0)",10,"00000500"], // Piedra Sincelada
["Tile","rgba(0,0,0,0)",9,"11111700"],
["Tile","rgba(0,0,0,0)",10,"00000700"], // Ladrillo 
["Tile","rgba(0,0,0,0)",9,"11111010"],
["Tile","rgba(0,0,0,0)",10,"00000010"], // Piedra
["Tile","rgba(0,0,0,0)",9,"11111420"],
["Tile","rgba(0,0,0,0)",10,"00000420"], // Piedra Musgosa
["Tile","rgba(0,0,0,0)",9,"11111210"],
["Tile","rgba(0,0,0,0)",10,"00000210"], // Arena
["Tile","rgba(0,0,0,0)",9,"11111310"],
["Tile","rgba(0,0,0,0)",10,"00000310"], // Grava
["Tile","rgba(0,0,0,0)",9,"11111840"],
["Tile","rgba(0,0,0,0)",10,"00000840"], // Arena de Ladrillo
["Tile","rgba(0,0,0,0)",9,"11111400"],
["Tile","rgba(0,0,0,0)",10,"00000400"], // Madera
["Tile","rgba(0,0,0,0)",9,"11111530"],
["Tile","rgba(0,0,0,0)",10,"00000530"], // hojas
["Tile","rgba(0,0,0,0)",9,"11111430"],
["Tile","rgba(0,0,0,0)",10,"00000430"], // hojas
["Tile","rgba(0,0,0,0)",9,"11111410"],
["Tile","rgba(0,0,0,0)",10,"00000410"], // tronco
["Tile","rgba(0,0,0,0)",9,"11111510"],
["Tile","rgba(0,0,0,0)",10,"00000510"], // tronco
["Tile","rgba(0,0,0,0)",9,"11111580"],
["Tile","rgba(0,0,0,0)",10,"00000580"], // hojas
["Tile","rgba(0,0,0,0)",9,"11111480"],
["Tile","rgba(0,0,0,0)",10,"00000480"], // hojas
["Tile","rgba(0,0,0,0)",9,"11111470"],
["Tile","rgba(0,0,0,0)",10,"00000470"], // tronco
["Tile","rgba(0,0,0,0)",9,"11111570"],
["Tile","rgba(0,0,0,0)",10,"00000570"], // tronco
["Tile","rgba(0,0,0,0)",9,"11111610"],
["Tile","rgba(0,0,0,0)",10,"00000610"], // Hierro Bloque
["Tile","rgba(0,0,0,0)",9,"11111710"],
["Tile","rgba(0,0,0,0)",10,"00000710"], // Oro Bloque
["Tile","rgba(0,0,0,0)",9,"11111810"],
["Tile","rgba(0,0,0,0)",10,"00000810"], // Diamante Bloque
["Tile","rgba(0,0,0,0)",9,"11111100"],
["Tile","rgba(0,0,0,0)",10,"00000100"], // Roca
["Tile","rgba(0,0,0,0)",9,"11111220"], 
["Tile","rgba(0,0,0,0)",10,"00000220"],//Carbon
["Tile","rgba(0,0,0,0)",9,"11111120"],
["Tile","rgba(0,0,0,0)",10,"00000120"], // Hierro
["Tile","rgba(0,0,0,0)",9,"11111020"],
["Tile","rgba(0,0,0,0)",10,"00000020"], // oro
["Tile","rgba(0,0,0,0)",9,"11111330"],
["Tile","rgba(0,0,0,0)",10,"00000330"], // redstone
["Tile","rgba(0,0,0,0)",9,"11111230"],
["Tile","rgba(0,0,0,0)",10,"00000230"], // Diamante
["Tile","rgba(0,0,0,0)",9,"11111240"],
["Tile","rgba(0,0,0,0)",10,"00000240"],  // Nieve
["Tile","rgba(0,0,0,0)",9,"A2121340"],
["Tile","rgba(0,0,0,0)",10,"00000340"], // Hielo
["Tile","rgba(0,0,0,0)",9,"11111320"],
["Tile","rgba(0,0,0,0)",10,"00000320"], // Libreria
["Tile","rgba(0,0,0,0)",9,"66661640"],
["Tile","rgba(0,0,0,0)",10,"00000640"], // Cactus
["Tile","rgba(0,0,0,0)",9 ,"11111030"],
["Tile","rgba(0,0,0,0)",10,"00000030"], // Esponja
["Tile","rgba(0,0,0,0)",9 ,"11111130"],
["Tile","rgba(0,0,0,0)",10,"00000130"], // Vidrio
["Tile","rgba(0,0,0,0)",9,"11111760"],
["Tile","rgba(0,0,0,0)",10,"00000760"], // Nether
["Tile","rgba(0,0,0,0)",9,"11111860"],
["Tile","rgba(0,0,0,0)",10,"00000860"], // Arena de Almas
["Tile","rgba(0,0,0,0)",9,"11111960"],
["Tile","rgba(0,0,0,0)",10,"00000960"], // Iluminador
["Tile","rgba(0,0,0,0)",9,"11111520"],
["Tile","rgba(0,0,0,0)",10,"00000520"], // Obsidiana
["Tile","rgba(0,0,0,0)",9,"11111110"],
["Tile","rgba(0,0,0,0)",10,"00000110"], // Bedrock
["Tile","rgba(0,0,0,0)",9,"11111C30"],
["Tile","rgba(0,0,0,0)",10,"00000C30"], // Mesa de Crafteo
["Tile","rgba(0,0,0,0)",9,"11111C20"],
["Tile","rgba(0,0,0,0)",10,"00000C20"], // Horno
["Tile","rgba(0,0,0,0)",9,"11111D30"],
["Tile","rgba(0,0,0,0)",10,"00000D30"], // Horno Encendido
["Tile","rgba(0,0,0,0)",9,"11111B10"],
["Tile","rgba(0,0,0,0)",10,"00000B10"], // Cofre
["Tile","rgba(0,0,0,0)",9,"00000680"],
["Tile","rgba(0,0,0,0)",9,"00000780"],
["Tile","rgba(0,0,0,0)",10,"00000680"], // cama
["Tile","rgba(0,0,0,0)",10,"00000780"], // cama
["Tile","rgba(0,0,0,0)",9,"11111800",10],
["Tile","rgba(0,0,0,0)",10,"00000800"], // TNT
["Tile","rgba(0,0,0,0)",9,"44443DC0"], // Agua
["Tile","rgba(0,0,0,0)",10,"00000DC0"], 
["Tile","rgba(0,0,0,0)",9,"66663DE0"], // Lava
["Tile","rgba(0,0,0,0)",10,"00000DE0"], 
["Tile","rgba(0,0,0,0)",9,"00000C80"], // Cerca
["Tile","rgba(0,0,0,0)",9,"00000D80"], 
["Tile","rgba(0,0,0,0)",9,"00000E80"], 
["Tile","rgba(0,0,0,0)",9,"00000F80"], 
["Tile","rgba(0,0,0,0)",10,"00000C80"], // Cerca
["Tile","rgba(0,0,0,0)",10,"00000D80"], 
["Tile","rgba(0,0,0,0)",10,"00000E80"], 
["Tile","rgba(0,0,0,0)",10,"00000F80"], 
["Tile","rgba(0,0,0,0)",9,"00000C00"],
["Tile","rgba(0,0,0,0)",10,"00000C00"], // rosa
["Tile","rgba(0,0,0,0)",9,"00000D00"],
["Tile","rgba(0,0,0,0)",10,"00000D00"], // flor amarilla
["Tile","rgba(0,0,0,0)",9,"00000C10"],
["Tile","rgba(0,0,0,0)",10,"00000C10"], // Hongo rojo
["Tile","rgba(0,0,0,0)",9,"00000D10"],
["Tile","rgba(0,0,0,0)",10,"00000D10"], // Hongo cafe
["Tile","rgba(0,0,0,0)",9,"00000F00"],
["Tile","rgba(0,0,0,0)",10,"00000F00"],  // retoño
["Tile","rgba(0,0,0,0)",9,"00000720"],
["Tile","rgba(0,0,0,0)",10,"00000720"], // Sacate
["Tile","rgba(0,0,0,0)",9,"00000050"],
["Tile","rgba(0,0,0,0)",10,"00000050"], // Antorcha
["Tile","rgba(0,0,0,0)",9 ,"11111040"],
["Tile","rgba(0,0,0,0)",10,"00000040"], // WOOL
["Tile","rgba(0,0,0,0)",9 ,"11111270"],
["Tile","rgba(0,0,0,0)",10,"00000270"], 
["Tile","rgba(0,0,0,0)",9 ,"11111170"],
["Tile","rgba(0,0,0,0)",10,"00000170"], 
["Tile","rgba(0,0,0,0)",9 ,"11111180"],
["Tile","rgba(0,0,0,0)",10,"00000180"],
["Tile","rgba(0,0,0,0)",9 ,"11111280"],
["Tile","rgba(0,0,0,0)",10,"00000280"],
["Tile","rgba(0,0,0,0)",9 ,"11111190"],
["Tile","rgba(0,0,0,0)",10,"00000190"],
["Tile","rgba(0,0,0,0)",9 ,"11111290"],
["Tile","rgba(0,0,0,0)",10,"00000290"],
["Tile","rgba(0,0,0,0)",9 ,"111111A0"],
["Tile","rgba(0,0,0,0)",10,"000001A0"],
["Tile","rgba(0,0,0,0)",9 ,"111112A0"],
["Tile","rgba(0,0,0,0)",10,"000002A0"],
["Tile","rgba(0,0,0,0)",9 ,"111111B0"],
["Tile","rgba(0,0,0,0)",10,"000001B0"],
["Tile","rgba(0,0,0,0)",9 ,"111112B0"],
["Tile","rgba(0,0,0,0)",10,"000002B0"],
["Tile","rgba(0,0,0,0)",9 ,"111111C0"],
["Tile","rgba(0,0,0,0)",10,"000001C0"],
["Tile","rgba(0,0,0,0)",9 ,"111112C0"],
["Tile","rgba(0,0,0,0)",10,"000002C0"],
["Tile","rgba(0,0,0,0)",9 ,"111111D0"],
["Tile","rgba(0,0,0,0)",10,"000001D0"],
["Tile","rgba(0,0,0,0)",9 ,"111112D0"],
["Tile","rgba(0,0,0,0)",10,"000002D0"],
["Tile","rgba(0,0,0,0)",9 ,"111111E0"],
["Tile","rgba(0,0,0,0)",10,"000001E0"],
*/
],
TileScripts:[
{
Action: function Action(Tile,p1,side) { // 0
    Tile.action = true
	SoundEffectsCollection[0].play()
	Tile.Up = 0
	Tile.Down = 0
	Tile.Left = 0
	Tile.Right  = 0
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
Action: function Action(Tile,p1,side) { // 1
	SoundEffectsCollection[1].currentTime = 0;
	SoundEffectsCollection[1].play()
	Tile.prin = 1
	Tile.type = 0
	Tile.fotograms = 0
	Tile.animation = 0
	TransfromTile(Tile,Tile.BC,0,"00000000",0)
},
Loop: function Loop (Tile) {},
},
{
Action: function Action(Tile,p1,side) { // 2
	if(side && p1.FristTouch){
		SoundEffectsCollection[2].currentTime = 0;
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
Action: function Action(Tile,p1,side) { // 3
	if(side == false && p1.FristTouch){
		SoundEffectsCollection[3].currentTime = 0;
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
Action: function Action(Tile,p1,side) { // 4
	if(p1.FristTouch){
	SoundEffectsCollection[3].currentTime = 0;
	SoundEffectsCollection[3].play()
	myMiniSprites.push(new Mini_sprite(Tile.x-16,Tile.y-16,2,1,0,64,5,4,0,0,64,64,0))
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
Action: function Action(Tile,p1,side) { // 5
	Tile.action = true
},
Loop: function Loop (Tile) {
	if(Clock(Tile,10)){
		SoundEffectsCollection[7].currentTime = 0;
		SoundEffectsCollection[7].play()
	myMiniSprites.push(new Mini_sprite(Tile.x+16,Tile.y,1,1,128,96,RandomNumber(1,16),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x,Tile.y,1,1,128+16,96,RandomNumber(1,16),5,0,0,16,16,0))
	Tile.action = false
	Tile.type = 0
    Tile.prin = 0
	}
},
},
{
Action: function Action(Tile,p1,side) { // 6
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
Action: function Action(Tile,p1,side) {   // 7
	if( (!side  && p1.atack) || (side  && p1.atackY)){
		SoundEffectsCollection[7].currentTime = 0;
		SoundEffectsCollection[7].play()
		explosions32[0](Tile)
		Tile.type = 0
	    Tile.imgN = 0
		Tile.XG = 0
		Tile.YG = 0
	}else{
	Tile.action = true
	}
},
Loop: function Loop (Tile) {
	if(Clock(Tile,10)){
	SoundEffectsCollection[7].currentTime = 0;
	SoundEffectsCollection[7].play()
	myMiniSprites.push(new Mini_sprite(Tile.x,Tile.y,Tile.imgN,1,Tile.XG,Tile.YG,RandomNumber(1,8),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x+16,Tile.y,Tile.imgN,1,Tile.XG+16,Tile.YG,RandomNumber(1,8),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x,Tile.y+16,Tile.imgN,1,Tile.XG,Tile.YG+16,RandomNumber(1,8),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(Tile.x+16,Tile.y+16,Tile.imgN,1,Tile.XG+16,Tile.YG+16,RandomNumber(1,8),5,0,0,16,16,0))
	Tile.action = false
	Tile.type = 0
	Tile.imgN = 0
	Tile.XG = 0
	Tile.YG = 0
	}
},
},
{
Action: function Action(Tile,p1,side) { // 8
	if(side && p1.Down ) {
	p1.InMove = false
	establecing_starcords(Tile.iA+8,Tile.iL+8,p1)
reset_game = true
pre_finish = true
	}
},
Loop: function Loop (Tile) {

},
},
{
Action: function Action(Tile,p1,side) { // 9
	if(side) {
	p1.InMove = false
	establecing_starcords(Tile.Xcord,Tile.Ycord,p1)
reset_game = true
pre_finish = true
	}
},
Loop: function Loop (Tile) {

},
},
{
Action: function Action(Tile,p1,side) { // 10
	if(side){
		Tile.action = true

	}
},
Loop: function Loop (Tile) {
	if(Clock(Tile,1)){
		Tile.type = 0
		Tile.imgN = 0
		Tile.XG = 0
		Tile.YG = 0
		mysprites.push(new sprite_colision(Tile.x,Tile.y,32,32,26,"000030000",9,"08028", 0,-8,false))
		Scrips_collection[mysprites[mysprites.length -1].script].Action(mysprites[mysprites.length -1])
		Tile.action = false
		}
},
},
{
Action: function Action(Tile,p1,side) { // 11
	if(!Tile.action){myMiniSprites.push(new Mini_sprite(Tile.x-64,Tile.y-64,2,1,0,480,90,4,0,0,160,160,3,false))}
	Tile.action = true
	Tile.YG = 32
},
Loop: function Loop (Tile) {
	if(Clock(Tile,90)){
	Tile.YG = 0
	Tile.action = false
	}
	
},
},
],
SpriteScripts:[
{
Action: function Action(Sprite) { // S0
		 Sprite.width = 32
		 Sprite.height = 32
		 Sprite.widthPrint = 42
		 Sprite.heightPrint = 42
		 Sprite.Xdiference_Print = -10
		 Sprite.Ydiference_Print = -10
		 Sprite.XG = 84
		 Sprite.YG = 96
		 Sprite.widthGrid = 84
		 Sprite.heightGrid = 84
	},
Loop: function Loop (Sprite,player1) {
		PreProgramedMode (Sprite,player1)
		Sprite.angle += Sprite.MoveX*2 
    },
RenderMode: function RenderMode (ctx,Sprite) {
		ctx.drawImage(
		image_collection[Sprite.img],
		84,
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
Action: function Action(Sprite) { // S1
     Sprite.width = 64
	 Sprite.height = 64
	 Sprite.widthPrint = 84
	 Sprite.heightPrint = 84
	 Sprite.Xdiference_Print = -20
	 Sprite.Ydiference_Print = -20
	 Sprite.XG = 84
	 Sprite.YG = 96
	 Sprite.widthGrid = 84
	 Sprite.heightGrid = 84
	},
Loop: function Loop (Sprite,player1) {
	PreProgramedMode (Sprite,player1)
	Sprite.angle += Sprite.MoveX*2 
    },
RenderMode: function RenderMode (ctx,Sprite) {
	ctx.drawImage(
	image_collection[Sprite.img],
	84,
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
Action: function Action(Sprite) { // S2
	 Sprite.Mode = 1
	 Sprite.type = 3
     Sprite.width = 32
	 Sprite.height = 16
	 Sprite.widthPrint = 42
	 Sprite.heightPrint = 42
	 Sprite.Xdiference_Print = -5
	 Sprite.Ydiference_Print = -10
	 Sprite.XG = 84
	 Sprite.YG = 96
	 Sprite.widthGrid = 84
	 Sprite.heightGrid = 84
	},
Loop: function Loop (Sprite,player1,player2) {
	if(Colision(Sprite,player1,player2,0,0,32,512)){
		
		Sprite.State = 1
	}
	if(Sprite.State == 1){
		(Gravedad(Sprite,0.5))
	}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	ctx.drawImage(
	image_collection[Sprite.img],
	84,
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
Action: function Action(Sprite) { // S3

	},
Loop: function Loop (Sprite,player1) {
    PreProgramedMode (Sprite,player1)
	if(Sprite.Xplayertouch){
		explosions32[2](Sprite)
		Sprite.live = -1
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
Action: function Action(Sprite) { // S4
	Sprite.Mode = 0
	Sprite.Up = 1
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
	 Sprite.live = 1
	},
Loop: function Loop (Sprite,player1,player2) {
	if(Sprite.Yplayertouch){
		Sprite.type = 1
		Sprite.typeColision = 1
		Sprite.Ytouch = false
		 SoundEffectsCollection[4].currentTime = 0;
		 SoundEffectsCollection[4].play()
		 player1.MoveY = -8;player1.BY = 0
		 Sprite.MoveX = 0
		 Sprite.MoveY = -4
		 Sprite.sideY = true
		 Sprite.live = 0
		 Sprite.XG = 0
		 Sprite.YG = 128
		 Sprite.LoopFotogram = 2
		 Sprite.FramesIntervalds = 2 
	 }
	if(Sprite.live > 0){
		Gravedad_y_Brincar(Sprite,1)
		if(Sprite.jumped){
			Sprite.XG = 0
			Sprite.LoopFotogram = 3
			Sprite.FramesIntervalds = 2 
		}else{
			Sprite.fotogram = 0
			Sprite.XG = 198
			Sprite.LoopFotogram = 0
			Sprite.FramesIntervalds = 0 
		}
		turn_if_obstacle_X(Sprite)
		Sprite.YG = 0
		if(!Sprite.sideX){
			Sprite.YG = 32
		if(Colision(Sprite,player1,player2,-48,0,32,48)){
			if(Sprite.jumped){Sprite.MoveY += -10
			Sprite.jumped = false;
			}
		}
		}else{
			if(Colision(Sprite,player1,player2,32,0,32,48)){
			if(Sprite.jumped){Sprite.MoveY += -10
			Sprite.jumped = false;
			}		
		}
		}
		Sprite.MoveX = Sprite.Xvelocity
	}else{
		Gravedad(Sprite,0.5)
		console.log(Sprite.MoveY)
	}
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
Action: function Action(Sprite) { // S5
	Sprite.Mode = 0
     Sprite.width = 16
	 Sprite.height = 32
	 Sprite.widthPrint = 64
	 Sprite.heightPrint = 32
	 Sprite.Xdiference_Print = -16
	 Sprite.widthGrid = 64
	 Sprite.heightGrid = 32
	 Sprite.col = "160020005"
	 Sprite.type = 2
	},
Loop: function Loop (Sprite,player1) {
	 PreProgramedMode(Sprite,player1)
	 if(Sprite.Yplayertouch){
		 SoundEffectsCollection[4].currentTime = 0;
		 SoundEffectsCollection[4].play()
		 Sprite.moveY = -4
		 Sprite.sideY = true
		 Sprite.col = "001110003"
		 Sprite.type = 1
		 Sprite.XG = 0
		 Sprite.YG = 128
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
Action: function Action(Sprite) { // S6
	Sprite.Mode = 0
     Sprite.width = 64
	 Sprite.height = 64
	 Sprite.widthPrint = 96
	 Sprite.heightPrint = 64
	 Sprite.Xdiference_Print = -16
	 Sprite.widthGrid = 96
	 Sprite.heightGrid = 64
	},
Loop: function Loop (Sprite,player1) {
	 //PreProgramedMode(Sprite,player1)
	 if(Sprite.Yplayertouch){
		 SoundEffectsCollection[4].currentTime = 0;
		 SoundEffectsCollection[4].play()
		 player1.MoveY = -8;player1.BY = 0
		 Sprite.fotogram = 0
		 Sprite.State = -1
		 Sprite.intervald_time = 0
		 Sprite.intervald_frame = 0
	 }
	 switch (Sprite.State){
	 case -1 : 
	 	 Sprite.YG = 128
		 Sprite.LoopFotogram = 3
		 if(Clock(Sprite,60)){
			 Sprite.fotogram = 0
			Sprite.State = 0
		 }
	break;
	case 0 :
		 Sprite.YG = 0
		 Sprite.LoopFotogram = 4
		 if(Clock(Sprite,65)){
			 Sprite.intervald_frame = 0
			 Sprite.fotogram = 0
			 if(randomBoolean()){
				 Sprite.State = 1
			 }
		 }
    break;
	case 1 :
		 Sprite.YG = 64
		 Sprite.LoopFotogram = 3
		 if(Clock(Sprite,40)){
			Sprite.YG = 0
			Sprite.intervald_frame = 0
			Sprite.fotogram = 0
			Sprite.State = 0
		 }
		 if(Sprite.intervald_time == 34){
		 mysprites.push(new  sprite_colision(Sprite.x+80,Sprite.y+32+8,32,32,8,"661132103",5,"29200", 2,8,false))
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
Action: function Action(Sprite) { // S7
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
Loop: function Loop (Sprite,player1) {
	PreProgramedMode (Sprite,player1)
	Sprite.angle += Sprite.MoveX*3
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
Action: function Action(Sprite) { // S8
	 Sprite.height = 32
	 Sprite.Ydiference_Print = -32
	 Sprite.heightPrint = 64
	 Sprite.heightGrid = 64
	 Sprite.XG  = 96
	 Sprite.YG = 192
	 Sprite.State = 0
	 Sprite.Up = 0
	 Sprite.Left = 0
	},
Loop: function Loop (Sprite,player1) {
	if(Sprite.State == 0){
		Sprite.heightPrint -= 2
		Sprite.height -= 1
		Sprite.Ydiference_Print += 1
		Sprite.y ++
			if(Sprite.heightPrint < 0){
				Sprite.y --
				Sprite.Up = 0
				Sprite.Left = 0
				Sprite.Ydiference_Print = 0
				Sprite.heightPrint = 0
				Sprite.height = 0
				if(Clock(Sprite,60)){
					Sprite.State = 1
				}
			}
	}else{
		Sprite.heightPrint += 2
		if(Sprite.heightPrint > 32){
			Sprite.height += 2 ;
			Sprite.y -= 2
		}else{
			Sprite.Ydiference_Print -= 2
		}
		if(Sprite.heightPrint > 64){
			Sprite.Up = 6
			Sprite.Left = 6
			Sprite.y += 2
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
Action: function Action(Sprite) { // S9

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
Action: function Action(Sprite) { // S10
Sprite.Xvelocity = 0
Sprite.Yvelocity = 0
Sprite.type = 3
Sprite.Up = 1
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
	if(Sprite.Yplayertouch || Sprite.BulletTouch){
			SoundEffectsCollection[4].currentTime = 0;
			SoundEffectsCollection[4].play()
			Sprite.live = -1
			Sprite.Xvelocity = 0
			p1.MoveY = -8;p1.BY = 0
			p1.hits++
		}
	if(Sprite.live < 0){
		myMiniSprites.push(new Mini_sprite(Sprite.x - 8,Sprite.y - 10,Sprite.imgN,1,32,192,0,1,Sprite.Xvelocity,-4,32,32,0))
			Kills ++
		}
},
RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},
	{
	Action: function Action(Sprite) { // S11
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
			SoundEffectsCollection[4].currentTime = 0;
			SoundEffectsCollection[4].play()
			Sprite.live = 0
			Sprite.Xvelocity = 0
			Sprite.Up = 0
			Sprite.Left = 0
		}	
		Gravedad(Sprite,0.5)
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
			SoundEffectsCollection[4].currentTime = 0;
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
Action: function Action(Sprite) { // S12
	let num = Math.round(0.125 * Sprite.heightPrint)
	 Sprite.height = Sprite.heightPrint - num
	 Sprite.Ydiference_Print = num *-1
	},
Loop: function Loop (Sprite,p1) {
	Sprite.MoveX = Sprite.Xvelocity
	turn_if_obstacle_X(Sprite)
	if(Sprite.Ytouches == 1 && Sprite.State == 0){
		 Sprite.sideX = !Sprite.sideX
			Sprite.Xvelocity = Sprite.Xvelocity*-1
			Sprite.State = 1
		}
	if(Sprite.State == 1 ){
		if(Clock(Sprite,10)){
			Sprite.State = 0
		}
	}
	if(Sprite.sideX){
		Sprite.Mode = 3
	}else{
		Sprite.Mode = 0
	}
	Gravedad(Sprite,0.5)
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
{
Action: function Action(Sprite) { // S13
    Sprite.angle = 0
	Sprite.XG = 100
	Sprite.YG = 260
	Sprite.widthGrid = 24
	Sprite.heightGrid = 24
	Sprite.width = 24
	Sprite.height = 24
	Sprite.widthPrint= 24
	Sprite.heightPrint = 24
	Sprite.Mode = 2
	},
Loop: function Loop (Sprite,p1,p2) {
	if(Colision(Sprite,p1,p2,-132,-132,288,288)){
		Sprite.XG = 132
	Sprite.angle = Math.atan2(p1.y - Sprite.y,p1.x - Sprite.x ) + Math.tan(1)
	Sprite.MoveX = Sprite.Xvelocity * Math.sin(Sprite.angle)
	Sprite.MoveY = (Sprite.Yvelocity * Math.cos(Sprite.angle))*-1
	Sprite.angle = (Sprite.angle / Math.PI * 180)
	}else{
		Sprite.angle = 0
		Sprite.XG = 100
		Sprite.MoveX = 0
		Sprite.MoveY = 0
	}
},
RenderMode: function RenderMode (ctx,Sprite) {
        PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { // S14
		 Sprite.width = 33
		 Sprite.height = 32
		 Sprite.widthPrint = 42
		 Sprite.heightPrint = 42
		 Sprite.Xdiference_Print = -10
		 Sprite.Ydiference_Print = -10
		 Sprite.XG = 84
		 Sprite.YG = 96
		 Sprite.widthGrid = 84
		 Sprite.heightGrid = 84
		 Sprite.State = 0
	},
Loop: function Loop (Sprite,player1) {
		PreProgramedMode (Sprite,player1)
		Sprite.angle += Sprite.MoveX*2 
		if(Sprite.Ytouches == 1 && Sprite.State == 0){
			Sprite.Xvelocity = Sprite.Xvelocity*-1
			Sprite.State = 1
		}
		if(Sprite.State == 1 ){
			if(Clock(Sprite,10)){
				Sprite.State = 0
			}
		}
    },
RenderMode: function RenderMode (ctx,Sprite) {
		ctx.drawImage(
		image_collection[Sprite.img],
		84,
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
Action: function Action(Sprite) { // S15
	Sprite.Ydiference_Print = -4
	 Sprite.height -= 8
	},
Loop: function Loop (Sprite,p1) {
	if(Sprite.live < 1 ){
		Gravedad(Sprite,0.5,16)
	}else{
		PreProgramedMode(Sprite,p1)
		if(Sprite.Yplayertouch || Sprite.BulletTouch ){
			SoundEffectsCollection[4].currentTime = 0;
			SoundEffectsCollection[4].play()
			Sprite.live = 0
			Sprite.type = 1
			Sprite.Up = 0
			Sprite.Left = 0
			Sprite.MoveY = -8;
			if(!p1.invecybility && AirDash)p1.AplySecondjump = true;
			p1.MoveY = -8;
			p1.BY = 0
			p1.hits++
		}
	}
    },
 RenderMode: function RenderMode (ctx,Sprite) {
        PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { // S16
	Sprite.Ydiference_Print = -4
	 Sprite.height -= 8
	Sprite.angle = 0
	},
Loop: function Loop (Sprite,p1) {
	if(Sprite.live < 1 ){
		Gravedad(Sprite,0.5,16)
		Sprite.angle += Sprite.Xvelocity * Math.PI / 180;  
	}else{
		if(Sprite.Yplayertouch || Sprite.BulletTouch){
			SoundEffectsCollection[4].currentTime = 0;
			SoundEffectsCollection[4].play()
			Sprite.live = 0
			Sprite.type = 1
			Sprite.Up = 0
			Sprite.Left = 0
			Sprite.MoveY = -8;
			if(!p1.invecybility && AirDash)p1.AplySecondjump = true;
			p1.MoveY = -8;
			p1.BY = 0
			p1.hits++
		}
		Sprite.angle = Math.atan2(p1.y - Sprite.y,p1.x - Sprite.x ) + Math.tan(1)
		Sprite.MoveX = Sprite.Xvelocity * Math.sin(Sprite.angle)
		Sprite.MoveY = (Sprite.Yvelocity * Math.cos(Sprite.angle))*-1
		Sprite.angle = (Sprite.angle / Math.PI * 180)
	}
    },
 RenderMode: function RenderMode (ctx,Sprite) {
        PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { // S17
	Sprite.typeColision = 3
	},
Loop: function Loop (Sprite,p1) {
	PreProgramedMode(Sprite,p1)
	if(Sprite.Xplayertouch || Sprite.Yplayertouch){
		Sprite.Up = 0
		Sprite.Left = 0
		Sprite.live = -1
		SoundEffectsCollection[0].play()
		p1.Win = true
		p1.InMove = false
	}
    },
 RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { // S18
		Sprite.width = 24
		Sprite.height = 64
		Sprite.widthPrint = 48
		Sprite.heightPrint = 64
		Sprite.Xdiference_Print = -12
		Sprite.Ydiference_Print = 0
		Sprite.State = 0
	},
Loop: function Loop (Sprite,player) {
	Gravedad(Sprite,0.5)
	if(Ax16 == 15){
		if(Sprite.x +(Sprite.width /2) > (player.x + player.widthHalf)){
			Sprite.Xvelocity --
			Sprite.Mode = 0
		}else{
			Sprite.Xvelocity ++
			Sprite.Mode = 3
		}
	}
	if(Sprite.Xtouch){
		Sprite.Xvelocity = Sprite.Xvelocity *-0.5
	}
	Sprite.MoveX = Sprite.Xvelocity
	// convierte los valores a negativos 
	let Velocity = Sprite.Xvelocity > 0 ? Sprite.Xvelocity*-1 : Sprite.Xvelocity ;
	/*Aumenta la velocidad de animacion dependiendo de Velocity*/
	Sprite.FramesIntervalds = Velocity < -5 ? 1 : Velocity + 6 ;
    },
 RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},{
 Action: function Action(Sprite) { //S19
		Sprite.State = 0
		Sprite.intervald_time = 0
},
Loop: function Loop (Sprite,Player,player2) {
	//if(Sprite.water){
		if(Colision(Sprite,Player,player2,-132,-132,288,288)){
			Sprite.intervald_time = 0
			Sprite.State = 1
		}
		if(Sprite.State == 1){
			Sprite.XG = 192
			Sprite.FramesIntervalds = 4
			Emboscade_player_Y(Sprite,Player,3)
			Emboscade_player_X(Sprite,Player,3)
			if(Sprite.y  + Sprite.MoveY < Sprite.waterAlture){
				Sprite.MoveY =  Sprite.waterAlture - Sprite.y
			}
			if(Sprite.Xtouch){
				Sprite.Xvelocity = Sprite.Xvelocity *-1
				Sprite.MoveX = Sprite.Xvelocity
			}
			if(Sprite.Ytouch){
				Sprite.Yvelocity = Sprite.Yvelocity *-1
				Sprite.MoveY = Sprite.Yvelocity
			}
			if(Clock(Sprite,180)){
				Sprite.State = 0
			}
		}else{
			Gravedad(Sprite,0.5)
			Sprite.XG = 256
			Sprite.FramesIntervalds = 8
			Sprite.Yvelocity = 0
			if(Sprite.Xvelocity >=  1){Sprite.Xvelocity --}
			if(Sprite.Xvelocity <= -1){Sprite.Xvelocity ++}
			Sprite.MoveX = Sprite.Xvelocity
		}
	/*
	}else{
		Sprite.XG = 192
		Sprite.FramesIntervalds = 4
		Sprite.Yvelocity = 0
		Gravedad(Sprite,1)
		if(Sprite.Xvelocity >=  1){Sprite.Xvelocity --}
		if(Sprite.Xvelocity <= -1){Sprite.Xvelocity ++}
		if(Sprite.DownTriger){
			Sprite.MoveY += -4
			if(randomBoolean()){Sprite.MoveX = 2}else{Sprite.MoveX = -2}
		}
	}
	*/
	if(Sprite.MoveX > 0 ){Sprite.Mode = 3}else{Sprite.Mode = 0}
	
 },
 RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},{
	Action: function Action(Sprite) { // S20
			Sprite.State = 0
			Sprite.XG = 128
	},
	Loop: function Loop (Sprite,Player,player2) {
	 switch (Sprite.State){
	case 0:
		if(Colision(Sprite,Player,player2,0,64,64,512)){
				Sprite.XG = 192
				Sprite.State = 1
		}
	break;
	case 1:
		Gravedad(Sprite,0.5)
		if(Sprite.Ytouch){
			Sprite.State = 2	
		}
	break;
	case 2:
		Gravedad(Sprite,0.5)
		if(Clock(Sprite,30)){
			Sprite.MoveY = 0
			Sprite.State = 3
			Sprite.XG = 128
		}
	break;
	case 3:
		if(Go_to_Started_Y(Sprite,1) ||	Sprite.Ytouch){
			Sprite.State = 0
			Sprite.MoveY = 0
		}
	break;
	}
	},
	RenderMode: function RenderMode (ctx,Sprite) {
		 PreRenderMode(ctx,Sprite)
	},
},{
Action: function Action(Sprite) { //S21
		Sprite.Xdiference_Print = -10
		Sprite.Ydiference_Print = -10
		Sprite.width = 32
		Sprite.height = 32
	},
Loop: function Loop (Sprite,player) {
	PreProgramedMode(Sprite,player)
    },
 RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},{
Action: function Action(Sprite) { //S22
		Sprite.Xvelocity = -1
		Sprite.IXR = -1
		Sprite.Yvelocity = 0
	},
Loop: function Loop (Sprite,Player,player2) {
		if(Sprite.live == 1 ){
			if(Sprite.State != 2){
				if((Sprite.Xtouch || Sprite.Ytouches == 1) && Sprite.State == 0){
					if(!Sprite.Xtouch) Sprite.Xvelocity = 0;
					Sprite.LoopFotogram = 0
					Sprite.fotogram = 0
					if(Clock(Sprite,50)){
						Sprite.Xvelocity = Sprite.IXR*-1
						Sprite.IXR = Sprite.IXR*-1
						Sprite.State = 1
						Sprite.LoopFotogram = 4
					}
				}
				Sprite.MoveX = Sprite.Xvelocity;
				if(Sprite.Ytouch){Sprite.MoveY = 0;Sprite.Hy = 0}
				Gravedad(Sprite,1)
				if(Sprite.State == 1 ){
					if(Clock(Sprite,10)){
						Sprite.State = 0
					}
				}
				if(Sprite.IXR > 0 ){
					Sprite.Mode = 3
						if(Colision(Sprite,Player,player2,32,0,256,32)){
							Sprite.State = 2
							Sprite.Xvelocity = 0
							Sprite.IXR = 4
							Sprite.Yvelocity = 0
							Sprite.YG = 384
							Sprite.LoopFotogram = 2
							Sprite.fotogram = 0
							SoundEffectsCollection[10].currentTime = 0;
							SoundEffectsCollection[10].play()
						}
					}else{
						Sprite.Mode = 0
							if(Colision(Sprite,Player,player2,-256,0,256,32)){
								Sprite.State = 2
								Sprite.Xvelocity = 0
								Sprite.IXR = 4
								Sprite.Yvelocity = 0
								Sprite.YG = 384
								Sprite.LoopFotogram = 2
								Sprite.fotogram = 0
								SoundEffectsCollection[10].currentTime = 0;
								SoundEffectsCollection[10].play()
							}
						}
			}else{
			    Emboscade_player_Y(Sprite,Player,Sprite.IYR)
			    Emboscade_player_X(Sprite,Player,Sprite.IXR)
				if(Sprite.Xtouch){
					Sprite.Xvelocity = Sprite.Xvelocity *-0.5
					Sprite.MoveX = Sprite.Xvelocity
				}
				if(Sprite.Ytouch){
					Sprite.Yvelocity = Sprite.Yvelocity *-0.5
					Sprite.MoveY = Sprite.Yvelocity
				}
				let Velocity = 0
				if(Sprite.MoveX > 0 ){
					Sprite.Mode = 3
					}else{
					Sprite.Mode = 0
				}
				if(Clock(Sprite,100)){
					if(Sprite.Mode == 3){
					myMiniSprites.push(new Mini_sprite(Sprite.x,Sprite.y+22,Sprite.imgN,0,112,320,0,0,6,0,16,6,2))
					}else{
					myMiniSprites.push(new Mini_sprite(Sprite.x,Sprite.y+22,Sprite.imgN,0,96,320,0,0,-6,0,16,6,2))
					}
				}
			}
			if(Sprite.Yplayertouch){
					SoundEffectsCollection[4].currentTime = 0;
					SoundEffectsCollection[4].play()
					Sprite.live = 0
					Sprite.MoveY = -8
					if(Sprite.Yplayertouch){
					p1.MoveY = -8;p1.BY = 0
					p1.hits++
					}
				}
		}else{
			Sprite.Up = 0
			Sprite.Left = 0
			Sprite.XG = 72
			Sprite.YG = 384
			Sprite.FramesIntervalds = 4
			Sprite.LoopFotogram = 0
			Sprite.fotogram = 0
			Sprite.type = 1
			Sprite.live = 0
			Gravedad(Sprite,0.5)
		}
    },
 RenderMode: function RenderMode (ctx,Sprite) {
     PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { // S23

	},
Loop: function Loop (Sprite,p1) {
	if(Sprite.Yplayertouch){
		Sprite.live = -1
		p1.MoveY = -8;p1.BY = 0
		p1.hits++
	}
		PreProgramedMode(Sprite,p1)
    },
 RenderMode: function RenderMode (ctx,Sprite) {
        PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { // S24
	},
Loop: function Loop (Sprite,player1) {
		Sprite.angle += 4
		PreProgramedMode(Sprite,player1)
    },
RenderMode: function RenderMode (ctx,Sprite) {
	    PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { // S25
	Sprite.MoveY = -4
	SoundEffectsCollection[8].currentTime = 0;
	SoundEffectsCollection[8].play()
	},
Loop: function Loop (Sprite,player1) {
		if(Clock(Sprite,200)){
			SoundEffectsCollection[9].currentTime = 0;
			SoundEffectsCollection[9].play()
			for (i = 0; i < 10; i += 1){
			myMiniSprites.push(new Mini_sprite(Sprite.x+RandomNumber(-64,64),Sprite.y+RandomNumber(-64,64),11,0,0,0,16,2,0,0,64,64,2,false))
			Sprite.live = -1
			}
		}
		Gravedad(Sprite,0.5,16)
    },
RenderMode: function RenderMode (ctx,Sprite) {
	    PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(MyElement) { // S26
	},
Loop: function Loop (MyElement,player1) {
		if(Clock(MyElement,200)){
			 mysprites.push(new sprite(MyElement.x,MyElement.y,32,32,0,"660010088",2,"08A00",3,3,false))
			 Scrips_collection[mysprites[mysprites.length -1].script].Action(mysprites[mysprites.length -1])
		}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	    PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { //S27
		Sprite.Ydiference_Print = -8
		Sprite.width = 32
		Sprite.height = 32

	},
Loop: function Loop (sprite,player1) {
	PreProgramedMode(sprite,player1)
	 if(sprite.live < 1 ){
		 sprite.XG = 352
		  if(Clock(sprite,20)){
			sprite.live = -1 
		  }
	}else{
		if(sprite.Yplayertouch || sprite.BulletTouch ){
			SoundEffectsCollection[4].currentTime = 0;
			SoundEffectsCollection[4].play()
			sprite.live = 0
			sprite.Up = 0
			sprite.Left = 0
			if(!p1.invecybility && AirDash)p1.AplySecondjump = true;
			p1.MoveY = -8;
			p1.BY = 0
			p1.hits++
			let Aletory = RandomNumber(1,3)
			if(Aletory == 1){
			mysprites.push(new sprite_colision(sprite.x,sprite.y,32,48,12,"160030000",6,"30223",-1,0,false))
			}
			if(Aletory == 2){
			mysprites.push(new sprite_colision(sprite.x,sprite.y,32,32,29,"000032103",2,"0A224", 0,0,false))
			}
			if(Aletory == 3){
			mysprites.push(new sprite_colision(sprite.x,sprite.y,32,32,8,"661132103",5,"29200", -2,0,false))
			}
			Scrips_collection[mysprites[mysprites.length -1].script].Action(mysprites[mysprites.length -1])
		}
	}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	    PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { //S28
	},
Loop: function Loop (Sprite,player1) {
	 PreProgramedMode(Sprite,player1)
	 if(Clock(Sprite,200)){
			SoundEffectsCollection[11].currentTime = 0;
			SoundEffectsCollection[11].play()
			Sprite.live = -1
			myMiniSprites.push(new Mini_sprite(Sprite.x-8,Sprite.y-8,2,0,320,96,16,4,0,0,64,64,2,false))
		}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	    PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { //S29
	},
Loop: function Loop (Sprite,player1) {
	Sprite.angle += 2
	 if(Sprite.live < 1 ){
		Gravedad(Sprite,0.5,16)
		Sprite.Ytouch = false
	}else{
		PreProgramedMode(Sprite,player1)
		if(Clock(Sprite,100)){
		Sprite.MoveY = -12
		}
		if(Sprite.Yplayertouch || Sprite.BulletTouch ){
			SoundEffectsCollection[4].currentTime = 0;
			SoundEffectsCollection[4].play()
			Sprite.live = 0
			Sprite.type = 1
			Sprite.Up = 0
			Sprite.Left = 0
			if(!p1.invecybility && AirDash)p1.AplySecondjump = true;
			p1.MoveY = -8;
			p1.BY = 0
			p1.hits++
		}
	}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	    PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { //S30
	},
Loop: function Loop (sprite,player1) {
		if(Clock(sprite,100)){
			let Aletory = RandomNumber(1,3)
			if(Aletory == 1){
			mysprites.push(new sprite_colision(sprite.x,sprite.y,32,48,12,"160030000",6,"30223",sprite.Xvelocity,0,false))
			}
			if(Aletory == 2){
			mysprites.push(new sprite_colision(sprite.x,sprite.y,32,32,29,"000032103",2,"0A224", 0,0,false))
			}
			if(Aletory == 3){
			mysprites.push(new sprite_colision(sprite.x,sprite.y,32,32,8,"661132103",5,"29200", sprite.Xvelocity*2,0,false))
			}
			Scrips_collection[mysprites[mysprites.length -1].script].Action(mysprites[mysprites.length -1])
			mysprites[mysprites.length -1].MoveY = -8
		}
    },
RenderMode: function RenderMode (ctx,Sprite) {
	    PreRenderMode(ctx,Sprite)
 },
},
{
Action: function Action(Sprite) { //S31
		Sprite.Xdiference_Print = -16
		Sprite.Ydiference_Print = -52
		Sprite.width = 33
		Sprite.height = 58
		Sprite.live = 5
		Sprite.SecondState = 1
		Sprite.sideX = !Sprite.sideX 
		backgroundMusic.currentTime = 0;
		backgroundMusic.src = "Music/You're A Mean One Mr. Grinch.mp3"
		backgroundMusic.play()
	},
Loop: function Loop (Sprite,player1,player2) {
		switch (Sprite.SecondState){
		case 2 :
			Sprite.MoveX =  0
			Sprite.Up = 6
			Sprite.Left = 6
			Sprite.YG = 224
			Sprite.XG = 0
			Sprite.FramesIntervalds = 2
			Sprite.LoopFotogram = 16
			if(Sprite.intervald_time > 40){
				if(Sprite.sideX){
					if(Colision(Sprite,player1,player2,-33,0,32,64)){
						if(player1.invecybility != true){player1.lives --;player1.Stocked = true}
					}
				}else{
					if(Colision(Sprite,player1,player2,32,0,32,64)){
						if(player1.invecybility != true){player1.lives --;player1.Stocked = true}
					}
				}
			}
			if(Clock(Sprite,80)){
				Sprite.SecondState = 1
			}
		break;
		case 1:
			Sprite.Up = 1
			Sprite.Left = 6
			Sprite.XG = 0
			Sprite.YG = 112
			Sprite.FramesIntervalds = 2
			Sprite.LoopFotogram = 14
			Sprite.MoveX = Sprite.Xvelocity
			turn_if_obstacle_X(Sprite)
			if(Sprite.Ytouches == 1 && Sprite.State == 0){
				Sprite.Xvelocity = Sprite.Xvelocity*-1
				Sprite.sideX = !Sprite.sideX 
				Sprite.State = 1
			}
			if(Sprite.State == 1 ){
				if(Clock(Sprite,10)){
					Sprite.State = 0
				}
			}
			if(Sprite.sideX){
				if(Colision(Sprite,player1,player2,-33,0,32,64)){
					Sprite.SecondState = 2
					Sprite.fotogram = 0
				}
			}else{
				if(Colision(Sprite,player1,player2,32,0,32,64)){
					Sprite.SecondState = 2
					Sprite.fotogram = 0
				}
			}
			if(Sprite.Yplayertouch){
				SoundEffectsCollection[4].currentTime = 0;
				SoundEffectsCollection[4].play()
				Sprite.live --
				if(Sprite.live == 0){
					Sprite.SecondState = -1
				}else{
					Sprite.SecondState = 0 
				}
				Sprite.Up = 0
				Sprite.Left = 0
				p1.MoveY = -8;
				p1.BY = 0
			}
		break;
		case 0 :
			Sprite.MoveX =  0
			Sprite.Up = 0
			Sprite.Left = 0
			Sprite.YG = 0
			Sprite.XG = 92
			Sprite.FramesIntervalds = 0
			Sprite.LoopFotogram = 0
			Sprite.fotogram = 0
			if(Clock(Sprite,60)){
				Sprite.SecondState = 1
				if(Sprite.x > player1.x){
					Sprite.sideX = true
					Sprite.Xvelocity = -2
				}else{
					Sprite.sideX = false
					Sprite.Xvelocity = 2
				}
				
			}
		break;
		case -1 :
			Sprite.MoveX =  0
			Sprite.Up = 0
			Sprite.Left = 0
			Sprite.YG = 0
			Sprite.XG = 184
			Sprite.FramesIntervalds = 0
			Sprite.LoopFotogram = 0
			Sprite.fotogram = 0
			if(Clock(Sprite,60)){
				Sprite.live = -1
			}
		break;
		}
		
		if(Sprite.sideX){
			Sprite.Xdiference_Print = -49
			Sprite.Mode = 3
		}else{
			Sprite.Xdiference_Print = -16
			Sprite.Mode = 0
		}
		if(Sprite.live == -1){
			mysprites.push(new sprite(Sprite.x,Sprite.y,32,32,18,"110020011",2,"67062",1,4))
			Scrips_collection[mysprites[mysprites.length -1].script].Action(mysprites[mysprites.length -1])
		}
		/*
		if(!Sprite.InScreen){
			backgroundMusic.currentTime = 0;
			backgroundMusic.src = backgroundMusicSrc
			//backgroundMusic.play()
		}
		*/
		Gravedad(Sprite,0.5)
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
	//createBlocksLinear(100,true,3,8,3,16,128+64,128+64,16,0,1,"#FFF","10002220",0,1,0,0)
	//createBlocksLinear(100,true,3,8,3,8,128+64,128+64,16,0,1,"#FFF","11111200",0,1,0,0)
	
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
{"X":0,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":11,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":13,"col":"31311200","color":"rgb(0, 0, 0)","IN":2,"script":3},{"X":16,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":17,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":18,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":32,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":3,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":2,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":6,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":8,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":5,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":4,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":7,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":32,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":9,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":10,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":37,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":39,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":38,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":37,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":11,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":11,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":12,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":13,"col":"31311200","color":"rgb(0, 0, 0)","IN":2,"script":3},{"X":35,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":13,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":14,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":17,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":18,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":17,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":16,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":15,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":14,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":19,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":21,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":23,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":25,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":33,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":15,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":16,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":35,"Y":18,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":22,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":18,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":16,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":15,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":20,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":22,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":21,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":22,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":16,"Y":24,"col":"31311200","color":"rgb(0, 0, 0)","IN":2,"script":3},{"X":17,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":18,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":37,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":38,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":39,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":40,"Y":24,"col":"31311200","color":"rgb(0, 0, 0)","IN":2,"script":3},{"X":37,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":36,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":20,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":19,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":22,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":35,"Y":23,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":21,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":22,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":23,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":24,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":34,"Y":24,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":25,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":25,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":28,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":28,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":29,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":26,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":28,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":30,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":25,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":26,"Y":26,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":27,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":27,"col":"11111100","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":27,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":28,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":25,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":24,"Y":26,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":25,"Y":27,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":26,"Y":28,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":27,"Y":29,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":28,"Y":30,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":29,"Y":29,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":30,"Y":28,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":31,"Y":27,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":32,"Y":26,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":33,"Y":25,"col":"00000000","color":"rgb(0, 0, 0)","IN":0},{"X":41,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":41,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":5,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":31,"Y":4,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":29,"Y":26,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":26,"col":"00000000","color":"rgb(255, 255, 255)","IN":0},{"X":49,"Y":4,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":4,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":4,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":4,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":5,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":2,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":5,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":5,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":-1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":-1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":-1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":-1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":-1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":2,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":3,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":4,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":4,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":2,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":3,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":4,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":5,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":6,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":7,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":9,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":10,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":10,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":11,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":12,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":13,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":7,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":6,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":5,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":4,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":3,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":2,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":3,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":2,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":2,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":4,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":4,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":4,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":4,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":4,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":3,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":3,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":92,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":93,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":92,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":93,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":6,"col":"10002220","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":6,"col":"10002220","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":6,"col":"10002220","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":6,"col":"10002220","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":5,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":5,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":5,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":5,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":4,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":3,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":3,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":4,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":2,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":2,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":3,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":3,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":3,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":3,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":92,"Y":3,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":93,"Y":3,"col":"10002800","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":2,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":92,"Y":2,"col":"00000500","color":"rgba(0,0,0,0)","IN":1},{"X":93,"Y":2,"col":"00000810","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":4,"col":"00000230","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":8,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":8,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":8,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":7,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":5,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":8,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":94,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":95,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":96,"Y":1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":94,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":95,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":96,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":97,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":97,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":98,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":98,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":97,"Y":2,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":98,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":97,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":98,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":12,"col":"55003606","color":"rgba(0,0,0,0)","IN":2,"script":2},{"X":99,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":100,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":101,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":103,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":104,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":99,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":100,"Y":1,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":101,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":103,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":104,"Y":1,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":104,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":103,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":101,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":100,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":99,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":5,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":3,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":4,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":101,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":103,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":104,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":6,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":100,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":101,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":103,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":104,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":8,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":7,"col":"00000300","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":1,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":121,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":122,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":124,"Y":2,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":1,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":121,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":121,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":122,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":122,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":124,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":124,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":3,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":3,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":4,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":5,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":6,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":7,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":7,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":6,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":5,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":4,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":3,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":4,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":3,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":8,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":9,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":10,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":117,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":118,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":118,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":117,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":9,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":10,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":118,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":117,"Y":11,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":11,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":12,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":12,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":117,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":118,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":12,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":12,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":121,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":12,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":13,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":13,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":117,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":118,"Y":13,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":117,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":118,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":121,"Y":11,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":14,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":13,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":8,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":8,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":1,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":7,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":8,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":8,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":3,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":124,"Y":8,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":8,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":9,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":124,"Y":9,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":9,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":129,"Y":8,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":130,"Y":8,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":129,"Y":9,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":9,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":130,"Y":9,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":132,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":133,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":135,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":136,"Y":3,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":132,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":133,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":133,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":132,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":131,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":131,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":130,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":129,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":129,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":130,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":132,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":133,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":135,"Y":1,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":135,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":135,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":2,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":136,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":136,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":136,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":137,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":137,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":138,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":139,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":140,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":137,"Y":-1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":-1,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":4,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":133,"Y":4,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":135,"Y":4,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":129,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":130,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":131,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":131,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":130,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":129,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":137,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":137,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":138,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":138,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":139,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":140,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":140,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":139,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":139,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":4,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":8,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":9,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":9,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":8,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":7,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":8,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":9,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":8,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":9,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":141,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":142,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":142,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":143,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":144,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":144,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":143,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":145,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":145,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":146,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":146,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":143,"Y":9,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":9,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":9,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":8,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":6,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":142,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":143,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":144,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":145,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":146,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":147,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":148,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":149,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":150,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":151,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":153,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":154,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":155,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":156,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":157,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":152,"Y":1,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":158,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":1,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":0,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":0,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":6,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":8,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":9,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":12,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":11,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":14,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":14,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":2,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":2,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":3,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":5,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":8,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":4,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":4,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":4,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":148,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":149,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":150,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":151,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":152,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":153,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":154,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":155,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":156,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":157,"Y":2,"col":"444432A0","color":"rgb(255, 128, 128)","IN":1},{"X":157,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":156,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":155,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":154,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":153,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":149,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":148,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":150,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":151,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":152,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":147,"Y":3,"col":"44443290","color":"rgb(255, 128, 128)","IN":1},{"X":150,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":4,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":6,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":5,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":9,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":7,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":8,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":10,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":4,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":5,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":6,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":7,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":7,"col":"55003606","color":"rgba(0,0,0,0)","IN":2,"script":2},{"X":148,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":9,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":10,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":10,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":12,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":12,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":11,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":13,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":12,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":16,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":14,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":15,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":17,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":17,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":16,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":18,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":10,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":11,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":12,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":13,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":11,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":10,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":10,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":12,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":13,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":14,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":14,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":15,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":16,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":16,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":15,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":15,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":17,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":17,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":17,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":17,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":17,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":18,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":18,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":18,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":18,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":18,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":18,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":19,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":20,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":21,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":21,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":21,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":21,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":21,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":21,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":21,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":22,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":22,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":22,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":22,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":22,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":19,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":19,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":20,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":18,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":18,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":17,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":22,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":21,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":20,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":19,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":19,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":20,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":21,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":22,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":22,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":21,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":20,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":20,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":19,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":19,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":22,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":21,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":22,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":155,"Y":19,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":156,"Y":19,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":148,"Y":22,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":23,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":25,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":26,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":26,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":25,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":27,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":27,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":28,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":28,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":26,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":27,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":28,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":28,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":27,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":26,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":26,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":27,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":28,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":25,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":24,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":26,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":147,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":32,"col":"11002160","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":7,"col":"00000000","color":"rgb(255, 255, 0)","IN":0},{"X":26,"Y":7,"col":"00000000","color":"rgb(255, 255, 0)","IN":0},{"X":30,"Y":7,"col":"00000000","color":"rgb(255, 255, 0)","IN":0},{"X":34,"Y":7,"col":"00000000","color":"rgb(255, 255, 0)","IN":0},{"X":158,"Y":33,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":33,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":34,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":34,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":35,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":35,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":38,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":40,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":40,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":156,"Y":41,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":157,"Y":41,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":41,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":43,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":47,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":48,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":48,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":48,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":153,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":49,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":154,"Y":49,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":40,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":39,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":38,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":37,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":36,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":35,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":34,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":33,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":33,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":34,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":35,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":36,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":37,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":38,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":39,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":152,"Y":40,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":38,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":32,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":158,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":29,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":30,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":31,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":32,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":28,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":27,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":159,"Y":26,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":140,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":141,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":142,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":143,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":144,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":145,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":146,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":147,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":148,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":149,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":150,"Y":49,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":49,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":133,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":132,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":131,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":130,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":129,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":129,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":130,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":131,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":132,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":133,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":49,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":151,"Y":49,"col":"99993400","color":"rgba(0,0,0,0)","IN":2,"script":1},{"X":127,"Y":49,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":134,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":135,"Y":43,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":136,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":137,"Y":44,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":138,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":127,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":43,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":125,"Y":44,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":126,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":125,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":124,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":122,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":121,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":124,"Y":49,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":122,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":121,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":49,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":123,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":124,"Y":42,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":119,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":118,"Y":43,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":117,"Y":44,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":116,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":115,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":114,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":111,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":110,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":109,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":108,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":107,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":111,"Y":49,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":105,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":106,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":114,"Y":44,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":113,"Y":43,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":112,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":104,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":103,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":103,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":104,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":115,"Y":52,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":115,"Y":56,"col":"55003606","color":"rgba(0,0,0,0)","IN":2,"script":2},{"X":100,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":99,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":98,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":97,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":96,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":95,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":101,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":101,"Y":49,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":94,"Y":48,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":93,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":92,"Y":48,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":93,"Y":49,"col":"00000640","color":"rgba(0,0,0,0)","IN":1},{"X":92,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":49,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":49,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":48,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":48,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":91,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":45,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":90,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":43,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":40,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":40,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":48,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":48,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":47,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":46,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":46,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":43,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":41,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":40,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":44,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":49,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":51,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":51,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":51,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":44,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":45,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":46,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":47,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":48,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":49,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":46,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":45,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":44,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":44,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":45,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":46,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":47,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":48,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":49,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":44,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":44,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":50,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":51,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":50,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":51,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":52,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":52,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":52,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":54,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":55,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":54,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":55,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":57,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":58,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":86,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":87,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":89,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":85,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":84,"Y":59,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":59,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":57,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":57,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":56,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":55,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":58,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":79,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":54,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":53,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":52,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":51,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":52,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":53,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":54,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":51,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":50,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":49,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":49,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":50,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":48,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":48,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":47,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":46,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":46,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":46,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":47,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":82,"Y":48,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":83,"Y":46,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":77,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":78,"Y":53,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":80,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":54,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":57,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":76,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":75,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":73,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":74,"Y":59,"col":"00000370","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":57,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":49,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":58,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":53,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":41,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":41,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":41,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":40,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":88,"Y":49,"col":"99993400","color":"rgba(0,0,0,0)","IN":2,"script":1},{"X":57,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":48,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":45,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":41,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":53,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":53,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":53,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":51,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":52,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":66,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":37,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":67,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":68,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":69,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":70,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":71,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":72,"Y":38,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":49,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":50,"Y":53,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":50,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":45,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":53,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":54,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":43,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":55,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":56,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":45,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":58,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":57,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":59,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":43,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":46,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":44,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":44,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":43,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":42,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":45,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":43,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":42,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":41,"Y":42,"col":"31311200","color":"rgba(0,0,0,0)","IN":2,"script":3},{"X":40,"Y":41,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":41,"Y":41,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":41,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":41,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":40,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":37,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":39,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":36,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":37,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":36,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":39,"Y":37,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":50,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":52,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":52,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":45,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":47,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":47,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":46,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":45,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":44,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":52,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":52,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":52,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":52,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":49,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":48,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":38,"Y":37,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":40,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":40,"col":"55003606","color":"rgba(0,0,0,0)","IN":2,"script":2},{"X":36,"Y":37,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":37,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":42,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":40,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":40,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":39,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":59,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":58,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":57,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":56,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":55,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":54,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":49,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":28,"Y":39,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":37,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":40,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":38,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":50,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":44,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":49,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":44,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":43,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":42,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":43,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":40,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":44,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":46,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":47,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":48,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":46,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":45,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":52,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":51,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":50,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":50,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":47,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":49,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":30,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":46,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":45,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":47,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":48,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":31,"Y":44,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":53,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":54,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":55,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":55,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":56,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":57,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":54,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":53,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":53,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":54,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":35,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":34,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":58,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":36,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":37,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":33,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":32,"Y":59,"col":"00000470","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":44,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":44,"col":"11111700","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":43,"col":"11111610","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":43,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":20,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":42,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":41,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":21,"Y":40,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":22,"Y":38,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":40,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":37,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":40,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":38,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":39,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":40,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":48,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":49,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":49,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":48,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":46,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":47,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":48,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":46,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":47,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":48,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":49,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":49,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":49,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":49,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":48,"col":"00000000","color":"rgb(4, 4, 4)","IN":0},{"X":5,"Y":47,"col":"00000000","color":"rgb(4, 4, 4)","IN":0},{"X":5,"Y":46,"col":"00000000","color":"rgb(4, 4, 4)","IN":0},{"X":6,"Y":46,"col":"88883500","color":"rgb(4, 4, 4)","IN":2,"script":1},{"X":6,"Y":47,"col":"00000000","color":"rgb(4, 4, 4)","IN":0},{"X":6,"Y":48,"col":"00000000","color":"rgb(4, 4, 4)","IN":0},{"X":11,"Y":50,"col":"11111520","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":50,"col":"11111520","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":46,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":47,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":49,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":51,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":50,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":48,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":51,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":50,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":49,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":48,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":47,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":46,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":52,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":53,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":15,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":14,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":16,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":17,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":18,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":19,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":54,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":55,"col":"00000850","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":54,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":55,"col":"00000400","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":3,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":58,"col":"11111520","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":57,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":56,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":56,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":57,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":58,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":0,"Y":59,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":58,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":59,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":1,"Y":57,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":2,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":57,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":57,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":57,"col":"00000310","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":57,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":13,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":58,"col":"11111520","color":"rgba(0,0,0,0)","IN":1},{"X":4,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":59,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":12,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":58,"col":"11111520","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":58,"col":"11111520","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":53,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":25,"Y":52,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":26,"Y":51,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":27,"Y":50,"col":"11111720","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":53,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":53,"col":"10002330","color":"rgba(0,0,0,0)","IN":1},{"X":23,"Y":54,"col":"00000440","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":54,"col":"00000540","color":"rgba(0,0,0,0)","IN":1},{"X":24,"Y":57,"col":"55003606","color":"rgba(0,0,0,0)","IN":2,"script":2},{"X":93,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":94,"Y":44,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":95,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":96,"Y":43,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":97,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":98,"Y":44,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":99,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":100,"Y":44,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":101,"Y":45,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":81,"Y":47,"col":"00000510","color":"rgba(0,0,0,0)","IN":1},{"X":5,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":6,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":7,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":10,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":11,"Y":56,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":9,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":8,"Y":58,"col":"00000180","color":"rgba(0,0,0,0)","IN":1},{"X":60,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":61,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":62,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":63,"Y":42,"col":"00000070","color":"rgba(0,0,0,0)","IN":1},{"X":64,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":41,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":65,"Y":42,"col":"00000150","color":"rgba(0,0,0,0)","IN":1},{"X":29,"Y":42,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":28,"Y":42,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":30,"Y":42,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":31,"Y":42,"col":"10002430","color":"rgba(0,0,0,0)","IN":1,"script":6},{"X":111,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":120,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":122,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":128,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":133,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":139,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1},{"X":102,"Y":46,"col":"66661A40","color":"rgba(0,0,0,0)","IN":1}
],
Levelsprites: [
{"X":2035,"Y":407,"xPrint":1017.5,"yPrint":907.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":1,"col":"661132103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":3041,"Y":399,"xPrint":1520.5,"yPrint":903.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":1,"col":"661132103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":2385,"Y":399,"xPrint":1192.5,"yPrint":903.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":1,"col":"661132103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":4408,"Y":-34,"xPrint":2204,"yPrint":687,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":4162,"Y":20,"xPrint":2081,"yPrint":714,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":3068,"Y":120,"xPrint":1534,"yPrint":764,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":2634,"Y":130,"xPrint":1317,"yPrint":769,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":2896,"Y":-48,"xPrint":1448,"yPrint":680,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":1920,"Y":156,"xPrint":960,"yPrint":782,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":1694,"Y":62,"xPrint":847,"yPrint":735,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":1478,"Y":146,"xPrint":739,"yPrint":777,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":4726,"Y":-454,"xPrint":2363,"yPrint":477,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":4968,"Y":-282,"xPrint":2484,"yPrint":563,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":4926,"Y":-578,"xPrint":2463,"yPrint":415,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":4605,"Y":-1237,"xPrint":2302.5,"yPrint":85.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":3,"col":"661122103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":4086,"Y":-1288,"xPrint":2043,"yPrint":60,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":4402,"Y":-1388,"xPrint":2201,"yPrint":10,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":4864,"Y":-1296,"xPrint":2432,"yPrint":56,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":3385,"Y":-1263,"xPrint":1692.5,"yPrint":72.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":3,"col":"661122103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":3708,"Y":-1382,"xPrint":1854,"yPrint":13,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":3308,"Y":-1238,"xPrint":1654,"yPrint":85,"width":128,"height":128,"widthPrint":64,"heightPrint":64,"script":0,"col":"000000000","img":3,"IN":"11000","XV":0,"YV":0},{"X":3187,"Y":-1285,"xPrint":1593.5,"yPrint":61.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":3,"col":"661122103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":3119,"Y":-1285,"xPrint":1559.5,"yPrint":61.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":3,"col":"661122103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":3045,"Y":-1287,"xPrint":1522.5,"yPrint":60.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":3,"col":"661122103","img":2,"IN":"22300","XV":-1,"YV":8},{"X":2590,"Y":-1026,"xPrint":1295,"yPrint":191,"width":84,"height":84,"widthPrint":42,"heightPrint":42,"script":2,"col":"661132103","img":2,"IN":"21100","XV":-1,"YV":8},{"X":2258,"Y":-958,"xPrint":1129,"yPrint":225,"width":84,"height":84,"widthPrint":42,"heightPrint":42,"script":2,"col":"661132103","img":2,"IN":"21100","XV":-1,"YV":8},{"X":1885,"Y":-837,"xPrint":942.5,"yPrint":285.5,"width":42,"height":42,"widthPrint":21,"heightPrint":21,"script":1,"col":"661132103","img":2,"IN":"22300","XV":-1,"YV":8}
]
}


