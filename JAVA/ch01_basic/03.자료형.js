// 0X41(16진수) = A ... 
// javascript의 자유분방함?을 보완한 것 : typescript
// 묶음 자료 구조 : 개별 데이터 하나가 아닌 여러 데이터를 하나로 묶은 상태 * 실제로 묶음 데이터에 대한 활용을 잘해야함.
// 자바스크립트에는 정수와 실수의 개념이 없음.
// 줄마다 실행-해석-실행-해석-... 하는 언어를 script language라고 함.

// 자바스크립트의 자료형
// 1. number
console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2 );     // +, -, *, / : 기본 연산자
console.log(5 % 2);                          // modulo : 나머지
console.log(2 ** 10);                        // 2의 10제곱 (1024, 1K)
console.log(1.3e-8);                         // 1.3 X 10 ** -8

// 2. 문자열
console.log('He said "I love you."');
console.log("I'll be back.");
console.log("He said \"I love you.\"");         // escaping 회피
console.log("Back slash(\\) 기호를 사용할 때에는 \\ 두개를 쓰면 됩니다.");

let hello = '안녕하세요?';
console.log(hello[0], hello[2], hello[5]);      // 0부터 시작 > '안 하 ?' 로 나옴

// 3. Template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '는', 2 + 3, '입니다');
console.log(`${a} 더하기 ${b} 은 ${a+b} 입니다.`)
console.log(`올해는 ${new Date().getFullYear()}년입니다.`)

// 우리가 보통 변수에 대해 naming 할 때, 그 변수가 가리키는 의미를 정확히 내포할 수 있어야 한다. 최소 2 words.
//  snake case : 단어 간 공백 사이를 _(under bar)로 메움 ex. full_year - python 에서
//  camel case : 공백 없이 대문자로 단어를 구분  ex. fullYear          - java 에서


// 4. 논리형(boolean) : 참 & 거짓

 // 관계연산자
console.log(typeof(true), typeof(false));
console.log(2 == 2.0, 5 >= 4, !('가나다' > '마바사'));          // : == : 두 값이 같냐 / ! : not 

 // 논리연산자
let x = 10;
console.log(x > 8 || x < -3);                                   // : OR(||) ; x > 8 or x < -3
console.log(x > 8 && x < 12);                                   // : AND (&&) ; 8 < x < 12
console.log(true > 10); // 논리형(boolean)에서는 자동적으로 true는 1, false는 0이 됨
                        // 조건문(if)에서는 false가 0, 값이 없을 때는 null, 값이 있으면 true로 취급함