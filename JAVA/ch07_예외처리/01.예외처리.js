// 예러 발생하면 프로그램 실행 중지됨

try {
    error.error.error();                // 에러가 발생할지도 모르는 코드를 try-catch 블록 안에 작성.
} catch (e) {
    console.log(e.name);                // 에러 이름
    console.log(e.message);             // 에러 설명
}
console.log('여기까지가 끝인가보오....');

// java에서는 쓰는 일이 잘 없다..?