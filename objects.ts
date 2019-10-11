// オブジェクト型リテラル
// プロパティシグネチャを含めたオブジェクト型の宣言
let obj: {
    a: number;
    b: string;
    c?: boolean;
    hello(msg: string): string;  // 関数シグネチャ
}
// 代入
obj = {
    a: 999,
    b: 'aaa',
    hello: (msg: string): string => {
        return msg
    }
}

// コールシグネチャ
let obj2: {
    (x: string): string;
}
obj2 = function (x: string): string {
    return '';
}

// コンストラクタシグネチャ
let obj3: {
    new(x: string): Cls;
}
class Cls {
    constructor(private x: string) { }
}
obj3 = Cls;
let a = new obj3('');

// インデックスシグネチャ
let obj4: {
    [x: string]: number;
}
obj4 = {
    spam: 1,
    egg: 2
}
