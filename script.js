let pollution //declaring variable

function preload(){ //preloading the needed data
    let url = "http://api.openweathermap.org/pollution/v1/co/0.0,10.0/2016Z.json?appid=010c90218217034f279d862ef9f6556f"; //API key and url
    pollution = loadJSON(url); //changing variable
}

function setup(){ //setup of webpage
  createCanvas(1200,720); //canvas dimensions
  textSize(10); //text size
  strokeWeight(0.5) //thickness of the stroke
  noLoop();
}
function draw(){ //drawing to canvas
  for (let i = 0; i < 10; i++){ //reading 10 sets of data
    let newPosX = random(1150); //random x position
    let newPosY = random(670); //random position
    let col1 = random(255); //random r colour
    let col2 = random(255); //random g colour
    let col3 = random(255); //random b colour
    let locationLat = pollution.location.latitude; //path to data
    let locationLong = pollution.location.longitude; //path to data
    let airPressure = pollution.data[i].pressure; //path to data
    let cMonoxide = pollution.data[i].value; //path to data
    fill(col1,col2,col3, 75); //random colours and set transparency
    ellipse(newPosX, newPosY, airPressure/2, airPressure/2); //drawing ellipse based on air pressure
    fill(0); //colour of text
    textAlign(CENTER); //aligning text in center of ellipse
    text("Latitude: " + locationLat, newPosX, newPosY-20); //text
    text("Longitude: " + locationLong, newPosX, newPosY-10);
    text("Air Pressure: " + airPressure, newPosX, newPosY);
    text("CO: " + cMonoxide, newPosX, newPosY+10);
  }
}
