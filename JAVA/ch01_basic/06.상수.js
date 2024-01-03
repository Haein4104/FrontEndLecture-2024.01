// 상수 (Constant; const)
const a = 'Hello';
console.log(a);
//a += 'World';   -> 실행하면 runtime error 발생

const obj = {x: 1, y: 2};
    // obj = {x: 1, y: 2, z: 3};    -> error
obj.x = 10;                         // obj가 참조형 변수(값이 아닌 value)라서 가능. 
obj.y = 20;
console.log(obj);

