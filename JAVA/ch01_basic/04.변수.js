// 식별자 (identifier)
    // 1. 영문자, 숫자, $, _ 사용 가능
    // 2. 대소문자 구분
    // 3. 숫자로 시작하면 안됨
    // 4. 예약어(keyword) 사용 금지
    // 5. 단어는 2개 이상(여러개), camel case 사용을 권장
    // 6. 변수, 상수, 함수명 등은 소문자로 시작
    // 7. 클래스명은 대문자로 시작

// 변수 (variable)
let pi = 3.1415926535;
var radius = 10;            // let : 신식 / var : 구식
console.log(`둘레는 ${2 * pi * radius}, 면적은 ${pi * radius * radius} 입니다.`);

// 복합 대입 연산자
let a = 1, str = '';
a += 2;                 // a = a + 2 
str += 'A quick brown fox ';
str += 'jump over the lazy dog.';
console.log(a, str);

// 증감 연산자(increment & decrement)
    // increment
let x = 0, y = 0;
console.log(x++, ++y);          // 변수 뒤에 있으면 post-increment , 앞에 있으면 pre-increment
console.log(x, y);

    // decrement
console.log(x--, --y);          // 변수 뒤에 있으면 post-decrement , 앞에 있으면 pre-decrement
console.log(x, y);


// 나머지 자료형
// 4. 함수 (function)
console.log(typeof function() {});
console.log(typeof (() => {}));         // 화살표(arrow) 함수, 람다 함수, 익명 함수

// 5. 객체(object)
let obj = {x: 1, y: 2};                 // {key, value}
console.log(typeof obj);
console.log(obj.x, obj.y);

// 6. undefined
let alpha; 
console.log(typeof alpha, typeof beta); // 초기화하지 않은 변수, 선언하지 않은 변수
alpha = 123;
beta = 456;
console.log(typeof alpha, typeof beta);