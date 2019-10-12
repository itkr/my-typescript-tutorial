// セット
let setObject = new Set<string>(['spam', 'egg']);
setObject.add('hum');
setObject.add('spam');
console.log(setObject);

// マップ
let mapObject = new Map<string, string>();
mapObject.set('key1', 'value1');
console.log(mapObject);

// ジェネレータ
function* getYieldValues(): Generator {
    for (let v of ['a', 'b', 'c']) {
        yield v;
    }
}

for (let i of getYieldValues()) {
    console.log(i)
}

// イテレータ
let it = getYieldValues();

for (let v = it.next(); v.done == false; v = it.next()) {
    console.log(v.value);
}
