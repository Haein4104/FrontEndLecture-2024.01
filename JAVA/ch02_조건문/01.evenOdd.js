// 홀수/짝수

let num = Math.ceil(Math.random() * 100);               // 1~100 사이의 정수값

if (num % 2 == 0) {
    console.log(`${num} 은/는 짝수입니다.`);
}
if (num % 2 == 1) {
    console.log(`${num} 은/는 홀수입니다.`);
}

// else

if (num % 2 == 0) {
    console.log(`${num} 은/는 짝수입니다.`);
}
else {
    console.log(`${num} 은/는 짝수입니다.`);
}               
/* 중괄호 안에 내가 하고 싶은 내용을 넣으면 되는데, 조건이 1개일 땐 생략 가능
    = 조건문 안에 실행문이 1개일 경우 {} 생략 가능 */
if (num % 2 == 0)
    console.log(`${num} 은/는 짝수입니다.`);
else
    console.log(`${num} 은/는 짝수입니다.`); 

// 3항 연산자
num = Math.ceil(Math.random() * 100);
let result = (num % 2 == 0) ? '짝수' : '홀수';   // 조건 (?) -> 참일 때의 값 : 거짓일 때의 값
console.log(`${num} 은/는 ${result}입니다.`);

// 암기... 조건문 암기.... !! -> 암기 후 코딩하면서 이해하기
