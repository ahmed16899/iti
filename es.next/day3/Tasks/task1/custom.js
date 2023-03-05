class Polygon {
    toString() { }
    draw() { }
}


class Rectangle extends Polygon {
    constructor(w, h) {
        super()
        this.w = w;
        this.h = h;
    }
    toString() {
        console.log(`width = ${this.w}`)
        console.log(`height = ${this.h}`)
        console.log(`Rectangle area = ${this.h * this.w}`)
    }
    draw() {
        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, this.w, this.h);
        ctx.stroke();
    }
}

class Square extends Polygon {
    constructor(w) {
        super()
        this.w = w;
    }
    toString() {
        console.log(`width = ${this.w}`)
        console.log(`Square area = ${this.w * this.w}`)
    }
    draw() {
        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(100, 100, this.w, this.w);
        ctx.stroke();
    }
}

class Circle extends Polygon {
    constructor(r) {
        super()
        this.r = r;
    }
    toString() {
        console.log(`Raduis = ${this.r}`)
        console.log(`Circle area = ${Math.PI * this.r * this.r}`)
    }
    draw() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(500, 500, this.r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class Triangle extends Polygon {
    constructor(x, y) {
        super()
        this.x = x;
        this.y = y;
    }
    toString() {
        console.log(`X = ${this.x}`)
        console.log(`Y = ${this.y}`)
        console.log(`Triangle area = ${.5 * this.x * this.y}`)
    }
    draw() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var path=new Path2D();
        path.moveTo(( this.x/2)+50,this.y/2);
        path.lineTo(( this.x/2),(this.y/2)-50);
        path.lineTo(( this.x/2)-50,this.y/2);
        ctx.fill(path);
    }
}

const r1 = new Rectangle(70, 50)
r1.toString();
r1.draw();

const s1 = new Square(50)
s1.toString();
s1.draw();
const c1 = new Circle(70)
c1.toString();
c1.draw()
const t1 = new Triangle(700, 700)
t1.toString();
t1.draw()




