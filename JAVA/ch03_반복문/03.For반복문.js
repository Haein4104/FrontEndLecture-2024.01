//for 반복문
// 1. 기본 형태 for(let i = 0; i < )

// ex 1. 1에서 1,000까지의 합 구하기
let sum = 0;
for(let i = 1; i <= 1000; i++) {
    sum += i;
}
console.log(`1에서 1,000까지의 합은 ${sum}이다.`);

// ex 2. 1에서 1,000까지의 홀수 합 구하기
let oddsum = 0;
for(let i = 1; i <= 1000; i+=2) {
    oddsum += i;
}
console.log(`1에서 1,000까지 홀수의 합은 ${oddsum}이다.`);

// ex 3. 1에서 1,000까지의 짝수 합 구하기
let evensum = 0;
for(let i = 0; i <= 1000; i+=2) {
    evensum += i;
}
console.log(`1에서 1,000까지 짝수의 합은 ${evensum}이다.`);

// ex 1. 1에서 10까지의 곱 구하기
let product = 1;
for(let i = 1; i <= 10; i++) {
    product *= i;
}
console.log(`1에서 10까지의 곱은 ${product}이다.`);

// 2. array의 요소 출력
// ex 1. element1, element2, ... 가 일렬로 보이도록
let fruits = ['apple', 'orange', 'pear', 'melon', 'strawberry'];
let fruitsStr = '';
for (let fruit of fruits) {
    fruitsStr += fruit + ', ';
}
console.log(fruitsStr);                         // for 반복문에서는 사전에 초기값 세팅이 중요하다.
                                                // 0/ 문자열: 빈 Str/ *:1 < what?

