var ball,position
var database 

function setup() {
  createCanvas(800,400);
  ball=createSprite(200,300,20,40)
  ball.shapeColor="BLUE"
  database=firebase.database()
  var databaseref=database.ref("ball/position")
  databaseref.on("value",readPosition)
}

function draw() {
  background(255,255,255);  
  if(keyDown("UP_ARROW")) {
   // ChangePosition(0,-1)
   writePosition(0,-1)
  }
  else if(keyDown("DOWN_ARROW")) {
   // ChangePosition(0,1)
   writePosition(0,1)
  }
  else if(keyDown("LEFT_ARROW")) {
    //ChangePosition(-1,0)
    writePosition(-1,0)
  }

  else if(keyDown("RIGHT_ARROW")) {
    //ChangePosition(1,0)
    writePosition(1,0)
  }
  drawSprites();
}

//function ChangePosition (x,y) {
// ball.x=ball.x+x
// ball.y=ball.y+y
//}

function readPosition(data) {
  position=data.val()
  ball.x=position.x
  ball.y=position.y
}

function writePosition (x,y) {
  database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y
  })
}