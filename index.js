// goal: I want to be able to create balls and see them fall via gravity

let vx = 0;
let vy = 1;
let g_const = 10;

class Circle {
    constructor(x, y, r, m) {
        this.pos = [x, y];
        this.r = r;
        this.v = [0,0];
        this.F = [0,0];
        this.a = [0,0];
        this.m = m;
    }

    apply_forces() {
        if (in_free_fall()) {
            // size 10, downwards
            let g = [10, 180];
        }
        // this.F = 
    }

    move(dt) {
        // second law of newton, preserve angle
        this.a = (this.F.x/this.m, this.F.y);
        this.pos = (this.pos.x + this.vx*dt, this.pos.y + this.vy*dt);
        this.v = (this.v.x + this.a.x*dt, this.v.y + this.a.y*dt);
    }

    draw() {
        ctx.beginPath();
        // console.log(this.pos);
        ctx.arc(this.pos[0], this.pos[1], this.r, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
}

class Vector {
    // angle 0 is right
    constructor (x,y) {
        this.v = [x, y]
    }

    draw(x,y) {
        //variables to be used when creating the arrow
        var headlen = 10;
        var angle = Math.atan2(this.v[1]-y,this.v[0]-x);
    
        ctx.save();
        // ctx.strokeStyle = color;
    
        //starting path of the arrow from the start square to the end square
        //and drawing the stroke
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(this.v[0], this.v[1]);
        ctx.lineWidth = 3;
        ctx.stroke();
    
        //starting a new path from the head of the arrow to one of the sides of
        //the point
        ctx.beginPath();
        ctx.moveTo(this.v[0], this.v[1]);
        ctx.lineTo(this.v[0]-headlen*Math.cos(angle-Math.PI/7),
                this.v[1]-headlen*Math.sin(angle-Math.PI/7));
    
        //path from the side point of the arrow, to the other side point
        ctx.lineTo(this.v[0]-headlen*Math.cos(angle+Math.PI/7),
                this.v[1]-headlen*Math.sin(angle+Math.PI/7));
    
        //path from the side point back to the tip of the arrow, and then
        //again to the opposite side point
        ctx.lineTo(this.v[0], this.v[1]);
        ctx.lineTo(this.v[0]-headlen*Math.cos(angle-Math.PI/7),
                this.v[1]-headlen*Math.sin(angle-Math.PI/7));
    
        //draws the paths created above
        ctx.stroke();
        ctx.restore();
    }

    // get_x() {
    //     return this.s * Math.cos(this.to_rads(this.theta));
    // }

    // get_y() {
    //     return this.s * Math.sin(this.to_rads(this.theta));
    // }

    // to_rads(angle) {
    //     return angle * 2*Math.PI / 180;
    // }
}

function animate() {

    ctx.clearRect(0, 0, c.width, c.height);

    // gravity();

    // for (let o of objects) {
    //     o.draw();
    // }

    for (let v of vectors) {
        v.draw(200, 200);
    }

    window.requestAnimationFrame(animate);
}

function gravity() {
    if (window.pause) { return; }

    for (let o of objects) {
        if (o.y - o.r <= c.height - o.r) {
            if (c.height - o.y <= o.r) {
                c.y = c.height - o.r;
            } else {
                // o.move(0.1);
            }
        }
    }
}

function init() {
    // objects.push(new Circle(200,200,10));
    // objects.push(new Circle(123,240,20));
    // objects.push(new Circle(532,430,5));
    objects.push(new Circle(500,0,42, 10));
    // objects.push(new Circle(1000,100,3));
    // objects.push(new Circle(233,320,26));
    // objects.push(new Circle(412,1,2));
    // objects.push(new Circle(230,0,32));

    vectors.push(new Vector(50, 20));
    vectors.push(new Vector(20, 40));
}

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const dtSlider = document.getElementById("sliderr");

let objects = [];
let vectors = [];
init();
window.requestAnimationFrame(animate);

















