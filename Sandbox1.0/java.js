const table = document.getElementById("screen")
const but1 = document.getElementById("eraser")
const but3 = document.getElementById("gotita")
const but2 = document.getElementById("saved")
const but4 = document.getElementById("start")                                            
const palet = document.getElementById("palet")
const depot = document.getElementById("depot")
const Cut0 = document.getElementById("colide0")
const Cut1 = document.getElementById("colide1")
const Cut2 = document.getElementById("colide2")
const Cut3 = document.getElementById("colide3")
const Cut4 = document.getElementById("colide4")
const Cut5 = document.getElementById("colide5")
const Cut6 = document.getElementById("colide6")
const Cut7 = document.getElementById("colide7")
const loadbut = document.getElementById("load")
const savebut = document.getElementById("save")
const chekbox = document.querySelectorAll(".chek") 
const code = document.getElementById("Namec")
const time = document.getElementById("p")
const mid = document.getElementById("blockC4")
const butup = document.getElementById("up")
const butdw = document.getElementById("down")
const butleft = document.getElementById("derecha")
const butrigth = document.getElementById("izquierda")
const controladores = document.getElementById("controladores")
const ancho = table.style.width
const largo = table.style.height
let k1 = "rgba(0,0,0,256)";
let k2 = "rgba(255,255,255,256)";
let k3 = "rgba(0,0,0,256)";
let cord = 0
let selector ="rgba(0,0,0,0)"
let colide ="rgba(0,0,0,255)"
let mode = 0 ;
let draw_mode= "";
let ct = [];
let celd = [];
let custom1 = [];
let custom2 = [];
let custom3 = [];
let custom4 = [];
but1.addEventListener("click",() =>{
draw_mode = 8 ;
selector ="rgba(0,0,0,0)" ;
})
but3.addEventListener("click",() =>{
draw_mode = 9 ;
})
function Action(num){
console.log("clik on b"+num)
}
Cut0.addEventListener("click",() =>{
colide = 'rgb(0, 0, 0)'
draw_mode = 1 ;
})
Cut1.addEventListener("click",() =>{
colide = 'rgb(255, 255, 255)'
draw_mode = 1 ;
})
Cut2.addEventListener("click",() =>{
colide = 'rgb(0,0,255)'
draw_mode = 1 ;
})
Cut3.addEventListener("click",() =>{
colide = 'rgb(255,0,0)'
draw_mode = 1 ;
})
Cut4.addEventListener("click",() =>{
colide = 'rgb(255,255,0)'
draw_mode = 1 ;
})
Cut5.addEventListener("click",() =>{
colide = 'rgb(172,172,172)'
draw_mode = 1 ;
})
Cut6.addEventListener("click",() =>{
colide = 'rgb(0,255,0)'
draw_mode = 2 ;
})
Cut7.addEventListener("click",() =>{
colide = 'rgb(255,128,0)'
draw_mode = 3 ;
})
loadbut.addEventListener("click",() =>{
	if(localStorage.propertyIsEnumerable("celd" + code.value)){
	loadToLocal(code.value) ;
	}else{alert("losentimos no hay ningun nivel con ese nombre en el guardado")}
})
savebut.addEventListener("click",() =>{
	saveToLocal(code.value) ;
})
butup.addEventListener("click",() =>{
	butup.style.backgroundColor = 'rgb(255,0,0)'
    camY = 1
	butdw.style.backgroundColor = 'rgb(240,240,240)'
	mid.style.backgroundColor = 'rgb(240,240,240)'
})
butdw.addEventListener("click",() =>{
	butdw.style.backgroundColor = 'rgb(255,0,0)'
camY = -1
    butup.style.backgroundColor = 'rgb(240,240,240)'
	mid.style.backgroundColor = 'rgb(240,240,240)'
})
butleft.addEventListener("click",() =>{
	butleft.style.backgroundColor = 'rgb(255,0,0)'
camX = 2
    butrigth.style.backgroundColor = 'rgb(240,240,240)'
	mid.style.backgroundColor = 'rgb(240,240,240)'
})
butrigth.addEventListener("click",() =>{
	butrigth.style.backgroundColor = 'rgb(255,0,0)'
camX = -2
    butleft.style.backgroundColor = 'rgb(240,240,240)'
	mid.style.backgroundColor = 'rgb(240,240,240)'
})
mid.addEventListener("click",() =>{
	mid.style.backgroundColor = 'rgb(255,0,0)'
camX = 0
camY = 0
   for(let i = 0; i < LLY.length ; i++){ 
	 LLY[i].style.backgroundColor = 'rgb(240,240,240)'
   }
})
code.addEventListener('click', function() {
  code.value = "";
  code.focus();
});
let margin_v = '0'
chekbox[0].checked = true
chekbox.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        margin_v = checkbox.value
        if (checkbox.checked) {
            // Desmarcar todos los demás checkboxes
            chekbox.forEach(function(item) {
                // Verificar que no sea el mismo checkbox que se acaba de seleccionar
                if (item !== checkbox) {
                    item.checked = false;
                }
            });
        }
    });
});
const LLY = document.getElementsByClassName("flecha")
var camX = 0
var camY = 0

for(let i = 0; i < 256 ; i++){ 
let name = cord;
table.innerHTML += "<canvas id=b"+ cord +" class = canvas onclik=Action("+ cord +")></canvas>";
cord = cord + 1 ;
};

var Moused = false
document.addEventListener("mouseup", () => {
    Moused = false 
});

function print (x,p,c){
a = p/2
e = p/4
const dcN = [ "rgba("+ p+",0,0,256)",
              "rgba("+p+","+a+",0,256)",
              "rgba("+p+","+p+",0,256)",
              "rgba("+a+","+p+",0,256)",
              "rgba(0,"+ p +",0,256)",
              "rgba(0,"+p+","+a+",256)",
              "rgba(0,"+p+","+p+",256)",
              "rgba(0,"+a+","+p+",256)",
              "rgba(0,0," +p+ ",256)",
              "rgba("+a+",0,"+p+",256)",
              "rgba("+p+",0,"+p+",256)",
              "rgba("+p+",0,"+a+",256)",
              "rgba("+p+","+a+","+a+",256)", 
              "rgba("+p+","+p+","+p+",256)", 
              "rgba("+a+","+a+","+a+",256)",
              "rgba("+e+","+e+","+e+",256)",  
	      "rgba("+p+","+p+","+p+",0)",
            ]
x.style.backgroundColor = dcN[c];
}
function AEL (cor,ton,c) {
let cord = document.getElementById("b" + cor  )
let to = ton * 16 ;
print (cord,to,c)
};
function palete(){
let color = 1;
let cor = 0;
let ce = 0;
for(let I = 0; I < 16 ; I++){ 
   for(let i = 0; i < 16 ; i++){ 
   AEL(cor,color,ce)
   color++;cor++}
color = 1;
ce++;
}
}

const jN =document.querySelectorAll("canvas");
const bck = table.querySelectorAll("canvas");
bck.forEach(canvas => {
    canvas.addEventListener("mouseover", () => {
	if(Moused == true){
	 ctxV[draw_mode].fun(canvas)
     }	
    });
	canvas.addEventListener("mousedown", () => {
		Moused = true 
	 ctxV[draw_mode].fun(canvas)	
    });
});
function save_u (){
for(let i = 0; i < 256 ; i++){ 
celd.shift();}
for(let i = 0; i < 256 ; i++){ 
let x = document.getElementById("b"+ i);
let cold = 0 
switch(x.style.borderColor){
    case 'rgb(0, 0, 0)' :
	cold = 1
	break;
	case 'rgb(0, 0, 255)' :
	cold = 2
	break;
	case 'rgb(255, 0, 0)' :
	cold = 3
	break;
	case 'rgb(255, 255, 0)' :
	cold = 4
	break;
	case 'rgb(172, 172, 172)' :
	cold = 5
	break;
	case 'rgb(0, 255, 0)' :
	cold = 6
	break;
	case 'rgb(255, 128, 0)':
	cold = 7
	break;
}
celd.push({cordenada:"b"+i,BC: x.style.backgroundColor,col: cold});
}
celd[2].X = 0
celd[2].Y = 0
celd[0].Ascenary = k1
celd[0].Bscenary = k2
celd[1].chacolor = k3
celd[1].imagen = table.style.backgroundImage
celd[2].X = camX
celd[2].Y = camY    
celd[2].M = margin_v
let b = document.getElementById("S0");
var flecha = document.querySelectorAll('.flecha');
flecha.forEach(flecha => {flecha.style.backgroundColor = 'rgb(240,240,240)'})
let Mi = false;
if  (celd[2].Y == -1){butdw.style.backgroundColor = 'rgb(255,0,0)';Mi = true};if  (celd[2].Y == 1){butup.style.backgroundColor = 'rgb(255,0,0)';Mi = true}
if  (celd[2].X == -1){butrigth.style.backgroundColor = 'rgb(255,0,0)';Mi = true};if  (celd[2].X == 1){butleft.style.backgroundColor = 'rgb(255,0,0)';Mi = true}
if(Mi){mid.style.backgroundColor = 'rgb(240,240,240)'}
ctxV[6].fun(b);
}

function load (){
for(let i = 0; i < 256 ; i++){ 
let x = document.getElementById("b"+i)
x.style.backgroundColor = celd[i].BC;
}
}
function l () {
for(let i = 0; i < 256 ; i++){ 
palet.innerHTML += "<MBLOCK  id="+i+"p></MBLOCK>";
let x = document.getElementById(i+"p")
x.style.backgroundColor = celd[i].BC;
};
O()
}
function O () {
const pale = document.querySelectorAll('MBLOCK');
pale.forEach(MBLOCK => {
    MBLOCK.addEventListener('click', () => {
	draw_mode = 7 ;
        selector = MBLOCK.style.backgroundColor; 
    });
});
}
bck[240].style.borderColor = 'rgb(0,255,0)'
bck[15].style.borderColor = 'rgb(255,128,0)'
let save1 = bck[240]
let save2 = bck[15]
const ctxV =[
  {
  fun: function fun (b) {
    let X = 0;
    let Y = 0;
    let Q = 0;
    let ctxZ = b.getContext("2d");
	b.width = 256
	b.height = 256
    for(let I = 0; I < 16 ; I++){ 
    for(let i = 0; i < 16 ; i++){ 
    ctxZ.fillStyle =celd[Q].BC ;
    ctxZ.fillRect(X,Y,16,16);
    X = X + 16;
    Q++
    }
    Y=Y + 16;
    X= 0 ;
    }
  }},
  {
  fun: function fun (b) {
    b.style.borderColor = colide	
  }},
  {
  fun: function fun (b) {
	if(save1.style.borderColor == 'rgb(0, 255, 0)'){
	save1.style.borderColor = 'rgb(255, 255, 255)'}
    b.style.borderColor = colide
    save1 = b	
  }},
  {
  fun: function fun (b) {
	  if(b.style.backgroundColor == 'rgba(0, 0, 0, 0)'){
	   b.style.backgroundColor   = colide }
	  if(save2.style.borderColor == 'rgb(255, 128, 0)'){  
	     save2.style.borderColor = 'rgb(255, 255, 255)'
	  }
	  if(save2.style.backgroundColor == 'rgb(255, 128, 0)'){ 
	     save2.style.backgroundColor  = 'rgba(0, 0, 0, 0)'
	  }
      b.style.borderColor = colide
    save2 = b	
  }},
  {
  fun: function fun (B) {
	let ctxZ = B.getContext("2d");
    B.style.backgroundColor = "rgba(0,0,0,0)"
    ctxZ.clearRect(0, 0, B.width, B.height);
  }},
  {
  fun: function fun (B) {
  let ctx = B.getContext("2d");
  let grd = ctx.createLinearGradient(0, 0, 0, 150);
  grd.addColorStop(0, k1);
  grd.addColorStop(0.5, k2);
  grd.addColorStop(1, k1);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 300, 150);
  }},
  {
  fun: function fun (b) {
    let X = 0;
    let Y = 0;
    let Q = 0;
    let ctxZ = b.getContext("2d");
	b.width = 256
	b.height = 256
	let grd = ctxZ.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0, k1);
    grd.addColorStop(1, k2);
	ctxZ.fillStyle = grd;
	if(celd[1].imagen != NaN){grd = celd[1].imagen}
	ctxZ.fillRect(0, 0, 256, 256);
    for(let I = 0; I < 16 ; I++){ 
    for(let i = 0; i < 16 ; i++){	
    ctxZ.fillStyle =celd[Q].BC ;
    ctxZ.fillRect(X,Y,16,16);
    X = X + 16;
    Q++
    }
    Y=Y + 16;
    X= 0 ;
    }
  }},
  {
  fun: function fun (b) {
    //let ctxZ = b.getContext("2d");
	b.style.backgroundColor = selector
    //ctxZ.fillStyle = selector
    //ctxZ.fillRect(0, 0, 300, 150);
  }},
  {
  fun: function fun (b) {
    //let ctxZ = b.getContext("2d");
	b.style.backgroundColor = "rgba(0,0,0,0)"
	b.style.borderColor = 'rgb(255, 255, 255)'
    //ctxZ.clearRect(0, 0, b.width, b.height);
  }},
  {
  fun: function fun (b) {
    selector = b.style.backgroundColor;
	draw_mode = 7
  }},
  {
  fun: function fun (b) {
    let X = 0;
    let Y = 0;
    let Q = 0;
    let ctxZ = b.getContext("2d");
	b.width = 256
	b.height = 256
    for(let I = 0; I < 16 ; I++){ 
    for(let i = 0; i < 16 ; i++){ 
    ctxZ.fillStyle =ct[Q].BC ;
    ctxZ.fillRect(X,Y,16,16);
    X = X + 16;
    Q++
    }
    Y=Y + 16;
    X= 0 ;
    }
  }},
];
function reset (){
for(let i = 0; i < 256 ; i++){ 
let x = document.getElementById("b"+i)
ctxV[4].fun(x);
};
}
function load_k (){
let Z = document.getElementById("S"+9);
let X = 0;
let Y = 0;
let Q = 0;
let ctxZ = Z.getContext("2d");
for(let I = 0; I < 16 ; I++){ 
   for(let i = 0; i < 16 ; i++){ 
   ctxZ.fillStyle =celd[Q].BC ;
   ctxZ.fillRect(X,Y,37.5,18.75);
   X = X + 18.75;
   Q++
   }
Y=Y + 9.375
X= 0 ;
}
}

function saveToLocal(i) {
	on_game = false
    let J = 'celd' + i  
	buton[1]()
	save_u()
	type_but = 0
    localStorage.removeItem(J);
    localStorage.setItem(J, JSON.stringify(celd));
}
function loadToLocal(i) {
   on_game = false
   let Y = "celd" + i ;
   savedCeld = localStorage.getItem(Y); 
   ct = JSON.parse(savedCeld);
   celd = ct
   buton[1]()
   type_but = 0
   ctxV[6].fun(jN[0]);
}
function restore (){
for(let i = 0; i < ct.length ; i++){
if(ct[i].BC == "" ){ct[i].BC = 'rgba(0, 0, 0, 0)'}
}
}
function dowload (i) {
	var Png = jN[i].toDataURL("image/png"); console.log(Png)
}
function charge_in_table (E){
	buton[1]()
}
const k1B = document.getElementById("blockC1");
k1B.addEventListener('click', () => {
        k1 = selector;
		k1B.style.backgroundColor = selector;
		table.style.backgroundImage =  "linear-gradient(" +k1 + "," + k2 + ")"
    });

const k2B = document.getElementById("blockC2");  
k2B.addEventListener('click', () => {
        k2 = selector;
		k2B.style.backgroundColor = selector;
		table.style.backgroundImage =  "linear-gradient(" +k1 + "," + k2 + ")"
    });
	const k3B = document.getElementById("blockC3");
k3B.addEventListener('click', () => {
        k3 = selector;
		k3B.style.backgroundColor = selector;
		
    });
table.style.backgroundImage =  "linear-gradient(" +k1 + "," + k2 + ")"
palete()
save_u()
l();
reset();
bck[15].style.backgroundColor = 'rgb(255,128,0)'
var scale = 1
let myObstacles = [];
var game_area = null
var ctx = null
function startGame(i) {
   let Y = "celd" + i ;
   table.innerHTML = "<canvas id=game></canvas>";
    game_area = document.getElementById("game");
	ctx = game_area.getContext("2d");
   savedCeld = localStorage.getItem(Y); 
   ct = JSON.parse(savedCeld);
   restore ()
   charge(game_area,scale,0,0,0,0);
   game_area.style.backgroundImage =  "linear-gradient(" +ct[0].Ascenary + "," + ct[0].Bscenary + ")"
   return game_area;
}
const buton = [
function() {
but4.innerText = "edit"
save_u()
myObstacles = [];
on_game = on +1
table.innerHTML = "<canvas id=game></canvas>";
 game_area = document.getElementById("game");
 ctx = game_area.getContext("2d");
ct = celd
starposition = []
charge(game_area,scale,0,0,0,0);
game_area.style.backgroundImage =  "linear-gradient(" +ct[0].Ascenary + "," + ct[0].Bscenary + ")"
if(celd[1].imagen != NaN){game_area.style.backgroundImage = celd[1].imagen}
red = new component(game,16,16,ct[1].chacolor,starposition[0],starposition[1])
gametest(game,1000,red,myObstacles)
type_but = 1
},
function() {
IG()
but4.innerText = "start"
time.innerText = "TIME"
on_game = 0
document.removeEventListener('keydown', function (e) {
            e.preventDefault();
            A.keys = (A.keys || []);
            A.keys[e.keyCode] = (e.type == "keydown");
        })
document.removeEventListener('keyup', function (e) {
            A.keys[e.keyCode] = (e.type == "keydown");
        })
for(let i = 0; i < chargered.length ; i++){
    chargered[i].style.backgroundColor = celd[i].BC
	selector = celd[i].BC
	ctxV[7].fun(chargered[i]);
	chargered[i].style.borderColor = 'rgb(255, 255, 255)'
	switch(celd[i].col){
    case 1 :chargered[i].style.borderColor = 'rgb(0, 0, 0)';break;
	case 2 :chargered[i].style.borderColor = 'rgb(0, 0, 255)';break;
	case 3 :chargered[i].style.borderColor = 'rgb(255, 0, 0)';break;
	case 4 :chargered[i].style.borderColor = 'rgb(255, 255, 0)';break;
	case 5 :chargered[i].style.borderColor = 'rgb(172, 172, 172)';break;
	case 6 : chargered[i].style.borderColor = 'rgb(0, 255, 0)'; save1 = chargered[i];break;
	case 7 :
	chargered[i].style.borderColor = 'rgb(255, 128, 0)'
	save2 = chargered[i]
	break;
    }}
	table.style.backgroundImage =  "linear-gradient(" +ct[0].Ascenary + "," + ct[0].Bscenary + ")"
	if(celd[1].imagen != NaN){table.style.backgroundImage = ct[1].imagen}
	camX = 0
	camY = 0
	k1 = ct[0].Ascenary
	k1B.style.backgroundColor = ct[0].Ascenary
	k2 = ct[0].Bscenary
	k3B.style.backgroundColor = ct[1].chacolor 
	k3 = ct[1].chacolor 
    k2B.style.backgroundColor = ct[0].Bscenary
	camX = ct[2].X
	camY = ct[2].Y
	margin_v = ct[2].M
	
	for(let i = 0; i < LLY.length ; i++){ 
	 LLY[i].style.backgroundColor = 'rgb(240,240,240)'
    }
	mid.style.backgroundColor = 'rgb(240,240,240)'
	switch(ct[2].X){
    case -2: butrigth.style.backgroundColor = 'rgb(255,0,0)';break; 
	case  2: butleft.style.backgroundColor = 'rgb(255,0,0)';break;
	}
	switch(ct[2].Y){
    case -1: butdw.style.backgroundColor = 'rgb(255,0,0)';break; 
	case  1: butup.style.backgroundColor = 'rgb(255,0,0)';break;
	}
	chekbox.forEach(function(checkbox){checkbox.checked = false});
	switch(margin_v){
    case '0': chekbox[0].checked = true;break; 
	case '1': chekbox[1].checked = true;break;
	default:chekbox[0].checked = true; margin_v = '0' ;
	}
	if(ct[2].X == 0 && ct[2].Y == 0){mid.style.backgroundColor = 'rgb(255,0,0)'}
type_but = 0
}
]
var type_but = 0
but4.addEventListener("click",() =>{
buton[type_but]()
})
const imageses = document.getElementById('selector-imagen')
imageses.addEventListener('change', function(event) {
	  table.style.backgroundImage = `url(${URL.createObjectURL(imageses.files[0])})`;
})
var starposition = []
class component {
constructor(canvas,width, height, color, X, Y,name,i,I,col) {
	this.iA  = I
	this.iL = i
	this.lives = false
	this.colision = col
	this.color = color
	this.Name = name
	this.Stn = name
	this.StiL = i
	this.StiA = I
	this.width = width;
	this.height = height;
	this.x = X;
	this.y = Y;
	this.stx = X;
	this.sty = Y;
	this.Vx = 2;
	this.Vy = 1;
	this.velocity = 2.5;
	this.gravity = 0.5;
	this.JumpPower = -7.2;
	this.gravitySpeed = 0;
}
update (canvas){
	this.jumped = false
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
}
rebootWith(otherobj) {
			if(otherobj.colision == 1){
			var myleft = this.x;
			var myright = this.x + (this.width);
			var mytop = this.y;
			var mybottom = this.y + (this.height);
			var otherleft = otherobj.x;
			var otherright = otherobj.x + (otherobj.width);
			var othertop = otherobj.y;
			var otherbottom = otherobj.y + (otherobj.height);
			var crash = true;
			if((myleft < otherright && myright > otherleft) && (mytop < otherbottom && mybottom > othertop) ){
			this.Vy = this.Vy * - 1;
			this.y += this.Vy
			myleft = this.x;
			myright = this.x + (this.width);
			mytop = this.y;
			mybottom = this.y + (this.height);
			if((myleft < otherright && myright > otherleft) && (mytop < otherbottom && mybottom > othertop) ){
			this.Vx = this.Vx * -1;
			this.x += this.Vx 
			this.y += this.Vy * -1       
			}
			}
			}
}
AcrashWith(otherobj) {
	if(otherobj.colision > 0){
		var crash =  false
	    var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
		switch(otherobj.colision){
		case 7 :
		if((myleft -4 < otherright  && myright > otherleft +4 ) && (mytop  < otherbottom -4  && mybottom > othertop +4 ) ){		
		this.x = this.stx
		this.y = this.sty
		this.lives = true
        crash =  true
		}
		break;
		case 5 :
		if((myleft < otherright  && myright > otherleft ) && (mytop + 4 < otherobj.y  && mybottom > othertop ) ){
		if(this.gravitySpeed > 0){this.y = othertop - this.height; this.gravitySpeed = 0; this.jumped = true}}
		break;
		case 4 :
		if((myleft < otherright  && myright > otherleft ) && (mytop < otherbottom  && mybottom > othertop ) ){
		if(this.gravitySpeed > 0){this.y = othertop - this.height; this.gravitySpeed = -8.25 }else{this.y = otherbottom; this.gravitySpeed = 8.25}}
		break;
		case 3 :
		if((myleft < otherright -4 && myright > otherleft +4) && (mytop < otherbottom -4 && mybottom > othertop +4) ){
		this.x = this.stx
		this.y = this.sty
		this.gravitySpeed = 0
		this.lives = false
		crash =  true
		}
		break;
	    case 2 :
		if((myleft < otherright && myright > otherleft) && (mytop < otherbottom && mybottom > othertop) ){
		this.jumped = true
		this.JumpPower = -3.1
		this.velocity = 1.5
		this.gravitySpeed = 1}
		break;
		case 1 :
		if((myleft < otherright && myright > otherleft) && (mytop < otherbottom && mybottom > othertop) ){
		if(this.gravitySpeed > 0){this.y = othertop - this.height; this.jumped = true }else{this.y = otherbottom  }
        this.gravitySpeed = 0}
		break;
	}}return crash;}
BcrashWith(otherobj) {
	if(otherobj.colision > 0){
	    var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = false;
		switch(otherobj.colision){
		case 7 :
		if((myleft -4 < otherright  && myright > otherleft +4 ) && (mytop < otherbottom -4  && mybottom > othertop +4 ) ){
		this.x = this.stx
		this.y = this.sty
		this.lives = true
        crash =  true
		}
		break;
		case 4 :
		if((myleft < otherright+1  && myright > otherleft-1 ) && (mytop < otherbottom  && mybottom > othertop ) ){
		if(this.Vx > 0){this.x = otherobj.x - otherobj.width/*-2;this.Vx += -4*/}else{this.x = otherright/*+2;this.Vx += 4*/}}
		break;
		case 3 :
		if((myleft < otherright -4 && myright > otherleft + 4) && (mytop < otherbottom -4 && mybottom > othertop + 4) ){
		this.x = this.stx
		this.y = this.sty
		this.lives = false
		crash =  true
		}
	    case 2 :
		break;
		case 1 :
		if((myleft < otherright && myright > otherleft) && (mytop < otherbottom && mybottom > othertop) ){
		if(this.Vx < 0){this.x = otherright }else{this.x = otherobj.x - otherobj.width}
		this.Vx = 0 ;}
		break;
	}}return crash}
crashTeleportMargin = function(f,Fa,g,Ga){
	   var SC = scale * 16
       var Xmargin = 256 +this.width
       var Ymargin = 256 +this.height 
	   var xmargin = 0 - this.width;
       var ymargin = 0 - this.height;
       if(this.y < ymargin || this.y > 256){
	   let YA = ((SC - 1) - ((SC + 1) *  Ga)) / 2
	   let YD = (Ga * -1 ) * SC
	   let YH = SC*Ga
	   this.Name += YD
	   this.iA += (YD / SC)
	   if(this.iA == YA){this.iA += YH  ; this.Name += (YH * 16)  ;}
	   this.color = ct[this.Name].BC
	   this.colision = ct[this.Name].col
       this.y += g- ((Ymargin + 1)* Ga )
    }
       if(this.x < xmargin || this.x > 256){
	   let XA = ((SC - 1) - ((SC + 1) *  Fa)) / 2
	   let XD = Fa * -1
	   let XH = SC * Fa
	   this.Name += XD 
	   this.iL += XD
	   if(this.iL ==  XA){this.iL += XH; this.Name += XH ;}
	   this.color = ct[this.Name].BC
	   this.colision = ct[this.Name].col
       this.x += f - ((Xmargin + 1) * Fa )
   }     
}
ZEcrashTeleportMargin = function(f,Fa,g,Ga){
	   var SC = scale * 16
       var Xmargin = 256 +this.width
       var Ymargin = 256 +this.height 
	   var xmargin = 0 - this.width;
       var ymargin = 0 - this.height;
       if(this.y < ymargin || this.y > 256){
	   let YA = ((SC - 1) - ((SC + 1) *  Ga)) / 2
	   let YD = (Ga * -1 ) * SC
	   let YH = SC*Ga
	   this.Name += 512 + YD
	   this.iA += 16 +  (YD / SC)
	   if(this.iA > 31 ){this.iA += -32 ; this.Name += -1024 ;}
	   this.color = ct[this.Name].BC
	   this.colision = ct[this.Name].col
       this.y += g- ((Ymargin + 1)* Ga )
   }
       if(this.x < xmargin || this.x > 256){
	   let XA = ((SC - 1) - ((SC + 0) *  Fa)) / 2
	   let XD = Fa * -1
	   let XH = SC * Fa
	   this.Name += 16 + XD
	   this.iL += 16 + XD
	   if(this.iL > 31){this.iL += -32 ; this.Name += -32 ;}
	   this.color = ct[this.Name].BC
	   this.colision = ct[this.Name].col
       this.x += f - ((Xmargin + 1) * Fa )
   }     
}
McrashTeleportMargin = function(f,Fa,g,Ga){
	   var SC = scale * 16
       var Xmargin = 256 +this.width
       var Ymargin = 256 +this.height 
	   var xmargin = 0 - this.width;
       var ymargin = 0 - this.height;
       if(this.y < ymargin || this.y > 256){
       this.y += g- ((Ymargin + 1)* Ga )
   }
       if(this.x < xmargin || this.x > 256){
	   let XA = ((SC - 1) - ((SC + 0) *  Fa)) / 2
	   let XD = Fa * -1
	   let XH = SC * Fa
	   this.Name += 17 * XD
	   this.iL += 17 * XD
	   if(this.iL > 31){this.iL += -32 ;this.iA += 16; if(this.iA> 31){this.Name += -544; this.iA += -32}else{this.Name += 480 ;}}
	   if(this.iL < 0){this.iL += 32 ;this.iA += 16; if(this.iA> 31){this.Name += -480 ; this.iA += -32}else{this.Name += 544 ;}} 
	/* if(this.iL < 0){this.iL += XH ;this.iA += 16; if(this.iA> 31){this.Name += -512 + XH;console.log("yes"); this.iA += -32}else{this.Name += 512 + XH;console.log("no")}}*/
	   this.color = ct[this.Name].BC
	   this.colision = ct[this.Name].col
       this.x += f - ((Xmargin + 1) * Fa )
   }     
}
}
function graviteison(P) {
    P.gravitySpeed += P.gravity;
	if(P.gravitySpeed > 16){P.gravitySpeed = 16}
    P.y += P.Vy + P.gravitySpeed;
  }
function jump(P) {
	 if(P.jumped == true){
	 P.gravitySpeed = P.JumpPower;
	 }
    }
 function rest(P) {
	 P.x = P.stx
	 P.y = P.sty
	 P.Name = P.Stn
	 p.color = ct[P.Stn].BC
	 P.colision = ct[P.Stn].col
	 P.iL = P.StiL
	 P.iA = P.StiA
 }
 function Margin(P,b) {
	  switch(b){
	   case '0':
       var Xmargin = 256 - P.width;
       var Ymargin = 256 - P.height;
       if(P.y > Ymargin ){
       P.y = Ymargin  
	   P.jumped = true
       }
       if(P.y < 0 ){
       P.y = 0;
	   P.gravitySpeed = 2;
       }
       if(P.x <  0){
       P.x = 0
       P.Vx = 0
       }
       if(P.x >  Xmargin){
       P.x = Xmargin 
       P.Vx = 0
       }  
       break;
	   case '1' :
       var Xmargin = 256 - P.width;
       var Ymargin = 256 - P.height;
       if( P.y > 255){
       P.y = 0
       }
	   if( P.y < 0){
       P.y = Ymargin
       }
       if(P.x > 255){
       P.x = 0 
       }   
       if(P.x < 0){
       P.x = Xmargin
       }
	  }
 }
function charge (b,SC,x,y,XL,YL) {
    let X = x ;
    let Y = y ;  
    let S = SC * 16;	
    let yl2 = 16 + YL ;  
    let xl2 = 16 +  XL ; 
    let Q = XL * S;
	let E = 16
    let END = (S * S) - 1 ;  
	let stop = 0
    let l = 0
	let L = 0
    let ctxZ = b.getContext("2d");
    ctxZ.clearRect(0, 0, b.width, b.height);
	b.width = 256
	b.height = 256
    for(let I = XL; I < xl2 ;I++){	
    Q = Q + YL;
	stop = Q + (S - YL - 1)
    for(let i = YL; i < 16	; i++){
    if(ct[Q].col == 6){starposition.push(X,Y)} 		
    myObstacles.push(new component(b,E,E,ct[Q].BC, X, Y,Q,i,I,ct[Q].col));
    X = X + E;
    Q++
	if(Q > stop){Q += S * -1; }
	}
	if(Q > stop){Q += S * -1; }
	for(let i = 16; i < YL + 17 ; i++){
	l = i ; if(l > (S -1)){l += -16 }
    myObstacles.push(new component(b,E,E,ct[Q].BC, X, Y,Q,l,I,ct[Q].col));
    X = X + E;
    Q++
	if(Q > stop){Q += S * -1 ;}
	}
    Y=Y + E;
	X= x ;
    Q = stop + 1
	if(Q > END){Q = 0} 
    }
	for(let I = 16; I < XL + 17 ;I++){	
	L = I ; if(L > (S -1)){L += -16 }
    Q = Q + YL;
	stop = Q + (S - YL - 1)
    for(let i = YL; i < 16	; i++){ 
    myObstacles.push(new component(b,E,E,ct[Q].BC, X, Y,Q,i,L,ct[Q].col));
    X = X + E;
    Q++
	if(Q > stop){Q += S * -1; }
	}
	if(Q > stop){Q += S * -1; }
	for(let i = 16; i < YL + 17 ; i++){ 
    l = i ; if(l > (SC -1)){l += -16 }
    myObstacles.push(new component(b,E,E,ct[Q].BC, X, Y,Q,l,L,ct[Q].col));
    X = X + E;
    Q++
	if(Q > stop){Q += S * -1 ;}
	}
    Y=Y + E;
	X= x ;
    Q = stop + 1
	if(Q > END){Q = 0} 
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].update(game_area);
    }
}
function clear (b) {
let ctxZ = b.getContext("2d");
ctxZ.clearRect(0, 0, b.width, b.height);
}
var chargered = bck
function ZE (){
cord = 0
table.innerHTML = " ";
for(let i = 0; i < 1024 ; i++){ 
table.innerHTML += "<canvas id=b"+ cord +" class= a onclik=Action("+ cord +")></canvas>";
cord = cord + 1 ;
};
const bck = table.querySelectorAll(".canvas");
bck.forEach(canvas => {
    ctxV[8].fun(canvas);
    canvas.style.backgroundColor = "rgba(0,0,0,0)";
    canvas.addEventListener("mouseover", () => {
	if(Moused == true){
	 ctxV[draw_mode].fun(canvas)}
    });
	canvas.addEventListener("mousedown", () => {
    Moused = true 
    ctxV[draw_mode].fun(canvas)
    });
});
chargered = bck ;
}
function IG (){
cord = 0
table.innerHTML = " ";
for(let i = 0; i < 256 ; i++){ 
table.innerHTML += "<canvas id=b"+ cord +" class = canvas onclik=Action("+ cord +")></canvas>";
cord = cord + 1 ;
};
const bck = table.querySelectorAll("canvas");
bck.forEach(canvas => {
    ctxV[4].fun(canvas);
    canvas.addEventListener("mouseover", () => {
	if(Moused == true){
	 ctxV[draw_mode].fun(canvas)}
    });
	canvas.addEventListener("mousedown", () => {
    Moused = true 
    ctxV[draw_mode].fun(canvas)
    });
});
chargered = bck ;
}
function reset_game () {
	console.log("yes")
for (i = 0; i < myObstacles.length; i += 1){
	rest(myObstacles[i])
}
}
let printed = 200;
var on_game = 0
let on = 0
function gametest (b,number,A,B){
on += 1
A.Vx = 0
A.Vy = 0
document.addEventListener('keydown', function (e) {
            e.preventDefault();
            A.keys = (A.keys || []);
            A.keys[e.keyCode] = (e.type == "keydown");
        })
        document.addEventListener('keyup', function (e) {
            A.keys[e.keyCode] = (e.type == "keydown");
        })
let TIME = number * 100;
let cameraX =  ct[2].X ;
let angleCX =  0
if  (ct[2].X < 0){angleCX =  -1}else{angleCX =  1}
let cameraY =  ct[2].Y ;
let angleCY =  0 ;
if  (ct[2].Y < 0){angleCY =  -1}else{angleCY =  1}
let z = -1
printed = number * 4 -1
A.lives = false
let bug = on
for(let i = 0; i < number * 4 ;i++){
setTimeout(() => {
if(on_game == bug){
time.innerText = printed	
clear(b);
//cameraX =  0 ;
//angleCX =  0 ; 
A.JumpPower = -7.2
if(A.Vx <= -0.50){A.Vx += 0.50}
if(A.Vx >= 0.50){A.Vx += -0.50}
//if (A.keys && A.keys[39]) {cameraX =  -2 ; angleCX =  -1} 
//if (A.keys && A.keys[37]) {cameraX =  2 ; angleCX =  1; }  
if (A.keys && A.keys[39]) {A.Vx = A.velocity } 
if (A.keys && A.keys[37]) {A.Vx = A.velocity * -1} 
A.velocity = 3
A.x += A.Vx + cameraX
Margin(A,ct[2].M )
for (i = 0; i < B.length; i += 1){
B[i].x += cameraX 
if(A.BcrashWith(B[i])){
	for (i = 0; i < B.length; i += 1){
	rest(B[i])}
	if(A.lives == true){
	on_game= 0
	A.lives = false
    game.style.backgroundImage = "url(win.png)"	
	}
}}
A.y += A.Vy + cameraY
graviteison(A)
Margin(A,ct[2].M )
for (i = 0; i < B.length; i += 1){
B[i].y += cameraY;
if(A.AcrashWith(B[i])){
	for (i = 0; i < B.length; i += 1){
	rest(B[i])}
	if(A.lives == true){
    on_game = 0
	A.lives = false
    game.style.backgroundImage = "url(win.png)"}
}}
Margin(A,ct[2].M )
if(A.keys && A.keys[73]){
	console.log(
	"A.x: "+A.x+" // A.y: "+A.y+" &&"+
	" A.Vx: "+A.Vx+" // A.Vy: "+A.gravitySpeed+ "/n")
}
//for (i = 0; i < B.length; i += 1) { A.crashWith(B[i]); B[i].update();}
for (i = 0; i < B.length; i += 1) {
B[i].crashTeleportMargin(cameraX,angleCX,cameraY,angleCY);
B[i].update(game_area);}
//A.crashWithMargin()
if (A.keys && A.keys[38]) {jump(A); }
A.update(game_area);
printed += z;
if(printed == 0 ){
	//on_game=false
	A.lives = false
	game.style.backgroundImage = "url(time_out.png)"}
}
}, TIME);
TIME = TIME - 25;
}
}


//startGame(4)

//red = new component(game,16,16,"black",0,0)

//gametest(game,1000,red,myObstacles)