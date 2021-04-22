var triangle_itteration = 0;

function setup() {
  frameRate(60);
  createCanvas(window.innerWidth, window.innerHeight);

}


function draw() {
  background(0);
      
    for (i = 20; i < window.innerWidth-10; i += 30) {
    for (j = 20; j < window.innerHeight; j += 10) {
      let r = random(0, 10);
     fill(243,252,254);

      stroke(29,48,114);
      strokeWeight(2);   
      if(r>4){
      rect(i+4, j, 20,5,5);}
    }
  }
////Panel Code

  triangle_itteration+=1;
  fill(0);
  strokeWeight(1);   

  stroke(255);

  rect(30, 20, 230, 550, 20);
  for(i=0;i<=4;i++){

  line(65+(40*i), 20, 65+(40*i), 570);
  }
 
textSize(30);
    fill(255);
      strokeWeight(3); 
      stroke(75,54,58);
      line(74.5, 540-triangle_itteration,90, 560-triangle_itteration);
      line(74.5, 520-triangle_itteration,90, 540-triangle_itteration);
      line(74.5, 500-triangle_itteration,90, 520-triangle_itteration);
      line(74.5, 480-triangle_itteration,90, 500-triangle_itteration);
      //Inverse
            line(59.5, 540-triangle_itteration,44, 560-triangle_itteration);
            line(59.5, 520-triangle_itteration,44, 540-triangle_itteration);
            line(59.5, 500-triangle_itteration,44, 520-triangle_itteration);
            line(59.5, 480-triangle_itteration,44, 500-triangle_itteration);

    //console.log(j);
    if(triangle_itteration==550){
      triangle_itteration=-90;
    }
////Panel Code END
  
  
   
}

function touchStarted() {
  //background(random(255), random(255), random(255));
      background(0);
      //fill(random(255),random(255),random(255));
        //  stroke(random(255),random(255),random(255));  

    for (i = 20; i < window.innerWidth-10; i += 30) {
    for (j = 20; j < window.innerHeight; j += 10) {
      let r = random(0, 10);
     fill(243,252,254);

      stroke(29,48,114);
      strokeWeight(2);   
      if(r>4){
      rect(i+4, j, 20,5,5);}
    }
  }
}
