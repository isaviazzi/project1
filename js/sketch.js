
let color;
let coloralt;
let x = 0;
let squareNums= [25, 36, 49, 64, 82, 100, 144]
let names = ['upper right corner', 'upper left corner', 'lower right corner', 'lowen left corner']
let myFont;






function preload () {
  color = loadImage('assets/color.jpg')
  coloralt = loadImage ('assets/coloralt.jpg')
  myFont = loadFont('assets/sprat.otf')
}








function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL)
  background(0)
  rectMode(CENTER)
  imageMode(CENTER)
  smooth()
  print(names[0]);


  for(let i=0; i < 50; i++){
    image(color, random(windowWidth), random(windowHeight), 50, 50)
  }

}


// function drawText(myFont){
//   fill('#ED225D');
//   textFont(myFont);
//   textSize(36);
//   text('p5*js', 10, 50);
// }


function draw() {

  text(names[1], 300, 400);

  if(mouseX < windowWidth/2 && mouseY < windowHeight/2 || mouseY > windowHeight/2 && mouseX> windowWidth/2) {

    background (20, 20, 20);
    image (color, x, 0, windowWidth, windowHeight)

  }

  else {

    // background(100, 100, 200)

    rotateX(frameCount * .005);
    rotateY(frameCount * .005);
    image (color, x, 0, 0, 0)


  }


}
