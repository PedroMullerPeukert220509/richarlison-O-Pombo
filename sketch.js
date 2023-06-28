var gramado
var gramadoImg
var fundo
var fundoImg
var pombo
var pomboImg
var chaoinvisivel
var tite
var titeImg
var danielalves
var falamuito
var perdeu = false
function preload() {

gramadoImg = loadImage("gramado.png")
fundoImg = loadImage("torcida.png")
pomboImg = loadImage("pombo.gif")
titeImg = loadImage("tite.gif")
danielalves = loadSound("danielalves.mp3")
falamuito = loadSound("falamuito.mp3")
}

function setup() {
  createCanvas(660, 350);
  fundo = createSprite(width/2,height/2-25)
  fundo.addImage(fundoImg)

  gramado = createSprite(width/2,325)
  gramado.addImage(gramadoImg)
  gramado.x = gramado.width/2
  gramado.velocityX = -3
pombo = createSprite(70,250)
pombo.addImage(pomboImg)
pombo.scale = 0.2

tite = createSprite(width,random([50,200,300]))
tite.addImage(titeImg)
tite.scale = 0.5
tite.velocityX = -5
chaoinvisivel = createSprite(width/2,325,width,40)
chaoinvisivel.visible = false
}

function draw() {
  background("white");

  text("Seu jogo aqui :D", width / 2, height / 2);
if(gramado.x<=0){
  gramado.x=gramado.width/2
}
if (keyDown("space")){

  pombo.velocityY = -10 
 
}
pombo.velocityY = pombo.velocityY+1
pombo.collide(chaoinvisivel)
if (tite.x<-100){
tite.x=width
tite.y=random([50,200,300])
danielalves.play()

}
drawSprites();
if(tite.isTouching(pombo)){

  tite.velocityX = 0
  pombo.velocityY = 0
  background("black")
  textAlign(CENTER)
  textSize(45)
  fill("white")
  text("VOCE FOI DE AMERICANAS",width/2,height/2)
  
  if (perdeu===false){

falamuito.play()
perdeu = true
botao = createButton("reset")
botao.position(300,400)
botao.mousePressed(()=>{location.reload()})


  }
}
  
}
