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

// 親クラス
class Js {
    constructor(private name: string) { }
    public hello(): string {
        return 'Hello ' + this.name
    }
}

let js = new Js('aaa')
console.log(js.hello())

// 継承
class Ts extends Js {
    // オーバーライド
    public hello(): string {
        return super.hello() + ' !'
    }
}

let ts = new Ts('aaa')
console.log(ts.hello())

// 抽象クラス
abstract class Human {
    abstract hello(msg: string): string;
}

class Man extends Human {
    public hello(msg: string): string {
        return 'hello ' + msg;
    }
}

// インターフェイス
interface Human2 {
    name: string;
    age?: number;  // 任意
    hello(msg: string): string;
}

class Mario implements Human2 {
    constructor(public name: string, public age?: number) { }
    public hello(msg: string): string {
        return `${msg} ${this.name}`;
    }
}
