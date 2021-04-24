function setup() {
    createCanvas(500, 500);


    centerX = 50;
    centerY = 50;

    lineX1 = random(450);
    lineY1 = random(450);

    lineX2 = random(450);
    lineY2 = random(450);
  }
  
  function draw() {

    background(255);

    


    strokeWeight(4);

    
    //Line 1 
    stroke(136,16,16)
    line(centerX,centerY,lineX1,lineY1)
    

    //Line 2
    stroke(16,136,16)
    line(lineX1,lineY1,lineX2,lineY2)
    

    //Line 3
    stroke(16,16,136)
    line(lineX2,lineY2,centerX,centerY)
    

    
    strokeWeight(4);


    //Line 1 kenarortay
    stroke(136,16,16)
    line(( lineX1- centerX )/2+centerX,(lineY1-centerY)/2+centerY,lineX2,lineY2)

    //Line 2 kenarortay
    stroke(16,136,16)
    line(( lineX2- lineX1 )/2+lineX1,(lineY2-lineY1)/2+lineY1,centerX,centerY)

    //Line 3 kenarortay
    stroke(16,16,136)
    line(( centerX- lineX2 )/2+lineX2,(centerY-lineY2)/2+lineY2,lineX1,lineY1)

    
    
  }

  function mouseClicked(){
    if(mouseX <= 500 && mouseX >= 0 && mouseY <= 500 && mouseY >= 0 ){

      lineX1 = random(450);
      lineY1 = random(450);

      lineX2 = random(450);
      lineY2 = random(450);

      console.clear();
      console.log("*************************************************")
      console.log("Kırmızı Kenarın      Uzunluğu : " + calculate_d(centerX,centerY,lineX1,lineY1))
      console.log("Kırmızı Kenarortayın Uzunluğu : " + calculate_d(( lineX1- centerX )/2+centerX,(lineY1-centerY)/2+centerY,lineX2,lineY2))
      console.log("Yeşil   Kenarın      Uzunluğu : " + calculate_d(lineX1,lineY1,lineX2,lineY2))
      console.log("Yeşil   Kenarortayın Uzunluğu : " + calculate_d(( lineX2- lineX1 )/2+lineX1,(lineY2-lineY1)/2+lineY1,centerX,centerY))
      console.log("Mavi    Kenarın      Uzunluğu : " + calculate_d(lineX2,lineY2,centerX,centerY))
      console.log("Mavi    Kenarortayın Uzunluğu : " + calculate_d(( centerX- lineX2 )/2+lineX2,(centerY-lineY2)/2+lineY2,lineX1,lineY1))
      
      document.getElementById("kirmizi-kenar").innerHTML      = "Kırmızı Kenarın      Uzunluğu : " + calculate_d(centerX,centerY,lineX1,lineY1);
      document.getElementById("kirmizi-kenarortay").innerHTML = "Kırmızı Kenarortayın Uzunluğu : " + calculate_d(( lineX1- centerX )/2+centerX,(lineY1-centerY)/2+centerY,lineX2,lineY2);
      document.getElementById("yesil-kenar").innerHTML        = "Yeşil   Kenarın      Uzunluğu : " + calculate_d(lineX1,lineY1,lineX2,lineY2);
      document.getElementById("yesil-kenarortay").innerHTML   = "Yeşil   Kenarortayın Uzunluğu : " + calculate_d(( lineX2- lineX1 )/2+lineX1,(lineY2-lineY1)/2+lineY1,centerX,centerY);
      document.getElementById("mavi-kenar").innerHTML         = "Mavi    Kenarın      Uzunluğu : " + calculate_d(lineX2,lineY2,centerX,centerY);
      document.getElementById("mavi-kenarortay").innerHTML    = "Mavi    Kenarortayın Uzunluğu : " + calculate_d(( centerX- lineX2 )/2+lineX2,(centerY-lineY2)/2+lineY2,lineX1,lineY1);
      
    }
    
  }

  function calculate_d(x1,y1,x2,y2){
    x = x1 - x2;
    y = y1 - y2;

    c = Math.sqrt(x*x+y*y)

    return c;

  }

  