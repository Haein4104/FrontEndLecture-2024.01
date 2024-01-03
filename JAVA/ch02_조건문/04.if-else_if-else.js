// 점수에 따른 학점 구하기
// A(90~100), B(80~89), C(70~79), D(60~69), F(~59)

let score = Math.ceil(Math.random() * 60) + 40;         // 41~100 사이의 정수
let grade = '';

if (score >= 96)
    grade = 'A+';
else if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`점수: ${score}, 학점: ${grade}`);

// Fizz Buzz : 5의 배수 Fizz, 7의 배수 Buzz, 5&7의 공배수 Fizzbuzz, 아니면 숫자

if (score % 35 == 0)            // = if (score % 5 == 0 && score % 7 == 0)
    console.log('Fizzbuzz');
else if (score % 7 == 0)
    console.log('Buzz');
else if (score % 5 == 0)
    console.log('Fizz');
else
    console.log('Hey~');