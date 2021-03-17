//clases------------------------------------------------------------------------
//Clase padre-------------------------
class Objeto{
  constructor(){
    this.tamano = tamano;
  }
  choque(obj){
    var difx = Math.abs(this.x - obj.x);
    var dify = Math.abs(this.y - obj.y);
    if(difx >= 0 && difx < this.tamano && dify >=0  && dify < this.tamano)
      return true;
    return false
  }
  generar(){
    return (Math.floor(Math.random() * 40) * this.tamano);
  }
}
//Clase serpiente---------------------
class Cola extends Objeto{
  constructor(x,y){
    super();
    this.x=x;
    this.y=y;
    this.siguiente = null;
    this.cabezaDerecha = new Image();
    this.cabezaIzquierda = new Image();
    this.cabezaArriba = new Image();
    this.cabezaAbajo = new Image();
    this.colaDerecha = new Image();
    this.colaIzquierda = new Image();
    this.colaArriba = new Image();
    this.colaAbajo = new Image();
    this.cargar();
  }
  cargado(){
    console.log("cargado!");
  }
  cargar(){
    this.cabezaDerecha.src="graficos/cabezaDerecha.png";
    this.cabezaDerecha.onload=this.cargado();
    this.cabezaIzquierda.src="graficos/cabezaIzquierda.png";
    this.cabezaIzquierda.onload=this.cargado();
    this.cabezaAbajo.src="graficos/cabezaAbajo.png";
    this.cabezaAbajo.onload=this.cargado();
    this.cabezaArriba.src="graficos/cabezaArriba.png";
    this.cabezaArriba.onload=this.cargado();
  }
  dibujarCabeza(ctx){
    if(this.siguiente!=null) this.siguiente.dibujar(ctx);
    if(xdir==0 && ydir==0) ctx.drawImage(this.cabezaDerecha,this.x,this.y);
    if(xdir==tamano)  ctx.drawImage(this.cabezaDerecha,this.x,this.y);
    if(xdir==-tamano) ctx.drawImage(this.cabezaIzquierda,this.x,this.y);
    if(ydir==tamano)  ctx.drawImage(this.cabezaAbajo,this.x,this.y);
    if(ydir==-tamano) ctx.drawImage(this.cabezaArriba,this.x,this.y);
  }
  dibujar(ctx){
    if(this.siguiente!=null) this.siguiente.dibujar(ctx);
      ctx.fillStyle = "#009900";
      ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
  }
  setxy(nx,ny){
    if(this.siguiente!=null){
      this.siguiente.setxy(this.x, this.y);
    }
    this.x=nx;
    this.y=ny;
  }
  meter(){
    if(this.siguiente == null){
      this.siguiente = new Cola(this.x, this.y);
    }else{
      this.siguiente.meter();
    }
  }
  movimiento(nx,ny){
    this.setxy(this.x+nx,this.y+ny);
  }
  getSiguiente(){
    return this.siguiente;
  }
}
//Comida--------------------------------------
class Comida extends Objeto{
  constructor(){
    super();
    this.x=this.generar();
    this.y=this.generar();
    this.manzana = new Image();
    this.cargar();
  }
  cargado(){
    console.log("cargado!");
  }
  cargar(){
    this.manzana.src="graficos/comida.png";
    this.manzana.onload=this.cargado();
  }
  colocar(){
    this.x=this.generar();
    this.y=this.generar();
  }
  dibujar(ctx){
    ctx.drawImage(this.manzana,this.x,this.y);
  }
}
//variables globales------------------------------------------------------------
var velocidad=200, tamano=10;
var ejex = true, ejey = true;
var xdir = 0, ydir= 0;
var puntaje = 0, puntajeV = 0;
var cabeza = new Cola(0,0);
var alimento = new Comida();
//main--------------------------------------------------------------------------
function main(){
  choqueCuerpo();
  choquePared();
  dibujar();
  cabeza.movimiento(xdir,ydir);
  if(cabeza.choque(alimento)){
    alimento.colocar();
    cabeza.meter();
    puntaje++;
  }
}
setInterval("main()",velocidad);
//Funciones---------------------------------------------------------------------
function dibujar(){
  var canvas=document.getElementById("canvas");
  var puntos=document.getElementById("puntaje");
  var mejorPuntos=document.getElementById("puntajeV")
  var ctx=canvas.getContext("2d");
  puntos.value="Puntaje: "+puntaje;
  mejorPuntos.value="Mayor Puntaje: "+puntajeV;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  cabeza.dibujarCabeza(ctx);
  alimento.dibujar(ctx);
}
//Control--------------------------------------
function control(event){
  var cod = event.keyCode;
  if(ejex){
    if (cod == 38) {
      ydir = -tamano;
      xdir = 0;
      ejex = false;
      ejey = true;
    }
    if (cod == 40){
      ydir = tamano;
      xdir = 0;
      ejex = false;
      ejey = true;
    }
  }
  if(ejey){
    if (cod == 37) {
      ydir = 0;
      xdir = -tamano;
      ejex = true;
      ejey = false;
    }
    if (cod == 39){
      ydir = 0;
      xdir = tamano;
      ejex = true;
      ejey = false;
      var cabeza = new Cola(0,0);
      var alimento = new Comida();
    }
  }
}
//Colisión con pared--------------------------------------
function choquePared(){
  if(cabeza.x<0 || cabeza.x>390 || cabeza.y<0 || cabeza.y>390)
    finDelJuego();
}
//Colisión con cuerpo--------------------------------------
function choqueCuerpo(){
  var temp = null;
  try{
    temp = cabeza.getSiguiente().getSiguiente();
  }
  catch(err){
    temp=null;
  }
  while(temp!=null){
    if(cabeza.choque(temp))
      finDelJuego();
    else
      temp=temp.siguiente;
  }
}
//Game Over--------------------------------------
function finDelJuego(){
  ejex = true;
  ejey = true;
  xdir = 0;
  ydir= 0;
  if(puntaje>puntajeV)
    puntajeV=puntaje;
  puntaje = 0;
  cabeza = new Cola(0,0);
  alimento = new Comida();
  alert("Perdiste");
}
//------------------------------------------------------------------------------
