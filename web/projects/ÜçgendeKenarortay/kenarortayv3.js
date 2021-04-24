let mouseclick = 1;

function setup() {
    createCanvas(500, 500);


    centerX = 0;
    centerY = 0;

    lineX1 = 0;
    lineY1 = 0;

    lineX2 = 0;
    lineY2 = 0

    angle = 110 - 90;
}

function draw() {

    angleMode(DEGREES)
    background(255);




    strokeWeight(4);


    //Line 1 
    stroke(136, 16, 16)
    line(centerX, centerY, lineX1, lineY1)


    //Line 2
    stroke(16, 136, 16)
    line(lineX1, lineY1, lineX2, lineY2)


    //Line 3
    stroke(16, 16, 136)
    line(lineX2, lineY2, centerX, centerY)



    strokeWeight(4);


    //Line 1 kenarortay
    stroke(136, 16, 16)
    line((lineX1 - centerX) / 2 + centerX, (lineY1 - centerY) / 2 + centerY, lineX2, lineY2)

    //Line 2 kenarortay
    stroke(16, 136, 16)
    line((lineX2 - lineX1) / 2 + lineX1, (lineY2 - lineY1) / 2 + lineY1, centerX, centerY)

    //Line 3 kenarortay
    stroke(16, 16, 136)
    line((centerX - lineX2) / 2 + lineX2, (centerY - lineY2) / 2 + lineY2, lineX1, lineY1)

    strokeWeight(8);


    stroke(136, 16, 16);
    point(centerX, centerY);

    stroke(16, 136, 16)
    point(lineX1, lineY1);

    stroke(16, 16, 136)
    point(lineX2, lineY2);


}


function calculate_d(x1, y1, x2, y2) {
    x = x1 - x2;
    y = y1 - y2;

    c = parseFloat(Math.sqrt(x * x + y * y))
    c = c.toFixed(2);
    return c;

}

function mouseClicked() {

    if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
        if (mouseclick == 1) {
            centerX = mouseX;
            centerY = mouseY;
            mouseclick = 2;

        } else if (mouseclick == 2) {

            lineX1 = mouseX;
            lineY1 = mouseY;
            mouseclick = 3;


        } else if (mouseclick == 3) {

            lineX2 = mouseX;
            lineY2 = mouseY
            mouseclick = 1;


        }

        console.clear();
        console.log("*************************************************")
        console.log("Kırmızı Kenarın      Uzunluğu : " + calculate_d(centerX, centerY, lineX1, lineY1))
        console.log("Kırmızı Kenarortayın Uzunluğu : " + calculate_d((lineX1 - centerX) / 2 + centerX, (lineY1 - centerY) / 2 + centerY, lineX2, lineY2))
        console.log("Yeşil   Kenarın      Uzunluğu : " + calculate_d(lineX1, lineY1, lineX2, lineY2))
        console.log("Yeşil   Kenarortayın Uzunluğu : " + calculate_d((lineX2 - lineX1) / 2 + lineX1, (lineY2 - lineY1) / 2 + lineY1, centerX, centerY))
        console.log("Mavi    Kenarın      Uzunluğu : " + calculate_d(lineX2, lineY2, centerX, centerY))
        console.log("Mavi    Kenarortayın Uzunluğu : " + calculate_d((centerX - lineX2) / 2 + lineX2, (centerY - lineY2) / 2 + lineY2, lineX1, lineY1))
        console.log("                              ")
        console.log("Mavi    Kenarın Yarı Uzunluğu : " + (calculate_d(lineX2, lineY2, centerX, centerY)) / 2)


        document.getElementById("kirmizi-kenar").innerHTML = "Kırmızı Kenarın Uzunluğu &emsp;&emsp;&ensp;: " + calculate_d(centerX, centerY, lineX1, lineY1);
        document.getElementById("kirmizi-kenarortay").innerHTML = "Kırmızı Kenarortayın Uzunluğu &ensp;: " + calculate_d((lineX1 - centerX) / 2 + centerX, (lineY1 - centerY) / 2 + centerY, lineX2, lineY2);
        document.getElementById("yesil-kenar").innerHTML = "Yeşil Kenarın Uzunluğu &emsp;&emsp;&ensp;&nbsp;&emsp;: " + calculate_d(lineX1, lineY1, lineX2, lineY2);
        document.getElementById("yesil-kenarortay").innerHTML = "Yeşil Kenarortayın Uzunluğu &ensp;&nbsp;&emsp;: " + calculate_d((lineX2 - lineX1) / 2 + lineX1, (lineY2 - lineY1) / 2 + lineY1, centerX, centerY);
        document.getElementById("mavi-kenar").innerHTML = "Mavi Kenarın Uzunluğu&emsp;&emsp;&emsp;&emsp;: " + calculate_d(lineX2, lineY2, centerX, centerY);
        document.getElementById("mavi-kenarortay").innerHTML = "Mavi Kenarortayın Uzunluğu&emsp;&emsp;: " + calculate_d((centerX - lineX2) / 2 + lineX2, (centerY - lineY2) / 2 + lineY2, lineX1, lineY1);
        document.getElementById("mavi-kenar-yarı").innerHTML = "Mavi Kenarın Yarı Uzunluğu &emsp;&emsp;: " + (calculate_d(lineX2, lineY2, centerX, centerY)) / 2
    }
}