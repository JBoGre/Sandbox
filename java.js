const table = document.getElementById("screen")
const eraser = document.getElementById("eraser")
const hand = document.getElementById("hand")
const Gotero = document.getElementById("gotita")
const flag = document.getElementById("banderin")
const but2 = document.getElementById("saved")
const but4 = document.getElementById("start")                                            
const depot = document.getElementById("depot")
const CutS = document.getElementById("colideS")
const CutF = document.getElementById("colideF")
const RC1 = document.getElementById("color1")
const RC2 = document.getElementById("color2")
const RC3 = document.getElementById("color3")
const loadbut = document.getElementById("load")
const savebut = document.getElementById("save")
const chekbox = document.querySelectorAll(".chek") 
const time = document.getElementById("p")
const mid = document.getElementById("blockC4")
const butup = document.getElementById("up")
const butdw = document.getElementById("down")
const butleft = document.getElementById("derecha")
const butrigth = document.getElementById("izquierda")
const controladores = document.getElementById("controladores")
const pestana = document.getElementById("controladores3")
const ancho = table.style.width
const largo = table.style.height
const LVselector = document.getElementById("selector-nivel")
const chalkboard = document.getElementById("characters")
flag.addEventListener("click",() =>{
DrawMode = 7
DrawsModes[7].Started()
})
eraser.addEventListener("click",() =>{
DrawMode = 1
DrawsModes[1].Started()
})
Gotero.addEventListener("click",() =>{
DrawMode = 6
DrawsModes[6].Started()
})
hand.addEventListener("click",() =>{
DrawMode = 5
DrawsModes[5].Started()
})
let TouchControls = {
  Left: false,
  Right: false,
  Abuton: false,
  Bbuton: false,
};
/*
document.getElementById("LeftButon").addEventListener("touchstart", () => TouchControls.Left = true );
document.getElementById("LeftButon").addEventListener("touchend", () => TouchControls.Left = false);

document.getElementById("RightButon").addEventListener("touchstart", () => TouchControls.Right = true);
document.getElementById("RightButon").addEventListener("touchend", () => TouchControls.Right = false);

document.getElementById("Abuton").addEventListener("touchstart", () => TouchControls.Abuton = true);
document.getElementById("Abuton").addEventListener("touchend", () => TouchControls.Abuton = false);

document.getElementById("Bbuton").addEventListener("touchstart", () => TouchControls.Bbuton = true);
document.getElementById("Bbuton").addEventListener("touchend", () => TouchControls.Bbuton = false);
*/
const Selection = document.getElementById('selection')
function toggleTopMenu() {
	Selection.classList.toggle('active');
}
const Level_name = document.getElementById("Level_name");
const inputArchivo = document.getElementById("archivoJson");
const cargarJsonBtn = document.getElementById("cargarJson");

        cargarJsonBtn.addEventListener("click", () => {
            const archivo = inputArchivo.files[0];
            if (archivo) {
                const lector = new FileReader();
                lector.onload = function(e) {
                    try {
                        // Parsear el contenido del archivo y reemplazar el array
                        SAVE = JSON.parse(e.target.result);
						 chargeLevelNoTiles()
						 Level_name.value = inputArchivo.files[0].name.slice(0,-5)
                        console.log("Después de cargar el archivo:" );
                    } catch (error) {
                        console.error("Error al cargar el archivo JSON:", error);
                    }
                };
                lector.readAsText(archivo);
            } else {
                alert("Selecciona un archivo primero.");
            }
        });


function cargarJSON(Json) {
      fetch(Json)
        .then(response => {
          if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
          return response.json();
        })
        .then(data => {
			SAVE = data
			chargeLevelNoTiles()
			let Name  = Json.slice(0,-5)
			Name = Name.slice(13)
			Level_name.value  = Name
		})
}
window.addEventListener("beforeunload", function (e) {
    e.preventDefault(); // Requerido para algunos navegadores
    e.returnValue = ""; // Necesario para que aparezca el diálogo en otros
});
var Target = ""

var SkinSelector = document.getElementById("Skin-selector")
var characterSelect = 0
var SkinSelect = 0
	function DrawSelectionsSkins()	{
		SkinSelector.innerHTML = ""
	for(let i = 0; i < characters[characterSelect].Img.length ; i++){
		SkinSelector.innerHTML += "<canvas class = Skins  id = Skin"+i+" onclick=ChangeSkin("+i+") ></canvas>"
	}
	for(let i = 0; i < characters[characterSelect].Img.length ; i++){
	let SkinToPrint = document.getElementById("Skin"+i)
		PrinCharacter(SkinToPrint,characterSelect,i)
	}
	}

function ChangeSkin(Number){
	SkinSelect = Number
	PrinCharacter(chalkboard,characterSelect,SkinSelect)
}
const salvarJsonBtn = document.getElementById("SalvarJson");
       salvarJsonBtn.addEventListener("click", () => {
		   if (Level_name.value.startsWith("(-<= ")) {
			   console.log("codes Active")
			   let Value = Level_name.value.slice(5)
			   Boregito(Value)
		   }else{
		   Save_Level_NoTiles()
		   }
	   })
	   
	   
document.getElementById("arrowRight").addEventListener('click', function() {
	characterSelect += -1
	SkinSelect = 0
	if(characterSelect < 0){characterSelect = characters.length -1 }
	
	PrinCharacter(chalkboard,characterSelect,0)
	
	DrawSelectionsSkins()
})
document.getElementById("arrowLeft").addEventListener('click', function() {
	characterSelect += 1
	SkinSelect = 0
	if(characterSelect >= characters.length ){characterSelect = 0}
	
    PrinCharacter(chalkboard,characterSelect,0)
	
	DrawSelectionsSkins()
})



function PrinCharacter(Canva,Number,Character,){
	let Grid = characters[Number].Grid
	let ctx = Canva.getContext("2d");
	let image = new Image();
	image.src = characters[Number].Img[Character];
	let Whit = Math.max(Grid[0],Grid[1])
	let X = (Whit - Grid[0]) * 0.5
	let Y = (Whit - Grid[1]) * 0.5
	Canva.width = Whit
	Canva.height = Whit
	image.addEventListener("load", (e) => {
		let ctx = Canva.getContext("2d")
		ctx.drawImage(
			image,
			0,
			0,
			Grid[0],
			Grid[1],
			X,
			Y,
			Grid[0],
			Grid[1],
			)
		}
	)
}

DrawSelectionsSkins()
let margin_v = '0'
const LLY = document.getElementsByClassName("flecha")

var Xmouse = 0
var Ymouse = 0
  
var camX = 0
var camY = 0
var bck = []

var CBC = [[255,255,255],[0,0,0]] 
RC1.value = CBC[1][0]
RC2.value = CBC[1][1]
RC3.value = CBC[1][2]


let PT = document.getElementById("sprites")
let SelectCB = 1
var ALLCB = document.querySelectorAll(".colorR");

ALLCB[1].style.borderColor = "rgb(256,125,0)"

for(let i = 0; i < ALLCB.length ; i++){ 
    ALLCB[i].addEventListener("click", () => {
    	 SelectCB = i
		 ALLCB[0].style.borderColor = "rgb(0,0,0)"
		 ALLCB[1].style.borderColor = "rgb(0,0,0)"
		 ALLCB[i].style.borderColor = "rgb(256,125,0)"
		 RC1.value = CBC[i][0]
		 RC2.value = CBC[i][1]
		 RC3.value = CBC[i][2]
    });
};
ALLCB[0].style.backgroundColor = "#FFF"
ALLCB[1].style.backgroundColor = "#000"
var drawNum = 0 

function CS (range,N){
 	CBC[SelectCB][N] = range.value
   ALLCB[SelectCB].style.backgroundColor = "rgb("+  CBC[SelectCB][0] +","+ CBC[SelectCB][1] +","+ CBC[SelectCB][2] +")"
   DRAWS[drawNum](PT)
}
const DRAWS = [
	function  (b){     
     b.style.backgroundImage = "linear-gradient(180deg,"+ ALLCB[0].style.backgroundColor+","+ALLCB[1].style.backgroundColor+")"	  
		},
	function  (b){
     b.style.backgroundImage = "linear-gradient(90deg,"+ ALLCB[0].style.backgroundColor+","+ALLCB[1].style.backgroundColor+")"	  
		},
	function  (b){
     b.style.backgroundImage = "linear-gradient(45deg,"+ ALLCB[0].style.backgroundColor+","+ALLCB[1].style.backgroundColor+")"	  
		},
		function  (b){
     b.style.backgroundImage = "radial-gradient(circle,"+ ALLCB[0].style.backgroundColor+","+ALLCB[1].style.backgroundColor+")"	  
		},
		function  (b){
     b.style.backgroundImage = "repeating-linear-gradient("+ ALLCB[0].style.backgroundColor+" ,"+ALLCB[1].style.backgroundColor+"50%)"	  
		},
		function  (b){
     b.style.backgroundImage = "repeating-linear-gradient("+ ALLCB[0].style.backgroundColor+" ,"+ALLCB[1].style.backgroundColor+"25%)"	  
		},
		function  (b){
     b.style.backgroundImage = "linear-gradient(180deg,"+ ALLCB[0].style.backgroundColor+"50%,"+ALLCB[1].style.backgroundColor+"50%,"+ALLCB[0].style.backgroundColor+")"	  
		},
	]
	
let ALLDRAWS = document.getElementById("Draw-selector")
function Draw_star (){
for(let i = 0; i < DRAWS.length ; i++){ 
ALLDRAWS.innerHTML += "<canvas class=DRAWING  id=draw"+i+"></canvas>"
DRAWS[i](document.getElementById("draw"+i))
}
for(let i = 0; i < DRAWS.length ; i++){ 
let x = document.getElementById("draw"+i)
DRAWS[i](x)
x.addEventListener("click", () =>{
	drawNum = i
	DRAWS[drawNum](PT)
})
}
}
DRAWS[0](PT)

 const songSelector = document.getElementById("songSelector");
		 
        MusicList.forEach(opcion => {
          let opt = document.createElement("option");
		  opt.className = "Text"
          opt.value = opcion.Crs;
          opt.textContent = opcion.Name;
          songSelector.appendChild(opt);
        });
    const audioPlayer = document.getElementById("audioPlayer");

var LevelSelected = 'Niveles JSON/LEVELNULL.json'
    songSelector.addEventListener("change", function() {
      let selectedSong = this.value;
      if (selectedSong) {
       audioPlayer.src = selectedSong;
	   backgroundMusic.src = selectedSong;
	   backgroundMusicSrc = selectedSong
      } else {
        audioPlayer.pause();
        audioPlayer.src = "";
		backgroundMusic.src = ""
      }
    });
	
	const LevelSelector = document.getElementById("LevelSelector");
	LevelSelector.addEventListener("change", function() {
		 LevelSelected = this.value;
	})

function test (A){
var fileName = "myfile.txt";
js = JSON.stringify(A)
var fileContent =  js
var myFile = new Blob([fileContent], {type: 'text/plain'});
window.URL = window.URL || window.webkitURL;
var dlBtn = document.getElementById("download");
dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
dlBtn.setAttribute("download", fileName);
}
const jN =document.querySelectorAll("canvas");

let sidesX = false
let sidesY = false

let r4 = document.getElementById("r4")
let r5 = document.getElementById("r5")

const k1B = document.getElementById("blockC1");
const k2B = document.getElementById("blockC2");  

function transform_to_image (A){
      var imageURL = A.toDataURL('image/png'); // Convertir canvas a Data URL
      var link = document.createElement('a'); // Crear un enlace <a>
      link.href = imageURL;
      link.download = 'canvas-image.png'; // Nombre del archivo de descarga
      link.click(); // Activar la descarga
}
Draw_star()	

  
const tablestyle =  getComputedStyle(table)
var BlockResolution = 16
var BlockResolutionState = 2
var PLUSRight = document.getElementById("PLUSRight")
var PLUSLeft = document.getElementById("PLUSLeft")

PLUSRight.addEventListener("click", () => {
	
	BlockResolutionState --
	
	if(BlockResolutionState < 0){
		BlockResolutionState = 0
	}else{
	BlockResolutionStates[BlockResolutionState]()
	}
	
})
PLUSLeft.addEventListener("click", () => {
	BlockResolutionState ++
	if(BlockResolutionState > BlockResolutionStates.length -1){
		BlockResolutionState = BlockResolutionStates.length -1
	}else{
	BlockResolutionStates[BlockResolutionState]()
	}
	
})

var BlockResolutionStates = [
function (){
	PLUSRight.style.backgroundPosition = "-64px -16px"
	PLUSLeft.style.backgroundPosition = "-96px -16px"
	change_BlockResolution(8)
},
function (){
	PLUSRight.style.backgroundPosition = "-80px -16px"
	PLUSLeft.style.backgroundPosition = "-96px -16px"
	change_BlockResolution(12)
},
function (){
	PLUSRight.style.backgroundPosition = "-80px -16px"
	PLUSLeft.style.backgroundPosition = "-96px -16px"
	change_BlockResolution(16)
},
function (){
	PLUSRight.style.backgroundPosition = "-80px -16px"
	PLUSLeft.style.backgroundPosition = "-96px -16px"
	change_BlockResolution(24)
},
function (){
	PLUSRight.style.backgroundPosition = "-80px -16px"
	PLUSLeft.style.backgroundPosition = "-64px -16px"
	change_BlockResolution(32)
},
]

function CreateWidth(){
	let screenView = 0
	if(100 >= (extratNumbers(tablestyle.width))*1 || 1000 <= (extratNumbers(tablestyle.width))*1){
		screenView = window.innerWidth
	}else{
		screenView = (extratNumbers(tablestyle.width))*1
	}
	return screenView;
}
function CreateHeight(){
	let screenView = 0
	if(100 >= (extratNumbers(tablestyle.height))*1 || 1000 <= (extratNumbers(tablestyle.height))*1){
		screenView = window.innerHeight
	}else{
		screenView = (extratNumbers(tablestyle.height))*1
	}
	return screenView;
}
 var screenWidth =  CreateWidth()
 var screenHeigth =  CreateHeight()
var GridWidth = (SAVE.X * BlockResolution) 
var GridHeight = (SAVE.Y * BlockResolution) 
const screenWidthHalf = Math.round(screenWidth/2)
const screenHeigthHalf = Math.round(screenHeigth/2)
var screen_resoltion = 16 * BlockResolution
var scale_sprites = 32 / BlockResolution 
var limitXGird = Math.round((GridWidth / BlockResolution)+0.4)
var limitYGird = Math.round((GridHeight / BlockResolution)+0.4)
const limitX = Math.round((screenWidth / 32)+1.4)
const limitY = Math.round((screenHeigth / 32)+1.4)
const limitXHalf = Math.round((limitX / 2)+0)
const limitYHalf = Math.round((limitY / 2)-0.4)
var margin_screen =  GridHeight - screen_resoltion 
//Create_Grid()
//create_table();
var SAVE = window.SAVE
var Tiles = SAVE.tiles
var color_palete = window.Palete
var backgroundMusicTrack = SAVE.backgroundMusicTrack
var LC = SAVE.LevelCol.slice()
var Level_Sprites = SAVE.Levelsprites.slice()
var BackgroundsInLevel = []
var backgroundMusicCollection = []
var TilesCollection = []
var ColorSelected = "#FFF"
var Tileselect = 0
var image_collection = []
var imageCords = [0]
var SoundEffectsCollection = []
var SoundEffectsCords = []
var functions_collection = []
var functionsCords = [1]
var Scrips_collection = []
var ScripsCords = [1]
var backgroundBase = SAVE.StyleBackground
var Limit_Rigth = (32 * limitXGird)*-1
var Limit_Up = (32 * limitYGird)
var Limit_Left = 0
var Limit_Down = 0
var totalprizes = SAVE.totalPrizes
var startX = SAVE.StartX
var startY = SAVE.StartY

var topScreen = (extratNumbers(tablestyle.top))*1
var leftScreen = (extratNumbers(tablestyle.left))*1
document.addEventListener('mousemove', (event) => {
     Xmouse = event.clientX - leftScreen
     Ymouse = event.clientY - topScreen
  });
  
reset_functions_and_scrips()
function chargeLevelNoTiles(){
	AZAR = false
	backgroundMusic.pause();       // Pausa el audio
    backgroundMusic.currentTime = 0; // Reinicia al inicio
	 audioPlayer.pause();
     audioPlayer.src = "";
	if(SAVE.StyleBackground != undefined && SAVE.StyleBackground != ''){
	backgroundBase = SAVE.StyleBackground
	}else{
	backgroundBase = 'linear-gradient(0deg, rgb(0, 0, 255), rgb(0, 255, 255))'	
	}
    color_palete = window.Palete
	backgroundMusicTrack = SAVE.backgroundMusicTrack
	if(SAVE.totalPrizes != null){
	totalprizes = SAVE.totalPrizes
    }else{
	totalprizes = 0
	}
	if(SAVE.StartX != undefined){
	startX = SAVE.StartX
    }else{
		
	startX = 8
	}
	if(SAVE.StartY != undefined){
	startY = SAVE.StartY
    }else{
		
	startY = 8
	}
	Xsize.value = SAVE.X 
	Ysize.value = SAVE.Y 
    LC = SAVE.LevelCol.slice()
	SpritesInGrid = []
	createSpritesInGrid ()
	BackgroundsInLevel = []
    backgroundMusicCollection = []
	for(let i = 0; i < SAVE.backgroundMusic.length ; i++){
	backgroundMusicCollection.push(new Audio(SAVE.backgroundMusic[i]))
	}
	backgroundMusicSrc = SAVE.backgroundMusic[0]
	backgroundMusic = backgroundMusicCollection[backgroundMusicTrack]
    backgroundMusic.loop = true; // Activar reproducción en bucle
	for(let i = 0; i < SAVE.backgroundImages.length ; i++){
	BCC = SAVE.backgroundImages[i]
	BackgroundsInLevel.push(new Background(BCC[0],BCC[1],BCC[2],BCC[3],BCC[4],BCC[5],BCC[6],BCC[7],BCC[8],BCC[9],BCC[10]))
	}
	change_BlockResolution(BlockResolution)
	limits_and_alture()
	buton[1](0)
}
function limits_and_alture(){
	if(SAVE.limit_rigth == false){
	Limit_Rigth = (32 * limitXGird)*-1
		}else{
			if(SAVE.limit_rigth*-32 > screenWidth*-1 ){
				SAVE.CameraX_frese = 1
				Limit_Rigth = (32 * limitXGird)*-1
			}else{
				Limit_Rigth =  SAVE.limit_rigth*-32
			}
	}
	if(SAVE.limit_up == false){
		Limit_Up = (32 * limitYGird)
		}else{
			if(SAVE.limit_up*32 < screenHeigth ){
				SAVE.CameraY_frese = 1
				Limit_Up = (32 * limitYGird)
			}else{
				Limit_Up =  SAVE.limit_up*32
			}
	}
	if(SAVE.X == undefined || SAVE.X == 0 ){
	SAVE.X = limitXGird
	}
	if(SAVE.Y == undefined || SAVE.Y == 0 ){
	SAVE.Y = limitYGird
	}	
}
function reset_functions_and_scrips(){
functions_collection = [
{
Action: function Action(Tile,player) {},
Loop: function Loop (Tile,player) {"nothing"},
},
]
 functionsCords = [1]
Scrips_collection = [
{
Action: function Action(sprite,i) {
	sprite.live = 0
},
Loop: function Loop (sprite,player1,player2,tiles,i){
	PreProgramedMode(sprite,player1)
    },
RenderMode: function RenderMode (ctx,Sprite) {
	PreRenderMode(ctx,Sprite)
}
},
]
ScripsCords = [1]
}
Xsize = document.getElementById("Xsize")
Ysize = document.getElementById("Ysize")

function change_Size(X,Y){
	SAVE.X = X*1
	SAVE.Y = Y*1
	SAVE.limit_rigth = X *1;
	SAVE.limit_up = Y *1;
	Limit_Up = Y *32
	Limit_Rigth = X*32
	limits_and_alture()
	change_BlockResolution(BlockResolution)
}
function change_BlockResolution(Number){
BlockResolution = Number
scale_sprites = 32 / BlockResolution 
GridWidth = SAVE.X * BlockResolution
GridHeight = SAVE.Y * BlockResolution
limitXGird = Math.round((GridWidth / BlockResolution)+0.4)
limitYGird = Math.round((GridHeight / BlockResolution)+0.4)
screen_resoltion = 16 * BlockResolution
margin_screen =  GridHeight - screen_resoltion
createSpritesInGrid()
DrawGirdTiles(Grid)
DrawGirdSprites(GridSprites)
}
function Save_Level_NoTiles(){
	const {tiles, ... SAVEcopy} = SAVE
	SAVEcopy.backgroundMusic =[ backgroundMusicSrc]
	SAVEcopy.StartX = startX
	SAVEcopy.StartY = startY
	SAVEcopy.totalPrizes = totalprizes
	SAVEcopy.StyleBackground = backgroundBase
	SAVEcopy.LevelCol = LC
	SAVEcopy.Levelsprites = SpritesInGrid
	Array_to_JSON(SAVEcopy)
}
function Array_to_JSON(Array){
// Convertir el array de objetos a JSON
let datosJSON = JSON.stringify(Array, null, 2);

// Crear un Blob con el contenido JSON
let blob = new Blob([datosJSON], { type: "application/json" });

// Crear enlace para descargar el archivo
let enlace = document.createElement("a");
enlace.href = URL.createObjectURL(blob);
enlace.download = Level_name.value;

// Simular clic en el enlace para iniciar descarga
enlace.click();

// Liberar memoria
URL.revokeObjectURL(enlace.href);
}


const palete = document.getElementById("colors")

function create_palete() {
	for(let i = 0; i < color_palete.length ; i++){
		palete.innerHTML += "<div class=MBLOCK style=background-color:"+color_palete[i]+" > </div>"
	}
	const ColorBlocks = document.querySelectorAll('.MBLOCK')
	ColorBlocks.forEach(ColorBlock => {
      ColorBlock.addEventListener('click', () => {
		  ColorSelected = ColorBlock.style.backgroundColor
		  if(DrawMode != 3){
		  DrawMode = 0
		  
		  }
		  DrawsModes[0].Started()
		      });
    });
}
function code(){
	let code = ""
for(let i = 0; i < 256 ; i++){
	code += RandomNumber(0,1)
}
return binarioALetras(code)
}

function RandomNumber(Min,Max){
	let MaxNumber = Max - Min
	 return (Math.round(Math.random()*MaxNumber)) + Min
}
function binarioALetras(binario) {

    let bloques = binario.match(/.{1,8}/g);

    let texto = bloques.map(bloque => String.fromCharCode(parseInt(bloque, 2))).join('');

    return texto;
}
const Tileset = document.getElementById("tiles")
function CreateTiles (){
	for(let i = 0; i < Tiles.length ; i++ ){
		let innerHTML = ""
		let heigth = Math.round((Tiles[i].objects.length / 8)+0.4) + 1
		
		for(let I = 0; I < Tiles[i].objects.length ; I++ ){
		innerHTML += "<canvas class=TBLOCK id = "+ i +" accessKey="+I+"></canvas>"
		}
		
		Tileset.innerHTML += 
		"<div style= font-size:32px;height:"+heigth+"em;width:8em;>"+
		"<p style= font-size:32px;height:1em;width:8em;margin:0em;>"+Tiles[i].Name+"</p>"
		+innerHTML+
		"</div>"
	}
	let object = []
	XG = 0
	YG = 0
	const TilesBlocks = document.querySelectorAll('.TBLOCK')
	TilesBlocks.forEach(TilesBlock => {
	object = Tiles[TilesBlock.id].objects[TilesBlock.accessKey]
	if(object[0] == "Tile"){
      TilesBlock.addEventListener('click', () => {
		  Tileselect = Tiles[TilesBlock.id].objects[TilesBlock.accessKey].slice()
		  Tileselect[2] += imageCords[TilesBlock.id]
		   if(Tileselect[4] == undefined){
		   Tileselect[4] == 0
	        }else{
		   Tileselect[4] += functionsCords[TilesBlock.id]
	       }
		  DrawMode = 2
		  DrawsModes[2].Started()
		      });
	   TilesBlock.width = 32
	   TilesBlock.height = 32
	   XG = ( "0x"+object[3][5])* 32
	   YG = ( "0x"+object[3][6])* 32
	  let ctx = TilesBlock.getContext("2d");
	  ctx.drawImage(image_collection[object[2] + imageCords[TilesBlock.id]],XG,YG,32,32, 0,0,32,32)
	}else{
		TilesBlock.addEventListener('click', () => {
		Tileselect = Tiles[TilesBlock.id].objects[TilesBlock.accessKey].slice()
		if(Tileselect[3] == "#"){
			Tileselect[3] = 0
		}else{
			Tileselect[3] += ScripsCords[TilesBlock.id]
		}
		Tileselect[5] += imageCords[TilesBlock.id]
		 DrawMode = 4
		 DrawsModes[4].Started()
		});
		TilesBlock.width = object[1]
	    TilesBlock.height = object[2]
		XG = ( "0x"+object[6][1])* object[1]
	    YG = ( "0x"+object[6][2])* object[2]
		let ctx = TilesBlock.getContext("2d");
	    ctx.drawImage(image_collection[object[5] + imageCords[TilesBlock.id]],XG,YG,object[1],object[2], 0,0,object[1],object[2])
	}
    });
} 
const Skins_3x3 = 
[
	{
		X_Grid:0,
		Y_Grid:1,
		Grid:
        [		
		[1,"rgba(0,0,0,0)","11111200",0,0],
		[1,"rgba(0,0,0,0)","11111210",0,0],
		]
	},
	{
		X_Grid:0,
		Y_Grid:1,
		Grid:
        [		
		[1,"rgba(0,0,0,0)","10002220",0,0],
		[1,"rgba(0,0,0,0)","00000230",0,0],
		]
	}
]
function Randomblocks(X,Y,N,Xcoordinate,Ycoordinate) {
	let Xp = Xcoordinate
	if(Xp == undefined){Xp = 0}
	let Yp = Ycoordinate
	if(Yp == undefined){Yp = 0}
	for(let i = 0; i < N ; i++){
    LC.push({
    X : Math.round((Math.random())*X) + Xp,
	Y : Math.round((Math.random())*Y) + Yp,
	col : "11111000",
	color: "rgb("+Math.round((Math.random())*255)+","+Math.round((Math.random())*255)+","+Math.round((Math.random())*255)+")",  
	IN : 0})
	}
}
function fillblock(X,Y,Xcoordinate,Ycoordinate,color,colision,ImageNumber,Script) {
	let Xp = Xcoordinate
	let InicialXp = Xcoordinate
	if(Xp == undefined){Xp = 0}
	let Yp = Ycoordinate 
	if(Yp == undefined){Yp = 0}
	let col = "#fff"
	let colisione = "11111000"
	let ImgN = 0
	let script = 0
	if(colision != undefined){
		 colisione = colision
	}
	if(ImageNumber != undefined){
		 ImgN = ImageNumber
	}
	if(Script != undefined){
		 script = Script
	}
	for(let iy = 0; iy < Y ; iy++){
		for(let ix = 0; ix < X ; ix++){
			if(color == undefined){
			col = "rgb("+Math.round((Math.random())*255)+","+Math.round((Math.random())*255)+","+Math.round((Math.random())*255)+")"
				}else{
			col = color		
				}
			replaceTilePriority(Xp,Yp,true,Yp,colisione,col,ImgN,0)
			Xp ++
			}
		Yp--
		Xp = InicialXp
	}
}
function fillblockImg_3x3(X,Y,Xcoordinate,Ycoordinate,Img,color,colision,XGirdLimit,YGirdLimit,animation,Script) {
	let Xp = Xcoordinate
	let Yp = Ycoordinate
	let StarYp = Yp
	
	var XG = parseInt(colision[5], 32)
	let XLimit = XGirdLimit + XG
	
	var YG = parseInt(colision[6], 32)
	let YLimit = YGirdLimit + YG
	let starYG = YG
	
	let col = colision.slice(0,5)
	let type = true
	let alture = Yp
	let downCol = col
	if(colision[4] == 2){
		downCol = "00000"
		type = false
	}
		
	function Yblocks(){
		Yp = StarYp
		YG = starYG
		replaceTilePriority(Xp,Yp,type,alture,col + XG.toString(32) +YG.toString(32)+animation,color,Img,Script)
		Yp--
		YG++
		if(YG > YLimit){YG = YLimit}
		for(let i = 0; i < Y-1 ; i++){
		    replaceTilePriority(Xp,Yp,type,alture,downCol + XG.toString(32) +YG.toString(32)+animation,color,Img,Script)
		    Yp --
		}
		YG ++
		if(YG > YLimit){YG = YLimit}
		replaceTilePriority(Xp,Yp,type,alture,downCol + XG.toString(32) +YG.toString(32)+animation,color,Img,Script)
		Xp ++
	}
		Yblocks()
		XG++
		if(XG > XLimit){XG = XLimit}
	for(let i = 0; i < X-2 ; i++){
		Yblocks()
	}
	    XG++
		if(XG > XLimit){XG = XLimit}
	   Yblocks()
	
}
function createBlocks(Number,Gplus,minX,maxX,minY,maxY,x,y,Xcoordinate,Ycoordinate,Img,color,colision,XGirdLimit,YGirdLimit,animation,Script){
	let Xp = Xcoordinate
	if(Xp == undefined){Xp = 0}
	let Yp = Ycoordinate
	if(Yp == undefined){Yp = 0}
	let Xmult = x
	if(Xmult == undefined || Xmult == false ){Xmult = limitXGird}
	let Ymult = y
	if(Ymult == undefined || Ymult == false ){Ymult = limitYGird}
	for(let i = 0; i < Number ; i++){
	let X = RandomNumber(minX,maxX)
	let Y = RandomNumber(minY,maxY)
	if(Gplus == undefined || Gplus ){
	fillblockImg_3x3(X,Y,(Math.round(Math.random()*Xmult)) + Xp,(Math.round(Math.random()*Ymult)) + Yp,Img,color,colision,XGirdLimit,YGirdLimit,animation,Script)
	}else{
	fillblock(X,Y,(Math.round(Math.random()*Xmult)) + Xp,(Math.round(Math.random()*Ymult)) + Yp,color,colision,animation,Img,Script)
	}
	}
}
function createBlocksPerlin(Number,Gplus,minX,maxX,minY,maxY,x,y,Xcoordinate,Ycoordinate,Img,color,colision,XG,YG,animation,Script){
	let Xp = Xcoordinate
	if(Xp == undefined){Xp = 0}
	let Yp = Ycoordinate
	if(Yp == undefined){Yp = 0}
	let Xmult = x
	if(Xmult == undefined || Xmult == false ){Xmult = limitXGird}
	let Ymult = y
	if(Ymult == undefined || Ymult == false ){Ymult = limitYGird}
	var List = Random_Perlin(Number,Xmult)
	for(let i = 0; i < List.length ; i++){
	let X = 1
	let Y = 1
	if(Gplus == undefined || Gplus ){
	fillblockImg_3x3(X,Y,List[i][0] + Xp,List[i][1] + Yp,Img,color,colision,XG,YG,animation,Script)
	}else{
	fillblock(X,Y,List[i][0] + Xp,List[i][1] + Yp,color,colision + XG + YG + animation,Img,Script)
	}
	}
}
function createBlocksLinear(Number,Gplus,minX,maxX,minY,maxY,x,y,Xcoordinate,Ycoordinate,Img,color,colision,XG,YG,animation,Script){
	let Xp = Xcoordinate
	if(Xp == undefined){Xp = 0}
	let Yp = Ycoordinate
	if(Yp == undefined){Yp = 0}
	let Xmult = x
	if(Xmult == undefined || Xmult == false ){Xmult = limitXGird}
	let Ymult = y
	if(Ymult == undefined || Ymult == false ){Ymult = limitYGird}
	let X = 0
	let Y = 0
	let Xposition = Xp
	for(let i = 0; i < Number ; i++){
	Xposition += X
    X = RandomNumber(minX,maxX)
    Y =  RandomNumber(minX,maxX)
	if(Gplus == undefined || Gplus ){
	fillblockImg_3x3(X,Y,Xposition,Y + Yp,Img,color,colision,XG,YG,animation,Script)
	}else{
	fillblock(X,Y,Xposition,Y + Yp,color,colision + XG + YG + animation,Img,Script)
	}
	Xposition += X
	}
}
function createSprites(Number,x,y,Xcoordinate,Ycoordinate,width,height,script,col,img,RenderMode,XV,YV){
	let Xp = Xcoordinate
	if(Xp == undefined){Xp = 0}else{
	Xp = (Xcoordinate - 1)*32 }
	let Yp = Ycoordinate
	if(Yp == undefined){Yp = 0}else{
	Yp = (Ycoordinate - 1)*-32 }
	let maximumX = x
	if(maximumX == undefined || maximumX == false ){maximumX = (limitXGird - 1)*32
	}else{
	   maximumX = (x - 1)*32	
	}
	let maximumY = y
	if(maximumY == undefined || maximumY == false ){maximumY = (limitYGird - 1)*32
	}else{
	   maximumY = (y - 1)*32	
	}
for(let i = 0; i < Number ; i++){
	let X = (Math.round(Math.random()*maximumX))+Xp
	let Y = (Math.round(Math.random()*maximumY)*-1 +512)+Yp
	SpritesInGrid.push({
		X:X,
		Y:Y,
		xPrint:X/scale_sprites,
		yPrint:(Y/scale_sprites)+margin_screen,
		width:width,
		height:height,
		widthPrint:width/scale_sprites,
		heightPrint:height/scale_sprites ,
		script:script,
		col:col,
		img:img,
		IN:RenderMode,
		XV:XV,
		YV:YV,
		})
}
return true
}
function createSprites_No_in_solid(Number,x,y,Xcoordinate,Ycoordinate,width,height,script,col,img,RenderMode,XV,YV){
let No_a_block = false
for(let i = 0; i < Number ; i++){
	 No_a_block = false
for(let i = 0; i < 2 ; i++){
X = RandomNumber(Xcoordinate,Xcoordinate+x)
Y = RandomNumber(Ycoordinate,Ycoordinate+y)
 result = LC.find(LC => LC.X == X && LC.Y == Y -1  );
	   if(result == undefined){
		    No_a_block = true
			i = 12
	   }else{
		   if(result.col[4] != 1){
			No_a_block = true
			i = 12   
		   }
	   }
	   
}
if(No_a_block){
 X = X*32
 Y = Y*-32 + 512
	SpritesInGrid.push({
		X:X,
		Y:Y,
		xPrint:X/scale_sprites,
		yPrint:(Y/scale_sprites)+margin_screen,
		width:width,
		height:height,
		widthPrint:width/scale_sprites,
		heightPrint:height/scale_sprites ,
		script:script,
		col:col,
		img:img,
		IN:RenderMode,
		XV:XV,
		YV:YV,
		})
}
}
}
function extratNumbers(text) {
  return text.replace(/[^0-9]/g, '');
}
function replaceTile (lastXcord,lastYcord){  
	  let result = undefined
	 result = LC.find(LC => LC.X === lastXcord && LC.Y === (limitYGird -1) - lastYcord );
	   if(result == undefined){
		   LC.push({
			   X: lastXcord ,
			   Y: (limitYGird -1) - lastYcord,
			   col:Tileselect[3],
			   color:Tileselect[1],
			   IN: Tileselect[2],
			   script :Tileselect[4],
			   })
			   if(Tileselect[3][4] == 3 && (Tileselect[3][0] == 5 || Tileselect[3][1] == 5)){
		       totalprizes += 1
	           }
	   }else{
		  result.script = Tileselect[4],
		  result.col =  Tileselect[3]
		  if(Tileselect[1] != 'rgba(0,0,0,0)'){
		  result.color =  Tileselect[1]
		  }
		  result.IN = Tileselect[2]
		  if(result.col[4] != 3 && (result.col[0] != 5 && result.col[1] != 5)){
			  if(Tileselect[3][4] == 3 && (Tileselect[3][0] == 5 || Tileselect[3][1] == 5)){
		       totalprizes += 1
			   console.log(totalprizes)
	           }
	           }
	   }  
	}
function replaceTilePriority(lastXcord,lastYcord,type,maxALture,col,color,IN,script){  
	  let result = undefined
	 result = LC.find(LC => LC.X == lastXcord && LC.Y == lastYcord );
	   if(result == undefined){
		   LC.push({
			   X: lastXcord ,
			   Y: lastYcord,
			   col:col,
			   color:color,
			   IN: IN,
			   script :script,
			   alt:maxALture,
			   })
	   }else{
		   if(type){
			   if(result.col[4] != 1 || (maxALture >= result.alt)){
          result.script = script
		  result.col =  col
		  result.IN = IN
		  result.color = color
		  result.alt = maxALture
				}					
		   }else{
			   if(maxALture <= result.alt && result.col[4] != 1 ){  
          result.script = script
		  result.col =  col
		  result.IN = IN
		  result.color = color
		  result.alt = maxALture
		   }
	   }  
	}
}
function Push_sprite_Nosolid(Number,width,height,script,col,img,RenderMode,XV,YV){
	let X;
	let Y;
	let result;
for(let i = 0; i < Number ; i++){
  for(let i = 0; i < 10 ; i++){
	 X = Math.round(Math.random()*limitXGird)
	 Y = Math.round(Math.random()*limitYGird)
	result = LC.find(LC => LC.X === X && LC.Y === (limitYGird -1) - Y );
	if(result == undefined){
		Level_Sprites.push({X: X*32,Y:(Y*32)*-1 + 512  , width:width,height:height,script:script,col:col,img:img,IN:RenderMode,XV:XV,YV:YV})
		i = 11
	}else{
		if(result.col[4] != 1){
		Level_Sprites.push({X: X*32,Y:(Y*32)*-1 + 512, width:width,height:height,script:script,col:col,img:img,IN:RenderMode,XV:XV,YV:YV})	
		i = 11
		}
	}
 }
}
}

class SmoothNoise1D {
  constructor(seed = Math.random()) {
    this.gradients = {};
    this.seed = seed;
  }

  randomGradient(x) {
    const key = Math.floor(x);
    if (!(key in this.gradients)) {
      // Pseudo-random con base en la semilla y posición
      const angle = this.hash(key) * 2 * Math.PI;
      this.gradients[key] = Math.cos(angle); // 1D: usar sólo x
    }
    return this.gradients[key];
  }

  hash(n) {
    // Simple función hash determinista
    let x = Math.sin(n * 9999 + this.seed * 10000) * 43758.5453;
    return x - Math.floor(x);
  }

  fade(t) {
    // Curva suave tipo Perlin
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(a, b, t) {
    return a + (b - a) * t;
  }

  get(x) {
    const x0 = Math.floor(x);
    const x1 = x0 + 1;

    const t = x - x0;

    const g0 = this.randomGradient(x0);
    const g1 = this.randomGradient(x1);

    const d0 = g0 * (x - x0);
    const d1 = g1 * (x - x1);

    const smoothT = this.fade(t);
    return this.lerp(d0, d1, smoothT); // Resultado entre -1 y 1
  }
}
const A_noise = new SmoothNoise1D();
const B_noise = new SmoothNoise1D();
function Random_Perlin(Count,Max){
	var A_val = 0
	var A_inVal = 0
	var B_val = 0
	var B_inVal = 0
	var List = []
for (let i = 0; i < Count; i++) {
  var x = i * 0.2;
  var y = i * 0.2;
   A_val = A_noise.get(x); // entre -1 y 1
   A_inVal = Math.floor((A_val + 1) / 2 * Max); 
   B_val = B_noise.get(y); // entre -1 y 1
   B_inVal = Math.floor((B_val + 1) / 2 * Max); 
  List.push([A_inVal,B_inVal])
}
return List
}
const RandomLevelConfiguration = [
	function(){ //Normal  0
	Solids = 100	
	SolidRange = [3,8,3,16]
	SemiSolids = 300
	SemiSolidRange = [3,8,3,16]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ // Big Level 1
	Solids = 200	
	SolidRange = [3,16,3,16]
	SemiSolids = 300
	SemiSolidRange = [3,16,3,16]
	Azar_Level_width = 256
	Azar_Enemies_Multiplicater = 2
	},
	function(){ // Big Solids 2
	Solids = 20	
	SolidRange = [32,64,32,64]
	SemiSolids = 300
	SemiSolidRange = [3,16,3,16]
	Azar_Level_width = 256
	Azar_Enemies_Multiplicater = 2
	},
	function(){ //Only Semi Solids 3
	Solids = 0 
	SolidRange = [3,8,3,16]
	SemiSolids = 500
	SemiSolidRange = [1,8,1,16]
	Azar_Level_height = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ //Only Solids 4
	Solids = 300
	SolidRange = [2,8,2,8]
	SemiSolids = 0
	SemiSolidRange = [3,16,3,16]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ //Points 5
	Solids = 500
	SolidRange = [1,1,1,1]
	SemiSolids = 500
	SemiSolidRange = [1,1,1,1]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ //Line 6
	Solids = 100
	SolidRange = [1,1,3,16]
	SemiSolids = 300
	SemiSolidRange = [3,16,1,1]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ //Line and points 7
	Solids = 300
	SolidRange = [1,1,3,16]
	SemiSolids = 300
	SemiSolidRange = [1,1,1,1]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ //Points and Lines 8 
	Solids = 300
	SolidRange = [1,1,1,1]
	SemiSolids = 100
	SemiSolidRange = [32,32,1,1]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ //Only Points 9
	Solids = 0
	SolidRange = [1,1,1,1]
	SemiSolids = 1000
	SemiSolidRange = [1,1,1,1]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
	function(){ //Random
	let Solid = RandomNumber(1,16)
	let SemiSolid = RandomNumber(1,16)
	Solids = 100
	SolidRange = [Solid,Solid,Solid,Solid]
	SemiSolids =  100
	SemiSolidRange = [SemiSolid,SemiSolid,SemiSolid,SemiSolid]
	Azar_Level_width = 128
	Azar_Enemies_Multiplicater = 1
	},
]
function Azar_floor_dificult (floor) {
	Azar_Level_height = 128 + floor * 64
	Azar_Enemies = 150 + floor* 50
    Azar_floor = floor
}
var Solids = 100
var SolidRange = [3,8,3,16] // solid MinX MaxX MinY MaxY
var SemiSolids = 300
var SemiSolidRange = [3,8,3,16] // Semisolid MinX MaxX MinY MaxY
var Azar_Level_width = 128
var Azar_Level_height = 128
var Azar_floor = 1
var Azar_Stars = 10
var Azar_Enemies = 200
var Azar_Enemies_Multiplicater = 1
var LavaVelocity = -1
var SkinLevel = 0
var SkinS = SkinLevel
var SkinSS = SkinLevel
var LevelType = 2
var SkinLevel = 0
function Azar_Level(){
	AZAR = true
	LC = []
	 Avoid_undefined_in_Azar()
	SAVE.Levelsprites = []
	Sprite_Collection = []
	SpritesInGrid = []
	startX  = 8
	startY  = 3
	SAVE.X = Azar_Level_width
	SAVE.Y = Azar_Level_height
	Limit_Up = false
	Limit_Rigth = Azar_Level_width * -32
	Azar_Create_Solid_SemiSolid()
	
	Azar_Create_Sprites()
	createSprites_No_in_solid(Azar_Stars,SAVE.X-16,3,16,SAVE.Y-2,32,32,18,"110020011",2,"67062",4,1)
	effects_in_game = []
	effects_in_game.push(new effect(2,LavaTexture,32,32,true,0,true,LavaVelocity*32,0,LavaVelocity))
	change_BlockResolution(BlockResolution);
}	
function Avoid_undefined_in_Azar(){
	if(LevelType == undefined){
		RandomLevelConfiguration[ RandomNumber(0,RandomLevelConfiguration.length -1 )]()
	}else{
		RandomLevelConfiguration[LevelType]()
	}
	if(SkinLevel == undefined){
		let Skin = RandomNumber(1,7)
		SkinS = Skin
		SkinSS = Skin
	}else{
		SkinS = SkinLevel
		SkinSS = SkinLevel
	}
}	
function Azar_Create_Sprites(){
	let count = Math.round(Azar_Enemies*Azar_Enemies_Multiplicater  / Azar_Sprites.length)
	let Sprite = []
	for(let i = 0; i < Azar_Sprites.length ; i++){
		Sprite = Azar_Sprites[i]
		createSprites_No_in_solid(count,SAVE.X-16,SAVE.Y,16,0,Sprite[0],Sprite[1],Sprite[2],Sprite[3],Sprite[4],Sprite[5],Sprite[6],Sprite[7])
	}
}
var Azar_Sprites =
[
	[32,32,16,"160010000",2,"23900",-2,0],
	[32,32,16,"160010000",2,"24900",2,0],
	[32,32,17,"160010000",2,"25800",2,2]
]
function Azar_Create_Solid_SemiSolid(){
	let count = Math.round((SemiSolids / Azar_SemiSolids.length)+0.4)
	let Solid = []
	for(let i = 0; i < Azar_SemiSolids.length ; i++){
		Solid = Azar_SemiSolids[i]
		createBlocks(
			count,true,
			SemiSolidRange[0],SemiSolidRange[1],SemiSolidRange[2],SemiSolidRange[3],
			SAVE.X,SAVE.Y-4,16,0,
			Solid[0],Solid[1],Solid[2],Solid[3],Solid[4],Solid[5],Solid[6]
		);
	}
	
	fillblockImg_3x3(3,4,13,6,Solid[0],Solid[1],Solid[2],Solid[3],Solid[4],Solid[5],Solid[6])
	fillblockImg_3x3(3,3,13,9,Solid[0],Solid[1],Solid[2],Solid[3],Solid[4],Solid[5],Solid[6])
	
	count = Math.round((Solids / Azar_Solids.length)+0.4)
	Solid = []
	for(let i = 0; i < Azar_Solids.length ; i++){
		Solid = Azar_Solids[i]
		createBlocks(
			count,true,
			SolidRange[0],SolidRange[1],SolidRange[2],SolidRange[3],
			SAVE.X,SAVE.Y-4,16,0,
			Solid[0],Solid[1],Solid[2],Solid[3],Solid[4],Solid[5],Solid[6]
		);
	}
	fillblockImg_3x3(16,3,0,2,Solid[0],Solid[1],Solid[2],Solid[3],Solid[4],Solid[5],Solid[6])
}
var Azar_Solids =
[
	[1,"#FFF","11111200",0,1,0,0],
]
var Azar_SemiSolids =
[
   [1,"#FFF","10002220",0,1,0,0],
];

const Azar_Blocks_Skins = [
	function(){ // Minimalist 0 
	Azar_Solids =[
		[1,"#FFF","11111200",0,1,0,0],
    ]
	Azar_SemiSolids =[
		[1,"#FFF","10002220",0,1,0,0],
    ]
	},
	function(){ // Clasic  1
	Azar_Solids =[
		[8,"rgb(176,96,32)","11111030",2,2,0,0],
    ]
	Azar_SemiSolids =[
		[8,"rgb(88,200,248)","10002630",2,2,0,0], // Block Blue Smb3
		[8,"rgb(248,144,72)","10002930",2,2,0,0], // Block Orange Smb3
		[8,"rgb(224,224,224)","10002C30",2,2,0,0], // Block White Smb3
		[8,"rgb(128,184,80)","10002F30",2,2,0,0], // Block Green Smb3
    ]
    },
		function(){ // Grass  2
	Azar_Solids =[
		[8,"rgb(112,208,80)","11111330",2,2,0,0], // Grass Smb3
    ]
	Azar_SemiSolids =[
		[8,"rgb(88,200,248)","10002630",2,2,0,0], // Block Blue Smb3
		[8,"rgb(248,144,72)","10002930",2,2,0,0], // Block Orange Smb3
		[8,"rgb(224,224,224)","10002C30",2,2,0,0], // Block White Smb3
    ]
    },
	function(){ // UnderGround  3
	Azar_Solids =[
		[8,"rgb(8,57,123)","11111300",2,2,0,0],// UnderGround Smb1
    ]
	Azar_SemiSolids =[
		[8,"rgba(0,0,0,0)","10002F00",2,2,0,0], // Bones Smb1
    ]
    },
	function(){ // Castle  4
	Azar_Solids =[
		[8,"rgb(0,0,0)","11111CF0",2,2,0,0], // Castle SMM
    ]
	Azar_SemiSolids =[
		[8,"rgba(0,0,0,0)","10002FF0",2,2,0,0], // Castle SMM
		[8,"rgba(0,0,0,0)","100029F0",2,2,0,0], // Bones SMM
    ]
    },
	function(){ // All_in_one
	Azar_Solids =[
	[1,"#FFF","11111200",0,1,0,0], //Minimalist Sandbox
	
	[8,"rgb(192,112,32)","11111000",2,2,0,0], // Ground Smb1
	[8,"rgb(8,57,123)","11111300",2,2,0,0],// UnderGround Smb1
	[8,"rgb(239,115,74)","11111000",2,2,0,0], // IceGround Smb1
	[8,"rgb(132,140,123)","11111900",2,2,0,0], // Castle Smb1
	
	[8,"rgb(200,120,48)","11111090",2,2,0,0], // Ground Smb2
	[8,"rgb(200,120,48)","11111690",2,2,0,0], // UnderGround Smb2
	[8,"rgb(144,208,232)","11111990",2,2,0,0], // Ice Smb2
	
	[8,"rgb(176,96,32)","11111030",2,2,0,0], //Ground Smb3
	[8,"rgb(112,208,80)","11111330",2,2,0,0], // Grass Smb3
	
	[8,"rgb(200,152,88)","11111060",2,2,0,0], // Ground SmW
	[8,"rgb(88,112,112)","11111960",2,2,0,0], // UnderGround SmW
	[8,"rgb(120,104,24)","11111C60",2,2,0,0], // Forrest SmW
	[8,"rgb(144,168,176)","11111360",2,2,0,0], // Castel Rock SmW
	[8,"rgb(144,168,176)","11111660",2,2,0,0], // Castel SmW
	[8,"rgb(128,128,200)","11111F60",2,2,0,0], // Special SmW
	
	[8,"rgb(180,106,48)","111110C0",2,2,0,0], // Ground N-Smb1
	
	[8,"rgb(0,0,0)","111110F0",2,2,0,0], // Ground SMM
	[8,"rgb(0,0,0)","111116F0",2,2,0,0], // UnderGround SMM
	[8,"rgb(0,0,0)","11111CF0",2,2,0,0], // Castle SMM
    ]
	Azar_SemiSolids =[
	[1,"#FFF","10002220",0,1,0,0], //Minimalist Sandbox
	
	[8,"rgba(0,0,0,0)","10002C00",2,2,0,0], // Ground Smb1
	[8,"rgba(0,0,0,0)","10002F00",2,2,0,0], // Bones Smb1
	
	[8,"rgb(68,140,8)","10002390",2,2,0,0], //  Ground Smb2
	
	[8,"rgb(88,200,248)","10002630",2,2,0,0], // Block Blue Smb3
	[8,"rgb(248,144,72)","10002930",2,2,0,0], // Block Orange Smb3
	[8,"rgb(224,224,224)","10002C30",2,2,0,0], // Block White Smb3
	[8,"rgb(128,184,80)","10002F30",2,2,0,0], // Block Green Smb3
	
	[8,"rgb(99,43,0)","10002FC0",2,2,0,0], // Ground N-Smb1
	
	[8,"rgba(0,0,0,0)","100023F0",2,2,0,0], // Ground SMM
	[8,"rgba(0,0,0,0)","100029F0",2,2,0,0], // Bones SMM
	[8,"rgba(0,0,0,0)","10002FF0",2,2,0,0], // Castle SMM
    ]
	},
]
 var Grid = null
 var GridSprites = null
 var Pounter = null
 var CTX = S0.getContext("2d");
 S0.width = 256
 S0.height = 256
var ctx = null
 var  ctxSprites = null
 var PounterCTX = null
 CreatreGrid()
 function CreatreGrid(){
	table.innerHTML = "<canvas id=GridSprites class=Grid></canvas><canvas id=Grid class=Grid></canvas><canvas id=Pounter class=Grid></canvas><canvas id=BackgroundGrid class=Grid></canvas>";	
	Grid = document.getElementById("Grid");
    GridSprites = document.getElementById("GridSprites");
	BackgroundGrid = document.getElementById("BackgroundGrid");
	Pounter = document.getElementById("Pounter");
	BackgroundGrid.zIndex = 1
	Grid.style.zIndex = 5
    GridSprites.style.zIndex = 10
	Pounter.style.zIndex = 15
	Grid.height = GridHeight;Grid.width = GridWidth
	BackgroundGrid.height = GridHeight;BackgroundGrid.width = GridWidth
	BackgroundGrid.style.backgroundImage = backgroundBase
	GridSprites.height = GridHeight;GridSprites.width = GridWidth
	Pounter.height = GridHeight;Pounter.width = GridWidth
	ctx = Grid.getContext("2d");
    ctxSprites = GridSprites.getContext("2d");
	PounterCTX = Pounter.getContext("2d");
	Pounter.addEventListener('mousedown', startDrawing);
    Pounter.addEventListener('mousemove', draw);
    Pounter.addEventListener('mouseup', stopDrawing);
    Pounter.addEventListener('mouseout', stopDrawingOut);

}
function startDrawing(event) {
      isDrawing = true;
	  DrawsModes[DrawMode].StarDrawing()
    }
    // Función para dibujar sobre el canvas
    function draw(event) {
		DrawsModes[DrawMode].Pounter()
      if (isDrawing){
	  
	  DrawsModes[DrawMode].Draw()
	  }
    }

    // Función para finalizar el dibujo
    function stopDrawing() {
      isDrawing = false;
	  SpriteSelected = null
	  SpritesMove = null
    }
	
	function stopDrawingOut() {
      isDrawing = false;
	  PounterCTX.clearRect(0,0,GridWidth,GridHeight)
	  if(SpriteSelected != null){
	  SpritesInGrid.splice(SpriteSelected,1)
	  SpriteSelected = null
	  SpritesMove = null
	   DrawGirdSprites()
	  }else{
		  SpriteSelected = null
		  SpritesMove = null
	  }
    }

 

reset_functions_and_scrips()
limits_and_alture()
function Create_functions_and_Scrips(){
	let Cords = 1
for(let I = 0; I < SAVE.tiles.length ; I++){
	   if(SAVE.tiles[I].TileScripts == undefined){
		functionsCords.push(Cords) 
	   }else{
		for(let i = 0; i < SAVE.tiles[I].TileScripts.length ; i++){
	    functions_collection.push(SAVE.tiles[I].TileScripts[i])
	    }
	   Cords += SAVE.tiles[I].TileScripts.length
	   functionsCords.push(Cords)
	   }
	}
Cords = 1
for(let I = 0; I < SAVE.tiles.length ; I++){
	   if(SAVE.tiles[I].SpriteScripts == undefined){
		ScripsCords.push(Cords) 
	   }else{
		for(let i = 0; i < SAVE.tiles[I].SpriteScripts.length ; i++){
	    Scrips_collection.push(SAVE.tiles[I].SpriteScripts[i])
	    }
	   Cords += SAVE.tiles[I].SpriteScripts.length
	   ScripsCords.push(Cords)
	   }
	}
}
function Create_images() {
	BackgroundsInLevel = []
	var BCC = []
	for(let i = 0; i < SAVE.backgroundImages.length ; i++){
	BCC = SAVE.backgroundImages[i]
	BackgroundsInLevel.push(new Background(BCC[0],BCC[1],BCC[2],BCC[3],BCC[4],BCC[5],BCC[6],BCC[7],BCC[8],BCC[9],BCC[10]))
	}
	let Cords = 0
	for(let I = 0; I < SAVE.tiles.length ; I++){
		for(let i = 0; i < SAVE.tiles[I].Images.length ; i++){
	    image_collection.push(new Image())
	    image_collection[image_collection.length  -1].src = SAVE.tiles[I].Images[i]
	   }
	   Cords += SAVE.tiles[I].Images.length
	   imageCords.push(Cords)
	}
	for(let i = 0; i < SAVE.backgroundMusic.length ; i++){
	backgroundMusicCollection.push(new Audio(SAVE.backgroundMusic[i]))
	}
	Cords = 0
	for(let I = 0; I < SAVE.tiles.length ; I++){
		if(SAVE.tiles[I].SoundEffects == undefined){
		SoundEffectsCords.push(Cords) 
	   }else{
		for(let i = 0; i < SAVE.tiles[I].SoundEffects.length ; i++){
	    SoundEffectsCollection.push(new Audio(SAVE.tiles[I].SoundEffects[i]))
	   }
	   Cords += SAVE.tiles[I].SoundEffects.length
	   SoundEffectsCords.push(Cords)
	   }
	}
	HudTEXTURES = new Image()
	HudTEXTURES.src = "texturas/HudTextures.png"
image_collection[image_collection.length -1].addEventListener("load", (e) => {
DrawGirdTiles(Grid)
DrawGirdSprites(GridSprites)
  CreateTiles()
});
}
Create_images()
Create_functions_and_Scrips()
create_palete()
var SpritesInGrid = []

function createSpritesInGrid (){
if(SpritesInGrid.length != 0){
SpritesInGrid = SpritesInGrid.map(Sprites => ({
  ...Sprites, // Copia las propiedades del objeto original
  xPrint: Sprites.X/scale_sprites,  // Agrega una nueva propiedad
  yPrint: (Sprites.Y/scale_sprites)+margin_screen,
  widthPrint: Sprites.width/scale_sprites,
  heightPrint: Sprites.height/scale_sprites,
}));
}else{
SpritesInGrid = SAVE.Levelsprites.map(Sprites => ({
  ...Sprites, // Copia las propiedades del objeto original
  xPrint: Sprites.X/scale_sprites,  // Agrega una nueva propiedad
  yPrint: (Sprites.Y/scale_sprites)+margin_screen,
  widthPrint: Sprites.width/scale_sprites,
  heightPrint: Sprites.height/scale_sprites,
}));
}
}
function CreateSpritesTolevel(){
Sprite_Collection = SpritesInGrid.map(({ xPrint,yPrint,widthPrint,heightPrint,...rest }) =>  ({
...rest,   // Copia las propiedades restantes
  Y:rest.Y += screenHeigth - 512,
}));
}
createSpritesInGrid ()
var SpritesMove = null

function mouseIn (Sprite,X,Y){
	return( X >= Sprite.xPrint && X <= Sprite.xPrint + Sprite.widthPrint &&Y >= Sprite.yPrint && Y <= Sprite.yPrint + Sprite.heightPrint)
}

function DrawGirdTiles (Canvas){
let diference = GridHeight - BlockResolution
	Grid.height = GridHeight;Grid.width = GridWidth
	GridSprites.height = GridHeight;GridSprites.width = GridWidth
	Pounter.height = GridHeight;Pounter.width = GridWidth;
	BackgroundGrid.height = GridHeight;BackgroundGrid.width = GridWidth;
	BackgroundGrid.style.backgroundImage = backgroundBase
ctx.clearRect(0,0,GridWidth,GridHeight)
for(let i = 0; i < LC.length ; i++){
	var XG = (parseInt(LC[i].col[5], 32))*32
	var YG = (parseInt(LC[i].col[6], 32))*32
	ctx.fillStyle = LC[i].color
	ctx.fillRect(LC[i].X*BlockResolution,diference-(LC[i].Y*BlockResolution),BlockResolution,BlockResolution)
	ctx.drawImage(image_collection[LC[i].IN],XG,YG,32,32, LC[i].X*BlockResolution,diference-(LC[i].Y*BlockResolution),BlockResolution,BlockResolution)
}
}
function DrawGirdSprites (Canvas,CanvasSprites){
	ctxSprites.clearRect(0,0,GridWidth,GridHeight)
	for(let i = 0; i < SpritesInGrid.length ; i++){
		Scrips_collection[SpritesInGrid[i].script  ].RenderMode(ctxSprites,SpritesInGrid[i])
    }
let diference = GridHeight - BlockResolution
ctxSprites.drawImage(
	HudTEXTURES,
	96,
	32,
	32,
	32,
	startX*BlockResolution,
	diference-(startY*BlockResolution),
	BlockResolution,
	BlockResolution,
	)
}
let offsetX = 0
let offsetY = 0
let SpriteSelected = null
const DrawsModes = [
   {// Draw Mode 0 
	StarDrawing: function Draw (){
	fillcolor()
	},		
	Draw: function Draw (){
	fillcolor()
	},
	Pounter: function Pounter (){
		PounterCTX.clearRect(lastX, lastY,BlockResolution, BlockResolution);
		lastXcord = Math.floor(event.offsetX / BlockResolution)
	    lastYcord = Math.floor(event.offsetY / BlockResolution)
	    lastX = lastXcord * BlockResolution
	    lastY = lastYcord * BlockResolution
		PounterCTX.globalAlpha = 0.5
	    PounterCTX.fillStyle = ColorSelected
	    PounterCTX.fillRect(lastX,lastY,BlockResolution,BlockResolution)
		PounterCTX.globalAlpha = 1
	},
	Started: function Started (){
		S0.width = 256
        S0.height = 256
		CTX.clearRect(0,0,256,256)
		 CTX.fillStyle = ColorSelected
	     CTX.fillRect(0,0,256,256)
		
	},
   },{// Draw Mode 1
	 StarDrawing: function Draw (){
	deleteTile()
	},		
	Draw: function Draw (){
	deleteTile()
	},
	Pounter: function Pounter (){
		PounterCTX.clearRect(lastX, lastY,BlockResolution, BlockResolution);
		lastXcord = Math.floor(event.offsetX / BlockResolution)
	    lastYcord = Math.floor(event.offsetY / BlockResolution)
	    lastX = lastXcord * BlockResolution
	    lastY = lastYcord * BlockResolution
		PounterCTX.globalAlpha = 0.5
	    PounterCTX.fillStyle = "rgb(0,0,0)"
	    PounterCTX.fillRect(lastX,lastY,BlockResolution,BlockResolution)
		PounterCTX.globalAlpha = 1
	},
	Started: function Started (){
		S0.width = 256
        S0.height = 256
		CTX.clearRect(0,0,256,256)
		CTX.drawImage(HudTEXTURES,64,0,32,32,0,0,256,256)
	},
   },{// Draw Mode 2
	StarDrawing: function Draw (){
	fillBlock()
	},		
	Draw: function Draw (){
	fillBlock()
	},
	Pounter: function Pounter (){
		PounterCTX.clearRect(lastX, lastY,BlockResolution, BlockResolution);
		lastXcord = Math.floor(event.offsetX / BlockResolution)
	    lastYcord = Math.floor(event.offsetY / BlockResolution)
		
	    lastX = lastXcord * BlockResolution
	    lastY = lastYcord * BlockResolution
		PounterCTX.fillStyle = "rgb(0,0,0)"
		PounterCTX.globalAlpha = 0.5
	    PounterCTX.fillStyle = Tileselect[1]
	    PounterCTX.fillRect(lastX,lastY,BlockResolution,BlockResolution)
	     let XG = ( "0x" + Tileselect[3][5]) * 32
	     let YG  = ( "0x" + Tileselect[3][6]) * 32
	    PounterCTX.drawImage(image_collection[Tileselect[2]],XG,YG,32,32,lastX,lastY,BlockResolution,BlockResolution)
		PounterCTX.globalAlpha = 1
	},
	Started: function Started (){
		S0.width = 256
        S0.height = 256
		CTX.clearRect(0,0,256,256)
		let XG = ( "0x" + Tileselect[3][5]) * 32
	     let YG  = ( "0x" + Tileselect[3][6]) * 32
		CTX.fillStyle = Tileselect[1]
		CTX.fillRect(0,0,256,256)
		CTX.drawImage(image_collection[Tileselect[2]],XG,YG,32,32,0,0,256,256)
	},
   },{// Draw Mode 3 
	StarDrawing: function Draw (){
	[lastX, lastY] = [event.offsetX, event.offsetY];
	},	
	Draw: function Draw (){
	  ctx.beginPath();
	   ctx.strokeStyle = ColorSelected
      ctx.moveTo(lastX, lastY);  // Mover el pincel a la última posición
      ctx.lineTo(event.offsetX, event.offsetY);  // Dibujar hasta la nueva posición
      ctx.stroke();
      [lastX, lastY] = [event.offsetX, event.offsetY];  // Actualizar la última posición
	},	
    Pounter: function Pounter (){
	},	
	Started: function Started (){
		S0.width = 256
        S0.height = 256
		CTX.clearRect(0,0,256,256)
		CTX.drawImage(HudTEXTURES,0,64,32,32,0,0,256,256)
		
	},
   },{// Draw Mode 4
	StarDrawing: function Draw (){
	[lastX, lastY] = [event.offsetX, event.offsetY];
	SpriteSelected = null
	SpritesMove = null
	for (let i = 0; i < SpritesInGrid.length; i += 1){
		if(mouseIn(SpritesInGrid[i],lastX,lastY)){
			SpritesMove = SpritesInGrid[i]
			SpriteSelected = i
			offsetX = lastX - SpritesMove.xPrint;
            offsetY = lastY - SpritesMove.yPrint;
		}
	}
	if(SpritesMove == null){
		let Width = Tileselect[1]/scale_sprites
		let Heigth = Tileselect[2]/scale_sprites
		let widthHalf = Width/2
		let heightHalf = Heigth/2
		XG = ( "0x"+Tileselect[6][1])* Tileselect[1]
	    YG = ( "0x"+Tileselect[6][2])* Tileselect[2]
		if(Tileselect[9] == undefined){
			let live = undefined
		}
		SpritesInGrid.push({
		X:(lastX-widthHalf)*scale_sprites,
		Y:((lastY-heightHalf)-margin_screen)*scale_sprites,
		xPrint:lastX-widthHalf,
		yPrint:lastY-heightHalf,
		width:Tileselect[1],
		height:Tileselect[2],
		widthPrint:Width,
		heightPrint:Heigth ,
		script:Tileselect[3],
		col:Tileselect[4],
		img:Tileselect[5],
		IN:Tileselect[6],
		XV:Tileselect[7],
		YV:Tileselect[8],
		})
		DrawGirdSprites()
		PounterCTX.clearRect(lastX-widthHalf,lastY-heightHalf,Width,Heigth)
	}
	},	
	Draw: function Draw (){
	[lastX, lastY] = [event.offsetX, event.offsetY];
	if(SpritesMove != null){
	 SpritesMove.xPrint =  lastX - offsetX
	 SpritesMove.yPrint = lastY - offsetY
	 SpritesMove.X = SpritesMove.xPrint*scale_sprites
	 SpritesMove.Y = (SpritesMove.yPrint-margin_screen)*scale_sprites
     DrawGirdSprites(GridSprites)
	}
	},	
    Pounter: function Pounter (){
		[lastX, lastY] = [event.offsetX, event.offsetY];
		
		if( SpritesMove == null){
		PounterCTX.clearRect(0,0,GridWidth,GridHeight)
		let Width = Tileselect[1]/scale_sprites
		let Heigth = Tileselect[2]/scale_sprites
		let widthHalf = Width/2
		let heightHalf = Heigth/2
		XG = ( "0x"+Tileselect[6][1])* Tileselect[1]
	    YG = ( "0x"+Tileselect[6][2])* Tileselect[2]
		PounterCTX.globalAlpha = 0.5
	    PounterCTX.drawImage(image_collection[Tileselect[5]],XG,YG,Tileselect[1],Tileselect[2], lastX-widthHalf,lastY-heightHalf,Width,Heigth)
	    PounterCTX.globalAlpha = 1
		}else{
			PounterCTX.clearRect(0,0,GridWidth,GridHeight)
		}
	},	
	Started: function Started (){
		CTX.clearRect(0,0,256,256)
		let Whit = Math.max(Tileselect[1],Tileselect[2])
        let X = (Whit - Tileselect[1]) * 0.5
        let Y = (Whit - Tileselect[2]) * 0.5
        S0.width = Whit
        S0.height = Whit
		XG = ( "0x"+Tileselect[6][1])* Tileselect[1]
	    YG = ( "0x"+Tileselect[6][2])* Tileselect[2]
		CTX.drawImage(image_collection[Tileselect[5]],XG,YG,Tileselect[1],Tileselect[2],X,Y,Tileselect[1],Tileselect[2])
	//	S0.width = 256
    //    S0.height = 256
		
	},
   },{// Draw Mode 5
	StarDrawing: function Draw (){
	[lastX, lastY] = [event.offsetX, event.offsetY];
	SpriteSelected = null
	SpritesMove = null
	for (let i = 0; i < SpritesInGrid.length; i += 1){
		if(mouseIn(SpritesInGrid[i],lastX,lastY)){
			SpritesMove = SpritesInGrid[i]
			SpriteSelected = i
			offsetX = lastX - SpritesMove.xPrint;
            offsetY = lastY - SpritesMove.yPrint;
		}
	}
	},	
	Draw: function Draw (){
		[lastX, lastY] = [event.offsetX, event.offsetY];
	if(SpritesMove != null){
	 SpritesMove.xPrint =  lastX - offsetX
	 SpritesMove.yPrint = lastY - offsetY
	 SpritesMove.X = SpritesMove.xPrint*scale_sprites
	 SpritesMove.Y = (SpritesMove.yPrint-margin_screen)*scale_sprites
     DrawGirdSprites(GridSprites)
	}
	},	
    Pounter: function Pounter (){
		
	},	
	Started: function Started (){
		S0.width = 256
        S0.height = 256
		CTX.clearRect(0,0,256,256)
		CTX.drawImage(HudTEXTURES,64,32,32,32,0,0,256,256)
		
	},
   },{// Draw Mode 6
	StarDrawing: function Draw (){
	lastXcord = Math.floor(event.offsetX / BlockResolution)
	lastYcord = Math.floor(event.offsetY / BlockResolution)
		
	lastX = lastXcord * BlockResolution
	lastY = lastYcord * BlockResolution
	  
	  
	  let result = undefined
	  result = LC.find(LC => LC.X === lastXcord && LC.Y === (limitYGird -1) - lastYcord );
	   if(result != undefined){
		   Tileselect = ['Tile',result.color,result.IN,result.col]
		   if(result.script != undefined){
		   Tileselect.push(result.script)
		   }
		   DrawMode = 2
		   DrawsModes[2].Started()
	   } 
	},	
	Draw: function Draw (){

	},	
    Pounter: function Pounter (){
		PounterCTX.clearRect(lastX, lastY,BlockResolution, BlockResolution);
		lastXcord = Math.floor(event.offsetX / BlockResolution)
	    lastYcord = Math.floor(event.offsetY / BlockResolution)
	    lastX = lastXcord * BlockResolution
	    lastY = lastYcord * BlockResolution
		PounterCTX.globalAlpha = 0.5
	    PounterCTX.fillStyle = "rgb(255,255,255)"
	    PounterCTX.fillRect(lastX,lastY,BlockResolution,BlockResolution)
		PounterCTX.globalAlpha = 1
	},
	Started: function Started (){
		S0.width = 256
        S0.height = 256
		CTX.clearRect(0,0,256,256)
		CTX.drawImage(HudTEXTURES,96,0,32,32,0,0,256,256)
	},
   },{// Draw Mode 7
	StarDrawing: function Draw (){
	lastXcord = Math.floor(event.offsetX / BlockResolution)
	lastYcord = Math.floor(event.offsetY / BlockResolution)
	
	startX = lastXcord
	startY = (limitYGird -1) - lastYcord
	
	DrawGirdSprites()
	},	
	Draw: function Draw (){

	},	
    Pounter: function Pounter (){
		PounterCTX.clearRect(lastX, lastY,BlockResolution, BlockResolution);
		lastXcord = Math.floor(event.offsetX / BlockResolution)
	    lastYcord = Math.floor(event.offsetY / BlockResolution)
	    lastX = lastXcord * BlockResolution
	    lastY = lastYcord * BlockResolution
		PounterCTX.globalAlpha = 0.8
	    PounterCTX.drawImage(
	    HudTEXTURES,
	    96,
	    32,
	    32,
	    32,
	    lastX,
	    lastY,
	    BlockResolution,
	    BlockResolution,
	    )
		PounterCTX.globalAlpha = 1
	},
	Started: function Started (){
		S0.width = 256
        S0.height = 256
	CTX.clearRect(0,0,256,256)
		CTX.drawImage(HudTEXTURES,96,32,32,32,0,0,256,256)	
		
		
	},
   }
]

function fillBlock(){
	lastXcord = Math.floor(event.offsetX / BlockResolution)
	lastYcord = Math.floor(event.offsetY / BlockResolution)
		
	lastX = lastXcord * BlockResolution
	lastY = lastYcord * BlockResolution
	  
	  
	  ctx.clearRect(lastX, lastY, BlockResolution, BlockResolution);

	  let XG = ( "0x" + Tileselect[3][5]) * 32
	  let YG  = ( "0x" + Tileselect[3][6]) * 32
	  
      let result = undefined
	 result = LC.find(LC => LC.X === lastXcord && LC.Y === (limitYGird -1) - lastYcord );
	   if(result == undefined){
		    ctx.fillStyle = Tileselect[1]
	       ctx.fillRect(lastX,lastY,BlockResolution,BlockResolution)
		   LC.push({
			   X: lastXcord ,
			   Y: (limitYGird -1) - lastYcord,
			   col:Tileselect[3],
			   color:Tileselect[1],
			   IN: Tileselect[2],
			   script :Tileselect[4],
			   })
			   if(Tileselect[3][4] == 3 && (Tileselect[3][0] == 5 || Tileselect[3][1] == 5)){
		       totalprizes += 1
	           }
	   }else{
		  result.script = Tileselect[4],
		  result.col =  Tileselect[3]
		  if(Tileselect[1] != 'rgba(0,0,0,0)'){
		  result.color =  Tileselect[1]
		  ctx.fillStyle = Tileselect[1]
	       ctx.fillRect(lastX,lastY,BlockResolution,BlockResolution)
		  }else{
			  ctx.fillStyle = result.color
	       ctx.fillRect(lastX,lastY,BlockResolution,BlockResolution)  
		  }
		  result.IN = Tileselect[2]
		  if(result.col[4] != 3 && (result.col[0] != 5 && result.col[1] != 5)){
			  if(Tileselect[3][4] == 3 && (Tileselect[3][0] == 5 || Tileselect[3][1] == 5)){
		       totalprizes += 1
			   
	           }
	           }
	   }
	   ctx.drawImage(image_collection[Tileselect[2]],XG,YG,32,32,lastX,lastY,BlockResolution,BlockResolution)
	}
function deleteTile(){
	lastXcord = Math.floor(event.offsetX / BlockResolution)
	lastYcord = Math.floor(event.offsetY / BlockResolution)
		
	lastX = lastXcord * BlockResolution
	lastY = lastYcord * BlockResolution
	  
	 ctx.clearRect(lastX, lastY, BlockResolution, BlockResolution);
	  
	  let result = undefined
	 result = LC.findIndex(LC => LC.X === lastXcord && LC.Y === (limitYGird -1) - lastYcord );
	   if(result != -1){
		   if(LC[result].col[4] == 3 && (LC[result].col[0] == 5 || LC[result].col[1] == 5)){
		   totalprizes -= 1
	       }
		   LC.splice(result, 1); 
	   } 
	}
function fillcolor(){
	lastXcord = Math.floor(event.offsetX / BlockResolution)
	lastYcord = Math.floor(event.offsetY / BlockResolution)
		
	lastX = lastXcord * BlockResolution
	lastY = lastYcord * BlockResolution
	  
	  ctx.fillStyle = ColorSelected
	  
	  
	  let result = undefined
	  ctx.fillRect(lastX,lastY,BlockResolution,BlockResolution)
	 result = LC.find(LC => LC.X === lastXcord && LC.Y === (limitYGird -1) - lastYcord );
	   if(result == undefined){
		   LC.push({X: lastXcord ,Y: (limitYGird -1) - (lastYcord) ,col:"00000000",color:ColorSelected,IN: 0})
	   }else{
		  result.color =  ColorSelected
		  let XG = ( "0x" + result.col[5]) * 32
	      let YG  = ( "0x" + result.col[6]) * 32
		  ctx.drawImage(image_collection[result.IN],XG,YG,32,32,lastX,lastY,BlockResolution,BlockResolution)
	   }
	  ctx.globalCompositeOperation = 'source-over';
	}





let lastX = 0
let lastY = 0
let lastXcord = 0
let lastYcord = 0
var isDrawing = false
var DrawMode = 0
	
PrinCharacter(chalkboard,characterSelect,0)


SAVE.Inicial_Script()
function Create_sprites() {
	let SpriteINF = SAVE.Levelsprites[0]
	for(let i = 0; i < SAVE.Levelsprites.length ; i++){
		SpriteINF = SAVE.Levelsprites[i]
		mysprites.push(new sprite(SpriteINF.X,SpriteINF.Y,SpriteINF.width,SpriteINF.height,SpriteINF.type,SpriteINF.col,SpriteINF.img))
	}
}

let myObstacles = [];
let mysprites = [];
let myMiniSprites = [];
let myHits = [];
var Sprite_Collection = [];
var game_area = ""
var prizes = 0
let star = true
var PositionX = 0
var PositionY = 0
var backgroundMusicSrc = SAVE.backgroundMusic[0]
var backgroundMusic = backgroundMusicCollection[backgroundMusicTrack]
backgroundMusic.loop = true; // Activar reproducción en bucle

var finishMusic = new Audio("SoundEfects/WinSound.mp3")
var DeathMusic = new Audio("SoundEfects/DeathSound.mp3")
var GameOverMusic = new Audio("SoundEfects/GameOverSound.mp3")
function activate_custom_songs(Player){
if(Player.WinSound == undefined){
finishMusic = new Audio("SoundEfects/WinSound.mp3")
}else{
finishMusic = new Audio(Player.WinSound)
}
if(Player.GameOverSound == undefined){
GameOverMusic = new Audio("SoundEfects/GameOverSound.mp3")
}else{
GameOverMusic = new Audio(Player.GameOverSound)
}
}
var audio;
 let audioContext, analyser, source, dataArray, bufferLength;
function ChangeMusic (Crs){
 audioPlayer.src = Crs;
 backgroundMusic.src = Crs;
 backgroundMusicSrc = Crs
}
function AnalizerAudio(audio){

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
      source = audioContext.createMediaElementSource(audio);
      analyser = audioContext.createAnalyser();

      source.connect(analyser);
      analyser.connect(audioContext.destination);

      analyser.fftSize = 256;
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
};
    
	function drawSong(canvas) {
      analyser.getByteFrequencyData(dataArray);

      let barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;
	  let barHeight = 0;
	  let r = 0
	  let g = 0
	  let b = 0
      for (let i = 0; i < bufferLength; i++) {
		  console.log(dataArray[i])
         barHeight = dataArray[i];
         r = barHeight ;
         g = barHeight -256;
         b = barHeight -256;

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
		ctx.fillRect(10,10,barWidth,10)

        x += barWidth + 1;
      }
    }
table.style.overflow = "auto"
const buton = [
function(b) {
Selection.classList.toggle('active');

but4.innerText = "edit"
audioPlayer.pause();
audioPlayer.muted = true
prizes = 0

let p1InF = characters[characterSelect]
let p2InF = characters[characterSelect]
activate_custom_songs(p1InF)
establecing_starcords(startX,startY,p1InF)
TilesCollection = structuredClone(LC);
CreateSpritesTolevel()
table.innerHTML = "<canvas id=game></canvas>";
table.style.overflow = "hidden"
game_area = document.getElementById("game");
game_area.style.backgroundImage =  backgroundBase
game_area.style.width = screenWidth + "px"
game_area.style.height = screenHeigth + "px"
charge(game_area,SAVE.X,SAVE.Y,0,0,StarX,StarY);
StarPosition()

p1 = new player(p1InF.width,p1InF.height,p1InF.Img[SkinSelect],p1InF.Grid,PositionX,PositionY,1,"0031",p1InF.WNEGA,p1InF.HNEGA,p1InF.DeathSound)
p2 = new player(p2InF.width,p2InF.height,p2InF.Img[0],p2InF.Grid,PositionX,PositionY,1,"0031",p2InF.WNEGA,p2InF.HNEGA,p2InF.DeathSound)
gametest(game,10000,p1,p2,myObstacles,mysprites,myMiniSprites,myHits)
type_but = 1
},
function(b) {
audioPlayer.muted = false
on_game = false
finish_game = true
backgroundMusic.pause();       // Pausa el audio
backgroundMusic.currentTime = 0; // Reinicia al inicio
finishMusic.pause();       // Pausa el audio
finishMusic.currentTime = 0; // Reinicia al inicio
GameOverMusic.pause();       // Pausa el audio
GameOverMusic.currentTime = 0; // Reinicia al inicio
table.style.overflow = "auto"
myObstacles = [];
mysprites = [];
myMiniSprites = [];
ctx = Grid.getContext("2d")
  CreatreGrid()
DrawGirdTiles(Grid)
DrawGirdSprites(GridSprites)
if(AZAR){
	GridSprites.style.zIndex = 20
}
but4.innerText = "start"
time.innerText = "TIME"
type_but = 0
	
},
function(b) { 
/*
for(let i = 0; i < TilesCollection.length ; i++){
	TilesCollection[i].col = LC[i].col
	TilesCollection[i].color = LC[i].color
	TilesCollection[i].IN = LC[i].IN
	TilesCollection[i].script = LC[i].script
}*/
myObstacles.length = 0
mysprites.length = 0
myMiniSprites.length = 0
myHits.length = 0
CreateSpritesTolevel()
charge(game_area,SAVE.X,SAVE.Y,0,0,StarX,StarY);
StarPosition()
let p1InF = characters[characterSelect]
let p2InF = characters[characterSelect]
p1 = new player(p1InF.width,p1InF.height,p1InF.Img[SkinSelect],p1InF.Grid,PositionX,PositionY,1,"0031",p1InF.WNEGA,p1InF.HNEGA,p1InF.DeathSound)
p2 = new player(p2InF.width,p2InF.height,p2InF.Img[0],p2InF.Grid,PositionX,PositionY,1,"0031",p2InF.WNEGA,p2InF.HNEGA,p2InF.DeathSound)
gametest(game,100000,p1,p2,myObstacles,mysprites,myMiniSprites,myHits)
type_but = 1
},
]
var type_but = 0
but4.addEventListener("click",() =>{
buton[type_but](0)
})
function StarPosition(){
	PositionX = screenWidth/2
	if(Limit_Rigth !== false && Limit_Rigth  > cordX - screenWidth ){
		PositionX += Limit_Rigth - (cordX - screenWidth)
	}
	if(Limit_Left !== false && Limit_Left < cordX){
		PositionX +=  Limit_Left - cordX
	}
	PositionY = Math.round(screenHeigth/2)
	if(Limit_Up != false && Limit_Up < cordY - screenHeigth){
		PositionY +=  Limit_Up - (cordY - screenHeigth)
	}
	if(Limit_Down !== false && Limit_Down   > cordY ){
		PositionY += Limit_Down  - cordY
	}
}
function establecing_starcords(X,Y,Player){
	StarX  = X - limitXHalf+1;
	StarY  = Y - limitYHalf+Math.round((Player.height/32)+0.4);
}
function Text(text,color,font,textAlign,Xstart,Xfinal,velocityX,Ystart,Yfinal,velocityY){
this.text = text
this.color = color 
this.font = font 
this.textAlign = textAlign
this.Xposition = Xstart
this.Xfinal = Xfinal
this.Xvelocity = velocityX
this.Yposition = Ystart
this.Yfinal = Yfinal
this.Yvelocity = velocityY	
}
function ProcessText(Text){
	if(Text.Yposition != Text.Yfinal){
	Text.Yposition -= (Text.Yposition - Text.Yfinal) * Text.Yvelocity;
	}
	if(Text.Xposition != Text.Xfinal){
	Text.Xposition -= (Text.Xposition - Text.Xfinal) * Text.Xvelocity;
	}
}
function DrawText(Text,ctx){
  ctx.fillStyle = Text.color;
  ctx.font = Text.font;
  ctx.textAlign = Text.textAlign;
  ctx.fillText(Text.text, Text.Xposition, Text.Yposition);	
}
function Gblock(Canvas,X,Y,color,ImgN,col){
this.x = X;this.y = Y;
this.WTH = 32;this.HEG = 32
this.imgN = ImgN
this.color = color
this.col = col;
this.Can = Canvas;
}
function Background(Img,width,height,movementX,movementY,autoX,autoY,repeatX,repeatY,Xleft,Yup) {
this.imC = new Image();
this.imC.src = Img
this.repeatX = repeatX;
if(repeatX){
this.repetTheBackgroundX = Math.round((screenWidth / width)+0.4)+1
}else{
this.repetTheBackgroundX = 1
}
if(repeatY){
this.repetTheBackgroundY = Math.round((screenWidth / height)+0.4)+1
}else{
this.repetTheBackgroundY = 1
}
this.repeatY = repeatY
if(Xleft != undefined && Xleft != 0){this.x = Xleft*-1}else{this.x = 0}
this.mX = movementX; this.mY = movementY;
this.AX = autoX; this.AY = autoY;
this.height = height
this.width = width
this.y = (screenHeigth  - this.height) + Yup *-1
this.stx = this.x + Xleft
this.sty = this.y
}

function localisated_sprites(Sprite_Collection,sprites,cordX,cordY) {
	let SP = Sprite_Collection[0]
    let deleted = []
	for(let i = 0; i < Sprite_Collection.length ; i++){
		SP = Sprite_Collection[i]
		if((0 < (SP.X + (SP.width))+cordX && screenWidth > (SP.X + cordX))&&(0 < (SP.Y + (SP.height))+cordY && screenHeigth > (SP.Y + cordY))){
			if(SP.col != undefined){
				if(SP.col[4] == "0"){
			sprites.push(new Sprite(SP.X,SP.Y,SP.width,SP.height,SP.script,SP.col,SP.img,SP.IN,SP.XV,SP.YV))
				}else{
			sprites.push(new sprite_colision(SP.X,SP.Y,SP.width,SP.height,SP.script,SP.col,SP.img,SP.IN,SP.XV,SP.YV))	
				}
			}else{
			sprites.push(new sprite_colision(SP.X,SP.Y,SP.width,SP.height,SP.script,SP.col,SP.img,SP.IN,SP.XV,SP.YV))	
			}
			sprites[sprites.length -1].x += cordX
			sprites[sprites.length -1].y += cordY
			Scrips_collection[sprites[sprites.length -1].script].Action(sprites[sprites.length -1])
			deleted.push(i)
		}
	}
	for(let I = deleted.length -1; I >= 0 ; I--){
	Sprite_Collection.splice(deleted[I], 1)
	}
}
function deleted_sprites(Sprite_Collection,sprites,cordX,cordY) {
	let SP = sprites[0]
	let deleted = []
	for(let i = 0; i < sprites.length ; i++){
		SP = sprites[i]
		if(((0 < (SP.stx + (SP.width))+cordX && screenWidth > (SP.stx + cordX))&&(0 < (SP.sty + (SP.height))+cordY && screenHeigth > (SP.sty + cordY))) == false){
			
		if(sprites[i].InScreen == false){	
		if(SP.SAVE){
			Sprite_Collection.push({X: SP.stx,Y: SP.sty,width:SP.widthPrint,height:SP.heightPrint,script:SP.script,col:SP.col,img:SP.imgN,IN:SP.RenderMode,XV:SP.IXR,YV:SP.IYR})
		}
			deleted.push(i)
			}
		}	
	}
	for(let I = deleted.length -1; I >= 0 ; I--){
	sprites.splice(deleted[I], 1)
	}
}
function Sprite(X,Y,width,height,script,comportament,img,RenderMode,Xvelocity,Yvelocity,SAVE) {
this.InScreen = true
this.prin = true
this.x = X; this.y = Y;
this.stx = X; this.sty = Y;
this.Yplayertouch = false; this.Xplayertouch = false
this.BulletTouch = false
this.live = 1
if(SAVE == undefined){
    this.SAVE = true
	}else{
		this.SAVE = SAVE
	}
this.MoveX = 0 ;this.MoveY = 0
this.xP = 0 ;this.yP = 0
this.Xdiference_Print = 0;this.Ydiference_Print = 0;
this.widthGrid = width; this.heightGrid = height;
this.widthPrint = width; this.heightPrint = height;
this.width = width; this.height = height;	
this.script = script 
if(comportament != undefined){
	this.col = comportament
	this.type = ( "0x" + comportament[4])*1
	this.typeColision = this.type
	this.Up = ( "0x"+ comportament[0])*1;this.Left = ( "0x"+ comportament[1])*1;
	this.Down = ( "0x"+ comportament[2])*1;this.Rigth = ( "0x"+ comportament[3])*1;
	}else{
		this.Up = 0;this.Left = 0;
		this.Down = 0;this.Rigth = 0;
		this.col = "000000000"
		this.type = 0
		this.typeColision = this.type
	}
this.Xvelocity = Xvelocity ;this.Yvelocity = Yvelocity  ;
this.IXR = Xvelocity ;this.IYR = Yvelocity ;
if(RenderMode != undefined){
	this.XG = ("0x"+ RenderMode[1])*width; this.YG = ( "0x"+ RenderMode[2])*height
	this.RenderMode = RenderMode
	this.Mode = RenderMode[0]
	this.LoopFotogram = ("0x"+ RenderMode[3])*1
	this.FramesIntervalds = ("0x"+ RenderMode[4])*1
	}else{
		this.XG = 0 ;this.YG = 0 
		this.RenderMode = "000000"
		this.Mode = 0
		this.FramesIntervalds = 0
		this.LoopFotogram = 0
		}
this.intervald_frame = 0
this.intervaled_time = 0
this.imgN = img
this.fotogram = 0
}
function sprite_colision(X,Y,width,height,script,comportament,img,RenderMode,Xvelocity,Yvelocity,SAVE) {
this.InScreen = true
this.prin = true
this.FristTouch = false
this.x = X; this.y = Y;
this.stx = X; this.sty = Y;
this.MoveX = 0 ;this.MoveY = 0
this.xP = 0 ;this.yP = 0
this.BX = 0 ; this.BY = 0
this.MoveYLimit = 0 ;this.MoveXLimit = 0
this.sideX = true ;this.sideY = true
this.Yplayertouch = false; this.Xplayertouch = false
this.Ytouches = 0
this.Xtouches = 0
this.BulletTouch = false
this.Ytouch = false;this.Xtouch = false
this.Xdiference_Print = 0;this.Ydiference_Print = 0;
this.widthGrid = width; this.heightGrid = height;
this.widthPrint = width; this.heightPrint = height;
this.width = width; this.height = height;	
this.live = 1
if(SAVE == undefined){
    this.SAVE = true
}else{
	this.SAVE = SAVE
}
this.State = 0
this.water = false
this.script = script 
if(comportament != undefined){
	this.col = comportament
	this.type = ( "0x" + comportament[4])*1
	this.typeColision = this.type
	this.Up = ( "0x"+ comportament[0])*1;this.Left = ( "0x"+ comportament[1])*1;
	this.Down = ( "0x"+ comportament[2])*1;this.Rigth = ( "0x"+ comportament[3])*1;
	}else{
		this.Up = 0;this.Left = 0;
		this.Down = 0;this.Rigth = 0;
		this.col = "000000000"
		this.type = 0
		this.typeColision = this.type
	}
if(RenderMode != undefined){
	this.XG = ("0x"+ RenderMode[1])*width; this.YG = ( "0x"+ RenderMode[2])*height
	this.RenderMode = RenderMode
	this.Mode = RenderMode[0]
	this.LoopFotogram = ("0x"+ RenderMode[3])*1
	this.FramesIntervalds = ("0x"+ RenderMode[4])*1
	}else{
		this.XG = 0 ;this.YG = 0 
		this.RenderMode = "000000"
		this.Mode = 0
		this.FramesIntervalds = 0
		this.LoopFotogram = 0
	}
this.angle = 0
this.fotogram = 0
this.sideX = true ;this.sideY = true
if(Xvelocity != undefined){
	this.Xvelocity = Xvelocity;if(Xvelocity < 0){this.sideX = false}
	}else{
		this.Xvelocity = 0
		}
if(Yvelocity != undefined){
	this.Yvelocity = Yvelocity;if(Yvelocity < 0){this.sideY = false}
	}else{
		this.Yvelocity = 0
	}
if(img){
	this.imgN = img
	}else{
		this.imgN = 0
		}
this.IXR = this.Xvelocity ;this.IYR = this.Yvelocity ;
this.intervald_frame = 0
this.intervald_time = 0
this.angleX = 0
this.angleY = 0
}
function PreProgramedMode (sprite,player1){
	if(sprite.Xtouch){auto_com[sprite.col[5]].X(sprite)}
	Movement[sprite.col[7]].X(sprite,player1)
	if(sprite.Ytouch){auto_com[sprite.col[6]].Y(sprite)}
    Movement[sprite.col[8]].Y(sprite,player1)
	if(sprite.live < 0){
		explosions32[0](sprite)
		Kills ++
	}
}
function PreRenderMode (ctx,Sprite){
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
}
const Colision_sprite = [
function(Sprite,player1,player2,tiles){
/*nothing*/
},
function(Sprite,player1,player2,tiles){
if((0  < (Sprite.x + (Sprite.width)) && screenWidth  > (Sprite.x))&&
(0  < (Sprite.y + (Sprite.height)) && screenHeigth  > (Sprite.y))){
	Sprite.InScreen = true
	Sprite.yP = Sprite.MoveY;
	Sprite.y += Sprite.yP;
	Sprite.xP = Sprite.MoveX;
	Sprite.x += Sprite.xP;
	MiniSpriteColision(Sprite,myMiniSprites)
	}else{
	Sprite.InScreen = false
	
}
},
function(Sprite,player1,player2,tiles){
if((0  < (Sprite.x + (Sprite.width)) && screenWidth  > (Sprite.x))&&
(0  < (Sprite.y + (Sprite.height)) && screenHeigth  > (Sprite.y))){
	Sprite.InScreen = true
	
Sprite.yP = Sprite.MoveY;
	if(Sprite.yP > positveLimit){Sprite.yP = positveLimit}
	if(Sprite.yP < negativeLimit){Sprite.yP = negativeLimit}
Sprite.y += Sprite.yP;

Sprite.Ytouch = false
if(!tick){
Sprite.Ytouches = 0	
}
for (i = 0; i < tiles.length; i += 1){
	var TL = tiles[i]
	if(TL.type != 0 ){
		if((Sprite.x < TL.x + (32) && (Sprite.x + (Sprite.width)) > TL.x) && (Sprite.y < TL.y + (32))  && Sprite.y + (Sprite.height) > TL.y){
			if( (Sprite.y + (Sprite.height)) < (TL.y + 32)){
				
				Sprite.yP =(Sprite.y + Sprite.height) - TL.y 
				//Sprite.Ytouch = true
			
				}else{
				//if(TL.type != 2 ){
				Sprite.yP = Sprite.y - (TL.y + 32)
				//Sprite.Ytouch = true
				//}
			}
			//if(Sprite.Ytouch ){
			Sprite.y += Sprite.yP*-1;
			Sprite.yP = Sprite.MoveY + Sprite.yP*-1
			Sprite.Ytouch = true
			Sprite.Ytouches ++
			//}
		}
	}
}
Sprite.UVY = Sprite.MoveY
Sprite.UPY = Sprite.y


Sprite.xP = Sprite.MoveX;
	if(Sprite.xP > positveLimit){Sprite.xP = positveLimit}
	if(Sprite.xP < negativeLimit){Sprite.xP = negativeLimit}
Sprite.x += Sprite.xP;

Sprite.Xtouch = false
Sprite.Xtouches = 0	
for (i = 0; i < tiles.length; i += 1){
	var TL = tiles[i]
	if(TL.type != 0 /*&& TL.type != 2*/){
		if((Sprite.x < TL.x + (32) && (Sprite.x + (Sprite.width)) > TL.x) && (Sprite.y < TL.y + (32))  && Sprite.y + (Sprite.height) > TL.y){
			if( (Sprite.x + (Sprite.width)) < (TL.x + 32)){
				Sprite.xP =(Sprite.x + Sprite.width) - TL.x; 
				}else{
		        Sprite.xP =  Sprite.x - (TL.x + 32); 
			}
			Sprite.x += Sprite.xP*-1;
			Sprite.xP = Sprite.MoveX + Sprite.xP*-1
			Sprite.Xtouch = true
			Sprite.Xtouches ++
		}
	}
}
Sprite.sideUX = Sprite.sideX
Sprite.UPX = Sprite.x

MiniSpriteColision(Sprite,myMiniSprites)

}else{
	Sprite.InScreen = false
	
}
},
function(Sprite,player1,player2,tiles){
if((0  < (Sprite.x + (Sprite.width)) && screenWidth  > (Sprite.x))&&
(0  < (Sprite.y + (Sprite.height)) && screenHeigth  > (Sprite.y))){
	Sprite.InScreen = true
if(tick){
if(Sprite.BY <= -1){Sprite.BY += 1}
if(Sprite.BY >= 1){Sprite.BY += -1}
}
let MoveY = Sprite.MoveY + Sprite.BY 
	if(MoveY > positveLimit){MoveY = positveLimit}
	if(MoveY < negativeLimit){MoveY = negativeLimit}
Sprite.MoveYLimit = MoveY 
Sprite.yP = Sprite.MoveYLimit

Sprite.Ytouch = false
if(!tick){
Sprite.Ytouches = 0	
}
if(CompleteTilesColisionY(Sprite,tiles)){
	Sprite.yP = Sprite.MoveYLimit + Sprite.yP*-1
}
Sprite.y += Sprite.yP

Sprite.UVY = Sprite.MoveY
Sprite.UPY = Sprite.y



if(tick){
if(Sprite.BX <= -1){Sprite.BX += 1}
if(Sprite.BX >= 1){Sprite.BX += -1}
}
let MoveX = Sprite.MoveX + Sprite.BX
	if(MoveX > positveLimit){MoveX = positveLimit}
	if(MoveX < negativeLimit){MoveX = negativeLimit}
Sprite.MoveXLimit = MoveX 
Sprite.xP =  Sprite.MoveXLimit

Sprite.Xtouch = false	
Sprite.Xtouches = 0	
if(CompleteTilesColisionX(Sprite,tiles)){
	Sprite.xP = Sprite.MoveXLimit + Sprite.xP*-1
}
Sprite.x += Sprite.xP

Sprite.sideUX = Sprite.sideX
Sprite.UPX = Sprite.x

MiniSpriteColision(Sprite,myMiniSprites)

}else{
	Sprite.InScreen = false
}
},
]
const Movement =[{
	/*Sum MoveX (0)*/
Y: function Y (Sprites,A) {Sprites.MoveY = Sprites.Yvelocity},
X: function X (Sprites,A) {Sprites.MoveX = Sprites.Xvelocity;},
},{
Y: function Y (Sprites,A) {
	if(Ax8 == 7){
		if(Sprites.sideY){
	Sprites.MoveY += 1
		}else{
	Sprites.MoveY -= 1		
		}
	if(Sprites.Yvelocity < 0){
	if(Sprites.Yvelocity  > Sprites.MoveY	|| Sprites.MoveY > Sprites.Yvelocity*-1){Sprites.sideY = !Sprites.sideY};
	}else{
	if(Sprites.Yvelocity  < Sprites.MoveY	|| Sprites.MoveY < Sprites.Yvelocity*-1){Sprites.sideY = !Sprites.sideY};
	}		
	}
},
X: function X (Sprites,A) {
	if(Ax8 == 7){
		if(Sprites.sideX){
	Sprites.MoveX += 1
		}else{
	Sprites.MoveX -= 1		
		}
	if(Sprites.Yvelocity < 0){
	if(Sprites.Xvelocity  > Sprites.MoveX	|| Sprites.MoveX  > Sprites.Xvelocity*-1){Sprites.sideX = !Sprites.sideX}; 
	}else{
	if(Sprites.Xvelocity  < Sprites.MoveX	|| Sprites.MoveX < Sprites.Xvelocity*-1){Sprites.sideX = !Sprites.sideX}; 
	}
	}
},
},{/*Go to p1 (2)*/
Y: function Y (Sprites,player) {
if(Sprites.y +(Sprites.height /2) > (player.y + player.heightHalf)){
	Sprites.MoveY = Sprites.Yvelocity*-1
	if((Sprites.y +(Sprites.height /2)+Sprites.MoveY) < (player.y + player.heightHplayerlf)){
		Sprites.MoveY = ((Sprites.height /2) + (Sprites.y+Sprites.MoveY)) - (player.y + player.heightHalf)
		}
}else{
	Sprites.MoveY = Sprites.Yvelocity
	if((Sprites.y+Sprites.MoveY) > (player.y + player.heightHalf) ){
	Sprites.MoveY = (Sprites.y+Sprites.MoveY) - (player.y + player.heightHalf)
	}}
},
X: function X (Sprites,player) {
if(Sprites.x+(Sprites.width /2) >  (player.x + player.widthHalf)){
	Sprites.MoveX = Sprites.Xvelocity*-1;
	if((Sprites.x+(Sprites.width /2)+Sprites.MoveX) < (player.x + player.widthHalf)){
		Sprites.MoveX = ((Sprites.x+Sprites.MoveX)+(Sprites.width /2)) - (player.x + player.widthHalf)
		}
}else{
Sprites.MoveX = Sprites.Xvelocity;
if((Sprites.x+Sprites.MoveX) > (player.x + player.widthHplayerlf)){
	Sprites.MoveX = (Sprites.x+Sprites.MoveX) - (player.x + player.widthHalf)
	}}
},
},{ /*Gravity (3)*/
Y: function Y (Sprites,player) {
	if(tick){
	if(Sprites.sideY){
	Sprites.MoveY += 1
	}else{
	Sprites.MoveY += -1
	}
	}
},
X: function X (Sprites,player) {
		if(tick){
	if(Sprites.sideX){
	Sprites.MoveX += 1
	}else{
	Sprites.MoveX += -1
	}
		}
},
},
{ /*circle (4)*/
Y: function Y (Sprites,player) {
	let radian = Sprites.angleY * (Math.PI / 180);
	Sprites.MoveY =  Sprites.Yvelocity * Math.cos(radian)
	if(Sprites.sideY){
	Sprites.angleY = (Sprites.angleY + 1) % 360;
	}else{
	Sprites.angleY = (Sprites.angleY - 1) % 360;	
	}
},
X: function X (Sprites,player) {
	let radian = Sprites.angleX * (Math.PI / 180);
	Sprites.MoveX =  Sprites.Xvelocity * Math.sin(radian)
	if(Sprites.sideX){
	Sprites.angleX = (Sprites.angleX + 1) % 360;
	}else{
	Sprites.angleX = (Sprites.angleX - 1) % 360;	
	}	
},
},
{ /*cube (5)*/
Y: function Y (Sprite,player) {
	if(Clock(Sprite,Sprite.Yvelocity*32)){
		Sprite.sideY = !Sprite.sideY
	}
	if(Sprite.sideY){
	Sprite.MoveY = 1	
	}else{
	Sprite.MoveY = -1
	}
},
X: function X (Sprite,player) {
	if(Clock(Sprite,Sprite.Xvelocity*32)){
		Sprite.sideX = !Sprite.sideX
	}
	if(Sprite.sideX){
	Sprite.MoveX = 1	
	}else{
	Sprite.MoveX = -1
	}
	
},
},{/*Go to p1 (6)*/
Y: function Y (Sprite,Player) {
if(Sprite.y +(Sprite.height /2) > (Player.y + Player.heightHalf)){
	Sprite.MoveY = 0
	if(Sprite.sideX == Player.side){
	Sprite.MoveY += Sprite.Yvelocity*-1
	if((Sprite.y +(Sprite.height /2)+Sprite.MoveY) < (Player.y + Player.heightHalf)){
		Sprite.MoveY = ((Sprite.height /2) + (Sprite.y+Sprite.MoveY)) - (Player.y + Player.heightHalf)
		}
	}
}else{
	Sprite.MoveY = 0
	if(Sprite.sideX == Player.side){
	Sprite.MoveY += Sprite.Yvelocity
	if((Sprite.y+Sprite.MoveY) > (Player.y + Player.heightHalf) ){
	Sprite.MoveY = (Sprite.y+Sprite.MoveY) - (Player.y + Player.heightHalf)
	}
    }
}
},
X: function X (Sprite,Player) {
if(Sprite.x+(Sprite.width /2) >  (Player.x + Player.widthHalf)){
	Sprite.sideX = true
	Sprite.MoveX = 0
	if(Sprite.sideX == Player.side){
	Sprite.MoveX += Sprite.Xvelocity*-1;
	if((Sprite.x+(Sprite.width /2)+Sprite.MoveX) < (Player.x + Player.widthHalf)){
		Sprite.MoveX = ((Sprite.x+Sprite.MoveX)+(Sprite.width /2)) - (Player.x + Player.widthHalf)
		}
    }
}else{
	Sprite.sideX = false
	Sprite.MoveX = 0
	if(Sprite.sideX == Player.side){
Sprite.MoveX += Sprite.Xvelocity;
if((Sprite.x+Sprite.MoveX) > (Player.x + Player.widthHalf)){
	Sprite.MoveX = (Sprite.x+Sprite.MoveX) - (Player.x + Player.widthHalf)
	}}
    }
},
},{/*enboscade (7)*/
Y: function Y (Sprites,player) {
	let Y = player.y
	if(Math.abs(player.y - Sprites.y) >= 64){
	if(player.sideY){
		Y -= 64
	}else{
		Y += 64
	}
	}
if(Sprites.y +(Sprites.height /2) > (Y + player.heightHalf)){
	Sprites.MoveY = Sprites.Yvelocity*-1
	if((Sprites.y +(Sprites.height /2)+Sprites.MoveY) < (Y + player.heightHalf)){
		Sprites.MoveY = ((Sprites.height /2) + (Sprites.y+Sprites.MoveY)) - (Y + player.heightHalf)
		}
}else{
	Sprites.MoveY = Sprites.Yvelocity
	if((Sprites.y+Sprites.MoveY) > (Y + player.heightHalf) ){
	Sprites.MoveY = (Sprites.y+Sprites.MoveY) - (Y + player.heightHalf)
	}}
},
X: function X (Sprites,player) {
	let X = player.x 
	if(Math.abs(player.y - Sprites.y) >= 64){
	if(player.sideX){
		X -= 64
	}else{
		X += 64
	}
	}
if(Sprites.x+(Sprites.width /2) >  (X + player.widthHalf)){
	Sprites.MoveX = Sprites.Xvelocity*-1;
	if((Sprites.x+(Sprites.width /2)+Sprites.MoveX) < (X + player.widthHalf)){
		Sprites.MoveX = ((Sprites.x+Sprites.MoveX)+(Sprites.width /2)) - (X + player.widthHalf)
		}
}else{
Sprites.MoveX = Sprites.Xvelocity;
if((Sprites.x+Sprites.MoveX) > (X + player.widthHalf)){
	Sprites.MoveX = (Sprites.x+Sprites.MoveX) - (X + player.widthHalf)
	}}
},
}
]
const auto_com = [{/*0*/
Y: function Y (Sprite) {"nothing"},
X: function X (Sprite) {"nothing"},
},{/*stop sum velocity  (1)*/
Y: function Y (Sprite) {Sprite.MoveY = 0;Sprite.Hy = 0},
X: function X (Sprite) {Sprite.MoveX = 0;Sprite.Hx = 0},
},{/*swicth velocity (2)*/
Y: function Y (Sprite) {Sprite.Yvelocity = Sprite.Yvelocity*-1;Sprite.MoveY = 0;Sprite.Hy = 0;Sprite.sideY = !Sprite.sideY},
X: function X (Sprite) {Sprite.Xvelocity = Sprite.Xvelocity*-1;Sprite.MoveX = 0;Sprite.Hx = 0;Sprite.sideX = !Sprite.sideX},
},{/*platafromer (3)*/
Y: function Y (Sprite) {if(Sprite.MoveYLimit > 0 ){Sprite.jumped = true;Sprite.MoveY = 0;Sprite.jt = 0;Sprite.InFlor = true;}else{Sprite.MoveY = 0;Sprite.jumped = false}},
X: function X (Sprite) {if(Sprite.MoveXLimit > 0 ){Sprite.jumped = true;Sprite.MoveX = 0;Sprite.jt = 0;Sprite.InFlor = true;}else{Sprite.MoveX = 0;Sprite.jumped = false}},
},{/*platafromer outsed (4)*/
Y: function Y (Sprite) {if(Sprite.MoveYLimit > 0 ){Sprite.MoveY = 0;Sprite.jumped = false}else{Sprite.jumped = true;Sprite.MoveY = 0;Sprite.jt = 0;Sprite.InFlor = true;}},
X: function X (Sprite) {if(Sprite.MoveXLimit > 0 ){Sprite.MoveX = 0;Sprite.jumped = false}else{Sprite.jumped = true;Sprite.MoveY = 0;Sprite.jt = 0;Sprite.InFlor = true;}},
},{/*bouncing (5)*/
Y: function Y (Sprite) {Sprite.MoveY = Sprite.MoveY *-1;},
X: function X (Sprite) {Sprite.MoveX = Sprite.MoveX *-1; },
},{/*jump*/
Y: function Y (Sprite) {
	if(Sprite.sideY){
	if(Sprite.MoveY > 0 ){Sprite.MoveY = Sprite.Yvelocity*-1}else{Sprite.MoveY = Sprite.Yvelocity}
    }else{
    if(Sprite.MoveY < 0 ){Sprite.MoveY = Sprite.Yvelocity*-1}else{Sprite.MoveY = Sprite.Yvelocity}
	}
},
X: function X (Sprite) {
	if(Sprite.sideX){
	if(Sprite.MoveX > 0 ){Sprite.MoveX = Sprite.Xvelocity*-1}else{Sprite.MoveX = Sprite.Xvelocity}
    }else{
    if(Sprite.MoveX < 0 ){Sprite.MoveX = Sprite.Xvelocity*-1}else{Sprite.MoveX = Sprite.Xvelocity}
	}
}
},{/*variable extra false (7)*/
Y: function Y (Sprite) {Sprite.MoveY = 0; Sprite.velocity = 0;Sprite.BY = 0;Sprite.Action = true;},
X: function X (Sprite) {Sprite.MoveX = 0; Sprite.velocity = 0;Sprite.BX = 0;Sprite.Action = true;},
},
]
/*Sprite Functions*/
function Gravedad(sprite,Aument){
	if(tick){
        if(sprite.water){
		sprite.MoveY += Aument/2
		}else{
		sprite.MoveY += Aument
		}
	}
		if(sprite.Ytouch){
			sprite.MoveY = 0
			return true
		}
	/*modified : MoveY , Yvelocity;*/
}
function Gravedad_y_Brincar(sprite,Aument){
	if(tick){
        if(sprite.water){
		sprite.MoveY += Aument/2
		}else{
		sprite.MoveY += Aument
		}
		if(sprite.tick == 0 || sprite.tick == 2){
			sprite.tick = 0
			sprite.jumped = false;
		}else{
			sprite.tick ++
		}
	}
		if(sprite.Ytouch){
			if(sprite.MoveY > 0 ){
				sprite.jumped = true;sprite.MoveY = 0;sprite.jt = 0;sprite.InFlor = true;
				sprite.tick ++
				}else{
					sprite.MoveY = 0;sprite.jumped = false
					}
			sprite.MoveY = 0
			return true
		}
	/*modified : MoveY , Yvelocity;*/
}
function turn_if_obstacle_X(My){
    if(My.Xtouch){
		My.Xvelocity = My.Xvelocity*-1;My.MoveX = 0;My.Hx = 0;My.sideX = !My.sideX
	}
	/*modified : MoveX , Xvelocity;*/
}
function Clock(My,time){
	if(My.intervald_time == undefined){My.intervald_time = 1}
	My.intervald_time ++
    if(My.intervald_time > time){
	My.intervald_time = 0
	return true
	}
}
function Animation(Sprite,XG,YG,LoopFotogram,FramesIntervalds){
	if(Sprite.fotogram <= Sprite.LoopFotogram){
		Sprite.fotogram = 0
	}
	Sprite.XG = XG
	Sprite.YG = YG
	Sprite.LoopFotogram = LoopFotogram
	Sprite.FramesIntervalds = FramesIntervalds
}
function Colision(My,Player,Xplus,Yplus,Width,height){
if((Player.x < ((My.x+Xplus) + Width)
&& (Player.x + (Player.width)) > (My.x+Xplus)) 
&& (Player.y < ((My.y+Yplus) + height))  
&& Player.y + (Player.height) > (My.y+Yplus))
{return true }
}
function ColisionPrint(My,Player,Xplus,Yplus,Width,height){
PrinT(game,(My.x+Xplus),(My.y+Yplus),Width,height,"#f00")
if((Player.x < ((My.x+Xplus) + Width)
&& (Player.x + (Player.width)) > (My.x+Xplus)) 
&& (Player.y < ((My.y+Yplus) + height))  
&& Player.y + (Player.height) > (My.y+Yplus))
{return true }
}

function randomBoolean() {
    return Math.random() < 0.5;
}
/**/
function Sprite_animation(P){
P.intervald_frame += 1
	  if(P.intervald_frame >= P.FramesIntervalds && P.FramesIntervalds != 0){
	     P.fotogram += 1
	     if(P.fotogram  >= P.LoopFotogram){P.fotogram = 0}
		 P.intervald_frame = 0
    }
}
const draw_sprite = [
function(Sprite,canvas){ // 0 Normal
ctx = canvas.getContext("2d");
ctx.drawImage(
			  image_collection[Sprite.imgN], 
              Sprite.XG + Sprite.fotogram*Sprite.widthGrid,
			  Sprite.YG , 
			  Sprite.widthGrid, 
			  Sprite.heightGrid, 
			  Sprite.x + Sprite.Xdiference_Print, 
			  Sprite.y + Sprite.Ydiference_Print,
			  Sprite.widthPrint, 
			  Sprite.heightPrint)
},
function(Sprite,canvas){ // 1 background
ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = 'destination-over';
ctx.drawImage(image_collection[Sprite.imgN], 
              Sprite.XG+ Sprite.fotogram*Sprite.widthGrid ,
			  Sprite.YG , 
			  Sprite.widthGrid, 
			  Sprite.heightGrid, 
			  Sprite.x + Sprite.Xdiference_Print, 
			  Sprite.y + Sprite.Ydiference_Print,
			  Sprite.widthPrint, 
			  Sprite.heightPrint)
ctx.globalCompositeOperation = 'source-over';
},
function(Sprite,canvas){ // 2 Angle
ctx = canvas.getContext("2d");
ctx.save();
ctx.translate(
(Sprite.x + Sprite.Xdiference_Print/2) -Sprite.widthPrint / -2,
 (Sprite.y + Sprite.Ydiference_Print/2) - Sprite.heightPrint / -2);
ctx.rotate(Sprite.angle*Math.PI / 180  );
ctx.drawImage(
image_collection[Sprite.imgN], 
Sprite.XG ,
Sprite.YG , 
Sprite.widthGrid,
Sprite.heightGrid, 
 (Sprite.widthPrint/2)*-1, 
 (Sprite.heightPrint/2)*-1,
 Sprite.widthPrint,
 Sprite.heightPrint)
ctx.restore();
},
function(Sprite,canvas){ // 3 Fliped
ctx = canvas.getContext("2d");
ctx.save();
ctx.translate(Sprite.widthPrint+ Sprite.x + Sprite.Xdiference_Print, 
			  Sprite.y + Sprite.Ydiference_Print);
ctx.scale(-1, 1); // Invierte verticalmente
ctx.drawImage(image_collection[Sprite.imgN], 
              Sprite.XG + Sprite.fotogram*Sprite.widthGrid,
			  Sprite.YG , 
			  Sprite.widthGrid, 
			  Sprite.heightGrid, 
			  0, 
			  0,
			  Sprite.widthPrint, 
			  Sprite.heightPrint)
ctx.restore();
},
function(Sprite,canvas){ // 4 Patron (Experimental)
	Sprite.XG += Sprite.xP;
	Sprite.YG += Sprite.yP;
	PrinT(game,Sprite.x,Sprite.y,32,32,"#FFF")
	if(Sprite.XG < 0){Sprite.XG += 32}
    if(Sprite.XG > 32){Sprite.XG += -32}
    if(Sprite.YG < 0){Sprite.YG += 32}
    if(Sprite.YG > 32){Sprite.YG += -32}  	
ctx = canvas.getContext("2d");
ctx.drawImage(image_collection[Sprite.imgN], 
              Sprite.XG ,
			  Sprite.YG , 
			  Sprite.widthPrint, 
			  Sprite.heightPrint, 
			  Sprite.x + Sprite.Xdiference_Print, 
			  Sprite.y + Sprite.Ydiference_Print,
			  Sprite.widthPrint, 
			  Sprite.heightPrint)
},
function(Sprite,canvas){ // 5 Outside Down 
ctx = canvas.getContext("2d");
ctx.save();
ctx.translate(
	Sprite.x + Sprite.Xdiference_Print, 
	Sprite.y + Sprite.Ydiference_Print,
);
ctx.transform(1, 0, 0, -1, 0, 32);
ctx.drawImage(
	image_collection[Sprite.imgN], 
    Sprite.XG + Sprite.fotogram*Sprite.widthGrid,
	Sprite.YG , 
	Sprite.widthGrid, 
	Sprite.heightGrid, 
	0, 
	0,
    Sprite.widthPrint, 
	Sprite.heightPrint
	)
ctx.restore();
},
function(Sprite,canvas){ // 6 Animation On Y 
ctx = canvas.getContext("2d");
ctx.drawImage(
	image_collection[Sprite.imgN], 
    Sprite.XG ,
	Sprite.YG + Sprite.fotogram*Sprite.heightGrid, 
	Sprite.widthGrid, 
	Sprite.heightGrid, 
	Sprite.x + Sprite.Xdiference_Print, 
	Sprite.y + Sprite.Ydiference_Print,
    Sprite.widthPrint, 
	Sprite.heightPrint
	)
},
]
const Xmargin = [
function MarginTeleport (p1) {
       if(p1.x + p1.MoveXLimit < 0  ){
		   p1.xP = p1.x  +  p1.MoveXLimit - 0  ;
		
		   return true
		}
       if((p1.x + p1.width)  + p1.MoveXLimit >  screenWidth  ){
		   p1.xP = (p1.x + p1.width) +  p1.MoveXLimit - screenWidth;
		  
		   return true
		}	
},
function MarginTeleport (p1) {
	var XREST = p1.width /2;
       if(p1.x < (0  - XREST) ){p1.x += screenWidth}
       if(p1.x >  (screenWidth  - XREST)){p1.x -= screenWidth }	
},
function MarginTeleport (p1) {
	var XREST = p1.width /2;
       if(p1.x < (0  - XREST) ){p1.y = 240;p1.x = 240;p1.lives = 1;p1.MoveY = -8}
       if(p1.x >  (screenWidth  - XREST)){p1.y = 240;p1.x = 240;p1.lives = 1;p1.MoveY = -8}	
},
]
const Ymargin = [
function MarginTeleport (p1) {
       if(p1.y + p1.MoveYLimit < 0  ){
		   p1.yP = p1.y  +  p1.MoveYLimit - 0  ;
		   p1.Ytouch = true
		   return true
		}
	   if((p1.y + p1.height)  + p1.MoveYLimit >  screenHeigth  ){
		   p1.yP = (p1.y + p1.height) +  p1.MoveYLimit - screenHeigth;
		   p1.Ytouch = true
		   if(!p1.invecybility){p1.lives  -- }	
		   return true
		}	   	
},
function MarginTeleport (p1) {
    var YREST = p1.height/2;
       if(p1.y >  (screenHeigth  - YREST)){p1.y += screenHeigth}
       if(p1.y < (0  - YREST) ){p1.y += screenHeigth}
},
function MarginTeleport (p1) {
    var YREST = p1.height/2;
       if(p1.y >  (screenHeigth  - YREST)){p1.y = 240;p1.x = 240;p1.lives = 1;p1.MoveY = -8}
       if(p1.y < (0  - YREST) ){p1.y = 240;p1.x = 240;p1.lives = 1;p1.MoveY = -8}
},
]
function Mini_sprite(X,Y,img,RenderMode,XG,YG,frame,scrip,MoveX,MoveY,width,height,type){
this.script = scrip
this.Live = true
this.x = X; this.y = Y;
this.MoveX = MoveX;this.MoveY = MoveY;
this.width = width
if(this.width == undefined){
	this.width = 16
}
this.height = height
if(this.height == undefined){
	this.height = 16
}
this.type = type
if(this.type == undefined){
	this.type = 1
}
this.imgN = img;
this.Mode = RenderMode
this.XG = XG;this.YG = YG
this.intervald_frame = 0
this.frame = frame
}
const Mini_scrips = [
function(P){
	//0
},
function(P){
	//1
	if(tick){
 P.MoveY += 1;
	 if(P.MoveY > 16){P.MoveY = 16}
}
},
function(P){
	//2

},

function(P){
	//3
	if(Ax3 == 2){
 P.MoveY += 1;
	 if(P.MoveY > 0){P.Live = false}
}
}, 
function(P){
	// 4
	if(Ax4 == 3){
P.intervald_frame++
if(P.intervald_frame >= P.frame){P.Live = false }
	}
},
function(P){
	//5
	if(tick){
P.intervald_frame++
if(P.intervald_frame >= P.frame){ 
 P.MoveY += 1;
	 if(P.MoveY > 16){P.MoveY = 16}
	}
	}
},
]
const explosions32 = [
function(object){
	myMiniSprites.push(new Mini_sprite(object.x,object.y,object.imgN,1,object.XG,object.YG,0,1,-1,-10,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x+16,object.y,object.imgN,1,object.XG+16,object.YG,0,1,1,-10,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x,object.y+16,object.imgN,1,object.XG,object.YG+16,0,1,-1,-8,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x+16,object.y+16,object.imgN,1,object.XG+16,object.YG+16,0,1,1,-8,16,16,0))
},
function(object){
	myMiniSprites.push(new Mini_sprite(object.x,object.y,object.imgN,1,object.XG,object.YG,0,2,-8,-8,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x+16,object.y,object.imgN,1,object.XG+16,object.YG,0,2,8,-8,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x,object.y+16,object.imgN,1,object.XG,object.YG+16,0,2,-8,8,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x+16,object.y+16,object.imgN,1,object.XG+16,object.YG+16,0,2,8,8,16,16,0))
},
function(object){
	myMiniSprites.push(new Mini_sprite(object.x,object.y,object.imgN,1,object.XG,object.YG,RandomNumber(1,16),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x+16,object.y,object.imgN,1,object.XG+16,object.YG,RandomNumber(1,16),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x,object.y+16,object.imgN,1,object.XG,object.YG+16,RandomNumber(1,16),5,0,0,16,16,0))
	myMiniSprites.push(new Mini_sprite(object.x+16,object.y+16,object.imgN,1,object.XG+16,object.YG+16,RandomNumber(1,16),5,0,0,16,16,0))
},
]
function Margin_MS(Sprite){
var crash = false
    if((Sprite.x < screenWidth && (Sprite.x + (Sprite.width)) > 0) && (Sprite.y <  screenHeigth  && Sprite.y + (Sprite.height) > 0)){
	crash =  true  }
return crash
}
function HitBox(X,Y,XU,YU,MoveX,MoveY,Time){
	this.x = X;this.y = Y;
	this.XU = XU ;this.YU = YU;
	this.MoveX = MoveX; this.MoveY = MoveY 
	this.Time = Time
}
function DL_Hitbox(H){
H.Time += -1 ;if(H.Time < 0){return true}  
}
class tile {
	constructor (imgn,color, X, Y,Ycord,Xcord,col,script) {
		this.imgN = imgn; this.BC = color ;
		this.Xcord  = Xcord;this.Ycord = Ycord
		this.col = col
		this.action = false
		this.Xplus = 0
		this.Yplus = 0 
		this.Wid = 32
		this.heg = 32
		this.type = (parseInt(col[4], 32))
		this.XG = (parseInt(col[5], 32))*32; ;
		this.YG = (parseInt(col[6], 32))*32;
		this.fotograms = (parseInt(col[7], 32))
		this.script = script
		this.prin = 1
		this.x = X; this.y = Y;
		this.animation = 0;
	}
	Update_tile (){
	    this.TileTeleport[0]();
		if(Ax4 == 3){
			this.Tiles_animation()
			if(this.action){
				functions_collection[this.script].Loop(this)
			}
		}
	}
	TileTeleport = [
	() => {
		let rX = limitX +Xplus
		let rY = limitY +Yplus
		let Xmargin = limitTilesX +XplusPixels ;
		let Ymargin = limitTilesY +YplusPixels; 
		if(this.y < YplusPixels *-1 ){
			   this.Ycord += rY*-1
			   this.Swich_tile()
			   this.y += Ymargin 
		}
		if(this.y > limitTilesY){
			this.Ycord += rY
			this.Swich_tile()
			this.y += Ymargin *-1
		}
		if(this.x > limitTilesX){
			this.Xcord += rX*-1
			this.Swich_tile()
			this.x += Xmargin  *-1
		}
		if(this.x < XplusPixels *-1){
			   this.Xcord += rX 
			   this.Swich_tile()
			   this.x += Xmargin 
		}
	},
	]
	Swich_tile (){
	let result = TilesCollection.find(Tile => Tile.X == this.Xcord && Tile.Y == this.Ycord  );
	   if(result == undefined){
		   this.col = "00000000";
		   this.script = 0  ;
		   this.prin = 0 ;
		   this.type = 0;
		   this.BC = "rgba(0,0,0,0)";
		   this.XG = 0 ; 
		   this.YG = 0;
		   this.imgN = 0;
		   this.fotograms = 0;
	   }else{
		   this.imgN = result.IN  ;
		   this.col = result.col
		   this.BC = result.color
		   this.type = parseInt(this.col[4], 32) || 0;
		   this.XG = (parseInt(this.col[5], 32))*32 || 0;
		   this.YG = (parseInt(this.col[6], 32))*32 || 0;
		   this.fotograms = (parseInt(col[7], 32)) || 0; 
		   this.script = result.script ?? 0;
		   this.prin = 1
	   }
	  this.intervald_time = 0;
	  this.Xplus = 0;
	  this.Yplus = 0;
	  this.action = false;
	  this.heg = 32;
	  this.Wid = 32;	   
	}
	Tiles_animation(){
	let include = fotograms.indexOf(this.fotograms)
	  if(include != -1){
		this.animation = fG_action[include]
	  }else{
		  this.animation += 1;
	  if(this.animation >= this.fotograms){this.animation = 0}
	  }
	}
	
}
const Tile_Teleport_charge = [
function(variable,valorMayor){
return variable;},
function(variable,valorMayor){
return 0;},
function(variable,valorMayor){
return valorMayor;},
]
function TransfromTile(Tile,color,ImageNumber,Colision,Script){
	Tile.BC = color
	Tile.imgN = ImageNumber
	Tile.col = Colision
	Tile.script = Script
	Tile.XG = ( "0x"+ Tile.col[5])*32 ;Tile.YG = ( "0x"+ Tile.col[6])*32
	var result = TilesCollection.find(TilesCollection => TilesCollection.X === Tile.Xcord && TilesCollection.Y === Tile.Ycord  );
		result.color = color
		result.col = Colision
		result.IN = ImageNumber
		result.script = Script
}
var Xplus = 2
var Yplus = 2
var XplusPixels = Xplus *32
var YplusPixels = Yplus *32
function charge (b,SX,SY,x,y,XL,YL) {
    let X = 0 ;
    let Y = screenHeigth +32; 
    let SXC = SX 
	let SYC = SY 
    var Q = YL - 1;
	var G = XL
	let E = 32
	let stop = 0
    let l = 0
	let L = 0
	function charge (){
    G = XL 
    for(let i = 0; i <  limitX +Xplus; i++){ 
    myObstacles.push(new tile(0,"rgba(0,0,0,256)", X, Y,Q,G,"00000000",0));
	
	if(Q < 0){
		
		myObstacles[myObstacles.length -1].Swich_tile()
		}else{
	        myObstacles[myObstacles.length -1].Swich_tile()
			
			//Q = SAVE.Y;
	}
    X += E;
	G +=1
	if(G > SXC){
		G = (Tile_Teleport_charge[SAVE.scroll_configuration](G,SXC))
		
		}
	}
	X = 0;   
	Y -= E;  
	Q+=1;
	}
    let ctxZ = b.getContext("2d");
	if(TESTSCREEN){
	b.width = screenWidth*2
	b.height = screenHeigth*2
	}else{
    b.width = screenWidth
	b.height = screenHeigth
	}
    ctxZ.clearRect(0, 0, b.width, b.height);
    for(let i = 0; i <  limitY + Yplus	; i++){		
    charge()
    }
	cordX = XL *-32
	cordY = (YL *32) + 32 
    localisated_sprites(Sprite_Collection,mysprites,cordX,cordY)
}
const Tile_Teleport = [
function(Player){
var rX = limitX +Xplus
var rY = limitY +Yplus
var Xmargin = limitTilesX +XplusPixels ;var Ymargin = limitTilesY +YplusPixels; 
if(Player.y < YplusPixels *-1 ){
        Player.Ycord += rY*-1
	   Swich_tile(Player,Player.Ycord,Player.Xcord)
       Player.y += Ymargin 
}
if(Player.y > limitTilesY){
	Player.Ycord += rY
	Swich_tile(Player,Player.Ycord,Player.Xcord)
    Player.y += Ymargin *-1
}
if(Player.x > limitTilesX){
	Player.Xcord += rX*-1
	Swich_tile(Player,Player.Ycord,Player.Xcord)
    Player.x += Xmargin  *-1
}
if(Player.x < XplusPixels *-1){
	   Player.Xcord += rX 
	   Swich_tile(Player,Player.Ycord,Player.Xcord,LC)
       Player.x += Xmargin 
}
},
function(Player){
var SX = SAVE.X;
var SY = SAVE.Y;
var rX = limitX +Xplus
if(limitX -2 >= SX ){rX = 1}
var rY = limitY +Yplus
if(limitY -2 >= SY ){rY = 1}
var Xmargin = limitTilesX +XplusPixels;var Ymargin = limitTilesY +YplusPixels; 
if(Player.y < YplusPixels *-1  ){
        Player.Ycord = (Player.Ycord - rY) % SY
		if(Player.Ycord < 0 ){Player.Ycord = Player.Ycord + SY  }
	   Swich_tile(Player,Player.Ycord,Player.Xcord)
       Player.y += Ymargin 
	   }
if(Player.y > limitTilesY){
	Player.Ycord = (Player.Ycord + rY) % SY ;
	Swich_tile(Player,Player.Ycord,Player.Xcord)
    Player.y += Ymargin *-1
}
if(Player.x > limitTilesX){
	Player.Xcord = (Player.Xcord - rX) % SX ;
	if(Player.Xcord < 0 ){Player.Xcord = Player.Xcord + SX  }
	Swich_tile(Player,Player.Ycord,Player.Xcord)
    Player.x += Xmargin  *-1
}
if(Player.x < XplusPixels *-1){
	   Player.Xcord = (Player.Xcord + rX) % SX ;
	   Swich_tile(Player,Player.Ycord,Player.Xcord)
       Player.x += Xmargin
}
},
function(Player){
var SX = SAVE.X; 
var SY = SAVE.Y
var rX = limitX +Xplus
var rY = limitY +Yplus
var Xmargin = limitTilesX +XplusPixels;var Ymargin = limitTilesY +YplusPixels; 
let out = false
if(Player.y < -64 ){
        Player.Ycord += rY*-1 
		out = true
       Player.y += Ymargin 
}
if(Player.y > limitTilesY){
	Player.Ycord += rY
	out = true
    Player.y +=  Ymargin *-1
}
if(Player.x > limitTilesX){
	Player.Xcord += rX*-1
	out = true
    Player.x += Xmargin  *-1
}
if(Player.x < -64){
	   Player.Xcord += rX 
	   out = true
       Player.x += Xmargin
}
	   if(out){
     let Xcord = Player.Xcord;let Ycord = Player.Ycord
	 let overload = false
     if(Xcord > SX){Xcord = SX;overload = true};if(Xcord < 0){Xcord = 0;overload = true};
	 if(Ycord > SY){Ycord = SY;overload = true};if(Ycord < 0){Ycord = 0;overload = true};
	   Swich_tile(Player,Ycord,Xcord)
	  if(overload){Player.col = "61111000",Player.type = "1"}
	   }
},
]
function clear (b) {
ctx.restore()
ctx.imageSmoothingEnabled = false;
//LCD
//ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
//ctx.fillRect(0, 0, b.width, b.height);
ctx.clearRect(0, 0, b.width, b.height)
ctx.save();
if(TESTSCREEN){
ctx.translate(screenWidthHalf,screenHeigthHalf)
}
ctx.globalAlpha = Alpha
 //LCD


}
function rotate (b,Player) {
ctx = b.getContext("2d");
ctx.save();
ctx.translate(screenWidthHalf,screenHeigthHalf)
ctx.rotate(Player * Math.PI / 180);
ctx.translate(0 - b.width / 2,0 - b.height / 2)
}
function restore (b) {
ctx = b.getContext("2d");
ctx.restore();
}
function UpSideDown (b) {
ctx = b.getContext("2d");
ctx.transform(1, 0, 0, -1, 0, 512);
}
function time_out(bollean,times,variable){
	let Ret = false;if(bollean==true){if(timeV == times){Ret=true;timeV = 0}else{timeV+=1}};return Ret;
}
const CHARACTERS = [
{
Name:"Mario of SMB3" ,
Img :["characters/Mario3.png","characters/Luigi3.png"],	
GridCoordinates:[[0,0,3],[3,0,3]],
GridWidth:64,
GridHeight:64,
width:32,
height:64,
WNEGA:16,
HNEGA:0,
}
]
function Gird_animation(P,array){
	P.YG = array[1]
	if(Ax8 == 7){
		P.XG += 1
	    if(P.XG < array[0] || P.XG > array[2]){
			P.XG = array[0]
			}
	}
	return [P.YG,P.XG ]
}
function ejecuted(P,Cord){
	if(Ax3 == 2){P.XG += 1};if(P.XG >= Cord[2]){P.XG = 0};
}
function Tiles_animation(P,Fotograms){
let include = fotograms.indexOf(Fotograms)
  if(include != -1){
	P.animation = fG_action[include]
  }else{
	  P.animation += 1;
  if(P.animation >= Fotograms){P.animation = 0}
  }
}

function player(width, height,color,Gird, X, Y,comportament,Movement,Xnegative,Ynegative,DeathSound) {
this.width = width; this.height = height;
this.INwidth = width; this.INheight = height;
this.widthSave = width; this.heightSave = height;
this.widthHalf = width/2; this.heightHalf = height/2;
this.crouched = false
this.InMove = true
this.XG = 0; this.YG = 0; 
this.side = false; 
this.sideX = true;
this.sideY = true;  
this.Move = false;this.CameraY = Gird;this.run = false
this.Movement = Movement; this.water = false; this.AnimationWater = false
this.UpTouch = false;this.DownTouch = false
this.LeftTouch = false;this.RightTouch = false
this.ButonBTouch = false;this.ButonATouch = false
this.Xteleport = 0; this.Yteleport = 0;
this.InFlor = false
this.Action = false
this.angle = 0;
this.FristTouch = false
this.Xnegative = Xnegative ;this.Ynegative = Ynegative ;
this.YnegativeSave =  Ynegative ;
this.Hx = 0; this.Hy = 0;
this.velocity = 1
this.prin = 2
this.hits = 0
this.col = comportament
this.xP = 0; this.yP = 0
this.invecybility = true
this.lives = 1
this.touchX = false ;this.touchY = false;
this.x = X; this.y = Y;
this.MoveX = 0;this.MoveY = 0;
this.MoveXLimit = 0;this.MoveYLimit = 0;
this.jumped = false ;this.jt = 0
this.imC = new Image();
this.imC.src = color
this.BX = 0; this.BY = 0;
this.camX = 0;this.camY = 0
this.atackX = false;this.atackY = false
this.delay = 0
this.shotdelay = 0
this.Win = false 
this.priority = true
this.deathMusic = DeathSound
this.Up = false
this.Down = false
this.PlayerJumps = 0
if(this.deathMusic == undefined){
this.deathMusic = new Audio("SoundEfects/DeathSound.mp3")
}else{
this.deathMusic = new Audio(DeathSound)
}
this.songEnd = false
}
function nullTrigers(player){
	player.UpTouch = false;player.DownTouch = false
	player.LeftTouch = false;player.RightTouch = false
	player.ButonBTouch = false;player.ButonATouch = false
}
function PlayerTrigers(Player,ctr){
	nullTrigers(Player)
	if ((Player.keys && Player.keys[controlls[ctr].Jump]) || TouchControls.Abuton) Player.ButonATouch = true;
	if ((Player.keys && Player.keys[controlls[ctr].Run]) || TouchControls.Bbuton) Player.ButonBTouch = true;
	if ((Player.keys && Player.keys[controlls[ctr].left]) || TouchControls.Left) Player.LeftTouch = true;
	if ((Player.keys && Player.keys[controlls[ctr].right]) || TouchControls.Right) Player.RightTouch = true;
	if (Player.keys && Player.keys[controlls[ctr].up]) Player.UpTouch = true;
	if (Player.keys && Player.keys[controlls[ctr].down]) Player.DownTouch = true;
	gp = gamepads[0];
	if (gp) {
		if(gp.buttons[0].pressed || gp.buttons[1].pressed){
			Player.ButonATouch = true;
		}
		if(gp.buttons[2].pressed || gp.buttons[3].pressed){
			Player.ButonBTouch = true;
		}
		let x = gp.axes[0];
		let y = gp.axes[1];

		if (x < -0.5) {
			Player.LeftTouch = true;
		} else if (x > 0.5) {
			Player.RightTouch = true;
		}

		if (y < -0.5) {
			Player.UpTouch = true;
		} else if (y > 0.5) {
			Player.DownTouch = true;
		}
    }
}
function PlayerAction (player,controls,chocolate){
if(player.lives > 0 ){
	 if(!player.InMove){
		 nullTrigers(player)
	 }else{
		 PlayerTrigers(player,controls)
	 }
		 plataformer_Easy(controls,player)
		 
         }else{
			if(chocolate == false){
				backgroundMusic.pause();       // Pausa el audio
					backgroundMusic.currentTime = 0;  // Reinicia al inicio
					
				}
			if(player.songEnd == false){
				player.deathMusic.play()
				}		
        player.lives = 0;if(death[2](player) && player.songEnd){
	   if(chocolate){player.y = 240;player.x = 240;player.lives = 1;player.MoveY = -8
	   player.songEnd = false
   }else{
	   return true;
   }}
}
}

const controlls =[{up:38,down:40,left:37,right:39,Jump:90,Run:88 },{up:87,down:83,left:65,right:68,Jump:32,Run:18 },{up:38,down:40,left:37,right:39,Jump:17,Run:40 },]
function Player_Effects(Player){
	for(let i = 0; i < effects_in_game.length ;i++){
		let effect = effects_in_game[i]
		effectAction[effect.type].Reset(Player)
		let onX = false
		let onY = false
		if(effect.sideX){
			if(Player.x + Player.width > effect.VariableAltureX){
				onX = true
				
			}
		}else{
			if(Player.x  < effect.VariableAltureX){
				onX = true
			}
			
		}
		if(effect.sideY){
			if(Player.y + Player.height > effect.VariableAltureY){
				onY = true
			}
		}else{
			if(Player.y  < effect.VariableAltureY){
				onY = true
			}	
		}
		if(onX && onY){
			effectAction[effect.type].Action(Player)
		}
	}
}
const effectAction =  [
{// default
	Reset: function Reset(Player) {
		
	},
	Action: function Action(Player) {
		
	},
},
{ // water
	Reset: function Reset(Player) {
		
	},
	Action: function Action(Player) {
		Player.water = true
	},
},
{ // Lava
	Reset: function Reset(Player) {

	},
	Action: function Action(Player) {
		Player.water = true
		if(Player.invecybility == false){
			
			Player.lives = 0
		}
	},
},
{ // Shadow 
	Reset: function Reset(Player) {
		InShadow = false
	},
	Action: function Action(Player) {
		InShadow = true	
        DrawShadow = true
	},
},
]
function PacMan(ctr,Player,B,C){
	if(frisFotogram){
	CameraX_frese = 1
	CameraY_frese = 1
	Player.width = 32
	Player.height = 32
	}
	if(Player.Xtouch){
		Player.MoveX = 0
	}
	if(Player.Ytouch){
		Player.MoveY = 0
	}
	Player.InFlor = true
	if (Player.keys && Player.keys[controlls[ctr].left]) {
		Player.MoveX = -2
		Player.side = true
		Player.sideX = true; 
	}
	if (Player.keys && Player.keys[controlls[ctr].right]) {
		Player.MoveX = 2
		Player.side = false
		Player.sideX = false; 
	}
	if (Player.keys && Player.keys[controlls[ctr].up]) {
		Player.MoveY = -2
		Player.sideY = true; 
	}
	if (Player.keys && Player.keys[controlls[ctr].down]) {
		Player.MoveY = 2
		Player.sideY = false; 
	}
	if(Player.MoveX != 0){Player.InFlor = true}
	if(Player.MoveY != 0){Player.InFlor = false}
}
function Kart(ctr,Player,B,C){
	/*
	if(frisFotogram){
		Player.velocity = 8
	}
	*/
	 if(Player.Xtouch){
		 Player.MoveX = 0
		 Player.delay ++
     }
	 if(Player.Ytouch){
		 Player.MoveY = 0
		 Player.delay ++
	 }
	
	Player.InFlor = true
	if(Player.delay > 0 ){
		Player.delay += 1;
			if(Player.delay > 8){
				Player.delay = 0
			}
	}
	//if(Player.delay == 0){	
		if (Player.keys && Player.keys[controlls[ctr].left]) {
			Player.angle -= (4) * Math.PI / 180;    
		}else{
		if (Player.keys && Player.keys[controlls[ctr].right]) {
			Player.angle += (4)  * Math.PI / 180;    
		}
		}
		
		if(Player.keys && Player.keys[controlls[ctr].up]){
			Player.velocity ++
			if(Player.velocity > 8){Player.velocity = 8};
		}
		if(Player.keys && Player.keys[controlls[ctr].down]){
			Player.velocity --
			if(Player.velocity < -8){Player.velocity = -8};
		}
		Player.MoveX = Player.velocity * Math.sin(Player.angle)
		Player.MoveY = (Player.velocity * Math.cos(Player.angle))*-1
		if(Player.velocity >= 0.5){Player.velocity -= 0.5}
		if(Player.velocity <= -0.5){Player.velocity += 0.5}
	//}
		
}
function Fly(ctr,Player,B,C){
	if(frisFotogram){
		Player.velocity = 8
	}
	 if(Player.Xtouch){
		 Player.MoveX = Player.MoveX*-1
		 Player.delay ++
     }
	 if(Player.Ytouch){
		 Player.MoveY = Player.MoveY*-1
		 Player.delay ++
	 }
	Player.InFlor = true
	if(Player.delay > 0 ){
		Player.delay += 1;
			if(Player.delay > 8){
				Player.delay = 0
			}
	}
	if(Player.delay == 0){
		if (Player.keys && Player.keys[controlls[ctr].left]) {
			Player.MoveX --
			Player.side = true
			Player.sideX = true; 
		}
		if (Player.keys && Player.keys[controlls[ctr].right]) {
			Player.MoveX ++
			Player.side = false
			Player.sideX = false; 
		}
		if (Player.keys && Player.keys[controlls[ctr].up]) {
			Player.MoveY --
			Player.sideY = true; 
		}
		if (Player.keys && Player.keys[controlls[ctr].down]) {
			Player.MoveY ++
			Player.sideY = false; 
		}
	}
	if (Player.keys && Player.keys[controlls[ctr].Run]){
		if(tick){Player.velocity  ++}
		if(Player.velocity > 16){Player.velocity = 16};
	}
	if(Player.velocity > 8 && tick){Player.velocity -= 0.5}
	if(Player.MoveX <= -0.5){Player.MoveX += 0.5}
	if(Player.MoveX >= 0.5){Player.MoveX -= 0.5}
	if(Player.MoveY <= -0.5){Player.MoveY += 0.5}
    if(Player.MoveY >= 0.5){Player.MoveY -= 0.5}
	
	if(Player.MoveX > Player.velocity){Player.MoveX = Player.velocity};
    if(Player.MoveX < Player.velocity*-1 ){Player.MoveX = Player.velocity*-1}
	if(Player.MoveY > Player.velocity){Player.MoveY = Player.velocity};
    if(Player.MoveY < Player.velocity*-1 ){Player.MoveY = Player.velocity*-1}
}
// Player Var
var jump_force = -8
function plataformer_Easy(ctr,Player,B,C){
//if(Player.invecybility){Player.Time += 1;Player.prin = 4;if(Player.Time==20){Player.invecybility = false;Player.Time = 0;}}
/*comprobar si esta en el suelo*/
//Player.invecybility = true
 if(Player.Xtouch){
	auto_com[Player.Movement[3]].X(Player);//auto comprotamiento del jugador
}
if(Player.Ytouch){
	auto_com[Player.Movement[2]].Y(Player);//auto comprotamiento del jugador
	Player.hits = 0
}

if(Ax4 == 3){
if(Player.MoveX <= -1){Player.MoveX += 1}
if(Player.MoveX >= 1){Player.MoveX += -1}}
if(Player.delay > 0 ){Player.delay += 1;if(Player.delay > 8){Player.delay = 0}}
/*inputs en el aire*/
Player.Up = false
if (Player.UpTouch) {
	Player.Up = true
}
Player.Down = false
if (Player.DownTouch) {
	Player.Down = true
	/*if(!Player.crouched && Player.jumped ){
	Player.height = Player.heightHalf
	Player.Ynegative += Player.heightHalf*-1
    Player.Yteleport = Player.heightHalf
	Player.crouched = true
	}*/
}/*else{
	/*
	if(Player.crouched && Player.jumped){
	Player.height = Player.heightSave
	Player.Ynegative = Player.YnegativeSave
	Player.Yteleport = Player.heightHalf*-1
	Player.crouched = false	
	}
	
}*/
//console.log(Player.DownTouch +"/"+ Player.UpTouch)
if(Player.delay == 0 && (!Player.crouched || !Player.jumped)  ){
if (Player.LeftTouch) {
	if(Player.jumped){Player.MoveX += -1;Player.side = true
	}else{
			Player.MoveX += -1
	}
}else{ 
if (Player.RightTouch) {
	if(Player.jumped){Player.MoveX += 1;Player.side = false
	}else{
			Player.MoveX += 1
	}
}
}
}
/*En agua*/
if(Player.water ){
	Player.jumped = true;Player.jt = 0;
if (Player.ButonATouch){Jump(Player,-3,1,1)}
if (Player.ButonBTouch){Player.velocity = 4;}

Player.InFlor = false
Player.MoveY += 0.5
if(Player.MoveY == 3){Player.MoveY = 2}
if(Player.MoveY > 3){Player.MoveY -= 2}


if(Player.MoveX > Player.velocity){Player.MoveX = Player.velocity};
if(Player.MoveX < Player.velocity*-1 ){Player.MoveX = Player.velocity*-1}
Player.velocity = 2;
Player.water = false
Player.AnimationWater = true
}else{
	/*En tierra*/
if((Player.Xtouch && Player.InFlor == false) && !Player.Down){
	if(tick){
	Player.InFlor = false
	Player.MoveY += 1;
	if(Player.MoveY > 2){Player.MoveY = 2}
	}
	if(Player.MoveX > 0){Player.side = true}
	if(Player.MoveX < 0){Player.side = false}
	if(Player.delay == 0){
	if (Player.ButonATouch) {
		Player.jumped = true;Player.jt = 0;Jump(Player,-1,1,1);
		Player.delay += 1
		if(Player.side){
			Player.MoveX = -4; 
			}else{
			Player.MoveX = 4
		}
		}
	}
}else{
	if (Player.ButonATouch) {
		Jump(Player,jump_force,10,2);
		}else{
		Player.jumped = false
		Player.jt = 0
		}
	Gravity(Player,16,0.5);
	Player.InFlor = false	
}

if (Player.ButonBTouch && !Player.crouched){Player.velocity = 8;}
if(Player.MoveX > Player.velocity){Player.MoveX = Player.velocity};
if(Player.MoveX < Player.velocity*-1 ){Player.MoveX = Player.velocity*-1}
Player.velocity = 4;
}
ShoterType[shoterMode](ctr,Player)

 
}
function Jump (Player,Number,JumpsIntervals,PlayerJump) {
	//Player.jumped = true // Fly
	 if(Player.jumped && Player.jt <= JumpsIntervals){
     Player.jt += 1
	 Player.MoveY = Number
	}else{
		Player.jumped = false
		Player.jt = 0
	}
}
function ShootDelay(Player,Delay){
	if(Player.shotdelay > 0 ){Player.shotdelay += 1;if(Player.shotdelay > Delay){Player.shotdelay = 0}}
}
var shoterMode = 0
const ShoterType = [
function (ctr,Player){
	if(Player.MoveY < 0){Player.atackY = true}else{Player.atackY = false}
},
function ClasicShotter (ctr,Player){
	//ClasicShotter
	ShootDelay(Player,8)
	Player.shotX = 0
        if(Player.side){
            Player.shotX = -8		
		}else{
			Player.shotX = 8
        } 
Player.shotY = 0
if (Player.UpTouch) {Player.shotY = -8;if(Player.MoveX == 0){Player.shotX = 0}}
if (Player.DownTouch) {Player.shotY = 8;if(Player.MoveX == 0){Player.shotX = 0}}
if (Player.ButonBTouch){
 if(Player.shotdelay == 0){Player.shotdelay += 1
	 myMiniSprites.push(new Mini_sprite(Player.x+(Player.widthHalf/2),Player.y+(Player.heightHalf/2),1,0,0,0,0,0,Player.shotX,Player.shotY))
	 }
  }
},
function MouseShotter (ctr,Player){
	// MouseShotter
Player.angle = Math.atan2(Ymouse - (Player.y+(Player.height/2)), Xmouse - (Player.x+(Player.widthHalf/2)));
if(Player.shotdelay > 0 ){Player.shotdelay += 1;if(Player.shotdelay > 8){Player.shotdelay = 0}}
if (mouse){
 if(Player.shotdelay == 0){Player.shotdelay += 1
	 myMiniSprites.push(new Mini_sprite(Player.x+(Player.widthHalf/2),Player.y+(Player.heightHalf/2),1,0,0,0,0,2,Math.cos(Player.angle) * 10,Math.sin(Player.angle) * 10))
	 }
  }
},
function TankShotter(ctr,player){
if (player.UpTouch){
	if(player.angle > -0.5* Math.PI ){player.angle -= 0.1}
     if(player.angle < -0.5* Math.PI ){player.angle += 0.1}
}
 if (player.DownTouch){
	 if(player.angle > 0.5* Math.PI ){player.angle -= 0.1}
     if(player.angle < 0.5* Math.PI ){player.angle += 0.1}
	 }
 if (player.LeftTouch){ 
 if(player.angle > -1* Math.PI ){
  player.angle -= 0.1
 if(player.angle < -1* Math.PI ){player.angle = -1* Math.PI }
 }else{
	 player.angle += 0.1
 if(player.angle > -1* Math.PI ){player.angle = -1* Math.PI } 
 }
 }
  if (player.RightTouch){ 
  if(player.angle > 0* Math.PI ){
  player.angle -= 0.1
 if(player.angle < 0* Math.PI ){player.angle = 0* Math.PI }
 }else{
	 player.angle += 0.1
 if(player.angle > 0* Math.PI ){player.angle = 0* Math.PI } 
 }
 }
if(player.shotdelay > 0 ){player.shotdelay += 1;if(player.shotdelay > 8){player.shotdelay = 0}}
if (player.ButonBTouch){
 if(player.shotdelay == 0){player.shotdelay += 1
	 myMiniSprites.push(new Mini_sprite(player.x+(player.widthHalf/2),player.y+(player.heightHalf/2),1,0,0,0,0,0,Math.cos(player.angle) * 10,Math.sin(player.angle) * 10))
	 }
  }
}
]
function animation(P,Con){
	/*Muerto*/
	if(P.lives <= 0 ){
		P.YG = 4
		if(Ax4 == 3){
			P.XG += 1;
			if(P.XG > Con[10]){
			P.XG = 0
			}
		}
		if(P.XG > Con[10]){
			P.XG = 0
		}
		return;
	}
	if(P.crouched){
		P.XG = 0
		P.YG = 7
		if(P.side){
		P.YG += 1
		}
		return;
	}
	/*comprobar si no esta en el aire*/
	if(P.InFlor ){
		/*comprobra si esta corriendo o no*/
		if((P.MoveX + P.BX) > 6  || (P.MoveX + P.BX) < -6){
			P.run = true
		}else{
			P.run = false
		}
		/*corriendo*/
		P.YG = 0
		if(P.run){
			if(Ax3 == 2){
				P.XG += 1;
				if(P.XG < Con[3]+Con[2] && Con[4] != 0){
					P.XG = Con[3]+Con[2];
				}
				if(P.XG > (Con[3]+Con[4]+Con[2])){
					if(Con[4] == 0){
						P.XG = 0
					}else{
					P.XG = Con[3]+Con[2];
						if(Con[2] == 0){
						P.XG += 1
						}
					}
				}
			} 
		}else{
				/*caminando*/
			if(P.MoveX  != 0){
				if(Ax4 == 3){
				P.XG += 1;
					if(P.XG > Con[3]){
					P.XG = Con[2]}
					}
			}else{
				P.XG = 0
			}
		}
	    /*derrape*/
		if(P.MoveX  > 0 && P.side){
			P.XG = Con[5];
			};
		if(P.MoveX  < 0 && !P.side){
			P.XG =  Con[5];
			}
	}else{
			/*comprobra si esta en agua o no*/
		if(P.AnimationWater ){
				/*En agua*/
			P.YG = 5;
			if(P.MoveY < 1){if(Ax8 == 7){P.XG += 1};if(P.XG >= Con[9]){P.XG = 0};}else{
			if(Ax8 == 7){if(P.XG == 0){P.XG = 1}else{P.XG = 0}};
			}
		P.AnimationWater = false
		}else{
				/*saltando*/
			let maxin  = Con[6]
			P.YG = 2;
				if(P.MoveY > 1){
				maxin += Con[7] ;
				    if(P.XG < Con[6]){
						P.XG += Con[7]
					}
				}
				if(P.run){
				/*saltando y  corriendo*/
					if(P.XG < Con[8]){
						P.XG += Con[8]
						}
				maxin += Con[8];
					if(tick){
						P.XG += 1
						}; 
					if(P.XG >= maxin){
						P.XG = maxin -Con[6]  
						}; 
			}else{
				if(tick){
					P.XG += 1
					};
				if(P.XG >= maxin){
					P.XG = maxin -Con[6]  
				}
			}
		}	
	}
	if(P.side){
		P.YG += 1
	}
	
}
function MouseBlock(){
	if(mouse){
	sprites.push(new Sprite((Xmouse - 8) - cordX,(Ymouse - 8) - cordY,16,16,0,"111100000",1,"0000",2,2))
			sprites[sprites.length -1].x += cordX
			sprites[sprites.length -1].y += cordY
    }
}

function Gravity (P,N,CameraY) {
    P.MoveY += CameraY;
  }

function MiniSpriteColision(Sprite,MiniSprites){
for (i = 0; i < MiniSprites.length; i += 1){
if(MiniSprites[i].type > 0){
let MiniSprite = MiniSprites[i]
	if((Sprite.x < MiniSprite.x + MiniSprite.width && (Sprite.x + (Sprite.width)) > MiniSprite.x) && (Sprite.y < MiniSprite.y + (MiniSprite.height))  && Sprite.y + (Sprite.height) > MiniSprite.y){
		   MiniSprites.splice(i, 1); 
		   Sprite.BulletTouch = true
		   Sprite.live --
	}
 }
}
}
const For_let_Action = [
function(B){
	"nothing"
},
function(B){
},
function(B){
},
function(B){
},
function(B){
	B.Yplus += 2 ;if(B.Yplus > 0){B.Yplus = 0;B.action = false}
}
]	
const death = [
function(Player){return true},
function(Player){
var death = false
if( Player.jumped == false  || Player.jumped == true){
Player.MoveX = 0;Player.MoveY = 0;Player.print = 3; Player.extra = 0;Player.jumped = 67}
Player.radios += 2
Player.extra += 1
if(Player.extra == 10){death = true
}return death},
function(Player){
var death = false
if( Player.jumped == false  || Player.jumped == true){
Player.MoveX = 0;Player.MoveY = -12; Player.jumped = 67}
if(tick){Gravity(Player,16,1)}
Player.y += Player.MoveY;
if(Player.y >= 576){death = true
}return death},
function(Player){
var death = false
if( Player.jumped == false  || Player.jumped == true){
Player.MoveY = -18; Player.jumped = 67;Player.print = 5}
Player.angle += 10 * Math.PI / 180
if(tick){Gravity(Player,16,1)}
Player.y += Player.MoveY;Player.x += Player.MoveX
if(Player.y >= 576){death = true
}return death},
]
const calculate =[
{ 
X :	function nothing () {return false},
Y :	function nothing () {return false},
},{ 
X :	function cube (PL,object) {let crash = false
//revisa si el jugador esta dentro del objeto
if((PL.x < (object.x + 32) - PL.MoveXLimit && (PL.x + (PL.width)) > (object.x - PL.MoveXLimit)) && (PL.y < (object.y + 32))  && PL.y + (PL.height) > object.y){
	if( (PL.x + (PL.width)) > (object.x + 32)){ // revisa de donde esta chocando
		if(object.col[3] != 0){ // cero es que no hay colision
			if(PL.FristTouch){
			if(col[( "0x" + object.col[3])*1].RIGTH(PL,object)){ // aplica el respectivo efecto del objeto
				PL.Xtouch = true
			}
			PL.xP = PL.x - ((object.x + 32) - PL.MoveXLimit) // aplica una operacion para sacar al jugador de ahi
			}
			PL.RightTouch = true
			PL.Xtouches ++
			crash = true
		} // todo lo demas funciona igual solo que en lo otro
	}
	if( PL.x < object.x ){
		if(object.col[1] != 0){
			if(PL.FristTouch){
			if(col[( "0x" + object.col[1])*1].LEFT(PL,object)){
				PL.Xtouch = true
			}
			PL.xP = (PL.x + PL.width) - (object.x  - PL.MoveXLimit)
			}
			PL.LeftTouch = true
			PL.Xtouches ++
			crash = true
		}
	}
};return crash},
Y :	function cube (PL,object) {
	let crash = false
if((PL.x < object.x + (32) && (PL.x + (PL.width)) > object.x) && (PL.y <  (object.y + 32) - PL.MoveYLimit)  && (PL.y + (PL.height) > ((object.y) - (PL.MoveYLimit)))){
	if((PL.y <  (object.y + 32) - PL.MoveYLimit)){
		if( (PL.y + (PL.height)) > (object.y + 32)){
			if(object.col[2] != 0){
				if(PL.FristTouch){
				if(col[( "0x" + object.col[2])*1].DOWN(PL,object)){
				PL.Ytouch = true
				if(PL.touchesInY == 1){
					PL.lives = -1
				}
			    }
			   PL.yP = PL.y - ((object.y + 32) - PL.MoveYLimit)
				}
				PL.DownTouch = true
				PL.Ytouches ++
			   crash = true
			   
		    }
	    
		}
	   if( PL.y < object.y ){
		   if(object.col[0] != 0){
			   if(PL.FristTouch){
			   if(col[( "0x" + object.col[0])*1].UP(PL,object)){
				PL.Ytouch = true
			    }
			PL.yP = (PL.y + PL.height) - (object.y  - PL.MoveYLimit)
			   }
			   PL.UpTouch = true
			   PL.Ytouches ++
			crash = true
		   }
	    }
	}
};
return crash},
},{ 
X :	function cube (PL,B) {return false},
Y :	function cube (PL,object) {let crash = false
let tileVy = PL.MoveYLimit +1
if((PL.x < object.x + (32) && (PL.x + (PL.width)) > object.x) && (PL.y <  (object.y + 32) - tileVy)  && (PL.y + (PL.height) > ((object.y + 1) - (tileVy)))){
		if(PL.y + PL.height < (object.y + 1)){
			if(object.col[0] != 0){
				if(PL.FristTouch){
			   if(col[( "0x" + object.col[0])*1].UP(PL,object)){
				//auto_com[PL.Movement[2]].Y(PL);
				PL.Ytouch = true
			    }
			PL.yP = (PL.y + PL.height) - ((object.y +1)  - tileVy)
				}
				PL.UpTouch = true
				PL.Ytouches ++
			crash = true
			}
	    }
};return crash},
},{
X :	function cube_whit_not_solid (PL,B) {
if((PL.x < (B.x+8) + (32 - 8) && (PL.x + (PL.width)) > (B.x+8)) && (PL.y < (B.y+8) + (32 - 8))  && PL.y + (PL.height) > (B.y+8)){
if(B.col[1] != 0  && PL.priority != undefined){colM[B.col[1]].X(PL,B)
functions_collection[B.script].Action(B,PL,false)
;
}
}
},
Y :	function cube_whit_not_solid (PL,B) {
if((PL.x < (B.x+8) + (32 - 8) && (PL.x + (PL.width)) > (B.x+8)) && (PL.y < (B.y+8) + (32 - 8))  && PL.y + (PL.height) > (B.y+8)){
if(B.col[1] != 0  && PL.priority != undefined){colM[B.col[0]].Y(PL,B)
functions_collection[B.script].Action(B,PL,false)
;
}
}
},
},{ 
X :	function triangle (PL,B) {let crash = false
 let distance =  (B.x - (PL.x-16))  ; if(distance > 0){distance = 0}
if((PL.x < B.x + (32) && (PL.x + (PL.width)) > B.x) && (PL.y < B.y + (32))  && PL.y + (PL.height) > ((B.y) - distance)){
if(PL.MoveX > 0){crash =  col[B.col[1]].LEFT(PL,B.x,B)}
};return crash},
Y :	function triangle (PL,B) {let crash = false
let distance =  (B.x - (PL.x-16)) ; if(distance > 0){distance = 0}
if((PL.x < (B.x + (32)) && (PL.x + (PL.width)) > B.x) && (PL.y <  (B.y + (32))  && PL.y + (PL.height) > ((B.y) - distance))){
if(PL.MoveY < 0){col[B.col[2]].DOWN(PL,B.y + (32))}else{
col[B.col[0]].UP(PL,(B.y) - distance,B)}
crash = true};return crash},
},{ 
X :	function triangle (PL,B) {let crash = false
 let distance =  ((PL.x-16) - B.x) ; if(distance > 0){distance = 0}
 PrinT(PL,B.x,(B.y+1) - distance,32,32,"#F00")
if((PL.x < B.x + (32) && (PL.x + (PL.width)) > B.x) && (PL.y < B.y + (32))  && PL.y + (PL.height) > ((B.y) -  distance)){
if(PL.MoveX < 0){crash =  col[B.col[5]].RIGTH(PL,B.x + (32),B)}
};return crash},
Y :	function triangle (PL,B) {let crash = false
let distance =  ((PL.x-16) - B.x) ; if(distance > 0){distance = 0}
if((PL.x < (B.x + (32)) && (PL.x + (PL.width)) > B.x) && (PL.y <  (B.y + (32))  && PL.y + (PL.height) > ((B.y) - distance))){
if(PL.MoveY < 0){col[B.col[2]].DOWN(PL,(B.y) + (32),B)}else{
col[B.col[0]].UP(PL,(B.y) - distance,B)}
crash = true};return crash},
},		
]
const calculate_M =[
{ /*no moving  0 */
X :	function cube (PL,B) {let crash = false
let tileVx = (PL.MoveX + PL.BX) 
if((PL.x < (B.x + B.width) - tileVx && (PL.x + (PL.width)) > (B.x - tileVx)) && (PL.y < (B.y + B.height))  && PL.y + (PL.height) > B.y){
	if( (PL.x + (PL.width)) > (B.x + B.width)){
		if(B.Rigth != 0){
			if(col[B.Rigth].RIGTH(PL,B)){
				auto_com[PL.Movement[3]].X(PL);
				PL.touchX = true
				PL.RightTouch = true
			}
			PL.xP = PL.x - ((B.x + B.width) - tileVx)
			crash = true
		}
	}
	if( PL.x < B.x ){
		if(B.Left != 0){
			if(col[B.Left].LEFT(PL,B)){
				auto_com[PL.Movement[3]].X(PL);
				PL.touchX = true
				PL.LeftTouch = true
			}
			PL.xP = (PL.x + PL.width) - (B.x  - tileVx)
			crash = true
		}
	}
};return crash},

Y :	function cube (PL,B) {let crash = false
let tileVy = (PL.MoveY + PL.BY) 
if((PL.x < B.x + (B.width) && (PL.x + (PL.width)) > B.x) && (PL.y <  (B.y + B.height) - tileVy)  && (PL.y + (PL.height) > ((B.y) - (tileVy)))){
		if( (PL.y + (PL.height)) > (B.y + B.height)){
			if(B.Down != 0){
				if(col[B.Down].DOWN(PL,B)){
				auto_com[PL.Movement[2]].Y(PL);
				PL.touchY = true
				PL.DownTouch = true
			    }
			   PL.yP = PL.y - ((B.y + B.height) - tileVy)
			   crash = true
		    }
		}
	   if( PL.y < B.y ){
		   if(B.Up != 0){
			   if(col[B.Up].UP(PL,B)){
				auto_com[PL.Movement[2]].Y(PL);
				PL.touchY = true
				PL.UpTouch = true
			    }
			PL.yP = (PL.y + PL.height) - (B.y  - tileVy)
			crash = true
		   }
	    }
};return crash},
},{ 

    /*moving havent colision  1 */	
	
X :	function cubeMoving (PL,B) {let crash = false
let tileVx =  (PL.MoveX + PL.BX) 
if((PL.x < (B.x + B.width ) - tileVx && (PL.x + (PL.width)) > (B.x - tileVx)) && (PL.y < (B.y + B.height ))  && PL.y + (PL.height) > (B.y  )){
	if((PL.y + (PL.height)) > (B.y + 16)){

  colM[B.Left].X(PL,B)
      B.Xplayertouch = true
	}
  }
},

Y :	function cubeMoving (PL,B) {
	if(SemiSolidMovingColision(PL,B)){return true}
},

},{ /*moving have colision   2 */
	
X :	function cubeMoving (PL,B) {let crash = false
let tileVx = (PL.MoveX + PL.BX) 
if((PL.x < (B.x + B.width ) - tileVx && (PL.x + (PL.width)) > (B.x - tileVx)) && (PL.y < (B.y + B.height ))  && PL.y + (PL.height) > (B.y  )){
	if((PL.y + (PL.height)) > (B.y + 16)){
  colM[B.Left].X(PL,B)
      B.Xplayertouch = true
	}
  }
},

Y :	function cubeMoving (PL,B) {
if(SemiSolidMovingColision(PL,B)){return true}
},
},{ /*moving have colision  3*/
	
X :	function cubeMoving (PL,B) {let crash = false
let tileVx = (PL.MoveX + PL.BX) 
if((PL.x < (B.x + B.width +1) - tileVx && (PL.x + (PL.width)) > (B.x - tileVx -1)) && (PL.y < (B.y + B.height ))  && PL.y + (PL.height) > (B.y  )){
	if((PL.y + (PL.height)) > (B.y + 16)){
		
  colM[B.Left].X(PL,B)
      B.Xplayertouch = true
	}
  }
},

Y :	function cubeMoving (PL,B) {
if(SemiSolidMovingColision(PL,B)){return true}
},
},{ /*moving efect  4 */
	
X :	function cubeMoving (PL,B) {let crash = false
let tileVx = (PL.MoveX + PL.BX) 
if((PL.x < (B.x + B.width +1) - tileVx && (PL.x + (PL.width)) > (B.x - tileVx -1)) && (PL.y < (B.y + B.height ))  && PL.y + (PL.height) > (B.y  )){
	if((PL.y + (PL.height)) > (B.y + 16)){
		
  colM[B.Left].X(PL,B)
      B.Xplayertouch = true
	}
  }
},

Y :	function cubeMoving (PL,B) {
	let tileVy = (PL.MoveY + PL.BY) 
if((PL.x < (B.x + B.width) && (PL.x + PL.width) > B.x) && (PL.y < (B.y + B.height - tileVy ))  && PL.y + (PL.height) > (B.y - tileVy )){
  colM[B.Up].Y(PL,B)
      B.Yplayertouch = true
	}
  }
},{ /*Experiment*/
X :	function cube (PL,B) {let crash = false
let tileVx = (PL.MoveX + PL.BX) 
if((PL.x < (B.x + B.width) - tileVx && (PL.x + (PL.width)) > (B.x - tileVx)) && (PL.y < (B.y + B.height))  && PL.y + (PL.height) > B.y){
	
	
	if( (PL.x + (PL.width)) > (B.x + B.width)){
		crash = (col[B.Rigth].RIGTH(PL,(B.x + B.width) - tileVx,B));
	}
	if( PL.x < B.x ){
		crash = (col[B.Left].LEFT(PL,(B.x ) - tileVx,B));
	}
};return crash},
Y :	function cube (PL,B) {let crash = false
let tileVy = (PL.MoveY + PL.BY) +1
if((PL.x < B.x + (B.width) && (PL.x + (PL.width)) > B.x) && (PL.y <  (B.y + B.height) - tileVy)  && (PL.y + (PL.height) > ((B.y + 1) - (tileVy)))){
		if( (PL.y + (PL.height)) > (B.y + B.height)){
	    crash = (col[B.Down].DOWN(PL,(B.y +  B.height) - tileVy ,B));
		}
	   //if( PL.y < B.y ){
		if(PL.y + PL.height < (B.y + 1)){
	    crash = (col[B.Up].UP(PL,((B.y + 1) ) - tileVy,B));
	    }
};return crash},
},
]
function SemiSolidMovingColision(PL,B){
	PL.touchesInY = 0
let crash = false
let extraUp = 0
if(B.yP > 0){extraUp = (B.yP*-1)-2 };if(B.yP < 0){extraUp = B.yP }
if((PL.x < (B.x-PL.Hx) + (B.width) && (PL.x + (PL.width)) > (B.x-PL.Hx)) && (PL.y <  (B.y-1)  && (PL.y + (PL.height) > (B.y+extraUp) ))){
	if(B.Up != 0){
	   PL.Hx +=  B.xP
	   PL.Hy =  B.yP
	}
		if((PL.MoveY + PL.BY) > 0 ){
			if(B.Up != 0){
			   if(col[B.Up].UP(PL,B)){
				auto_com[PL.Movement[2]].Y(PL);
				PL.touchY = true
				PL.touchesInY += 1
			    }
			PL.yP = (PL.y + PL.height ) - (B.y + B.yP*-1)
			crash = true
			}
			B.Yplayertouch = true
		}
};return crash
}
const col =[
{   /*nothing-0*/
UP: function Y () {},DOWN: function Y () {},
LEFT : function X () {},RIGTH: function X () {},
},{ /*solid-1*/
UP: function Y (PL){PL.BY = 0;return true ;},
DOWN: function Y (PL){PL.BY = 0;return true ;},
LEFT : function X (PL) {PL.BX = 0;return true ;},
RIGTH: function X (PL) {PL.BX = 0;return true ;},
},{    /*Action-2*/
UP: function Y (PL,N){ },
DOWN: function Y (PL){ },
LEFT : function X (PL) { },
RIGTH: function X (PL) { },
},{   /*bouncing-3*/
UP: function Y (PL){PL.MoveY = -16;PL.BY = 0},
DOWN: function Y (PL){if(PL.BY == 0){PL.MoveY = 16;PL.BY = 0}else{PL.BY = 24;PL.MoveY = 0}},
LEFT : function X (PL) {PL.BX = -16;PL.MoveX = 0},
RIGTH: function X (PL) {PL.BX = 16;PL.MoveX = 0},
},{   /*treadmill <- 4*/
UP: function Y (PL){if(PL.BX > -2){PL.BX += -2};return true},
DOWN: function Y (PL){if(PL.BX < 2){PL.BX += 2};return true},
LEFT : function X (PL){if(PL.BY < 4){PL.BY += 2};return true},
RIGTH: function X (PL) {if(PL.BY > -8){PL.BY += -2};return true},
},{   /*treadmill -> 5*/
UP: function Y (PL){if(PL.BX < 2){PL.BX += 2};return true},
DOWN: function Y (PL){if(PL.BX > -2){PL.BX += -2}return true},
LEFT : function X (PL) {if(PL.BY > -8){PL.BY += -2};return true},
RIGTH: function X (PL) {if(PL.BY < 4){PL.BY += 2};return true},
},{    /*dangerus-death-6*/
UP: function Y (PL){if(PL.invecybility != true){PL.lives --;};return true},
DOWN: function Y (PL){if(PL.invecybility != true){PL.lives --;};return true},
LEFT : function X (PL) {if(PL.invecybility != true){PL.lives --;};return true},
RIGTH: function X (PL) {if(PL.invecybility != true){PL.lives --;};return true},
},{   /*extra life - Extra power-7 no in using*/
UP: function Y (PL){if(PL.invecybility != true){PL.lives += 1;PL.invecybility = true};return true},
DOWN: function Y (PL){if(PL.invecybility != true){PL.lives += 1;PL.invecybility = true};return true},
LEFT : function X (PL) {if(PL.invecybility != true){PL.lives += 1;PL.invecybility = true};return true},
RIGTH: function X (PL) {if(PL.invecybility != true){PL.lives += 1;PL.invecybility = true};return true},
},{  /*bouncing-8*/
UP: function Y (PL){PL.MoveY = PL.MoveY *-1;},
DOWN: function Y (PL){PL.MoveY = PL.MoveY *-1;},
LEFT : function X (PL) {PL.BX = PL.MoveX *-1;PL.MoveX = 0},
RIGTH: function X (PL) {PL.BX = PL.MoveX *-1;PL.MoveX = 0},
},{ /*Action-9*/
UP: function Y (PL,B){;return true;},
DOWN: function Y (PL,B){;return true;},
LEFT : function X (PL,B){;return true},
RIGTH: function X (PL,B){;return true},
},{   /*trap Player*/
UP: function Y (PL){return true},
DOWN: function Y (PL){return true},
LEFT : function X (PL){PL.BY = -2 ;return true},
RIGTH: function X (PL) {PL.BY = -2;return true},
},
]
const colM =[
{ /*nothing (0)*/
X: function X (PL) {"nothing"},
Y: function Y (PL) {"nothing"},
},{   /*Action or input 1*/
X: function X (PL) {"custom script"},
Y: function Y (PL) {"custom script"},
},{  /* + block (2)*/
X: function X (PL) {if(PL.MoveY - PL.BY > 0 ){PL.BY = -8}else{PL.BY = 8};PL.MoveY = 0;PL.jumped = false},
Y: function Y (PL) {if(PL.MoveX - PL.BX > 0 ){PL.BX = -8}else{PL.BX = 8};PL.MoveX = 0;PL.jumped = false},
},{   /* - block (3)*/
X: function X (PL) {if(PL.MoveY + PL.BY < 0 ){PL.BY = -8}else{PL.BY = 8};},
Y: function Y (PL) {if(PL.MoveX + PL.BX < 0 ){PL.BX = -8}else{PL.BX = 8};},
},{   /* water (4)*/
X: function X (PL) {PL.water = true},
Y: function Y (PL) {PL.water = true},
},{    /* prizes (5)*/
X: function X (PL,B) {prizes += 1;B.col = "00000000";},
Y: function Y (PL,B) {prizes += 1;B.col = "00000000";},
},{  /* death (6)*/
X: function X (PL,B) {if(PL.invecybility != true){PL.lives --;}},
Y: function Y (PL,B) {if(PL.invecybility != true){PL.lives --;}},
},{  /* no use (7)*/
X: function X (PL) {if(PL.invecybility != true){PL.lives += 1;PL.invecybility = true}},
Y: function Y (PL) {if(PL.invecybility != true){PL.lives += 1;PL.invecybility = true}},
},{ /*8 Win */
X: function X (PL,B) {PL.Win = true;PL.InMove = false},
Y: function Y (PL,B) {PL.Win = true;PL.InMove = false},
},{ /*9 checkpoint */
X: function X (PL,B) {establecing_starcords(B.Xcord,B.Ycord,PL);B.col = "00000000"},
Y: function Y (PL,B) {establecing_starcords(B.Xcord,B.Ycord,PL);B.col = "00000000"},
}
]
function stopX(p1,tiles){
let GoTo = 0
var crash = false
cordX += cameraX
if(Limit_Left !== false){
    if(Limit_Left < cordX)
    {GoTo =  Limit_Left - cordX;crash = true;p1.camX =1;}}
if(Limit_Rigth !== false){
	if(Limit_Rigth  > cordX - screenWidth ){
		GoTo =  Limit_Rigth - (cordX - screenWidth)  ;crash = true;p1.camX =0}}
if(crash){
	for (i = 0; i < tiles.length; i += 1){
		tiles[i].x += GoTo
	}
	if(!frisFotogram){
		p1.x += GoTo - p1.xP
	}//else{ p1.x += GoTo + p1.xP}
	cameraX += GoTo
	cordX += GoTo;
	p1.modeX = 1;
}else{
	p1.modeX = SAVE.CameraX_frese;
}
}	
const cameraModeX = [
function(Player) {
	if(((Player.x + Player.width) < (screenWidthHalf + Player.widthHalf)) && SAVE.CameraX_frese == 0){
	Player.modeX = 0;corection = -1;cameraX += 0 ;Player.x = (screenWidthHalf - Player.widthHalf) 
	}
},
function(Player) {
	if((Player.x > (screenWidthHalf - Player.widthHalf)) && SAVE.CameraX_frese == 0 ){
	Player.modeX = 0;corection = -1;cameraX += 0 ;Player.x = (screenWidthHalf - Player.widthHalf) 
	}
},
]
function stopY(p1,tiles){
let GoTo = 0
var crash = false
let line_position = 0
let SaveCordY = cordY
cordY += cameraY 
let SaveMovement = cameraY
if(Limit_Up !== false){
    if(Limit_Up < (cordY + screenHeigth)){
		//console.log("stopUp")
	GoTo =  Limit_Up - (cordY + screenHeigth) ;crash = true;p1.camY =1;
	}
	}
if(Limit_Down !== false){
	if(Limit_Down   > cordY ){
		//console.log("stopdown")
		GoTo = Limit_Down  - cordY ;crash = true;p1.camY =0;}
		}
if(crash){
	for (i = 0; i < tiles.length; i += 1){
		tiles[i].y += GoTo
	} 
    if(!frisFotogram){
		p1.y += GoTo - p1.yP
		}//else{ p1.y += GoTo + p1.yP}
	cameraY += GoTo
	cordY += GoTo;
	p1.modeY = 1;
}else{
	p1.modeY = SAVE.CameraY_frese;
}
}	
const cameraModeY = [
function(Player,tiles) {
	if(((Player.y + Player.INheight) < (screenHeigthHalf + Player.heightHalf)) && SAVE.CameraY_frese == 0 ){
		//console.log("up")
	Player.modeY = 0;corection = -1;cameraY = 0;Player.y = (screenHeigthHalf - Player.heightHalf) 
    }
},
function(Player,tiles) {
	if((Player.y > (screenHeigthHalf - Player.heightHalf)) && SAVE.CameraY_frese == 0 ){
		//console.log("down")
	Player.modeY = 0;corection = -1;cameraY = 0;Player.y = (screenHeigthHalf - Player.heightHalf) 
	}
	},
]
const modeX = [
function(Player,tiles,mysprites) {
let crash = false
Player.Xtouch = false
Player.LeftTouch = false
Player.RightTouch = false
if(tick){
if(Player.BX <= -1){Player.BX += 1}
if(Player.BX >= 1){Player.BX += -1}
}
	let MoveX = Player.MoveX + Player.BX
	if(MoveX > positveLimit){MoveX = positveLimit}
	if(MoveX < negativeLimit){MoveX = negativeLimit}
	if(Player.Xteleport != 0 ){
				MoveX = Player.Xteleport
				Player.Xteleport = 0
	}
Player.MoveXLimit = MoveX  + Player.Hx
Player.xP = (MoveX + Player.Hx) *-1
cameraX = Player.xP
/*calculate sprites*/

for (i = 0; i < mysprites.length; i += 1){
	
    if(calculate_M[mysprites[i].typeColision].X(Player,mysprites[i])){
		mysprites[i].Xplayertouch = true
        crash = true; i = 1000;
	}
}
if(CompleteTilesColisionX(Player,tiles)){
	crash = true
}


if(crash){cameraX += Player.xP}
	for (i = 0; i < tiles.length; i += 1){
		tiles[i].x += cameraX
	}
return cameraX;},
function(Player,tiles,mysprites) {
let crash = false
Player.Xtouch = false
Player.LeftTouch = false
Player.RightTouch = false
	let MoveX = Player.MoveX + Player.BX
	if(MoveX > positveLimit){MoveX = positveLimit}
	if(MoveX < negativeLimit){MoveX = negativeLimit}
	if(Player.Xteleport != 0 ){
				MoveX = Player.Xteleport
				Player.Xteleport = 0
	}
	Player.MoveXLimit = MoveX  + Player.Hx
let XnextPosition = MoveX +  Player.Hx

if(tick){
if(Player.BX <= -1){Player.BX += 1}
if(Player.BX >= 1){Player.BX += -1}
}

if(Xmargin[SAVE.Margin](Player)){
	crash = true
}
for (i = 0; i < mysprites.length; i += 1){
	
	if(calculate_M[mysprites[i].typeColision].X(Player,mysprites[i])){
		mysprites[i].Xplayertouch = true
		crash = true
	}
}
if(CompleteTilesColisionX(Player,tiles)){
	crash = true
}

if(crash){XnextPosition += Player.xP *-1}
Player.x += XnextPosition
return 0;
},
];
const modeY = [
function(Player,tiles,sprites){
	/*cameraY free  // mode 0*/
    let crash = false
	Player.Ytouch = false
	Player.UpTouch = false
	Player.DownTouch = false
	if(tick){	
       if(Player.BY <= -1){Player.BY += 1}
       if(Player.BY >= 1){Player.BY += -1}
    }
	let MoveY = Player.MoveY + Player.BY
	if(MoveY > positveLimit){MoveY = positveLimit}
	if(MoveY < negativeLimit){MoveY = negativeLimit}
	if(Player.Yteleport != 0 ){
		MoveY = Player.Yteleport
		Player.Yteleport = 0
    }
	Player.MoveYLimit = MoveY
    Player.yP = MoveY *-1 
    cameraY = Player.yP
	
    Player.Hy = 0; Player.Hx = 0
	
/*calculate sprites*/
for (i = 0; i < sprites.length; i += 1){
	
     if(calculate_M[sprites[i].typeColision].Y(Player,sprites[i],MoveY)){
		 mysprites[i].Yplayertouch = true
         crash = true;i = 1000
		 }
}
cameraY += Player.Hy *-1
Player.MoveYLimit += Player.Hy *-1
/*calculate tiles*/
if(CompleteTilesColisionY(Player,tiles)){
	if(Player.Ytouch && Player.MoveYLimit > 0 ){
			 Player.InFlor = true
		 }
	crash = true
}
if(crash){cameraY += Player.yP }
	for (i = 0; i < tiles.length; i += 1){
		tiles[i].y += cameraY
	}
return cameraY},
function(Player,tiles,sprites) { 
 /*cameraY stuck // mode 1 */
let crash = false
Player.Ytouch = false
	Player.UpTouch = false
	Player.DownTouch = false
if(tick){
if(Player.BY <= -1){Player.BY += 1}
if(Player.BY >= 1){Player.BY += -1}
}
	let MoveY = Player.MoveY + Player.BY
	if(MoveY > positveLimit){MoveY = positveLimit}
	if(MoveY < negativeLimit){MoveY = negativeLimit}
	if(Player.Yteleport != 0 ){
			MoveY = Player.Yteleport
			Player.Yteleport = 0
	}
	Player.MoveYLimit = MoveY
let YnextPosition = MoveY  


if(Ymargin[SAVE.Margin](Player)){
	crash = true
	if(Player.Ytouch && Player.MoveYLimit > 0 ){
			 Player.InFlor = true
		 }
}
Player.Hy = 0;Player.Hx = 0;


for (i = 0; i < sprites.length; i += 1){
	
    if(calculate_M[sprites[i].typeColision].Y(Player,sprites[i],MoveY)){
		mysprites[i].Yplayertouch = true
		crash = true
    }
}
YnextPosition += Player.Hy 
Player.MoveYLimit += Player.Hy 

if(CompleteTilesColisionY(Player,tiles)){
	if(Player.Ytouch && Player.MoveYLimit > 0 ){
			 Player.InFlor = true
		 }
	crash = true
}

if(crash){YnextPosition += Player.yP *-1}
Player.y += YnextPosition

return 0;
},
];
function CompleteTilesColisionX(Player,Tiles){
	let crash = false
	Player.FristTouch = true
	for (i = 0; i < Tiles.length; i += 1){
		/*Calculate es una funcion que revisa si el jugador toco algun tile 
		y aplica efectos si el tile lo tiene*/
    if(calculate[Tiles[i].type].X(Player,Tiles[i])){
		//toda la infromacion de el movimiento que tuvo se ira para .xP
		// Activa el script que tenga el Tile
		
		functions_collection[Tiles[i].script].Action(Tiles[i],Player,false)
		Player.FristTouch = false
		//Para el bucle y activa para rentronar true
      	//i = Tiles.length +1
		crash = true; 
	
    }
}
return crash
}
function CompleteTilesColisionY(Player,Tiles){
	let crash = false
	Player.FristTouch = true
	for (i = 0; i < Tiles.length; i += 1){
		/*Calculate es una funcion que revisa si el jugador toco algun tile 
		y aplica efectos si el tile lo tiene*/
    if(calculate[Tiles[i].type].Y(Player,Tiles[i])){
		//toda la infromacion de el movimiento que tuvo se ira para .yP
		functions_collection[Tiles[i].script].Action(Tiles[i],Player,true)
		Player.FristTouch = false
		//Para el bucle y activa para rentronar true
       //i = Tiles.length +1
        crash = true
    }
}
return crash
}
function MoveExtras_in_Y(){
for(i = 0; i < mysprites.length; i += 1){
	mysprites[i].y += cameraY;
	}
for(i = 0; i < myMiniSprites.length;i++){
	if(myMiniSprites[i].script != 0 ){
	myMiniSprites[i].y += cameraY;
	}
	}
for(let i = 0; i < effects_in_game.length ;i++){  
    
	effects_in_game[i].VariableAltureY += cameraY
	if(tick){
		effects_in_game[i].VariableAltureY += effects_in_game[i].growY
	}
   }
}
function MoveExtras_in_X(){
for(i = 0; i < mysprites.length; i += 1){
	mysprites[i].x += cameraX;
	}
for(i = 0; i < myMiniSprites.length;i++){
	if(myMiniSprites[i].script != 0 ){
	myMiniSprites[i].x += cameraX;
	}
	}
for(let i = 0; i < effects_in_game.length ;i++){  
	effects_in_game[i].VariableAltureX += cameraX
	if(tick){
		effects_in_game[i].VariableAltureX += effects_in_game[i].growX
	}
   }
}
function MiniSprites_Vx_VY(){
	for(let i = 0; i < myMiniSprites.length ;i++){
	myMiniSprites[i].x += myMiniSprites[i].MoveX
	myMiniSprites[i].y += myMiniSprites[i].MoveY
    }
}
const prin = [
function (Player) {
	
},
function(Player,ctx,X,Y){
ctx.drawImage(Player.imC,X * Player.XG,Y * Player.YG , X, Y,Player.Xnegative + Player.x  ,Player.Ynegative + Player.y , X  , Y );
},
function(Player,canvas,X,Y){
ctx.save();
ctx.translate(Player.x -32 / -2, Player.y - 32 / -2);
ctx.rotate(Player.angle);
ctx.drawImage(HudTEXTURES,0 ,0 , X, Y,32 / -2, 32 / -2, X  , Y ,);
ctx.restore();
},
function(Player,canvas,N){
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 8;
ctx.arc(Player.x + (Player.width/2), Player.y + (Player.height/2),N, 0, 2 * Math.PI);
ctx.stroke();
},
function(Player){
ctx = canvas.getContext("2d");
ctx.fillStyle = colision_colors[Player.colision];
ctx.fillRect(Player.x, Player.y, Player.width, Player.height)
ctx.fillStyle = Player.BC
ctx.fillRect(Player.x -0.5, Player.y -0.5 , Player.width -1, Player.height -1)
},
function(Player,X,Y){
ctx = Player.canvas.getContext("2d");
ctx.save();
ctx.translate(Player.x -Player.width / -2, Player.y - Player.height / -2);
ctx.rotate(Player.angle);
ctx.drawImage(Player.imC,X * Player.XG,Y * Player.YG , X, Y,Player.width / -2, Player.height / -2, X  , Y ,);
ctx.restore();
},
]
const PrinTiles = [
function (Tile) {
	
},
function (Tile,canvas) {
ctx = canvas.getContext("2d");
ctx.fillStyle = Tile.BC
ctx.fillRect(Tile.x,Tile.y,32,32)
ctx.drawImage(image_collection[Tile.imgN[0]],Tile.XG, ((Tile.animation*32) + Tile.YG), 32, 32, Tile.x + Tile.Xplus, Tile.y + Tile.Yplus, 32, 32)
},
]
function PrinAllTiles(canvas){
let Tile;
for (i = (myObstacles.length -1); i > -1; i += -1) {
	if(myObstacles[i].prin != 0){
	Tile = myObstacles[i]
	ctx.fillStyle = Tile.BC
    ctx.fillRect(Tile.x,Tile.y,32,32)
	}
}
for (i = (myObstacles.length -1); i > -1; i += -1) {
	if(myObstacles[i].prin != 0){
	Tile = myObstacles[i]
     ctx.drawImage(
	image_collection[Tile.imgN],
	Tile.XG, 
	((Tile.animation*Tile.heg) + Tile.YG), 
	Tile.Wid, 
	Tile.heg, 
	Tile.x + Tile.Xplus, 
	Tile.y + Tile.Yplus, 
	Tile.Wid, 
	Tile.heg, 
	)
	}
    }
}

function draw_background(Player,canvas){
ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = 'destination-over';
for(let X = 0; X < Player.repetTheBackgroundX  ;X++){
	for(let Y = 0; Y < Player.repetTheBackgroundY  ;Y++){
ctx.drawImage(Player.imC,Player.x + (X*Player.width),Player.y + (Y*Player.height), Player.width, Player.height);
	}
}
ctx.globalCompositeOperation = 'source-over';
}
function WaterP(canvas) {
ctx = canvas.getContext("2d");
ctx.drawImage(Wimg,0,WaterLevel,screenWidth, 512)
}
function LavaP(canvas) {
ctx = canvas.getContext("2d");
ctx.drawImage(DTHg,0,deathLevel,screenWidth, 512)
}
function ShadowP(canvas) {
ctx = canvas.getContext("2d");
ctx.globalAlpha = 1-Shadow
ctx.drawImage(SHDg,0,ShadowLevel,screenWidth, 512)
ctx.globalAlpha = Alpha
}
function PrinT(canvas,X,Y,With,Heigth,Color){
	ctx = canvas.getContext("2d");
	ctx.fillStyle = Color
	ctx.fillRect(X,Y,With,Heigth)
}
function nufloat(n){flot += flot_angel; if(n < flot || flot < (n*-1)){flot_angel = flot_angel * -1}}
function BG_movement(BG){
BG.x += (cameraX * BG.mX) + BG.AX
if(BG.repeatX){
  if((BG.x) < BG.width*-1){BG.x += BG.width};if((BG.x ) > 0){BG.x +=  BG.width*-1}
}else{
  //if((BG.x ) <  (BG.width - 512)*-1){ BG.x = (BG.width - 512)*-1};if((BG.x ) > 0){BG.x = 0;}
}
BG.y += (cameraY * BG.mY) + BG.AY
if(BG.repeatY){
  if((BG.y) < BG.height*-1){BG.y += BG.height};if((BG.y ) > 0){BG.y += BG.height*-1}
}else{
  //if((BG.y) <  (BG.height - 512)*-1){ BG.y = (BG.height - 512)*-1};if((BG.y ) > 0){BG.y = 0;}
}
}
function DrawMiniSprites(mini_sprites,canvas){
	ctx = canvas.getContext("2d");
	let Sprite;
	for(let i = 0; i < mini_sprites.length ;i++){
	Sprite = mini_sprites[i]
	ctx.drawImage(image_collection[Sprite.imgN], Sprite.XG ,Sprite.YG , Sprite.width, Sprite.height, Sprite.x, Sprite.y, Sprite.width, Sprite.height)
	}
}
function drawLight(canvas,p1,sprites) {
  ctx = canvas.getContext("2d");
  ctx.globalAlpha = Shadow - 0.1
  if(Shadow <= 0.1){
  ctx.globalAlpha = 0
  }
   
  // Create Player circular clipping path
  ctx.beginPath();
  let Z = 128
  if(InShadow){
	  Shadow += 0.02
    if(Shadow >= 1){
		Shadow = 1
	}
  }else{
	  Shadow -= 0.02
	  if(Shadow <= 0){
		Shadow = 0
		//DrawShadow = false
	}
  }
  ctx.fillRect(0, 0, screenWidth, screenHeigth);
  ctx.globalAlpha = Alpha
  if(Shadow != 1){
	Z += (screenWidth*(1-Shadow))
  }
  ctx.arc(p1.x+p1.widthHalf, p1.y+p1.heightHalf, Z, 0, Math.PI * 2, true);
let width = 0
let height = 0
  for(let i = 0; i < sprites.length ;i++){	
  X = sprites[i].x+sprites[i].Xdiference_Print + (sprites[i].widthPrint*0.5)
  Y = sprites[i].y +sprites[i].Ydiference_Print+ (sprites[i].heightPrint*0.5)
  ctx.moveTo(X, Y)
  ctx.arc(X, Y, sprites[i].heightPrint, 0, Math.PI * 2, true);
  
  }
  ctx.clip();

}


function SavePositions(Player,Number){
for(let i = 0; i < Position.length ;i++){	
	Position[i].X += cameraX
	Position[i].Y += cameraY
}

Position.push({X: Player.x, Y: Player.y ,XG: Player.XG, YG: Player.YG})
if(Position.length > Number){
	Position.shift()
}
}
function effect (type,texture,Width,Height,sideX,altureX,sideY,altureY,growX,growY){
if(type === "string"){
   switch(type){
	   case "Water" :
	       this.type = 1
        break 
       case "Lava" || "Death" :
	       this.type = 2
        break	
        case "Shadow" :
	       this.type = 3
        break		
		default:
		this.type = 0
		break 
	   
   }
   
}

if(typeof type === "number"){
	this.type = type
}
this.texture = texture
this.growX = growX
this.growY = growY
this.sideX = sideX
this.altureX = altureX
this.sideY = sideY
this.altureY = altureY
this.VariableAltureX = 0
this.VariableAltureY = 0
this.Width = Width
this.Height = Height
}

function Texture(Img,X,Y,Width,Height){
this.Img = new Image()
this.Img.src = Img;
this.X = X;
this.Y = Y;
this.Width = Width;
this.Height = Height;
}
function DrawTexture(Canva,Texture){
let Whit = Math.max(Texture.Width,Texture.Height)
let X = (Whit - Texture.Width) * 0.5
let Y = (Whit - Texture.Height) * 0.5
Canva.width = Whit
Canva.height = Whit
let ctx = Canva.getContext("2d")
ctx.drawImage(
Texture.Img,
Texture.X,
Texture.Y,
Texture.Width,
Texture.Height,
X,
Y,
Texture.Width,
Texture.Height,
)
}

function DrawPatron(Canva,Texture,x,y,sideX,sideY,Width,Height){
	let WidthImg = 0
	let HeightImg = 0
if(Width == undefined){
    WidthImg = Texture.Width
}else{
    WidthImg = Width
}
if(Height == undefined){
    HeightImg = Texture.Height
}else{
    HeightImg = Height
}
let PatronY = 0
let PatronX = 0
if(sideY){
PatronY = Math.round(((screenHeigth - y) / HeightImg) + 0.5)
}else{
PatronY = Math.ceil(y /HeightImg)
}
if(sideX){
PatronX = Math.round(((screenWidth - x) / WidthImg) + 0.5)
}else{
PatronX = Math.ceil(y / WidthImg)
}


let X = x
let Y = y
let Xdiference = WidthImg
let Ydiference = HeightImg
if(!sideX){
	X -= WidthImg
	Xdiference = Xdiference *-1
}
if(!sideY){
	Y -= HeightImg
	Ydiference = Ydiference *-1
}
let InicialY = Y
let ctx = Canva.getContext("2d")
for(let i = 0; i < PatronX ;i++){
	for(let i = 0; i < PatronY ;i++){
		ctx.drawImage(
        Texture.Img,
		Texture.X,
		Texture.Y,
		Texture.Width,
		Texture.Height,
		X,
		Y,
		WidthImg,
		HeightImg,
    )
	Y += Ydiference
    }
	X += Xdiference
	Y = InicialY
  }
}

function DrawEfects(canva){
	for(let i = 0; i < effects_in_game.length ;i++){
		let efect = effects_in_game[i]
       DrawPatron(canva,efect.texture,efect.VariableAltureX,efect.VariableAltureY,efect.sideX,efect.sideY,efect.Width,efect.Height)
	}
}

function DrawPatren(Canva,Texture){
	let ctx = Canva.getContext("2d")
let pattern = ctx.createPattern(Texture.Img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 128, screenWidth, screenHeigth);
}
var WaterTexture = new Texture("texturas/Water.png",0,0,256,256)
var ShadowTexture = new Texture("texturas/Shadow.png",0,0,256,256)
var NoTexture = new Texture("texturas/ASCII.png",0,0,30,30)
var LavaTexture = new Texture("texturas/Lava.jpg",0,0,250,250)
var PaleteTexture = new Texture("texturas/character.png",0,0,256,256)
var Wellcome = new Texture("texturas/Wellcome.png",0,0,80,20)
Wellcome.Img.addEventListener("load", (e) => {
	DrawTexture(S0,Wellcome)
	
})
var on_game = true
var pre_finish = false
var Pre_star = true
var positveLimit = 16
var negativeLimit = -16

var Position = []
var limitTilesX = (limitX )*32
var limitTilesY = (limitY )*32
const fotograms = [2,4,8,16]
const fG_action = [0,0,0,0]
let corection = 1
let cameraX =  0 ;
let angleCX =  0 ;
let cameraY =  0 ;
let angleCY =  0 ;
var tick = true
var reset_game = false
let Ax3 = 0;let Ax4 = 0;let Ax6 = 0;let Ax8 = 0;let Ax16 = 0
var cordX = 0
var cordY = 0
var StarX = 0
var StarY = 0
var multiplayer = false
var mouse = false
var testY = 0
var inputX = 0
var inputY = 0
var Alpha = 1
var Shadow = 1
var InShadow = false
var DrawShadow = false
var song_end = false
var frisFotogram = true
var effects_in_game = []
var Kills = 0
function keyHandler(e) {
  e.preventDefault();
  console.log(e.key.charCodeAt(0))
  let Key = e.key.charCodeAt(0).toString(16).split('').reverse().join('')
  console.log(Key)
  DrawMode = 2
 Tileselect =  ['Tile', 'rgba(0,0,0,0)', 0, '00000'+Key+'0']
 
}
/*activa todo el juego*/

 var gamepads = navigator.getGamepads(); // arreglo de gamepads
 var gp = gamepads[0]; // primer control conectado
window.addEventListener("gamepadconnected", (e) => {
    console.log("Gamepad conectado:", e.gamepad);
});

function documentKeysListener(Player){
	function keydownHandler(e) {
	  e.preventDefault();
	  Player.keys = Player.keys || [];
	  Player.keys[e.keyCode] = (e.type == "keydown");
	}
	function keyupHandler(e) {
		e.preventDefault();
	  Player.keys[e.keyCode] = (e.type == "keydown");
	}

	document.addEventListener('keydown',  keydownHandler)
	document.addEventListener('keyup', keyupHandler)
}
function MiniSpriteManager(mini_sprites){
	for(let i = 0; i < mini_sprites.length ;i++){
	if( Margin_MS(mini_sprites[i]) && mini_sprites[i].Live ){
	Mini_scrips[mini_sprites[i].script](mini_sprites[i])
		}else{
		mini_sprites.splice(i, 1); 
		}
	};
}
function gametest (game,all_frames,p1,p2,tiles,sprites,mini_sprites,Hits){

/*pone en su valor inicial Player todas las variables que lo ocupen*/
   for(let i = 0; i < effects_in_game.length ;i++){  
	effects_in_game[i].VariableAltureY = (screenHeigth - effects_in_game[i].altureY ) + cordY  
	effects_in_game[i].VariableAltureX = effects_in_game[i].altureX + cordX
   }	
   /*
		WaterLevel = (SAVE.WaterLevel*-1 + screenHeigth) + cordY
        deathLevel = (SAVE.DeathLevel*-1 + screenHeigth) + cordY
	ShadowLevel = (1408*-1 + screenHeigth) + cordY
	*/
corection = -1;
clok_number = 0
Kills = 0
p1.priority = false
p1.modeX = 0
p1.modeY = 0
Alpha = 0
Shadow = 0
InShadow = false
DrawShadow = false
song_end = false
tick = true
Ax3 = 0
Ax4 = 0
Ax6 = 0
Ax8 = 0
Ax16 = 0

for(let i = 0; i < BackgroundsInLevel.length ;i++){
	BackgroundsInLevel[i].x = BackgroundsInLevel[i].stx 
	BackgroundsInLevel[i].y = BackgroundsInLevel[i].sty 
	if((SAVE.limit_down   > cordY) == false){
	BackgroundsInLevel[i].y += (cordY * BackgroundsInLevel[i].mY)
	}
}
documentKeysListener(p1)
document.addEventListener('mousedown', (event) => {
	mouse = true
})
document.addEventListener('mouseup', (event) => {
  mouse = false
});
p1.deathMusic.addEventListener("ended", () => {
		p1.songEnd = true	
        p1.deathMusic.currentTime = 0	
})
p2.deathMusic.addEventListener("ended", () => {
		p2.songEnd = true	
        p2.deathMusic.currentTime = 0	
})
on_game = true
Win_or_lose = false
pre_finish = false
Pre_star = true
frisFotogram = true
reset_game = false
TextFinishGame = []
inputX = 0
inputY = 0
backgroundMusic.play();
/*de aqui para abajo todo lo de esto corchetes se va Player hacer cada frame*/
function Frames(){
        if(Frame(p1,p2,tiles,sprites,mini_sprites,Hits)){
				requestAnimationFrame(Frames)
        }else{
	       if(reset_game){
	       buton[2](0)
	       }else{
			backgroundMusic.pause();  // Pausa el audio
			backgroundMusic.currentTime = 0; // Reinicia al inicio
				  if(Win_or_lose){
					  if(AZAR){
						  TextFinishGame.push(new Text("Passed level "+ Azar_floor,'#8F8','48px Arial','center',screenWidth/2,screenWidth/2,0.1,0,screenHeigth/4,0.1))
						  TextFinishGame.push(new Text("If you wish to continue, insert the code again.",'white','24px Arial','center',screenWidth/2,screenWidth/2,0.1,screenHeigth,screenHeigth/2+screenHeigth/4,0.05))  
						  Azar_floor++
						  Azar_Level_height += 64
                          Azar_Enemies += 50
						  AZAR = false
					  }else{
						  TextFinishGame.push(new Text("Tanks for playing",'#8F8','48px Arial','center',screenWidth/2,screenWidth/2,0.1,0,screenHeigth/4,0.1))
						  TextFinishGame.push(new Text("Stars "+ prizes+"/"+totalprizes,'white','48px Arial','center',screenWidth/2,screenWidth/2,0.1,0,screenHeigth/2,0.2))
						if(prizes == totalprizes){
							TextFinishGame.push(new Text("Perfect",'white','48px Arial','center',screenWidth/2,screenWidth/2,0.1,screenHeigth,screenHeigth/2+screenHeigth/4,0.05))  
						}
					  }
					  
				  }else{
					   if(AZAR){
						Azar_Level()
						buton[1](0) 
					   }else{
					  TextFinishGame.push(new Text("GameOver",'#F00','48px Arial','center',screenWidth/2,screenWidth/2,0.1,0,screenHeigth/4,0.1))
					  TextFinishGame.push(new Text("Kills/"+Kills,'white','48px Arial','center',screenWidth/2,screenWidth/2,0.1,0,screenHeigth/2,0.2))
					   }
				  }
			Textdraw()
		   }
		}
  }

Frames()
 
function Textdraw(){	
  let ctx = game.getContext('2d');
  ctx.restore()
  ctx.clearRect(0, 0, game.width, game.height)
  ctx.globalAlpha = 1
  for(let i = 0; i < TextFinishGame.length ;i++){
  ProcessText(TextFinishGame[i])
  DrawText(TextFinishGame[i],ctx)
  }
	requestAnimationFrame(Textdraw)
}
}

function Frame (p1,p2,tiles,sprites,mini_sprites,Hits){
gamepads = navigator.getGamepads();
/*variabels que sirven para controlar cuantos frames van las animaciones*/
tick = !tick
Ax3 += 1;if(Ax3 >= 3){Ax3 = 0}
Ax4 += 1;if(Ax4 >= 4){Ax4 = 0}
Ax6 += 1;if(Ax6 >= 6){Ax6 = 0}
Ax8 += 1;if(Ax8 >= 8){Ax8 = 0}
Ax16 += 1;if(Ax16 >= 16){Ax16 = 0;}
if(Ax3 == 2){
for(let i = 0; i < fotograms.length ;i++){
	fG_action[i] += 1
	if(fG_action[i] >= fotograms[i]){
		fG_action[i] = 0
	}
}} 

 /*rotar o darle algun efecto ala pantalla*/
//restore(game);
clear(game);/*Este es el que refresca la pantalla cada frame*/
//rotate(game,0)
if(UpSide){UpSideDown(game)}
cameraX = 0;cameraY = 0;
/*Estos dos hacen los input de los jugadores y determinan si estan muertos*/
/*if(PlayerAction(p2,1,true)){
	//pre_finish = true
   // reset_game = true
}   */
Player_Effects(p1)
if(PlayerAction(p1,0,false)){
	pre_finish = true
	if(!AZAR){reset_game = true}

}
if(p1.Win || p2.Win){
	Win_or_lose = true
	pre_finish = true
}

MiniSpriteManager(mini_sprites)

for(let i = 0; i < sprites.length ;i++){
    Colision_sprite[sprites[i].type](sprites[i],p1,p2,tiles)
};

/*camera Y*/ 

if(p1.lives > 0){cameraY = modeY[p1.modeY](p1,tiles,sprites,0);}

if(p1.modeY == 1){
    cameraModeY[p1.camY](p1,tiles)
     }else{
        stopY(p1,tiles)
}
MoveExtras_in_Y()
inputY += cameraY

if(inputY < 0 || inputY > 32){
	/*encuentra Sprite para renderisar*/
	inputY += 32;
    localisated_sprites(Sprite_Collection,sprites,cordX,cordY)
    deleted_sprites(Sprite_Collection,sprites,cordX,cordY)
};
/*Move player 2*/
//p2.y += cameraY
//if(p2.lives > 0){modeY[1](p2,tiles,mysprites,0);}

/*camera X*/
if(p1.lives > 0){cameraX = modeX[p1.modeX](p1,tiles,sprites,0);}

if(p1.modeX == 1){
   cameraModeX[p1.camX](p1)
   }else{	   
       stopX(p1,tiles)
}

MoveExtras_in_X()

inputX += cameraX
if(inputX < 0 || inputX > 32){
	inputX += 32;
    localisated_sprites(Sprite_Collection,sprites,cordX,cordY)
    deleted_sprites(Sprite_Collection,sprites,cordX,cordY)
};
/*All sprites scpripts*/
for(let i = 0; i < sprites.length ;i++){
	if(sprites[i].InScreen){
		sprites[i].prin = true
	Scrips_collection[sprites[i].script].Loop(sprites[i],p1,p2,tiles)
	sprites[i].BulletTouch = false
	sprites[i].Yplayertouch = false
    sprites[i].Xplayertouch = false
	if(Ax3 == 2){
    Sprite_animation(sprites[i])
	}
	if(sprites[i].live < 0){
		sprites.splice(i,1)
	}
	}else{
	sprites[i].prin  = false	
	}
}

//p2.x += cameraX
//if(p2.lives > 0){modeX[1](p2,tiles,mysprites,0);}

/*Mueve Player los minisprites*/
MiniSprites_Vx_VY()

if(p1.keys && p1.keys[67]){
	console.log(
     "cameraX:"+cameraX +" // cameraY:"+cameraY+
	 "cordX:"+cordX+" // cordY :"+ cordY 
	)
}


if(Pre_star){
	Alpha += 0.02
    if(Alpha >= 1){
		Pre_star = false
		Alpha = 1
    }
}
if(pre_finish && Pre_star == false){
	             if(reset_game == false){
					 backgroundMusic.pause();       // Pausa el audio
					 backgroundMusic.currentTime = 0;  // Reinicia al inicio
					 if(Win_or_lose){
					 finishMusic.play()
					 }else{
						 if(!AZAR){
					 GameOverMusic.play()	
						 }						 
					 }					 
				 }				 
				 InShadow = false
				 Alpha -= 0.02
		         if(Alpha <= 0){
					on_game = false;
		         }
}
if(!frisFotogram){
for(let i = 0; i < BackgroundsInLevel.length ;i++){
BG_movement(BackgroundsInLevel[i])
}
}
SavePositions(p1,16)

SaveCamY = cameraY

for (i = (tiles.length -1); i > -1; i += -1) {
   tiles[i].Update_tile()
}
if(DrawShadow){drawLight(game,p1,sprites)}
PrinAllTiles(game)
for(let i = 0; i < sprites.length ;i++){
	if(sprites[i].prin){
	//	ctx.fillStyle = "#FF0"
	//	ctx.fillRect(sprites[i].x+sprites[i].Xdiference_Print,sprites[i].y+sprites[i].Ydiference_Print,sprites[i].widthPrint,sprites[i].heightPrint)
	//	ctx.fillStyle = "#F00"
	//	ctx.fillRect(sprites[i].x,sprites[i].y,sprites[i].width,sprites[i].height)
draw_sprite[sprites[i].Mode](sprites[i],game)
	}
}

DrawMiniSprites(mini_sprites,game)


if(Stelar){
ctx.globalAlpha = 0
for(let i = 0; i < Position.length ;i+= 2){
	ctx.globalAlpha += Alpha * 0.125 
	ctx.drawImage(
	p1.imC,
	p1.CameraY[0] * Position[i].XG,
	p1.CameraY[1] * Position[i].YG ,
	p1.CameraY[0],
	p1.CameraY[1],
	p1.Xnegative + Position[i].X ,
	p1.Ynegative + Position[i].Y ,
	p1.CameraY[0],
	p1.CameraY[1],
	);
}
ctx.globalAlpha = Alpha
}

//PrinT(game,Position[0].X,Position[0].Y,24,32,"#fff")

animation(p1,p1.CameraY)
prin[1](p1,ctx,p1.CameraY[0],p1.CameraY[1]);



/*pinata el nivel del agua y de la lava*/
DrawEfects(game)
/*pinta todos los fondos */
for(let i = 0; i < BackgroundsInLevel.length ;i++){
draw_background(BackgroundsInLevel[i],game);
}
//PrinT(game,Xmouse - 16,Ymouse - 16,16,16,"#F00")

if(frisFotogram){
	if(!invecybility){
	p1.invecybility = false
	p2.invecybility = false
	}
}
frisFotogram = false
return on_game;
}
var Stelar = false
var invecybility = false
var UpSide = false
var TESTSCREEN = false
var AZAR = false
function Boregito(Value){
		   switch(Value){
			   case "WATER":
			    effects_in_game.push(new effect(1,WaterTexture,512,512,true,0,true,512,0,0))
			   break 
			   case "LAVA":
			   effects_in_game.push(new effect(2,LavaTexture,32,32,true,0,true,0,0,-1))
			   break
			   case "SHADOW":
			   effects_in_game.push(new effect(3,NoTexture,32,32,true,0,false,0,0,0))
			   break
			   case "BEACH":
			   cargarJSON("Niveles JSON/BeachLevel.json")
			   effects_in_game.push(new effect(1,WaterTexture,512,512,true,0,true,512,0,0))
			   break
			   case "WELLCOME":
			   cargarJSON("Niveles JSON/WELLCOME.json")
			   break 
			   case "SHOTERMODE ":
			   shoterMode = 1
			   break ;
			   case "POUNTERSHOT ":
			   shoterMode = 2
			   break ;
               case "ENEMIES":
			   createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,0,"661122103",1,"09100", -1,8)
	           createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,0,"661122200",1,"09000", -1,1)
	           createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,0,"661122503",1,"09200", -2,1)
	           createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,0,"661120201",1,"09300", 0,-8)
			   break
			   case "BULLETBILLS":
			   createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,16,"160010000",2,"23900",-2,0)
	           createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,16,"160010000",2,"24900",2,0)
	           createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,17,"160010000",2,"25800",2,2)
			   break
			   case "LEVELRANDOM":
			    LC = []
				SAVE.Levelsprites = []
				Sprite_Collection = []
				SpritesInGrid = []
				startX  = 8
				startY  = 3
				fillblockImg_3x3(16,3,0,2,1,"#FFF","11111200",0,1,0,0)
				createBlocks(150,true,3,8,3,16,SAVE.X,SAVE.Y,16,0,1,"#FFF","10002220",0,1,0,0);
				createBlocks(150,true,3,8,3,16,SAVE.X,SAVE.Y,16,0,1,"#FFF","11111200",0,1,0,0);
				change_BlockResolution(BlockResolution);
			   break
			   case "AZAR":
			   AZAR = true
			   Azar_Blocks_Skins[1]()
			   GridSprites.style.zIndex = 20
			   ChangeMusic ("Music/Super Mario World Athletic.mp3")
			   backgroundBase = 'linear-gradient(rgb(255, 255, 255), rgb(95, 255, 255))'
			   Azar_Sprites =
				[
					[32,32,16,"160010000",2,"23900",-2,0],
					[32,32,16,"160010000",2,"24900",2,0],
					[32,32,17,"160010000",2,"25800",2,2]
				]
			   Azar_Level()
			   break
			   case "AZARHARD":
			   AZAR = true
			   Azar_Blocks_Skins[4]()
			   GridSprites.style.zIndex = 20
			   ChangeMusic ("Music/Super Mario World Fortress.mp3")
			   backgroundBase = 'linear-gradient(rgb(0, 0, 0), rgb(168, 0, 0))'
			   Azar_Sprites =
				[
					[32,32,17,"160010000",2,"25800",2,2]
				]
			   Azar_Level()
			   break
			   case "FLY":
			   createSprites_No_in_solid(50,SAVE.X,SAVE.Y,16,0,32,32,11,"661120201",2,"01400", 0,0)
			   break
			    case "BACKGROUND":
			   BackgroundsInLevel.push(new Background("Backgrounds/onlyClouds.png",1024,864,0.5,1,0,0,true,false,0,0))
			   BackgroundsInLevel.push(new Background("Backgrounds/mountains3_noClouds.png",1024,864,0.3,1,0,0,true,false,0,0))
			   BackgroundsInLevel.push(new Background("Backgrounds/backMountains.png",1024,864,0.1,1,0,0,true,false,0,0))
			   break
			   case "STELAR":
			   Stelar = true
			   break 
			   case "DINNERBONE":
			   UpSide = true
			   break
			   case "DRAW":
			   DrawMode = 3
			   DrawsModes[3].Started()
			   break
			   case "INVENCYBILITY":
			   invecybility = true
			   break 
			   case "SAVEIMAGE":
			   Grid.style.zIndex = 20
			   break 
			   case "TESTSCREEN":
			   TESTSCREEN = true
			   break 
			   default:
			   console.log("No code")
			   break 
		   }
		   console.log(Value)
	   }
	   
/*  (-< = */