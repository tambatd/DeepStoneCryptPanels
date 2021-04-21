var triangle_itteration = 0;

function setup() {
  frameRate(60);
  createCanvas(1000, 1000);
}


function draw() {
  triangle_itteration+=1;
  background(0);
  rect(30, 20, 230, 550, 20);
  for(i=0;i<=4;i++){
  line(65+(40*i), 20, 65+(40*i), 600);
  }
textSize(20);
    text("▲", 74.5, 540-triangle_itteration); 
    text("▲", 74.5, 520-triangle_itteration); 
    text("▲", 74.5, 500-triangle_itteration); 
    text("▲", 74.5, 480-triangle_itteration);
    //console.log(j);
    if(triangle_itteration==550){
      triangle_itteration=-90;
    }
  
}
