// 자료형 변환 casting
//강제 형변환
console.log(123, String(123));
console.log(Number("101"), Number(true), Number(false));
console.log(Number("hello")); // NaN: Not a Number

// 아래 경우를 제외하면 모두 참
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));

/* 자동 변환
+ 연산자: boolean -> number -> String으로 변환 점점 더 메모리 많이 먹는 쪽으로 커짐
*/

console.log(123 + true, 'bool' + true, 'integer' + 123); // integer(int): 정수

// -, *, / 연산자: String -> number로 변환 
console.log(52 - '27', '8' * 8, '4' / 2); // 계산 시 이진수로 변환 후 계산

/* 
5 : 0101
3 : 0011

-3 : 1100
     1101       2의 보수(complement)

5-3 : 0101
        1101
-------------
2      0010   */


// 두개의 값이 값으냐?
// 1) 변환된 값이 같으면 같다 (==)
console.log(52 == '52', 52 == 52.0);
console.log(true == 1, false == 0.0);

// 2) 변환된 값과 자료형이 일치하면 참. (===)
console.log(52 === '52', 52 === 52.0);
console.log(true === 1, false === 0.0);