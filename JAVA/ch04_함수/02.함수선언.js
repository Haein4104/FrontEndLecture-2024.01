//선언적 함수
function add(a, b) {        // 두개의 변수를 매개로 하여 변환해줌. 
    return a + b;           // a, b : 매개변수, parameter, argument이라고도 함. a와 b는 반환값
}
console.log(add(3, 4));
console.log(add(8, 9));

// 익명(Anonymous) 함수
const anonymousSum = function (a, b) {
    return a + b;
}
console.log(anonymousSum(3, 4));
console.log(anonymousSum(8, 9));

// 화살표(arrow)함수, 람다 함수
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4));
console.log(arrowSum(8, 9));


