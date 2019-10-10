class Point {
    constructor(private _x: number, private _y: number) {
    }
    get x(): number {
        return this._x;
    }
    set x(x: number) {
        this._x = x;
    }
    get y(): number {
        return this._y;
    }
    set y(y: number) {
        this._y = y;
    }

    forward(): this {
        this.x += 1;
        this.y += 1;
        return this;
    }
}

let point = new Point(111, 222);
console.log(point.x)
point.forward().forward()
console.log(point.x)
