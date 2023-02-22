// const, let
const a = 1;
let b = 1;
b = 2
console.log(a, b);

// null
const c = null;
console.log(c);

// undifined
let d;
console.log(d);

// 설명이 필요하지 않은 데이터 리스트들은 array로,
// 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!

// array []
const arr = [1, 2, true, 'hoonys', "hello"];
console.log(arr);

// object {}
const player = {
    name : 'hooonys',
    point : 10,
};

player.point = 15;
player.country = 'Korea';

console.log(player);
console.log(player.name);

/* 
    function name() {}, 
    prompt(”질문”) = 파이썬 input()
    typeof
    parseInt()
    isNaN()
    if () {} else if () {} else {}
    &&, ||, ===
*/