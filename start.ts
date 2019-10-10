const message: string = 'hello world';
console.log(message);

// 定数
const VIM: boolean = true;

// 基本型
let str: string = 'spam';
let num: number = 999;
let x: null = null;

// リスト
let arr1: Array<string> = ['a'];
let arr2: string[] = ['a'];
arr1.push('b');
arr1.unshift('x');
arr1.reverse();
console.log(arr1[0]);
//arr1.forEach(function() {})

// タプル
let tpl: [string, number, boolean] = ['a', 1, true];
let userId: number | string = 'abc';
userId = 123;
console.log(typeof (userId));

// 列挙型
enum Color {
    RED = 100,
    GREEN,
    BLUE
}
console.log(Color.BLUE)

// 例外
try {
    throw 'err';
} catch (e) {
    console.log(e);
} finally {
}

// 関数
function add(a: number, b: number): number {
    return a + b;
}
// 返り値なし
function shout(s: string): void {
    alert(`${s}!`);
}
// 関数リテラル
let hoge = function (): void {
}
// アロー関数
let fuga = (x: string): string => {
    return x + x;
}
console.log(fuga('A'));
// タプルを返す
function fnc(): [string, string, number] {
    return ['x', 'y', 1];
}
