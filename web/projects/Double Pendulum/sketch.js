let bubble;
let canvas;
let arrayPendulum = []
let amount = 1;

function setup() {
    createCanvas(screen.width - 50, screen.height - 150);

    for (let i = 0; i < amount; i++) {
        arrayPendulum.push(new Pendulum(150, 150, 5, 5, 180, 90, 0, 0, 0.98));
    }
}

function draw() {
    background(255);

    translate(width / 2, height / 4);

    for (let pendulum of arrayPendulum) {

        pendulum.update();
        pendulum.show();
    }

}

class Pendulum {

    constructor(r1, r2, m1, m2, a1, a2, a1_v, a2_v, g) {
        this.r1 = r1;
        this.r2 = r2;
        this.m1 = m1;
        this.m2 = m2;
        this.a1 = radians(a1);
        this.a2 = radians(a2);
        this.a1_v = a1_v;
        this.a2_v = a2_v;
        this.g = g;

        this.x1 = cos(a1) * r1;
        this.y1 = sin(a1) * r1;
        this.x2 = cos(a2) * r2 + this.x1;
        this.y2 = sin(a2) * r2 + this.y1;
    }

    show() {
        stroke(136, 16, 16);
        strokeWeight(2);
        line(0, 0, this.x1, this.y1);
        stroke(16, 136, 16);
        line(this.x1, this.y1, this.x2, this.y2);
        noStroke();
        fill(136, 16, 16);
        circle(this.x1, this.y1, this.m1);
        fill(16, 136, 16);
        circle(this.x2, this.y2, this.m2);
        this.px1;
        this.py1;
        this.px2;
        this.py2;
        this.lineBoolean = false;
    }

    update() {
        this.x1 = this.r1 * sin(this.a1);
        this.y1 = this.r1 * cos(this.a1);

        this.x2 = this.r2 * sin(this.a2) + this.x1;
        this.y2 = this.r2 * cos(this.a2) + this.y1;

        this.a1_a = (-this.g * (2 * this.m1 + this.m2) * sin(this.a1) - this.m2 * this.g * sin(this.a1 - 2 * this.a2) - 2 * sin(this.a1 - this.a2) * this.m2 * (this.a2_v * this.a2_v * this.r2 + this.a1_v * this.a1_v * this.r1 * cos(this.a1 - this.a2))) / (this.r1 * (2 * this.m1 + this.m2 - this.m2 * cos(2 * this.a1 - 2 * this.a2)));
        this.a2_a = (2 * sin(this.a1 - this.a2) * (this.a1_v * this.a1_v * this.r1 * (this.m1 + this.m2) + this.g * (this.m1 + this.m2) * cos(this.a1) + this.a2_v * this.a2_v * this.r2 * this.m2 * cos(this.a1 - this.a2))) / (this.r2 * (2 * this.m1 + this.m2 - this.m2 * cos(2 * this.a1 - 2 * this.a2)));

        this.a1_v += this.a1_a;
        this.a2_v += this.a2_a;

        this.a1 += this.a1_v;
        this.a2 += this.a2_v;
    }

    updatePrevious() {
        this.px1 = this.x1;
        this.py1 = this.y1;
        this.px2 = this.x2;
        this.py2 = this.y2;
        this.lineBoolean = true;
    }
}