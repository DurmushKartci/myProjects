let kenar1 = document.getElementById("kenar1");
let aci = document.getElementById("aci");
let kenar2 = document.getElementById("kenar2");

let kenar1Uzunlugu = 210;
let kenar2Uzunlugu = 190;
let aciBuyuklugu = 47 - 90;

let lineX1;
let lineY1;
let lineX2;
let lineY2;
let centerX;
let centerY;

function setup() {
    createCanvas(screen.width / 2, screen.width / 2);
    centerX = 50;
    centerY = 50;

}

function draw() {

    degerler();
    background(255);
    strokeWeight(3);


    lineX1 = centerX;
    lineY1 = kenar1Uzunlugu + centerY;

    lineX2 = centerX + kenar2Uzunlugu * cos(radians(aciBuyuklugu));
    lineY2 = lineY1 + kenar2Uzunlugu * sin(radians(aciBuyuklugu));

    //Line 1 
    stroke(136, 32, 32)
    line(centerX, centerY, lineX1, lineY1)


    //Line 2
    stroke(32, 136, 32)
    line(lineX1, lineY1, lineX2, lineY2)


    //Line 3
    stroke(32, 32, 136)
    line(lineX2, lineY2, centerX, centerY)


    //Line 1 kenarortay
    stroke(136, 32, 32)
    line((lineX1 - centerX) / 2 + centerX, (lineY1 - centerY) / 2 + centerY, lineX2, lineY2)

    //Line 2 kenarortay
    stroke(32, 136, 32)
    line((lineX2 - lineX1) / 2 + lineX1, (lineY2 - lineY1) / 2 + lineY1, centerX, centerY)

    //Line 3 kenarortay
    stroke(32, 32, 136)
    line((centerX - lineX2) / 2 + lineX2, (centerY - lineY2) / 2 + lineY2, lineX1, lineY1)



}

function calculate_d(x1, y1, x2, y2) {
    x = Math.abs(x1 - x2);
    y = Math.abs(y1 - y2);

    c = Math.sqrt(x * x + y * y)

    return c;

}

function degerler() {

    document.getElementById("kirmizi-kenar").innerHTML = "Kırmızı Kenarın Uzunluğu &emsp;&emsp;&ensp;: " + calculate_d(centerX, centerY, lineX1, lineY1);
    document.getElementById("kirmizi-kenarortay").innerHTML = "Kırmızı Kenarortayın Uzunluğu &ensp;: " + calculate_d((lineX1 - centerX) / 2 + centerX, (lineY1 - centerY) / 2 + centerY, lineX2, lineY2);
    document.getElementById("yesil-kenar").innerHTML = "Yeşil Kenarın Uzunluğu &emsp;&emsp;&ensp;&nbsp;&emsp;: " + calculate_d(lineX1, lineY1, lineX2, lineY2);
    document.getElementById("yesil-kenarortay").innerHTML = "Yeşil Kenarortayın Uzunluğu &ensp;&nbsp;&emsp;: " + calculate_d((lineX2 - lineX1) / 2 + lineX1, (lineY2 - lineY1) / 2 + lineY1, centerX, centerY);
    document.getElementById("mavi-kenar").innerHTML = "Mavi Kenarın Uzunluğu&emsp;&emsp;&emsp;&emsp;: " + calculate_d(lineX2, lineY2, centerX, centerY);
    document.getElementById("mavi-kenarortay").innerHTML = "Mavi Kenarortayın Uzunluğu&emsp;&emsp;: " + calculate_d((centerX - lineX2) / 2 + lineX2, (centerY - lineY2) / 2 + lineY2, lineX1, lineY1);
    document.getElementById("mavi-kenar-yarı").innerHTML = "Mavi Kenarın Yarı Uzunluğu &emsp;&emsp;: " + (calculate_d(lineX2, lineY2, centerX, centerY)) / 2

}

kenar1.oninput = function() {
    kenar1Uzunlugu = parseFloat(this.value);
    draw();
    degerler();
}
kenar2.oninput = function() {
    kenar2Uzunlugu = parseFloat(this.value);
    draw();
    degerler();
}
aci.oninput = function() {
    aciBuyuklugu = parseFloat(this.value) - 90;
    draw();
    degerler();
}