// call back 함수
    // 다른 언어에서는 잘 쓰지 않음. JS에서 주로 사용

function callFiveTimes(callback) {
    for (let i = 0; i < 5; i++)
        callback();
}

// annonymus 선언
const cb = function() {
    console.log('함수가 출력되었습니다.');
}

// callFiveTimes(cb);

// 함수를 호출할 때 익명 함수를 만들어 주는 것이 일반적
callFiveTimes(function() {
    console.log('함수가 출력되었습니다.');
});

// 익명 함수로 화살표 함수를 사용하는 것이 더 보편적
callFiveTimes(() => {
    console.log('함수가 출력되었습니다.');
});


// 통상적으로 function a(x, y, cb) {
// x, y 작업을 함 
// ... 
// cb();