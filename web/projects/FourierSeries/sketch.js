let time = 0;
let wave = [];
let nSlider;

function setup() {
    createCanvas(screen.width - 50, screen.height - 150);
    nSlider = createSlider(0, 100, 0, 0);
}

function draw() {
    background(0);
    translate(width / 4.5, height / 2);

    let x = 0;
    let y = 0;
    for (let i = 0; i <= nSlider.value(); i++) {
        let px = x;
        let py = y;
        let n = 2 * i + 1
        stroke(255);
        noFill();
        let radius = width / 10 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255, 50);
        circle(px, py, radius * 2);
        strokeWeight(2);
        fill(255, 50);
        ellipse(x, y, 5);

        strokeWeight(1);
        stroke(255);
        line(px, py, x, y);





    }
    wave.unshift(y);

    stroke(16, 136, 16);
    line(x, y, width / 3, y);
    line(width / 3, y, width / 3 - 5, y - 5);
    line(width / 3, y, width / 3 - 5, y + 5);
    beginShape();
    for (let i = 0; i < wave.length; i++) {
        stroke(255);
        noFill();
        vertex(i + width / 3, wave[i]);
    }
    endShape();

    if (wave.length > 500) {
        wave.pop();
    }

    time += 0.01;
}