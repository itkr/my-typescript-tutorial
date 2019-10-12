// ジェネリックを使ったクラス
class Cls<T, U> {
    constructor(private x: T, private y: U) {
    }
    public resultX(): T {
        return this.x;
    }
    public resultY(): U {
        return this.y;
    }
}

let cls = new Cls<string, number>('TypeScript', 999);
let x: string = cls.resultX();
let y: number = cls.resultY();

// ジェネリックを使った関数
function fnc<T>(x: T): T {
    return x;
}
fnc<string>('aa')

//
interface Spam {
    spam(): string;
}
class SpamClass implements Spam {
    public spam(): string {
        return 'spam';
    }
}
interface Egg {
    egg(): string
}
class EggClass implements Egg {
    public egg(): string {
        return 'egg';
    }
}

class Hum<T extends Spam>{
}

let hum1 = new Hum<SpamClass>()
// let hum2 = new Hum<EggClass>()  // コンパイルエラー
