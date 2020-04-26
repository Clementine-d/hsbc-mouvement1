
let myFont;
function preload() {
  myFont = loadFont('assets/UniversNextforHSBC-Regular.otf');
}

let t = 'Together';
let t2 = 'We';
let t3 = 'Thrive';



function setup() {
  createCanvas(600, 400);
  extraCanvas = createGraphics(600, 400);
  extraCanvas.clear();
  background(255, 0, 0);
}


function draw() {
  
  
  if (mouseX <= 200) {
    fill(255);
    textSize(60);
    text(t, 30, 165, 600, 400);
  }
  
   if (mouseX >= 200) {
     
     extraCanvas.fill(255);
     extraCanvas.textSize(60);
     extraCanvas.text(t2, 290, 165, 600, 400);
  }
  
   if (mouseX >= 400) {
     fill(255);
     textSize(60);
     text(t3, 405, 165, 600, 400);
  }
  image(extraCanvas, 0, 0);
}

