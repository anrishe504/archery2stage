const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher, playerArrow;
var computer, computerBase, computerArcher, computerArrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  playerArcher = new PlayerArcher(
    width - 340,
    playerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
computerArrow = new ComputerArrow (width -300,computerArcher.body.position.y -150, 100,120); 
playerArrow = new PlayerArrow (playerArcher.body.position.x -150,playerArcher.body.position.y -150, 100,120); 
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  
  playerArrow.display();
  computerArrow.display();

  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher


  }
}


