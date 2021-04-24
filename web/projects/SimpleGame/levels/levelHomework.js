width = 480;
height = 480;
// ******************************* V intro
let s = Snap("#id_svg");
s.attr({
    viewBox: "0 0 " + width + height
});
// ******************************* V intro

let borders = s.rect(0, 0, width, height)
borders.attr({
    stroke: "#881010",
    strokeWidth: 5,
    fill: "none"
});

//Coordinates of map
xM = 3;
yM = 3;
d = 40;
stillTrue = true;

var mapLength = width / d
var isMap = [];
var intGo = [];

function calculate_x(column) {
    x = (column - 1) * d;
    return x;
}

function calculate_y(row) {
    y = (row - 1) * d;
    return y;
}

//This method draw square for map
function draw_square(row, column, color = "rgba(136,16,16,0.3.8)", haveDot = true) {

    x1 = calculate_x(column);
    y1 = calculate_y(row);
    // line
    let line_top = s.line(x1, y1, x1 + d, y1)
    let line_bottom = s.line(x1, y1 + d, x1 + d, y1 + d)
    let line_left = s.line(x1, y1, x1, y1 + d)
    let line_right = s.line(x1 + d, y1, x1 + d, y1 + d)

    if (haveDot == true) {
        let footprint = s.line(x1 + d / 2, y1 + 1.5, x1 + d / 2, y1 + d - 1.5);

        footprint.attr({

            stroke: "rgb(136,16,16)",
            strokeWidth: d - 3

        });

        let dot = s.circle(x1 + d / 2, y1 + d / 2, 0.05)
        dot.attr({
            stroke: "#fff",
            strokeWidth: 6,
            strokeDasharray: "0"
        });
    } else if (haveDot == false) {
        let footprint = s.line(x1 + d / 2, y1 + 1.5, x1 + d / 2, y1 + d - 1.5);

        footprint.attr({

            stroke: "rgba(136,16,16,0.3)",
            strokeWidth: d - 3

        });
    }

    line_top.attr({
        fill: color,
        stroke: color,
        strokeWidth: 3,
        strokeDasharray: "0"
    });

    line_bottom.attr({
        stroke: color,
        strokeWidth: 3,
        strokeDasharray: "0"
    });

    line_left.attr({
        stroke: color,
        strokeWidth: 3,
        strokeDasharray: "0"
    });

    line_right.attr({
        stroke: color,
        strokeWidth: 3,
        strokeDasharray: "0"
    });

}

function setup_array() {
    for (var f = 0; f <= mapLength; f++) {
        isMap[f] = [];
        intGo[f] = [];
        for (var b = 0; b <= mapLength; b++) {
            isMap[f][b] = false;
            intGo[f][b] = 0;

        }
    }
}

function draw_map_levelhomework(xM, yM) {

    draw_square(yM, xM)
    isMap[xM][yM] = true;

    draw_square(yM, xM + 1)
    isMap[xM + 1][yM] = true;

    draw_square(yM, xM + 2)
    isMap[xM + 2][yM] = true;

    draw_square(yM, xM + 3)
    isMap[xM + 3][yM] = true;

    draw_square(yM, xM + 4)
    isMap[xM + 4][yM] = true;

    draw_square(yM, xM + 5)
    isMap[xM + 5][yM] = true;

    draw_square(yM + 1, xM + 4)
    isMap[xM + 4][yM + 1] = true;

    draw_square(yM + 2, xM + 4)
    isMap[xM + 4][yM + 2] = true;

    draw_square(yM + 2, xM + 6)
    isMap[xM + 6][yM + 2] = true;

    draw_square(yM + 3, xM + 4)
    isMap[xM + 4][yM + 3] = true;

    draw_square(yM + 3, xM + 5)
    isMap[xM + 5][yM + 3] = true;

    draw_square(yM + 3, xM + 6)
    isMap[xM + 6][yM + 3] = true;

}

function draw_background() {
    for (var xA = 0; xA <= width / d; xA++) {
        for (var yA = 0; yA <= height / d; yA++) {
            draw_square(xA, yA, "rgba(136,16,16,0.3.8)", false)

        }
    }

}

function warn() {
    if (stillTrue == false) {
        console.log("Your trial was wrong. ")
    }

}

////////////////////////////////RABBİT OBJECT////////////////////////////////////////////////////////////////////////////////////////////////
class Rabbit {
    constructor(xM, yM, direction, d) {
        this.xM = xM;
        this.yM = yM;
        this.x = calculate_x(xM) + d / 4;
        this.y = calculate_y(yM) + d / 4;
        this.direction = direction;

    }

    //This method draws rabbit
    draw_rabbit(color = "#fff") {

        this.leave_footprint();

        if (this.direction == "E") {

            let line_top = s.line(this.x, this.y, this.x + d / 2, this.y + d / 4)
            let line_bottom = s.line(this.x, this.y + d / 2, this.x + d / 2, this.y + d / 4)
            let line_left = s.line(this.x, this.y, this.x, this.y + d / 2)

            let left_ear = s.circle(this.x, this.y, 4)
            let right_ear = s.circle(this.x, this.y + d / 2, 4)

            left_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            right_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            line_top.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_bottom.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_left.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });
        }

        if (this.direction == "N") {


            let line_right = s.line(this.x + d / 4, this.y, this.x + d / 2, this.y + d / 2)
            let line_bottom = s.line(this.x, this.y + d / 2, this.x + d / 2, this.y + d / 2)
            let line_left = s.line(this.x + d / 4, this.y, this.x, this.y + d / 2)

            let left_ear = s.circle(this.x, this.y + d / 2, 4)
            let right_ear = s.circle(this.x + d / 2, this.y + d / 2, 4)

            left_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            right_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            line_right.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_bottom.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_left.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });
        }

        if (this.direction == "W") {
            let line_top = s.line(this.x + d / 2, this.y, this.x, this.y + d / 4)
            let line_bottom = s.line(this.x + d / 2, this.y + d / 2, this.x, this.y + d / 4)
            let line_left = s.line(this.x + d / 2, this.y, this.x + d / 2, this.y + d / 2)


            let left_ear = s.circle(this.x + d / 2, this.y, 4)
            let right_ear = s.circle(this.x + d / 2, this.y + d / 2, 4)

            left_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            right_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            line_top.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_bottom.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_left.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });
        }

        if (this.direction == "S") {
            let line_right = s.line(this.x + d / 2, this.y, this.x + d / 4, this.y + d / 2)
            let line_bottom = s.line(this.x, this.y, this.x + d / 2, this.y)
            let line_left = s.line(this.x, this.y, this.x + d / 4, this.y + d / 2)


            let left_ear = s.circle(this.x + d / 2, this.y, 4)
            let right_ear = s.circle(this.x, this.y, 4)

            left_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            right_ear.attr({
                fill: color,
                stroke: color,
                strokeWidth: 3

            });

            line_right.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_bottom.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });

            line_left.attr({
                stroke: color,
                strokeWidth: 3,
                strokeDasharray: "0"
            });
        }

    }

    change_direction(direction) {

        this.direction = direction;
        this.leave_footprint(false);
        this.draw_rabbit();

    }

    turn_right() {

        if (this.direction == "E") {

            this.change_direction("S");

        } else if (this.direction == "S") {

            this.change_direction("W");

        } else if (this.direction == "W") {

            this.change_direction("N");

        } else if (this.direction == "N") {

            this.change_direction("E");

        }
    }

    turn_left() {
        /*if (this.direction == "E") {
            this.change_direction("N");
        } else if (this.direction == "N") {
            this.change_direction("W");
        } else if (this.direction == "W") {
            this.change_direction("S");
        } else if (this.direction == "S") {
            this.change_direction("E");
        }*/
        this.turn_right();
        this.turn_right();
        this.turn_right();
    }

    go_forward() {


        if (this.direction == "E") {
            if (isMap[this.xM + 1][this.yM] == true) {
                this.leave_footprint();
                this.x += calculate_x(2);
                this.xM += 1;
                this.draw_rabbit();
            } else {
                console.log("There is no map!")
                stillTrue = false;
            }

        }

        if (this.direction == "N") {


            if (isMap[this.xM][this.yM - 1] == true) {
                this.leave_footprint();
                this.y -= calculate_y(2);
                this.yM -= 1;
                this.draw_rabbit();
            } else {
                console.log("There is no map!")
                stillTrue = false;
            }
        }

        if (this.direction == "W") {
            if (isMap[this.xM - 1][this.yM] == true) {
                this.leave_footprint();
                this.x -= calculate_x(2);
                this.xM -= 1;
                this.draw_rabbit();
            } else {
                console.log("There is no map!")
                stillTrue = false;
            }
        }

        if (this.direction == "S") {


            if (isMap[this.xM][this.yM + 1] == true) {
                this.leave_footprint();
                this.y += calculate_y(2);
                this.yM += 1;
                this.draw_rabbit();
            } else {
                console.log("There is no map!")
                stillTrue = false;

            }
        }

    }

    leave_footprint() {

        let footprint = s.line(this.x + d / 4, this.y - d / 4 + 3, this.x + d / 4, this.y + 3 * d / 4 - 3);

        footprint.attr({

            stroke: "rgb(136,16,16)",
            strokeWidth: d - 5

        });

    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setup_array();
draw_background();
draw_map_levelhomework(xM, yM);

rabbit = new Rabbit(xM, yM, "E", d);

rabbit.draw_rabbit();

window.onkeydown = function (olay) {

    //Sol
    if (olay.keyCode == 37 || olay.keyCode == 65) {
        rabbit.turn_left();
    }

    //Sağ
    else if (olay.keyCode == 39 || olay.keyCode == 68) {
        rabbit.turn_right();
    }

    //İleri
    else if (olay.keyCode == 38 || olay.keyCode == 87) {
        rabbit.go_forward();
    }

    //Sol
    if (olay.keyCode == 40 || olay.keyCode == 83) {
        window.location.reload();
    }

}