// 약수(divisor)
// ex 1. 12의 약수 구하기. 1,2,3,4,6,12
let num = 12;
for (let i = 1; i <= 12; i++) {     // 경우의 수를 전부 구하기 위해 i를 1~12까지로 정함
    if(num % i == 0){                // i로 num을 나눈 것 중 나머지가 0인 것을 통과시킴
        console.log(i);
    }
}

// ex 2. 12의 약수 array 만들기
let num1 = 12;
let divisors = [];
for (let i = 1; i <= num1; i++) {     
    if (num % i == 0)
        divisors.push(i);
}
console.log(divisors);

// ex 3. 두 수의 공약수 구하기
let num2 = 24, num3 = 60;
let commonDivisors = [];
for(let i = 1; i <= Math.min(num2, num3); i++){
    if(num2 % i == 0 && num3 % i == 0){
        commonDivisors.push(i);
    }
}
console.log(commonDivisors);