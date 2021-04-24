let yk = [];
let xk = [];
let fourierY;
let fourierX;

const USER = 0;
const FOURIER = 1;

let timed = 1;
let time = 0;
let path = [];

let drawing = []
let state = -1;

function setup() {
    createCanvas(screen.width - 50, screen.height - 150);
}

function epiCycles(x, y, rotation, fourier) {
    for (let i = 0; i < fourier.length; i++) {
        let px = x;
        let py = y;

        let freq = fourier[i].freq;
        let radius = fourier[i].amp;
        let phase = fourier[i].phase;

        x += radius * cos(freq * time + phase + rotation);
        y += radius * sin(freq * time + phase + rotation);

        noFill();
        stroke(136, 150, 150, 50);
        circle(px, py, radius * 2);
        strokeWeight(2);
        fill(136, 150, 150, 50);
        ellipse(x, y, 5);

        strokeWeight(1);
        stroke(136, 150, 150);
        line(px, py, x, y);
    }
    return createVector(x, y);
}



function draw() {
    background(0);

    if (state == USER) {
        let point = createVector(mouseX - width / 2, mouseY - height / 2);
        drawing.push(point);

        beginShape();
        for (let v of drawing) {
            stroke(255, 100);
            noFill();
            strokeWeight(3);
            vertex(v.x + width / 2, v.y + height / 2);
        }
        endShape();

    } else if (state == FOURIER) {

        let vx = epiCycles(width / 2, 100, 0, fourierX);
        let vy = epiCycles(100, height / 2, HALF_PI, fourierY);
        let v = createVector(vx.x, vy.y);
        path.unshift(v);

        beginShape();
        stroke(16, 136, 16, 150);
        line(vx.x, vx.y, v.x, v.y);
        line(vy.x, vy.y, v.x, v.y);
        line(v.x, v.y, v.x - 10, v.y - 10)
        line(v.x, v.y, v.x + 10, v.y - 10)
        line(v.x, v.y, v.x - 10, v.y + 10)

        for (let i = 0; i < path.length; i++) {
            stroke(255, 100);
            noFill();
            strokeWeight(3);
            vertex(path[i].x, path[i].y);
        }
        endShape();

        const dt = TWO_PI / (fourierY.length);
        time += dt;
        timed += 0.1;

        if (path.length > 500) {
            path.pop();
        }

        if (time > TWO_PI) {
            path = [];
            time = 0;
        }
    }
}

function dft(x) {
    let X = [];
    const N = x.length;
    for (var k = 0; k < N; k++) {
        let re = 0;
        let im = 0;
        for (var n = 0; n < N; n++) {
            let phi = (TWO_PI * k * n) / N;
            re += x[n] * cos(phi);
            im -= x[n] * sin(phi);
        }
        re = re / N;
        im = im / N;

        let freq = k;
        let amp = sqrt(re * re + im * im);
        let phase = atan2(im, re);
        X[k] = { re, im, freq, amp, phase }
    }
    return X;
}


function mousePressed() {
    state = USER;
    drawing = [];
    xk = [];
    yk = [];
    path = [];
    time = 0;
}

function mouseReleased() {
    state = FOURIER;

    for (let i = 0; i < drawing.length; i += 1) {
        yk.push(drawing[i].y);
        xk.push(drawing[i].x);
    }

    fourierY = dft(yk);
    fourierX = dft(xk);

    fourierX.sort((a, b) => b.amp - a.amp);
    fourierY.sort((a, b) => b.amp - a.amp);
}